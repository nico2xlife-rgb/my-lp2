import React from 'react';
import { ExternalLink } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 z-50 bg-white/80 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl">
        
        <div className="hidden sm:block">
          <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">参加費 3,000円</p>
          <p className="font-bold text-slate-800">12月10日（水）17:30〜 @新橋駅周辺</p>
        </div>

        <div className="w-full sm:w-auto flex gap-3">
          <a 
            href="https://www.kokuchpro.com/event/0479625ebb799019894fbe8ad09b88ad/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 w-full sm:w-auto py-3 px-8 rounded-xl bg-brand-600 text-white font-bold text-sm hover:bg-brand-500 transition-colors shadow-lg shadow-brand-200 active:scale-95 flex items-center justify-center gap-2"
          >
            参加を申し込む
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default FloatingCTA;