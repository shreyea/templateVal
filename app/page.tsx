'use client';
import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import LoveTimeline from '@/components/LoveTimeline';
import OpenWhenLetters from '@/components/OpenWhenLetters';
import SurpriseWheel from '@/components/SurpriseWheel';
import PhotoMemoryWall from '@/components/PhotoMemoryWall';
import PuzzleLock from '@/components/PuzzleLock';
import PromiseCards from '@/components/PromiseCards';
import DedicationLetter from '@/components/DedicationLetter';


export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      
      {/* Main Sections */}
      <div id="timeline">
        <LoveTimeline />
      </div>
      <OpenWhenLetters />
      <SurpriseWheel />
      <PhotoMemoryWall />
      <PuzzleLock />
      <PromiseCards />
      <div id="dedication">
        <DedicationLetter />
      </div>
      
      {/* Footer */}
      <footer className="py-12 px-4 bg-chocolate text-warm-cream">
        <div className="max-w-4xl mx-auto text-center">
          
          <p className="text-sm opacity-70">
            For the one who makes every day worth celebrating
          </p>
          <div className="mt-8 text-xs opacity-50"> 
            <p>Happy Valentine's Day 2025</p>
            <p typeof='email'> shreyaupadhayay13@gmail.com</p>
            <p> © 2025 The Crafting Factory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
