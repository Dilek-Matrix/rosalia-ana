# Roselia — JavaScript Fonksiyonellik Rehberi

Bu doküman, **react-dersleri-4/ecommerce-v2** projesinde kullanılan React hook'larını ve
JavaScript kalıplarını açıklar. Roselia projesine fonksiyonellik eklerken bu notları
kullanabilirsin.

---

## 1. Dosya ve Component Yapısı (react-dersleri-4'teki gibi)

```
src/
  App.jsx              # Ana bileşen — state'ler burada toplanır, alt bileşenlere prop olarak dağıtılır
  productsMock.js      # Mock veri (api yoksa veri buradan gelir)
  components/
    Header.jsx
    Navbar.jsx
    Sidebar.jsx
    ProductGrid.jsx
    ProductCard.jsx
    Cart.jsx
    Footer.jsx
    AddProductForm.jsx
  index.css            # Tailwind + @apply ile özel class'lar
```

**Önemli:** State'ler **App.jsx**'te tutulur, alt bileşenlere **prop** olarak geçirilir.
Her bileşen sadece kendine verilen prop'ları render eder.

---

## 2. useState — Bileşenin Hafızası

```jsx
import { useState } from "react";

const [products, setProducts] = useState(MOCK_PRODUCTS);
//                        ^başlangıç değeri
//   ^okumak için         ^değiştirmek için
```

Her `useState` bir **state değişkeni** + bir **set fonksiyonu** döndürür.

### Roselia'da nerelerde kullanılır:
- `isPanelOpen` — Book paneli açık/kapalı
- `selectedTime` — Seçilen saat dilimi
- `selectedDate` — Seçilen tarih
- `selectedService` — Seçilen hizmet

### Örnek — Panel açma/kapama:
```jsx
const [isPanelOpen, setIsPanelOpen] = useState(false);

// Header'daki butonda:
<button onClick={() => setIsPanelOpen(true)}>Book Appointment</button>

// Paneldeki kapatma butonunda:
<button onClick={() => setIsPanelOpen(false)}>✕</button>

// Panel div'inde:
<div className={isPanelOpen ? "translate-x-0" : "translate-x-full"}>
```

---

## 3. useMemo — Gereksiz Hesaplamayı Engelle

```jsx
import { useMemo } from "react";

const cartItemCount = useMemo(() => {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}, [cart]);
//   ^bağımlılık dizisi — 'cart' değişinceye kadar aynı değeri korur
```

**Ne zaman kullanılır:** Bir değer, başka bir state/değer üzerinden hesaplanıyorsa
ve bu hesaplama pahalıysa (veya her render'da tekrar hesaplanmasını istemiyorsan).

### Roselia'da örnek:
```jsx
// Seçilen hizmetin fiyatını hesaplama (ileride fiyat eklenirse)
const servicePrice = useMemo(() => {
  return services.find(s => s.name === selectedService)?.price ?? 0;
}, [selectedService]);
```

---

## 4. useCallback — Fonksiyonun Referansını Sabitle

```jsx
import { useCallback } from "react";

const handleAddToCart = useCallback((product) => {
  setCart((prevCart) => {
    // önceki değeri ('prevCart') kullanarak yeni değeri hesapla
    const exists = prevCart.find((item) => item.id === product.id);
    // ...
  });
}, []); // hiçbir şeye bağımlı değil (setCart React tarafından sabit)
```

**Ne zaman kullanılır:** Bir fonksiyonu **alt bileşene prop olarak** gönderiyorsan
ve gereksiz re-render'ları engellemek istiyorsan.

### Roselia'da örnek:
```jsx
// NOT: Henüz eklemedik, ileride ekleyeceğiz
const handleCompleteAppointment = useCallback(() => {
  alert("Your appointment has been booked!");
  setIsPanelOpen(false);
}, []);
```

---

## 5. useEffect — Yan Etkiler (API, setTimeout, vs.)

```jsx
import { useEffect } from "react";

useEffect(() => {
  // component EKRANA GELDİĞİNDE çalışır
  console.log("Component mounted!");

  return () => {
    // component EKRANDAN GİTTİĞİNDE çalışır (temizlik)
    console.log("Component unmounted!");
  };
}, []); // boş dizi = sadece ilk yüklemede çalışır
```

### Roselia'da örnek:
```jsx
// Panel açıldığında body scroll'unu engelleme
useEffect(() => {
  if (isPanelOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
  return () => {
    document.body.style.overflow = ""; // temizlik
  };
}, [isPanelOpen]);
```

---

## 6. useForm (react-hook-form) — Form Yönetimi

react-dersleri-4'te **AddProductForm.jsx**'te kullanılmış:

```jsx
import { useForm } from "react-hook-form";

const {
  register,      // input'ları forma kaydetmek için
  handleSubmit,  // form gönderildiğinde çalışacak fonksiyon
  reset,         // formu sıfırlamak için
  formState: { errors },  // validasyon hataları
} = useForm();

const onSubmit = (data) => {
  // data = { title: "...", price: 123, ... }
  onAddProduct(data);
  reset();
};
```

### Roselia'da kullanımı:
```jsx
// BookAppointmentPanel içinde:
const { register, handleSubmit, reset } = useForm();

const onSubmit = (data) => {
  alert("Your appointment has been booked!");
  reset();
  setIsPanelOpen(false);
};

<form onSubmit={handleSubmit(onSubmit)}>
  <input {...register("date", { required: true })} type="date" />
  <select {...register("service", { required: true })}>
    <option value="">Select a service</option>
    {services.map(s => <option key={s}>{s}</option>)}
  </select>
  <button type="submit">Complete Appointment</button>
</form>
```

---

## 7. Roselia'ya Fonksiyonellik Ekleme Sırası (Önerilen)

1. **App.jsx'te state'leri tanımla:**
   - `isPanelOpen`, `selectedTime`, `selectedDate`, `selectedService`

2. **Header.jsx'e prop ekle:**
   - `onBookClick` → paneli açar

3. **BookAppointmentPanel.jsx'e prop ekle:**
   - `isOpen`, `onClose`, `selectedTime`, `setSelectedTime`, vb.

4. **TimeSlotPicker/DatePicker/ServiceSelector'a prop ekle:**
   - `value`, `onChange` gibi kontrollü input kalıbı

5. **"Complete Appointment" butonuna onClick ekle:**
   - `alert` + `setIsPanelOpen(false)` + `reset`

6. **İsteğe bağlı: useEffect ile scroll kilidi**

---

## 8. İpucu: Olay Akışı (Event Flow) Diyagramı

```
Header'daki "Book Appointment" butonuna tıkla
       │
       ▼
  setIsPanelOpen(true)   ← App.jsx'teki state değişir
       │
       ▼
  Panel (drawer) sağdan kayarak gelir   ← translate-x-0
       │
       ▼
  Kullanıcı saat seçer → setSelectedTime("10:00")
  Kullanıcı tarih seçer → setSelectedDate("2026-06-20")
  Kullanıcı hizmet seçer → setSelectedService("Haircut")
       │
       ▼
  "Complete Appointment" butonuna tıkla
       │
       ▼
  alert("Your appointment has been booked!")
  setIsPanelOpen(false)   ← panel kapanır
```

---

Bu notları okuduktan sonra sırayla ilerle. Önce state'leri App.jsx'e ekle,
sonra sırasıyla prop'ları alt bileşenlere geçir. Her adımda projenin çalıştığını
kontrol et (`npm run dev`).
