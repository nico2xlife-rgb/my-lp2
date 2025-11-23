import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 pb-28 md:pb-12">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-white text-xl font-bold mb-6 tracking-tight">BizConnect 2025</h2>
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <a href="#" className="hover:text-white transition-colors">特定商取引法に基づく表記</a>
          <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
          <a href="#" className="hover:text-white transition-colors">運営会社</a>
          <a href="#" className="hover:text-white transition-colors">お問い合わせ</a>
        </div>
        <p className="text-xs text-slate-600">
          &copy; 2025 BizConnect Operating Office. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;