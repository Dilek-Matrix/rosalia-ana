export default function Header({ onBookClick, isScrolled }) {


  return (
    <header
    className={
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 " +
      (isScrolled
        ? "bg-white shadow-md shadow-rose-200/50"
        : "bg-white/80 backdrop-blur-md border-b border-rose-200")
    }
  >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-2xl text-peony tracking-wide">
          Roselia
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            className="text-sm text-rose-600 hover:text-bubblegum transition-colors"
          >
            Ana Sayfa
          </a>
          <a
            href="#services"
            className="text-sm text-rose-600 hover:text-bubblegum transition-colors"
          >
            Hizmetler
          </a>
          <a
            href="#about"
            className="text-sm text-rose-600 hover:text-bubblegum transition-colors"
          >
            Hakkımızda
          </a>
          <a
            href="#contact"
            className="text-sm text-rose-600 hover:text-bubblegum transition-colors"
          >
            İletişim
          </a>
        </nav>
        <button onClick={onBookClick} className="bg-gradient-to-r from-bubblegum to-peony hover:from-peony hover:to-bubblegum text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-all shadow-lg shadow-bubblegum/30 cursor-pointer ">
          Randevu Al
        </button>
      </div>
    </header>
  );
}
