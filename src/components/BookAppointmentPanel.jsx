const timeSlots = [
  "08:00", "09:00", "10:00", "11:00",
  "12:00", "13:00", "14:00", "15:00",
  "16:00", "17:00",
];

const services = [
  "Saç Kesimi & Şekillendirme",
  "Saç Boyama",
  "Cilt Bakımı",
  "Makyaj",
  "El & Tırnak Bakımı",
  "Masaj",
];

export default function BookAppointmentPanel({
  isOpen, onClose, onComplete, serviceInfo,
  selectedTime, setSelectedTime, selectedDate, setSelectedDate,
  selectedService, setSelectedService
}) {
  return (
    <>
    {/* Burada eğer panel açıksa alan panel dışına tıklanıldığında panelin kapanmasını sağlayan proplar eklendi ayrıca isopen ? sorgusu ile eğer panel açılırsa sağdan sola doğru açılması sağlandı */}
      {isOpen && <div className="fixed inset-0 z-40 bg-rose-800/60" onClick={onClose} />}
      <div
        className={
          "fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white border-l border-rose-200 shadow-2xl flex flex-col" +
          (isOpen ? " translate-x-0" : " translate-x-full")
        }
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-rose-200">
          <h3 className="font-display text-lg text-gray-800">Randevu Al</h3>
          {/*panel üzerinde çarpı işaretine onClose özelliği verildi */}
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-rose-100 transition-colors text-rose-400 hover:text-rose-600 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
            <div>
              <label className="text-xs text-peony uppercase tracking-[0.15em] font-semibold block mb-3">
                Saat Seçin
              </label>
              {/*value ile o anki değeri state'e bağlıyoruz yani react girilen değerin selected time olduğunu anlıyor, onChange ile setSelectedTime statesi yönetilir*/}
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full bg-rose-50 border border-rose-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-bubblegum transition-colors appearance-none"
              >
                <option value="" disabled>Saat Seçin</option>
                {timeSlots.map((t) => (
                  <option key={t} value={t} className="bg-white text-gray-700">{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs text-peony uppercase tracking-[0.15em] font-semibold block mb-3">
                Tarih Seçin
              </label>
              <input
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                type="date"
                className="w-full bg-rose-50 border border-rose-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-bubblegum transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-peony uppercase tracking-[0.15em] font-semibold block mb-3">
                Hizmet Seçin
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full bg-rose-50 border border-rose-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-bubblegum transition-colors appearance-none"
              >
                <option value="" disabled>Hizmet Seçin</option>
                {services.map((s) => (
                  <option key={s} value={s} className="bg-white text-gray-700">{s}</option>
                ))}
              </select>
            </div>
            {/*burada servis seçilip seçilmediğini kontrol ediyor eğer seçilmiş ise servis süresini ve fiyatını altta belirtiyor */}
            {serviceInfo.name !== "Not Selected" && (
              <div className="bg-rose-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 border border-peony rounded-full pl-2">
                  Süre: {serviceInfo.süre}
                </p>
                <p className="text-sm text-gray-600 border border-peony rounded-full pl-2">
                  Fiyat: {serviceInfo.fiyat}
                </p>
              </div>
            )}
            <div className="border-t border-rose-200 px-6 py-5">
              <button
                onClick={onComplete}
                className="w-full bg-gradient-to-r from-bubblegum to-peony hover:from-peony hover:to-bubblegum text-white font-semibold text-sm py-3.5 rounded-full transition-all shadow-lg shadow-bubblegum/30 cursor-pointer"
              >
                Randevuyu Tamamla
              </button>
            </div>
        </div>
      </div>
    </>
  );
}
