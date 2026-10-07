/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Navbar, NavItem } from './components/Navbar';
import { HeroHeader, HeroCenterActions } from './components/HeroCenter';
import { ActiveUsersCard } from './components/ActiveUsersCard';
import { TransferWidgetCard, Currency, CURRENCIES } from './components/TransferWidgetCard';
import { TrustedLogos } from './components/TrustedLogos';
import { NorthdemyContentSections } from './components/NorthdemyContentSections';
import { HowItWorksModal, SendMoneyModal, ApplyModal, PartnerModal, SectionDetailModal } from './components/Modals';
import { ChevronDown } from 'lucide-react';

export default function App() {
  const [howItWorksOpen, setHowItWorksOpen] = useState(false);
  const [sendMoneyOpen, setSendMoneyOpen] = useState(false);
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState<NavItem | null>(null);

  // Background video playback controller & slow down loop
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Slow down video playback rate to 0.5 (50% speed) to make loop calm, cinematic & non-distracting
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? currentScroll / totalHeight : 0);
      setScrollY(currentScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [activeTransfer, setActiveTransfer] = useState<{
    sendAmount: number;
    sendCurrency: Currency;
    receiveAmount: number;
    receiveCurrency: Currency;
  }>({
    sendAmount: 500.0,
    sendCurrency: CURRENCIES[0], // USD
    receiveAmount: 462.15,
    receiveCurrency: CURRENCIES[1], // EUR
  });

  const handleInitiateTransfer = (details: {
    sendAmount: number;
    sendCurrency: Currency;
    receiveAmount: number;
    receiveCurrency: Currency;
  }) => {
    setActiveTransfer(details);
    setSendMoneyOpen(true);
  };

  const handleSelectNav = (item: NavItem) => {
    if (item === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const elementMap: Partial<Record<NavItem, string>> = {
      Program: 'program',
      Service: 'service',
      Project: 'project',
      About: 'about',
      Contact: 'contact',
    };

    const targetId = elementMap[item];
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    // Otherwise show rich detailed modal
    setSelectedSection(item);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden flex flex-col justify-between bg-black text-white selection:bg-blue-600 selection:text-white">
      {/* Futuristic Laser Scroll Progress Line at top of viewport */}
      <div
        className="fixed top-0 left-0 h-[2.5px] z-50 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 laser-scroll-line transition-all duration-75 pointer-events-none"
        style={{ width: `${Math.min(100, Math.max(0, scrollProgress * 100))}%` }}
      />

      {/* Background Video Layer with Slowed Down Loop & Parallax */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onLoadedMetadata={(e) => {
            // Ensure 0.5x speed loop for serene, non-distracting ambient backdrop
            e.currentTarget.playbackRate = 0.5;
          }}
          className="w-full h-full object-cover transition-transform duration-300 ease-out"
          style={{
            transform: `translateY(${Math.min(scrollY * 0.12, 100)}px) scale(${1 + Math.min(scrollY * 0.0002, 0.06)})`,
          }}
          src="https://res.cloudinary.com/tanu9dkd/video/upload/v1791322099/kling_20261007_Image_to_Video__957_0.mp4"
        />
        {/* Subtle contrast scrim to keep video visible while maintaining crisp typography */}
        <div className="absolute inset-0 bg-black/40 backdrop-brightness-95" />
        {/* Ambient radial accent overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% 28%, rgba(37, 99, 235, 0.18) 0%, transparent 65%),
              radial-gradient(circle at 10% 45%, rgba(30, 58, 138, 0.14) 0%, transparent 50%),
              radial-gradient(circle at 90% 45%, rgba(59, 130, 246, 0.12) 0%, transparent 50%),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.25) 0%, transparent 20%, transparent 80%, rgba(0, 0, 0, 0.7) 100%)
            `,
          }}
        />
      </div>

      {/* Top Navigation Bar */}
      <Navbar
        onOpenApply={() => setApplyModalOpen(true)}
        onOpenPartner={() => setPartnerModalOpen(true)}
        onSelectNav={handleSelectNav}
      />

      {/* Main Hero Container */}
      <main className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center pt-2 sm:pt-6">
        {/* Top Hero Headline Block: NORTHDEMY */}
        <HeroHeader />

        {/* 3-Column Balanced Lower Grid (Flawless replica of reference layout in exact same places) */}
        <div className="w-full mt-4 sm:mt-6 grid grid-cols-1 lg:grid-cols-12 items-start lg:items-center gap-6 lg:gap-4">
          {/* Left Column: Active Talents 500+ Card */}
          <div className="order-2 lg:order-1 lg:col-span-3 flex justify-center lg:justify-start">
            <ActiveUsersCard
              onExploreStats={() => handleSelectNav('About')}
              className="w-full max-w-xs sm:w-68 futuristic-card"
            />
          </div>

          {/* Center Column: Subtitle (TECHNOLOGY HUB IN NORTHERN NIGERIA EMPOWERING INNOVATION) + Action Buttons */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center">
            <HeroCenterActions
              onApplyNow={() => setApplyModalOpen(true)}
              onSeeHowItWorks={() => setHowItWorksOpen(true)}
            />
          </div>

          {/* Right Column: Global Remote Earnings & Hub Calculator Widget */}
          <div className="order-3 lg:order-3 lg:col-span-4 flex justify-center lg:justify-end">
            <TransferWidgetCard
              onInitiateTransfer={handleInitiateTransfer}
              onShowFeeBreakdown={() => setHowItWorksOpen(true)}
              className="w-full max-w-sm sm:w-80 futuristic-card"
            />
          </div>
        </div>

        {/* Bottom Section: Trusted By Ecosystem Leaders */}
        <TrustedLogos />

        {/* Futuristic Scroll Indicator (Gently fades on scroll) */}
        <div
          className="w-full flex flex-col items-center justify-center pt-2 pb-6 transition-opacity duration-300 pointer-events-none select-none"
          style={{ opacity: Math.max(0, 1 - scrollY / 120) }}
        >
          <div className="flex flex-col items-center gap-1.5 text-zinc-400">
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-zinc-400">
              Scroll To Explore
            </span>
            <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center p-1 relative shadow-[0_0_12px_rgba(59,130,246,0.3)]">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-cyan-500 animate-pulse -mt-0.5" />
          </div>
        </div>
      </main>

      {/* Full Official Write-ups from northdemy.com (About, Services, Incubation, Programs, Testimonials, Footer) */}
      <NorthdemyContentSections
        onOpenApply={() => setApplyModalOpen(true)}
        onOpenPartner={() => setPartnerModalOpen(true)}
      />

      {/* Interactive Modals */}
      <ApplyModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
      />

      <PartnerModal
        isOpen={partnerModalOpen}
        onClose={() => setPartnerModalOpen(false)}
      />

      <SectionDetailModal
        isOpen={selectedSection !== null}
        section={selectedSection}
        onClose={() => setSelectedSection(null)}
        onOpenApply={() => {
          setSelectedSection(null);
          setApplyModalOpen(true);
        }}
      />

      <HowItWorksModal
        isOpen={howItWorksOpen}
        onClose={() => setHowItWorksOpen(false)}
      />

      <SendMoneyModal
        isOpen={sendMoneyOpen}
        onClose={() => setSendMoneyOpen(false)}
        details={activeTransfer}
      />
    </div>
  );
}
