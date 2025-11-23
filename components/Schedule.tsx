import React from 'react';

const ScheduleItem: React.FC<{ time: string; title: string; description: string; last?: boolean }> = ({ time, title, description, last }) => (
  <div className="flex group">
    <div className="flex flex-col items-center mr-6">
      <div className="w-4 h-4 rounded-full border-2 border-brand-500 bg-white group-hover:bg-brand-500 transition-colors z-10"></div>
      {!last && <div className="w-0.5 h-full bg-slate-200 my-1 group-hover:bg-brand-200 transition-colors"></div>}
    </div>
    <div className="pb-10">
      <span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded mb-2 font-mono">
        {time}
      </span>
      <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-brand-700 transition-colors">{title}</h3>
      <p className="text-slate-600 text-sm">{description}</p>
    </div>
  </div>
);

const Schedule: React.FC = () => {
  return (
    <section id="flow" className="py-20 bg-white scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="lg:w-1/3">
            <span className="text-brand-600 font-bold tracking-wider text-sm uppercase">Schedule</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">当日の流れ</h2>
            <p className="text-slate-600 mb-8">
              限られた時間の中で最大限の繋がりを作れるよう、<br />
              メリハリのあるプログラムをご用意しています。
            </p>
            <div className="bg-brand-50 p-6 rounded-2xl border border-brand-100">
               <h4 className="font-bold text-brand-800 mb-2">💡 ポイント</h4>
               <p className="text-sm text-brand-700">
                 自己紹介PRの時間があります。1分程度で話せる内容を事前にイメージしておくとスムーズです。
               </p>
            </div>
          </div>

          <div className="lg:w-2/3 w-full max-w-2xl">
            <div className="bg-white p-4 md:p-0">
              <ScheduleItem 
                time="17:15" 
                title="受付開始" 
                description="受付にてお名刺を1枚頂戴いたします。参加費のお支払いをお願いします。" 
              />
              <ScheduleItem 
                time="17:30" 
                title="オープニング・ご挨拶" 
                description="主催者より開会のご挨拶と、交流会のルールの説明を行います。" 
              />
              <ScheduleItem 
                time="17:40" 
                title="1分間 自己紹介PR" 
                description="グループに分かれて、お一人ずつ自己紹介をしていただきます。" 
              />
              <ScheduleItem 
                time="18:10" 
                title="グループ交流タイム" 
                description="席替えを行いながら、より多くの方と深く話せる時間を作ります。" 
              />
              <ScheduleItem 
                time="18:40" 
                title="フリータイム" 
                description="自由に名刺交換や連絡先の交換を行ってください。" 
              />
              <ScheduleItem 
                time="19:00" 
                title="閉会" 
                description="定刻にて終了となります。会場は19:15までにご退出ください。" 
                last
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Schedule;