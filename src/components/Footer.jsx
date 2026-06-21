const serviceLinks = [
  "Saç Kesimi & Şekillendirme",
  "Saç Boyama",
  "Cilt Bakımı",
  "Makyaj",
  "El & Tırnak Bakımı",
  "Masaj",
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-rose-200 to-rose-300 border-t border-rose-300 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="font-display text-xl text-gray-800 mb-3">Roselia</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Zamansız güzelliğe yolculuğunuz burada başlıyor.
            </p>
          </div>
          <div>
            <h4 className="text-xs text-gray-800 uppercase tracking-[0.15em] font-semibold mb-4">
              Hizmetler
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-gray-600 hover:text-bubblegum transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs text-gray-800 uppercase tracking-[0.15em] font-semibold mb-4">
              Hakkımızda
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-bubblegum transition-colors">
                  Hikayemiz
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-600 hover:text-bubblegum transition-colors">
                  İletişim
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-bubblegum transition-colors">
                  Kariyer
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs text-gray-800 uppercase tracking-[0.15em] font-semibold mb-4">
              Bizi Takip Edin
            </h4>
            <div className="flex gap-3">
              {["Instagram", "Facebook", "Twitter"].map((s) => (
                <span
                  key={s}
                  className="text-xs text-gray-600 hover:text-bubblegum transition-colors cursor-pointer"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-rose-300 mt-12 pt-8 text-center">
          <p className="text-xs text-gray-600">
            &copy; 2026 Roselia. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
