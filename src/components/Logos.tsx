import React from 'react';
import northdemyLogoWhite from '../assets/images/northdemy_logo_white.png';
import northdemyLogoBlue from '../assets/images/northdemy_logo.png';

// Official NorthDemy Logo collected from northdemy.com
export const NorthdemyLogo: React.FC<{ className?: string; variant?: 'white' | 'blue' }> = ({
  className = 'h-7 sm:h-8',
  variant = 'white',
}) => (
  <img
    src={variant === 'white' ? northdemyLogoWhite : northdemyLogoBlue}
    alt="NorthDemy Logo"
    className={`object-contain ${className}`}
  />
);

// Velopay signature logo icon fallback
export const VelopayIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M5 22.5L12 7.5H16L9 22.5H5Z"
      fill="white"
    />
    <path
      d="M14 24.5L22 7.5H26.5L18.5 24.5H14Z"
      fill="white"
    />
  </svg>
);

// Visa Wordmark
export const VisaLogo: React.FC<{ className?: string }> = ({ className = 'h-5' }) => (
  <svg viewBox="0 0 80 26" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M31.2 24.5L35.4 1.5H41.8L37.6 24.5H31.2ZM56.3 2.1C55 1.6 53 1.2 50.6 1.2C43.5 1.2 38.6 4.9 38.5 10.2C38.4 14.1 42 16.3 44.8 17.6C47.6 19 48.6 19.9 48.6 21.1C48.6 22.9 46.4 23.8 44.4 23.8C41.3 23.8 39.5 23.3 37.5 22.3L36.5 21.8L35.4 26.6C37.1 27.4 40.2 28.1 43.5 28.1C51.1 28.1 56.1 24.4 56.2 18.7C56.3 14.9 53.8 12.3 49.3 10.2C46.8 9 45.4 8.2 45.4 7C45.4 5.9 46.7 4.8 49.3 4.8C51.5 4.8 53.2 5.3 54.5 5.9L55.1 6.2L56.3 2.1ZM72.6 1.5H67.4C65.8 1.5 64.6 2 63.9 3.6L54.7 24.5H61.4L62.7 20.8H71C71.2 21.7 71.9 24.5 71.9 24.5H77.8L72.6 1.5ZM64.6 16C65.2 14.4 67.5 7.8 67.5 7.8C67.5 7.8 68 6.4 68.3 5.4L68.7 7.5C68.7 7.5 69.9 13.5 70.3 16H64.6ZM25.4 1.5L19.4 17.2L18.6 13.4C17.3 9.1 13.3 4.4 8.8 2.1L14.4 24.5H21.2L31.3 1.5H25.4Z" />
    <path d="M12.9 1.5H2.3L2.1 2.2C10.3 4.2 15.6 9.3 17.9 15.3L15.4 2.8C15 1.8 14.1 1.5 12.9 1.5Z" />
  </svg>
);

// Mastercard
export const MastercardLogo: React.FC<{ className?: string }> = ({ className = 'h-6' }) => (
  <div className={`flex items-center gap-1.5 ${className}`}>
    <div className="relative w-8 h-5 flex items-center">
      <div className="w-5 h-5 rounded-full bg-current opacity-80" />
      <div className="w-5 h-5 rounded-full bg-current opacity-50 -ml-2.5" />
    </div>
    <span className="font-semibold text-xs tracking-tight lowercase">mastercard.</span>
  </div>
);

// PayPal
export const PaypalLogo: React.FC<{ className?: string }> = ({ className = 'h-5' }) => (
  <div className={`flex items-center gap-1.5 font-bold ${className}`}>
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 2.41a.8.8 0 0 1 .79-.672h7.009c3.084 0 5.422.68 6.47 2.016 1.05 1.336 1.05 3.327.02 5.518-.946 2.008-2.678 3.493-4.999 4.298-1.07.37-2.31.558-3.69.558H8.847l-1.77 7.209z" />
      <path d="M10.05 13.59h2.383c2.723 0 4.86-.967 5.867-2.656.963-1.616.792-3.418-.46-4.646-.867-.852-2.302-1.306-4.148-1.306H8.563a.684.684 0 0 0-.676.575L5.68 20.358a.547.547 0 0 0 .54.642h3.937l.893-7.41z" opacity="0.65" />
    </svg>
    <span className="text-xs tracking-tight">PayPal</span>
  </div>
);

// Wise Logo
export const WiseLogo: React.FC<{ className?: string }> = ({ className = 'h-5' }) => (
  <div className={`flex items-center gap-1 font-extrabold ${className}`}>
    <span className="text-xs tracking-tighter flex items-center">
      <span className="text-sm font-black mr-0.5 tracking-tight font-mono">37</span>
      <span className="tracking-wide">WISE</span>
    </span>
  </div>
);

// Revolut
export const RevolutLogo: React.FC<{ className?: string }> = ({ className = 'h-5' }) => (
  <div className={`flex items-center font-bold tracking-tight text-xs ${className}`}>
    <span className="text-sm font-black mr-1">R</span>evolut
  </div>
);

// PCI DSS Lock Badge
export const PciDssLogo: React.FC<{ className?: string }> = ({ className = 'h-6' }) => (
  <div className={`flex items-center gap-1.5 ${className}`}>
    <div className="w-4 h-4 rounded border border-current flex items-center justify-center p-0.5">
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5">
        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
      </svg>
    </div>
    <div className="flex flex-col text-left leading-none">
      <span className="font-bold text-[11px] tracking-wide">PCI DSS</span>
      <span className="text-[8px] opacity-70 tracking-wider">Certified</span>
    </div>
  </div>
);

// Trustpilot
export const TrustpilotLogo: React.FC<{ className?: string }> = ({ className = 'h-5' }) => (
  <div className={`flex items-center gap-1.5 ${className}`}>
    <div className="w-3.5 h-3.5 bg-emerald-500 rounded-sm flex items-center justify-center">
      <svg viewBox="0 0 24 24" fill="white" className="w-2.5 h-2.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    </div>
    <span className="font-bold text-xs tracking-tight">Trustpilot</span>
  </div>
);
