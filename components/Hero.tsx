import React from 'react';
import { Calendar, Clock, MapPin, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-white">
      {/* Background Decorative Elements - Soft organic shapes for a "clean" feel */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-60"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs md:text-sm font-bold tracking-wider mb-2">
              2025年12月 ビジネスパーソン向け
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 tracking-tight">
              未来を拓く<br />
              <span className="text-brand-600">異業種交流会</span>
            </h2>
            
            <p className="text-slate-600 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
              新たなビジネスの可能性は、<br className="hidden md:inline" />
              質の高い出会いから生まれます。<br />
              信頼できるパートナーを見つけに行きませんか。
            </p>

            <div className="flex flex-col gap-4 bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-100 shadow-sm max-w-md mx-auto md:mx-0">
              <div className="flex items-center gap-3 text-slate-700">
                <Calendar className="w-5 h-5 text-brand-500" />
                <span className="font-medium">2025年12月10日（水）</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <Clock className="w-5 h-5 text-brand-500" />
                <span className="font-medium">17:30〜19:00（受付 17:15〜）</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <MapPin className="w-5 h-5 text-brand-500" />
                <span className="font-medium">別途ご案内（新橋駅周辺予定）</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
               {/* Primary CTA handled in FloatingCTA for mobile, but visible here too */}
               <a 
                 href="https://www.kokuchpro.com/event/0479625ebb799019894fbe8ad09b88ad/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all bg-brand-600 rounded-xl hover:bg-brand-700 shadow-lg hover:shadow-brand-200/50 group"
               >
                  参加を申し込む
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </a>
               <a href="#overview" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-600 transition-all bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:text-brand-600">
                  詳細を見る
               </a>
            </div>
          </div>

          {/* Visual Content - Placeholder for "CLIP TOKYO" style illustration */}
          <div className="w-full md:w-1/2 relative">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-100/50 border-4 border-white aspect-[4/3] group">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop" 
                  alt="Business networking illustration" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay card simulation */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold text-xl">
                    50
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">定員</p>
                    <p className="text-sm font-medium text-slate-900">限定50名様（先着順）</p>
                  </div>
                </div>
             </div>
             
             {/* Decorative dots */}
             <div className="absolute -z-10 top-10 -right-10 grid grid-cols-4 gap-2 opacity-20">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-brand-600"></div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;