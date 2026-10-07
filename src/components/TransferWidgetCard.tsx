import React, { useState } from 'react';
import { ArrowDown, ArrowRight, Info, Check } from 'lucide-react';

export interface Currency {
  code: string;
  name: string;
  flag: string;
  symbol: string;
  rateToUsd: number; // 1 USD = rate units
}

export const CURRENCIES: Currency[] = [
  { code: 'USD', name: 'US Dollar', flag: '🇺🇸', symbol: '$', rateToUsd: 1.0 },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺', symbol: '€', rateToUsd: 0.9243 },
  { code: 'NGN', name: 'Nigerian Naira', flag: '🇳🇬', symbol: '₦', rateToUsd: 1520.0 },
  { code: 'GBP', name: 'British Pound', flag: '🇬🇧', symbol: '£', rateToUsd: 0.7912 },
  { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦', symbol: 'CA$', rateToUsd: 1.3850 },
  { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺', symbol: 'A$', rateToUsd: 1.5230 },
];

interface TransferWidgetCardProps {
  className?: string;
  onInitiateTransfer?: (details: {
    sendAmount: number;
    sendCurrency: Currency;
    receiveAmount: number;
    receiveCurrency: Currency;
  }) => void;
  onShowFeeBreakdown?: () => void;
}

export const TransferWidgetCard: React.FC<TransferWidgetCardProps> = ({
  className = '',
  onInitiateTransfer,
  onShowFeeBreakdown,
}) => {
  const [sendAmount, setSendAmount] = useState<string>('500.00');
  const [sendCurrency, setSendCurrency] = useState<Currency>(CURRENCIES[0]); // USD
  const [receiveCurrency, setReceiveCurrency] = useState<Currency>(CURRENCIES[1]); // EUR
  const [activePicker, setActivePicker] = useState<'send' | 'receive' | null>(null);
  const [showFeeTooltip, setShowFeeTooltip] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Compute exchange rate between send and receive
  const effectiveRate = receiveCurrency.rateToUsd / sendCurrency.rateToUsd;
  const numSend = parseFloat(sendAmount) || 0;
  const receiveAmount = (numSend * effectiveRate).toFixed(2);

  const handleSwap = () => {
    const tempCurr = sendCurrency;
    setSendCurrency(receiveCurrency);
    setReceiveCurrency(tempCurr);
    if (numSend > 0) {
      setSendAmount(receiveAmount);
    }
  };

  const handleSelectCurrency = (currency: Currency) => {
    if (activePicker === 'send') {
      if (currency.code === receiveCurrency.code) {
        setReceiveCurrency(sendCurrency);
      }
      setSendCurrency(currency);
    } else if (activePicker === 'receive') {
      if (currency.code === sendCurrency.code) {
        setSendCurrency(receiveCurrency);
      }
      setReceiveCurrency(currency);
    }
    setActivePicker(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onInitiateTransfer) {
      onInitiateTransfer({
        sendAmount: numSend,
        sendCurrency,
        receiveAmount: parseFloat(receiveAmount),
        receiveCurrency,
      });
    }
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        background: hovered
          ? `radial-gradient(380px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.18), rgba(15, 17, 24, 0.9) 70%)`
          : undefined,
      }}
      className={`relative bg-[#0f1117]/85 border border-white/10 rounded-2xl p-5 shadow-2xl backdrop-blur-xl w-72 sm:w-80 transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_12px_35px_rgba(37,99,235,0.25)] hover:-translate-y-1.5 overflow-hidden group ${className}`}
    >
      <form onSubmit={handleSubmit}>
        {/* Top Section: TALENT VALUE / SEND */}
        <div className="space-y-1">
          <div className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 select-none">
            GLOBAL REMOTE EARNINGS
          </div>
          <div className="flex items-center justify-between gap-2">
            <input
              type="text"
              inputMode="decimal"
              value={sendAmount}
              onChange={(e) => {
                const val = e.target.value;
                if (/^\d*\.?\d{0,2}$/.test(val) || val === '') {
                  setSendAmount(val);
                }
              }}
              className="w-36 sm:w-40 text-2xl font-bold text-white bg-transparent outline-none tracking-tight font-sans"
              placeholder="0.00"
            />
            {/* Currency Pill */}
            <button
              type="button"
              onClick={() => setActivePicker(activePicker === 'send' ? null : 'send')}
              className="bg-[#1b1e28] hover:bg-[#252a38] border border-white/10 rounded-full px-2.5 py-1 text-xs text-white font-medium flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
            >
              <span>{sendCurrency.flag}</span>
              <span className="font-semibold">{sendCurrency.code}</span>
              <span className="text-[10px] text-zinc-400">⌄</span>
            </button>
          </div>
        </div>

        {/* Divider with Center Swap Button */}
        <div className="relative my-3 flex items-center justify-center">
          <div className="w-full border-t border-white/5" />
          <button
            type="button"
            onClick={handleSwap}
            title="Swap currencies"
            className="absolute bg-[#181b24] hover:bg-[#232734] border border-white/10 text-zinc-300 hover:text-white w-7 h-7 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-90"
          >
            <ArrowDown className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Section: LOCAL PAYOUT / SCHOLARSHIP */}
        <div className="space-y-1">
          <div className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 select-none">
            LOCAL PAYOUT VALUE
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="w-36 sm:w-40 text-2xl font-bold text-white tracking-tight font-sans truncate">
              {receiveAmount}
            </span>
            {/* Currency Pill */}
            <button
              type="button"
              onClick={() => setActivePicker(activePicker === 'receive' ? null : 'receive')}
              className="bg-[#1b1e28] hover:bg-[#252a38] border border-white/10 rounded-full px-2.5 py-1 text-xs text-white font-medium flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
            >
              <span>{receiveCurrency.flag}</span>
              <span className="font-semibold">{receiveCurrency.code}</span>
              <span className="text-[10px] text-zinc-400">⌄</span>
            </button>
          </div>
        </div>

        {/* Live Rate and Low Fees Details */}
        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px]">
          <div className="text-zinc-400 font-normal">
            1 {sendCurrency.code} ≈ {effectiveRate.toFixed(effectiveRate > 10 ? 0 : 4)} {receiveCurrency.code}
          </div>

          <button
            type="button"
            onClick={() => {
              setShowFeeTooltip(!showFeeTooltip);
              if (onShowFeeBreakdown) onShowFeeBreakdown();
            }}
            className="relative bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 text-[#60a5fa] px-2 py-0.5 rounded-full text-[10px] font-medium flex items-center gap-1 transition-colors"
          >
            <span>Hub Zero Fee</span>
            <Info className="w-2.5 h-2.5" />
          </button>
        </div>

        {/* Fee tooltip breakdown */}
        {showFeeTooltip && (
          <div className="mt-2.5 p-2 bg-[#141824] border border-blue-500/20 rounded-xl text-[10px] text-zinc-300 space-y-1 animate-in fade-in">
            <div className="flex justify-between">
              <span className="text-zinc-400">Hub tuition scholarship:</span>
              <span className="text-emerald-400 font-semibold">100% Sponsored</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Remote payout corridor:</span>
              <span className="text-white">Direct Local Settlement</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Jigawa Hub Support:</span>
              <span className="text-blue-400 font-medium">Free Coworking & Power</span>
            </div>
          </div>
        )}

        {/* Primary Send / Apply Action */}
        <button
          type="submit"
          className="cyber-button w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 mt-4 transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
        >
          <span>Apply to Hub</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </form>

      {/* Currency Picker Modal Overlay inside Card */}
      {activePicker && (
        <div className="absolute inset-0 bg-[#0c0e14]/98 rounded-2xl p-4 flex flex-col z-30 animate-in fade-in zoom-in-95 duration-150 border border-white/10">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <span className="text-xs font-semibold text-white">Select Currency</span>
            <button
              onClick={() => setActivePicker(null)}
              className="text-zinc-400 hover:text-white text-xs px-1.5 py-0.5 rounded"
            >
              ✕
            </button>
          </div>

          <div className="mt-2 overflow-y-auto max-h-56 space-y-1 pr-1 custom-scrollbar">
            {CURRENCIES.map((curr) => {
              const isSelected =
                (activePicker === 'send' && curr.code === sendCurrency.code) ||
                (activePicker === 'receive' && curr.code === receiveCurrency.code);

              return (
                <button
                  key={curr.code}
                  type="button"
                  onClick={() => handleSelectCurrency(curr)}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs transition-colors ${
                    isSelected ? 'bg-blue-600/20 text-white border border-blue-500/30' : 'text-zinc-300 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base">{curr.flag}</span>
                    <span className="font-semibold text-white">{curr.code}</span>
                    <span className="text-[10px] text-zinc-400">{curr.name}</span>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-blue-400" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
