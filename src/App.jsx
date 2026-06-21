import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BookAppointmentPanel from "./components/BookAppointmentPanel";
import { useEffect, useState, useCallback, useMemo } from "react";

function App() {
  // State Tanımlamaları
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedServiceDetail, setSelectedServiceDetail] = useState(null);

  // Modal Açma ve Kapatma Fonksiyonları
  const handleServiceDetail = useCallback((service) => {
    setSelectedServiceDetail(service);
  }, []);

  const closeServiceDetail = useCallback(() => {
    setSelectedServiceDetail(null);
  }, []);

  // Seçilen Hizmet Bilgisi
  const serviceInfo = useMemo(() => {
    const services = [
      { name: "Saç Kesimi & Şekillendirme", süre: "45 dk.", fiyat: "350 TL" },
      { name: "Saç Boyama", süre: "60 dk.", fiyat: "750 TL" },
      { name: "Cilt Bakımı", süre: "30 dk.", fiyat: "500 TL" },
      { name: "Makyaj", süre: "60 dk.", fiyat: "400 TL" },
      { name: "El & Tırnak Bakımı", süre: "50 dk.", fiyat: "1000 TL" },
      { name: "Masaj", süre: "45 dk.", fiyat: "1500 TL" },
    ];
    return (
      services.find((s) => s.name === selectedService) ?? {
        name: "Not Selected",
        süre: "-",
        fiyat: "-",
      }
    );
  }, [selectedService]);

  // Randevu Tamamlama Kontrolü
  const handleCompleteAppointment = useCallback(() => {
    if (!selectedTime) {
      alert("Lütfen bir saat seçin");
      return;
    }
    if (!selectedDate) {
      alert("Lütfen bir tarih seçin");
      return;
    }
    if (!selectedService) {
      alert("Lütfen bir hizmet seçin");
      return;
    }

    alert("Randevunuz alındı! Randevu saatinde görüşmek üzere");
    setIsPanelOpen(false);
  }, [selectedTime, selectedDate, selectedService]);

  // Header Scroll Efekti Dinleyicisi
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Panel veya Modal Açıkken Sayfa Scroll'unu Kilitleme
  useEffect(() => {
    if (isPanelOpen || selectedServiceDetail) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isPanelOpen, selectedServiceDetail]);

  return (
    <>
      {/* Üst Menü */}
      <Header
        onBookClick={() => setIsPanelOpen(true)}
        isScrolled={isScrolled}
      />

      {/* Ana İçerik */}
      {/*<HomePage 
      
        onServiceClick={handleServiceDetail} 
        selectedServiceDetail={selectedServiceDetail} 
      />*/}
      {/* Ana İçerik */}
      <HomePage />
      {/* Alt Menü */}
      <Footer />

      {/* Randevu Al Paneli (Yandan Açılan) */}
      <BookAppointmentPanel
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
        onComplete={handleCompleteAppointment}
        serviceInfo={serviceInfo}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedService={selectedService}
        setSelectedService={setSelectedService}
      />

      {/* Hizmet Detay Modalı (Popup - Ortada Açılan) */}
      {selectedServiceDetail && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Arka Planı Karartma */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm cursor-pointer" 
            onClick={closeServiceDetail} 
          />

          {/* Modal Kartı */}
          <div className="relative bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl z-[10000] p-6 text-left">
            {/* Kapatma Butonu */}
            <div className="absolute top-4 right-4">
              <button 
                onClick={closeServiceDetail} 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-rose-50 hover:bg-rose-100 transition-colors text-rose-500 hover:text-rose-700 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Hizmet Görseli */}
            <div className="w-full h-64 rounded-xl overflow-hidden mt-6 mb-4">
              <img 
                src={selectedServiceDetail.image} 
                alt={selectedServiceDetail.title} 
                className="w-full h-full object-cover" 
              />
            </div>

            {/* Hizmet İçeriği */}
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold text-gray-800">{selectedServiceDetail.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{selectedServiceDetail.desc}</p>

              {/* Randevu Al Butonu */}
              <button
                onClick={() => {
                  setSelectedService(selectedServiceDetail.title);
                  setSelectedServiceDetail(null);
                  setIsPanelOpen(true);
                }}
                className="w-full bg-gradient-to-r from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white font-semibold text-base py-3.5 rounded-full transition-all shadow-lg shadow-rose-200 cursor-pointer mt-4"
              >
                Randevu Al
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;