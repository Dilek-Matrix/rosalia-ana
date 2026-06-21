import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Contact from "../components/Contact";

export default function HomePage({ onServiceClick, selectedServiceDetail }) {
  
  
  
    return (
    <main>
      {/* Hero / Giriş Bölümü */}
      <Hero />

      {/* Hakkımızda Bölümü */}
      <AboutUs />

      {/* Hizmetlerimiz Bölümü (Propları buradan Services bileşenine köpülüyoruz) */}
      <Services 
        onServiceClick={onServiceClick} 
        selectedServiceDetail={selectedServiceDetail} 
      />

      {/* İletişim Bölümü */}
      <Contact />
    </main>
  );
}