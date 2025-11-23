import React from 'react';
import { Briefcase, FileText, Ban, CheckCircle2 } from 'lucide-react';

const Guidelines: React.FC = () => {
  return (
    <section id="notes" className="py-20 bg-slate-50 scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-brand-600 font-bold tracking-wider text-sm uppercase">Information</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">詳細案内・注意事項</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Belongings */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-brand-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-brand-50 rounded-lg">
                  <Briefcase className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">当日の持ち物</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                   <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                   <span className="text-slate-700">名刺（多めにご持参ください）</span>
                </li>
                <li className="flex items-start gap-3">
                   <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                   <span className="text-slate-700">会社案内やチラシ等の資料（配布可）</span>
                </li>
                <li className="flex items-start gap-3">
                   <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                   <span className="text-slate-700">参加費 3,000円（現金払いの場合）</span>
                </li>
              </ul>
            </div>

            {/* Prohibitions */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-red-400">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-50 rounded-lg">
                  <Ban className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">禁止事項</h3>
              </div>
              <p className="text-sm text-slate-500 mb-4">
                参加者皆様が安心して交流できるよう、以下の行為を固く禁じます。
                発見次第、即時退場および今後の参加をお断りいたします。
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-red-700 bg-red-50/50 p-2 rounded">
                   <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></span>
                   <span>宗教、ネットワークビジネス（MLM）、投資案件等の勧誘</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-red-700 bg-red-50/50 p-2 rounded">
                   <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></span>
                   <span>強引な営業行為、しつこい連絡先の聞き出し</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-red-700 bg-red-50/50 p-2 rounded">
                   <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></span>
                   <span>セクハラ・パワハラ等、公序良俗に反する行為</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guidelines;