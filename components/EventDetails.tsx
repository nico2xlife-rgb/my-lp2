import React from 'react';
import { Target, Users, CreditCard, AlertCircle } from 'lucide-react';

const EventDetails: React.FC = () => {
  return (
    <section id="overview" className="py-20 bg-slate-50 scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold tracking-wider text-sm uppercase">About Event</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">開催概要</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            多様なバックグラウンドを持つビジネスパーソンが集う、<br />
            上質で安心な交流の場を提供します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Target */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-brand-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">参加対象</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              経営者、個人事業主、会社員、フリーランスなど、ビジネスの拡大や人脈形成を目指す方。
            </p>
          </div>

          {/* Card 2: Capacity */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-brand-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">募集人数</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              <span className="text-2xl font-bold text-brand-600">50</span> 名<br />
              <span className="text-xs text-slate-500">※定員に達し次第締め切り</span>
            </p>
          </div>

          {/* Card 3: Price */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <CreditCard className="w-6 h-6 text-brand-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">参加費</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              <span className="text-2xl font-bold text-brand-600">3,000</span> 円<br />
              <span className="text-xs text-slate-500">（税込・会場費込）</span>
            </p>
          </div>

          {/* Card 4: Location Summary */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <AlertCircle className="w-6 h-6 text-brand-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">安心の運営</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              勧誘目的（宗教・マルチ・投資等）の参加は固くお断りします。通報制度あり。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;