import React, { useState } from 'react';

// Imported generated avatar assets
import avatar1 from '../assets/images/user_avatar_one_1791319373709.jpg';
import avatar2 from '../assets/images/user_avatar_two_1791319385239.jpg';
import avatar3 from '../assets/images/user_avatar_three_1791319395546.jpg';
import avatar4 from '../assets/images/user_avatar_four_1791319405620.jpg';
import avatar5 from '../assets/images/user_avatar_five_1791319416321.jpg';

interface ActiveUsersCardProps {
  className?: string;
  onExploreStats?: () => void;
}

export const ActiveUsersCard: React.FC<ActiveUsersCardProps> = ({ className = '', onExploreStats }) => {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const avatars = [
    { src: avatar1, name: 'Usman A.', location: 'Kano Hub' },
    { src: avatar2, name: 'Fatima M.', location: 'Dutse, Jigawa' },
    { src: avatar3, name: 'Ibrahim S.', location: 'Kaduna Center' },
    { src: avatar4, name: 'Zainab B.', location: 'Abuja Lab' },
    { src: avatar5, name: 'Ahmed K.', location: 'Jos Tech Space' },
  ];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={onExploreStats}
      style={{
        background: hovered
          ? `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.18), rgba(15, 17, 24, 0.9) 70%)`
          : undefined,
      }}
      className={`relative bg-[#0f1117]/85 border border-white/10 rounded-2xl p-5 shadow-2xl backdrop-blur-xl cursor-pointer transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_12px_35px_rgba(37,99,235,0.25)] hover:-translate-y-1.5 overflow-hidden group ${className}`}
    >
      {/* Subtle futuristic scanline reflection on hover */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)',
        }}
      />

      {/* Top Header */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 select-none">
          TRAINED TALENTS
        </span>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-[11px] font-medium text-blue-400">Live Hub</span>
        </div>
      </div>

      {/* Main Metric from northdemy.com */}
      <div className="mt-3">
        <div className="text-3xl font-extrabold text-white tracking-tight tabular-nums font-sans">
          500+
        </div>
        <div className="text-xs text-zinc-400 font-normal mt-0.5">
          Trained Talents & Innovators
        </div>
      </div>

      {/* Overlapping Avatars Row */}
      <div className="mt-4 flex items-center">
        <div className="flex items-center -space-x-2 overflow-hidden py-1">
          {avatars.map((avatar, idx) => (
            <div
              key={idx}
              className="relative rounded-full ring-2 ring-[#0f1117] transition-transform duration-200 hover:scale-110 hover:z-20"
              title={`${avatar.name} (${avatar.location})`}
            >
              {!imageError[idx] ? (
                <img
                  src={avatar.src}
                  alt={avatar.name}
                  referrerPolicy="no-referrer"
                  onError={() => setImageError((prev) => ({ ...prev, [idx]: true }))}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover bg-zinc-800"
                />
              ) : (
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-[10px] font-bold text-white">
                  {avatar.name[0]}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Plus badge */}
        <div className="relative -ml-1.5 z-10">
          <span className="bg-[#2563eb] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
            50+
          </span>
        </div>
      </div>

      {/* Stats from northdemy.com */}
      <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-zinc-400">
        <span>50+ Startups Incubated</span>
        <span className="text-blue-400 font-medium">25+ Global Partners</span>
      </div>
    </div>
  );
};
