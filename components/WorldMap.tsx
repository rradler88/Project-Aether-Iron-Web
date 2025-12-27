import React, { useState } from 'react';
import { MapPin, Radiation, Factory, ShieldAlert, Zap } from 'lucide-react';

interface Location {
  id: number;
  x: number;
  y: number;
  name: string;
  desc: string;
  icon: React.ElementType;
  color: string;
}

const LOCATIONS: Location[] = [
  { id: 1, x: 50, y: 50, name: "Sektor Primus", desc: "Sitz des Souveräns und der Aether-Gilde. Sauber, hell, tödlich.", icon: Zap, color: "text-cyan-400" },
  { id: 2, x: 20, y: 70, name: "Die Gießereien", desc: "Endlose Fabriken der Eisen-Garde. Hier wird die Station am Laufen gehalten.", icon: Factory, color: "text-amber-500" },
  { id: 3, x: 80, y: 80, name: "Haze-Tiefen", desc: "Die unteren Ebenen. Dichter Smog, Kartell-Territorium, kaum Gesetz.", icon: Radiation, color: "text-green-500" },
  { id: 4, x: 15, y: 20, name: "Barriere-Tor 4", desc: "Übergang zur Wildnis. Schwer bewacht von der Garde.", icon: ShieldAlert, color: "text-red-500" },
];

export const WorldMap: React.FC = () => {
  const [activeLoc, setActiveLoc] = useState<Location | null>(null);

  return (
    <div className="relative w-full aspect-video bg-[#050505] rounded-lg border border-slate-600 overflow-hidden group shadow-2xl">
      {/* Background Image - Industrial Map Vibe */}
      <img 
        src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=2069&auto=format&fit=crop" 
        alt="Station Schematics" 
        className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-[50%] transition-all duration-1000 mix-blend-overlay"
      />
      
      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80 pointer-events-none" />

      {/* Interactive Points */}
      {LOCATIONS.map((loc) => (
        <button
          key={loc.id}
          onClick={() => setActiveLoc(loc)}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-125 group/pin z-20"
          style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
        >
          <div className="relative flex flex-col items-center">
            <loc.icon className={`w-10 h-10 ${loc.color} drop-shadow-[0_0_15px_currentColor]`} />
            <span className={`
              mt-2 bg-black/95 text-sm font-tech px-3 py-1.5 rounded border border-slate-700
              ${loc.color} opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-wider
            `}>
              {loc.name}
            </span>
          </div>
        </button>
      ))}

      {/* Info Panel */}
      {activeLoc && (
        <div className="absolute bottom-8 left-8 right-8 md:left-auto md:right-8 md:w-96 bg-slate-950/95 border border-slate-500 p-6 rounded shadow-[0_0_50px_rgba(0,0,0,0.9)] backdrop-blur-xl animate-fade-in-up z-30">
          <div className="flex justify-between items-start mb-4 border-b border-slate-800 pb-3">
            <h4 className={`font-bold font-serif text-2xl ${activeLoc.color}`}>{activeLoc.name}</h4>
            <button onClick={() => setActiveLoc(null)} className="text-slate-500 hover:text-white transition-colors text-xl">&times;</button>
          </div>
          <p className="text-base text-slate-200 font-light leading-relaxed">{activeLoc.desc}</p>
        </div>
      )}
    </div>
  );
};