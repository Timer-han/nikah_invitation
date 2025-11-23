import React, { useState, useEffect } from 'react';
import { Heart, Clock, MapPin, Users, Phone } from 'lucide-react';

const NikahInvitation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const ornamentPattern = (
    <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.03 }}>
      <defs>
        <pattern id="ornament" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M100,60 Q120,80 100,100 Q80,80 100,60 M100,100 Q120,120 100,140 Q80,120 100,100 M60,100 Q80,120 100,100 Q80,80 60,100 M140,100 Q120,120 100,100 Q120,80 140,100" fill="none" stroke="currentColor" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#ornament)"/>
    </svg>
  );

  const Rose = ({ className = "", style = {} }) => (
  <img 
    src="/images/rose.png" 
    alt="rose" 
    className={`absolute w-200 h-200 ${className}`} 
    style={style}
    viewBox="0 0 100 100"
  />
);
  // const Rose = ({ className = "", style = {} }) => (
  //   <div className={`absolute ${className}`} style={style}>
  //     <svg width="80" height="80" viewBox="0 0 100 100">
  //       <circle cx="50" cy="50" r="15" fill="#f5f5dc" opacity="0.9"/>
  //       <circle cx="50" cy="50" r="10" fill="#fffef0" opacity="0.8"/>
  //       <ellipse cx="35" cy="45" rx="12" ry="15" fill="#f5f5dc" opacity="0.7" transform="rotate(-30 35 45)"/>
  //       <ellipse cx="65" cy="45" rx="12" ry="15" fill="#f5f5dc" opacity="0.7" transform="rotate(30 65 45)"/>
  //       <ellipse cx="50" cy="30" rx="12" ry="15" fill="#ede8d0" opacity="0.7"/>
  //       <ellipse cx="50" cy="65" rx="12" ry="15" fill="#f5f5dc" opacity="0.7"/>
  //       <ellipse cx="38" cy="60" rx="10" ry="13" fill="#ede8d0" opacity="0.6" transform="rotate(-45 38 60)"/>
  //       <ellipse cx="62" cy="60" rx="10" ry="13" fill="#ede8d0" opacity="0.6" transform="rotate(45 62 60)"/>
  //     </svg>
  //   </div>
  // );

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 text-gray-800 relative overflow-hidden">
      {ornamentPattern}
      
      {/* Декоративные розы
      <div className="fixed top-[75vh] left-1/2 -translate-x-1/2 z-10 pointer-events-none" style={{ transform: `translateY(-50%, ${scrollY * 0.1}px)` }}>
        <Rose className="opacity-40" />
      </div> */}

      {/* <Rose className="top-40 right-20 opacity-30" style={{ transform: `translateY(${scrollY * 0.15}px)` }} />
      <Rose className="bottom-40 left-20 opacity-35" style={{ transform: `translateY(${-scrollY * 0.1}px)` }} />
      <Rose className="bottom-60 right-10 opacity-25" style={{ transform: `translateY(${-scrollY * 0.12}px)` }} /> */}

      {/* Басмала */}
      <section className="min-h-screen flex items-center justify-center relative z-10 px-4">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div 
            className="text-5xl md:text-7xl font-serif text-emerald-700 mb-8"
            style={{ 
              fontFamily: 'Traditional Arabic, serif',
              animation: 'fadeIn 2s ease-in'
            }}
          >
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-light text-emerald-800">
              Тимерхан һәм Әминә
            </h1>
            <h2 className="text-3xl md:text-5xl font-light text-emerald-700">
              Тимерхан и Амина
            </h2>
          </div>

          <div className="flex justify-center items-center space-x-4 my-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-emerald-300"></div>
            <Heart
              className="text-rose-300 cursor-pointer hover:scale-110 transition-transform duration-300"
              size={32}
              fill="currentColor"
              onClick={() => setShowEasterEgg(true)}
            />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-emerald-300"></div>
          </div>

          <div className="text-xl md:text-2xl text-gray-600 space-y-2">
            <p className="font-light">Сезне никахыбызга чакырабыз</p>
            <p className="font-light">Приглашаем вас на наш никах</p>
          </div>
        </div>
      </section>

      {/* Место и время */}
      <section 
        id="details" 
        className={`min-h-screen flex items-center justify-center relative z-10 px-4 animate-on-scroll transition-all duration-1000 ${isVisible.details ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-4xl mx-auto w-full">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-light text-emerald-800 mb-8 text-center">
              Җыелу урыны һәм вакыты / Место и время сбора
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-emerald-600 mt-1 flex-shrink-0" size={28} />
                  <div>
                    <h3 className="font-medium text-lg text-emerald-800 mb-2">Урын / Место:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Никах центр Эмиз
                      <br />
                      Казан шәһәре, Сафиуллина урамы, 29
                      <br />
                      г. Казань, улица Сафиуллина, 29
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Clock className="text-emerald-600 mt-1 flex-shrink-0" size={28} />
                  <div>
                    <h3 className="font-medium text-lg text-emerald-800 mb-2">Вакыт / Время:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Дата: 02.01.2026
                      <br />
                      Время: 16:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Дресс-код */}
      <section 
        id="dresscode" 
        className={`min-h-screen flex items-center justify-center relative z-10 px-4 animate-on-scroll transition-all duration-1000 ${isVisible.dresscode ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-4xl mx-auto w-full">
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-light text-emerald-800 mb-8 text-center">
              Кием кодексы / Дресс-код
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/70 rounded-2xl p-6 space-y-4">
                <h3 className="text-2xl font-medium text-emerald-700 flex items-center space-x-2">
                  <Users size={24} />
                  <span>Егетләр өчен / Для парней</span>
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span>Түбәтәй (мәҗбүри) / Тюбетейка (обязательно)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span>Күлмәк озын җиңле / Рубашка с длинным рукавом</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span>Чалбар / Брюки</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/70 rounded-2xl p-6 space-y-4">
                <h3 className="text-2xl font-medium text-emerald-700 flex items-center space-x-2">
                  <Users size={24} />
                  <span>Кызлар өчен / Для девушек</span>
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span>Яулык (мәҗбүри) / Платок (обязательно)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span>Күлмәк тулысынча ябылган / Платье полностью закрытое</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span>Куллар һәм аяклар ябылган / Руки и ноги закрыты</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/70 rounded-2xl p-6">
              <h3 className="text-2xl font-medium text-emerald-700 mb-4 text-center">
                Төсләр / Цвета
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Кызлар өчен ачык пастель төсләрдәге бертөсле кием өстенлек бирелә
                <br />
                Для девушек предпочтительна светлая однотонная одежда пастельных тонов
              </p>
              <div className="flex justify-center space-x-4 mt-6">
                <div className="w-16 h-16 rounded-full bg-cyan-100 border-2 border-cyan-200"></div>
                <div className="w-16 h-16 rounded-full bg-lime-100 border-2 border-lime-200"></div>
                <div className="w-16 h-16 rounded-full bg-yellow-50 border-2 border-yellow-200"></div>
                <div className="w-16 h-16 rounded-full bg-amber-50 border-2 border-amber-200"></div>
                <div className="w-16 h-16 rounded-full bg-orange-50 border-2 border-orange-200"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Чаты */}
      <section 
        id="chats" 
        className={`min-h-screen flex items-center justify-center relative z-10 px-4 animate-on-scroll transition-all duration-1000 ${isVisible.chats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-4xl mx-auto w-full">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-light text-emerald-800 mb-8 text-center">
              Уртак чатларга кушылыгыз / Присоединяйтесь к общим чатам
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <a 
                href="https://t.me/+0-cOTu8QNARkY2Ri" 
                className="group bg-gradient-to-br from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <div className="flex flex-col items-center space-y-4">
                  <Users size={48} />
                  <div className="text-center">
                    <h3 className="text-2xl font-medium mb-2">Егетләр чаты</h3>
                    <p className="text-emerald-50">Чат для парней</p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Phone size={24} />
                  </div>
                </div>
              </a>

              <a 
                href="https://t.me/+zOdFMslqZ-Q3M2Ey" 
                className="group bg-gradient-to-br from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <div className="flex flex-col items-center space-y-4">
                  <Users size={48} />
                  <div className="text-center">
                    <h3 className="text-2xl font-medium mb-2">Кызлар чаты</h3>
                    <p className="text-rose-50">Чат для девушек</p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Phone size={24} />
                  </div>
                </div>
              </a>
            </div>

            <p className="text-center text-gray-600 mt-8">
              Сорауларыгыз булса, чатка языгыз / При возникновении вопросов пишите в чат
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 text-center">
        <div className="flex justify-center items-center space-x-4 mb-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-emerald-300"></div>
          <Heart className="text-emerald-400" size={24} fill="currentColor" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-emerald-300"></div>
        </div>
        <p className="text-gray-500 text-sm">
          Сезне көтәбез / Ждём вас с нетерпением
        </p>
      </footer>

      {/* Пасхалка */}
      {showEasterEgg && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center p-4 overflow-y-auto"
          onClick={() => setShowEasterEgg(false)}
        >
          <div
            className="bg-white rounded-3xl p-8 md:p-12 max-w-2xl mx-auto shadow-2xl transform transition-all duration-500 ease-out scale-95 opacity-80 animate-fadeInUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center space-y-6">
              <div className="text-6xl">💝</div>
              <h3 className="text-3xl font-light text-emerald-800">
                Пасхалка 3: "тук-тук"
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                Җанибәков эффекты кечкенә генә импульстан гыйбарәт, ул ахыр чиктә бар нәрсәне астын-өскә китерә. Никах – ин шәә Аллаһ, безнең тормышта абсолют яңа этапның башы һәм тирә-яктагы чынбарлыкта шундый эффектның менә дигән мисалы. Аллаһ ризалыгы өчен безнең өчен дога кылыгыз!
                <br />
                <span className="text-emerald-600">— Минем фикерләрем</span>
              </p>
              <p className="text-lg text-gray-600 italic">
                Эффект Джанибекова заключается в маленьком импульсе, который в конечном итоге переворачивает всё с ног наголову. Никах - это, ин шәә Аллаһ, начало абсолютно нового этапа в нашей жизни, отличный пример такого эффекта в окружающей нас реальности. Сделайте за нас дуа, ради Аллаха🤲🏽
              </p>
              <button
                onClick={() => setShowEasterEgg(false)}
                className="mt-6 px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
              >
                Ябу / Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(30px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default NikahInvitation;