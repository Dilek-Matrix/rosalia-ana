export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs text-peony uppercase tracking-[0.2em] font-semibold">
              Hakkımızda
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-gray-800 mt-3 mb-6">
              Zarafet ve <span className="text-bubblegum">uzmanlık</span> buluşuyor
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Güzellik ve bakıma duyduğumuz tutkuyla kurulan Roselia, alanında
              uzman ekibiyle sizi en iyi halinizle tanıştırmak için burada. Kapımızdan
              girdiğiniz andan itibaren her ziyaretin bir deneyime dönüşmesi
              gerektiğine inanıyoruz.
            </p>
            <p className="text-gray-600 leading-relaxed">
              En kaliteli ürünler ve en yeni tekniklerle, bireyselliğinizi ön plana
              çıkaran kişiye özel bakımlar hazırlıyoruz. Roselia'da sadece bir
              müşteri değil, ailemizin bir parçasısınız.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border border-rose-200 shadow-lg shadow-bubblegum/10">
              <img
                src="/about-us.jpeg"
                alt="Roselia güzellik salonu iç mekanı"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
