import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import Schedule from './components/Schedule';
import Guidelines from './components/Guidelines';
import Access from './components/Access';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-700 bg-slate-50">
      <Header />
      <main className="flex-grow">
        <Hero />
        <EventDetails />
        <Schedule />
        <Guidelines />
        <Access />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default App;