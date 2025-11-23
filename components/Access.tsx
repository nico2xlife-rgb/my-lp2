import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const Access: React.FC = () => {
  return (
    <section id="access" className="py-20 bg-white border-t border-slate-100 scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12">
          
          <div className="w-full md:w-1/3 space-y-8">
            <div>
              <span className="text-brand-600 font-bold tracking-wider text-sm uppercase">Access</span>
              <h2 className="text-3xl font-bold text-slate-900 mt-2">会場アクセス</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg text-slate-800 mb-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-brand-600" />
                  会場について
                </h3>
                <p className="text-slate-600 pl-7 leading-relaxed">
                  <span className="font-bold block mb-1 text-slate-800">都内イベントスペース（新橋エリア）</span>
                  詳細な場所は、参加お申し込み後に別途メールにてご案内させていただきます。
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-slate-800 mb-2 flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-brand-600" />
                  最寄り駅（予定）
                </h3>
                <ul className="text-slate-600 pl-7 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-slate-100 text-xs font-bold rounded text-slate-500">JR・地下鉄</span>
                    <span>新橋駅 周辺</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-brand-50 p-4 rounded-xl text-sm text-brand-800">
              <p>※詳細な会場アクセスは、開催日の1週間前を目安にご連絡いたします。</p>
            </div>
          </div>

          <div className="w-full md:w-2/3 h-80 md:h-auto min-h-[300px] bg-slate-200 rounded-2xl overflow-hidden relative shadow-inner">
            {/* Google Maps Embed centered on Shimbashi Station */}
            <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.6702636881763!2d139.75608827676884!3d35.660462072594025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bc836b49c71%3A0xe54e38682e463a6f!2z5paw5qmL6aeF!5e0!3m2!1sja!2sjp!4v1709600000000!5m2!1sja!2sjp" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Map to Shimbashi Station Area"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Access;