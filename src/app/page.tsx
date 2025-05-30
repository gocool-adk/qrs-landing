import React from 'react';
import {Header} from '../components/Header';
import Hero from '../components/Hero';
import EcosystemSection from '../components/EcosystemSection';
import DistinctiveDesign from '../components/DistinctiveDesign';
import QuantumThreat from '../components/QuantumThreat';
import SimpleSolution from '../components/SimpleSolution';
import QRSSecures from '../components/QRSSecures';
import QRSInPractice from '../components/QRSInPractice';
import TeamSection from '../components/TeamSection';
import DemoSection from '../components/DemoSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <EcosystemSection />
      <DistinctiveDesign />
      <QuantumThreat />
      <SimpleSolution />
      <QRSSecures />
      <QRSInPractice />
      <TeamSection />
      <DemoSection />
      <Footer />
    </main>
  );
}
