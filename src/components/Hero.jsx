export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-200 via-rose-100 to-white" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bubblegum/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-shrimp/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blush/10 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-gray-800 leading-tight mb-6">
          Roselia —{" "}
          <span className="text-bubblegum italic">Hayalindeki görüntüye ulaş</span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Roselia'ya hoş geldiniz. Özenle seçilmiş profesyonel bakım ve güzellik
          hizmetlerimizle, sıcak ve zarif bir ortamda doğal güzelliğinizi ortaya
          çıkarıyoruz. Kendinizi iyi hissetmek için gereken her şey burada.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button className="bg-gradient-to-r from-bubblegum to-peony hover:from-peony hover:to-bubblegum text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all shadow-lg shadow-bubblegum/30 cursor-pointer">
            Randevu Al
          </button>
          <a
            href="#services"
            className="text-sm text-gray-600 hover:text-bubblegum transition-colors px-8 py-3.5 rounded-full border border-rose-300 hover:border-bubblegum"
          >
            Hizmetleri Keşfet
          </a>
        </div>
      </div>
    </section>
  );
}
