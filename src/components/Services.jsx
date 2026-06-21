import { useState } from "react";

const services = [
  {
    image: "/haircut-styling.jpeg",
    title: "Saç Kesimi & Şekillendirme",
    desc: "Yüz şeklinize ve tarzınıza özel, hassas kesim ve profesyonel şekillendirme.",
    duration: "45 Dk",
    price: "450 TL",
  },
  {
    image: "/hair-coloring.jpeg",
    title: "Saç Boyama",
    desc: "Doğal tonlardan cesur dönüşümlere, kaliteli ürünlerle uzman renklendirme.",
    duration: "120 Dk",
    price: "1.200 TL",
  },
  {
    image: "/skin-care.jpeg",
    title: "Cilt Bakımı",
    desc: "Cildinizin doğal ışıltısını geri kazandıran yenileyici bakım ve tedaviler.",
    duration: "60 Dk",
    price: "850 TL",
  },
  {
    image: "/makeup.jpeg",
    title: "Makyaj",
    desc: "Doğal, gelinlik veya özel davet makyajı — her anınız için profesyonel dokunuş.",
    duration: "50 Dk",
    price: "700 TL",
  },
  {
    image: "/nail-care.jpeg",
    title: "El & Tırnak Bakımı",
    desc: "Manikür, pedikür ve yaratıcı tırnak tasarımlarıyla rahatlatıcı bir deneyim.",
    duration: "40 Dk",
    price: "400 TL",
  },
  {
    image: "/massage.jpeg",
    title: "Masaj",
    desc: "Stresi eriten, bedeninizi yeniden canlandıran terapötik masaj seansları.",
    duration: "60 Dk",
    price: "900 TL",
  },
];

export default function Services() {
  // Popup state'ini doğrudan burada yönetiyoruz. Başlangıçta boş (null) çünkü popup kapalı.
  const [selectedServiceDetail, setSelectedServiceDetail] = useState(null);

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-rose-100 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs text-peony uppercase tracking-[0.2em] font-semibold">
            Hizmetlerimiz
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-gray-800 mt-3">
            Kendinizi iyi hissetmek için ihtiyacınız olan her şey
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Size özel hazırlanmış, profesyonel güzellik ve bakım hizmetlerimizi keşfedin.
          </p>
        </div>
        

        {/* HİZMET KARTLARININ LİSTELENDİĞİ ALAN (GRID YAPISI) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              onClick={() => setSelectedServiceDetail(s)}
              className="group bg-white border border-rose-200 rounded-2xl p-6 hover:border-bubblegum hover:shadow-lg hover:shadow-bubblegum/10 transition-all duration-300 cursor-pointer relative z-10"
            >
              <div className="w-full h-40 rounded-xl overflow-hidden mb-4">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-display text-lg text-gray-800 group-hover:text-bubblegum transition-colors mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* HİZMET DETAY MODALI (POPUP) */}
      {selectedServiceDetail && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Arka Planı Karartma */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm cursor-pointer" 
            onClick={() => setSelectedServiceDetail(null)} 
          />

          {/* Modal Kartı */}
          <div className="relative bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl z-[10000] p-6 text-left">
            {/* Kapatma Butonu */}
            <div className="absolute top-4 right-4">
              <button 
                onClick={() => setSelectedServiceDetail(null)} 
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

              {/* ⬇️ YENİ EKLENEN SÜRE VE FİYAT ALANI ⬇️ */}
              <div className="grid grid-cols-2 gap-4 py-2">
                <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <span className="text-xl">🕒</span>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Süre</p>
                    <p className="text-sm font-semibold text-gray-700">{selectedServiceDetail.duration}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-rose-50/40 p-3 rounded-xl border border-rose-100/50">
                  <span className="text-xl">🏷️</span>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Fiyat</p>
                    <p className="text-sm font-bold text-rose-600">{selectedServiceDetail.price}</p>
                  </div>
                </div>
              </div>
              {/* ⬆️ YENİ EKLENEN SÜRE VE FİYAT ALANI BİTİŞİ ⬆️ */}

              {/* Kapat Butonu */}
              <button
                onClick={() => setSelectedServiceDetail(null)}
                className="w-full bg-gradient-to-r from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white font-semibold text-base py-3.5 rounded-full transition-all shadow-lg shadow-rose-200 cursor-pointer mt-4 text-center"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}