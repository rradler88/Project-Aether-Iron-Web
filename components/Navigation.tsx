import React from 'react';
    import { SectionType } from '../types';
    import { Radio, Flame, Fingerprint, Cog, Book, Crown, FileText } from 'lucide-react';
    
    interface NavigationProps {
      currentSection: SectionType;
      onNavigate: (section: SectionType) => void;
    }
    
    export const Navigation: React.FC<NavigationProps> = ({ currentSection, onNavigate }) => {
      const navItems = [
        { type: SectionType.HOME, label: 'Wahrheiten', icon: Radio },
        { type: SectionType.KAELEN, label: 'Protektor', icon: Crown },
        { type: SectionType.ALMANACH, label: 'Almanach', icon: Book },
        { type: SectionType.FAITH, label: 'Glaube', icon: Flame },
        { type: SectionType.CHARACTERS, label: 'Biotypen', icon: Fingerprint },
        { type: SectionType.RULES, label: 'Einsatz-Regeln', icon: FileText },
      ];
    
      return (
        <nav className="fixed bottom-0 w-full md:w-28 md:h-screen bg-slate-950 border-t md:border-t-0 md:border-r border-slate-800 z-50 flex md:flex-col items-center justify-between md:justify-center p-3 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
          {/* Rotating Gear Decoration */}
          <div className="hidden md:block absolute top-8 mb-8 opacity-50">
            <Cog className="w-16 h-16 text-slate-700 animate-[spin_20s_linear_infinite]" />
          </div>
    
          <div className="flex md:flex-col w-full justify-around md:justify-center gap-2 md:gap-5">
            {navItems.map((item) => (
              <button
                key={item.type}
                onClick={() => onNavigate(item.type)}
                className={`
                  relative group flex flex-col items-center p-2 rounded-lg transition-all duration-300
                  ${currentSection === item.type 
                    ? 'text-cyan-400 scale-110' 
                    : 'text-slate-500 hover:text-amber-500'}
                `}
              >
                <item.icon className={`w-6 h-6 md:w-10 md:h-10 ${currentSection === item.type ? 'drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]' : ''}`} />
                <span className="text-[10px] md:text-xs font-tech mt-1 md:mt-2 tracking-widest uppercase opacity-90 font-bold">
                  {item.label}
                </span>
                
                {/* Active Glow/Bar */}
                {currentSection === item.type && (
                  <span className="absolute -bottom-1 md:left-0 md:top-1/2 md:-translate-y-1/2 md:-left-5 w-1 h-1 md:w-1.5 md:h-10 bg-cyan-500 rounded-full shadow-[0_0_10px_cyan]" />
                )}
              </button>
            ))}
          </div>
          
          <div className="hidden md:block absolute bottom-8 opacity-40 text-[10px] font-tech text-slate-400 text-center w-full leading-relaxed">
            SYS.VER<br/>4.2.0
          </div>
        </nav>
      );
    };