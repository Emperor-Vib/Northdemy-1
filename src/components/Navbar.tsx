import React, { useState } from 'react';
import { NorthdemyLogo } from './Logos';
import { ArrowRight, Menu, X } from 'lucide-react';

export type NavItem =
  | 'Home'
  | 'Program'
  | 'Service'
  | 'Project'
  | 'Blog'
  | 'About'
  | 'Team'
  | 'Partner'
  | 'Contact';

const NAV_ITEMS: NavItem[] = [
  'Home',
  'Program',
  'Service',
  'Project',
  'Blog',
  'About',
  'Team',
  'Partner',
  'Contact',
];

interface NavbarProps {
  onOpenApply: () => void;
  onOpenPartner: () => void;
  onSelectNav?: (item: NavItem) => void;
  activeItem?: NavItem;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenApply,
  onOpenPartner,
  onSelectNav,
  activeItem = 'Home',
}) => {
  const [current, setCurrent] = useState<NavItem>(activeItem);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (item: NavItem) => {
    setCurrent(item);
    if (item === 'Partner') {
      onOpenPartner();
    } else if (onSelectNav) {
      onSelectNav(item);
    }
  };

  return (
    <header className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-3 z-40">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Official NorthDemy Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer select-none shrink-0 group"
          onClick={() => handleNavClick('Home')}
        >
          <div className="h-8 sm:h-9 flex items-center">
            <NorthdemyLogo
              className="h-7 sm:h-8 w-auto transition-transform group-hover:scale-105"
              variant="white"
            />
          </div>
        </div>

        {/* Center: Floating Navigation Pill (Desktop) */}
        <nav className="hidden xl:flex items-center bg-[#111319]/90 border border-white/10 rounded-full px-1.5 py-1 shadow-xl backdrop-blur-md overflow-x-auto scrollbar-none">
          {NAV_ITEMS.map((item) => {
            const isActive = current === item;
            return (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#252834] text-white shadow-inner font-semibold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item}
              </button>
            );
          })}
        </nav>

        {/* Medium screens (lg) compact nav */}
        <nav className="hidden lg:flex xl:hidden items-center bg-[#111319]/90 border border-white/10 rounded-full px-1.5 py-1 shadow-xl backdrop-blur-md">
          {['Home', 'Program', 'Service', 'Project', 'About', 'Contact'].map((item) => {
            const isActive = current === item;
            return (
              <button
                key={item}
                onClick={() => handleNavClick(item as NavItem)}
                className={`px-2.5 py-1 text-[11px] font-medium rounded-full transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#252834] text-white shadow-inner font-semibold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item}
              </button>
            );
          })}
        </nav>

        {/* Right: Actions (APPLY NOW & PARTNER) */}
        <div className="flex items-center gap-3.5 sm:gap-4 shrink-0">
          {/* Replaced LOGIN with APPLY NOW */}
          <button
            onClick={onOpenApply}
            className="text-xs sm:text-sm font-semibold tracking-wide text-zinc-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] transition-all cursor-pointer uppercase hover:scale-[1.02]"
          >
            Apply Now
          </button>

          {/* Replaced SIGNUP FREE with PARTNER */}
          <button
            onClick={onOpenPartner}
            className="cyber-button bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs sm:text-sm font-semibold px-4.5 py-2 rounded-full flex items-center gap-1.5 shadow-md shadow-blue-600/30 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <span>Partner</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-zinc-400 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 bg-[#111319] border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-xl space-y-2 z-50">
          <div className="grid grid-cols-2 gap-1 text-sm">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => {
                  handleNavClick(item);
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-2 rounded-lg text-left text-xs font-medium transition-colors ${
                  current === item ? 'bg-[#252834] text-white font-semibold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="border-t border-white/10 pt-3 mt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenApply();
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-2 text-zinc-200 text-xs font-semibold uppercase tracking-wider bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
            >
              Apply Now
            </button>
            <button
              onClick={() => {
                onOpenPartner();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#2563eb] text-white py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 shadow-lg shadow-blue-600/30"
            >
              Partner with Northdemy <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
