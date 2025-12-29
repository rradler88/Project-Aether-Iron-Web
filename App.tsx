import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Section } from './components/Section';
import { SectionType } from './types';
import { CAMPAIGN_TITLE, CAMPAIGN_SUBTITLE, INTRO_TEXT, FACTIONS, TRUTHS, SPECIES, CLASSES, EQUIPMENT_VISUALS, SAFETY_TOOLS, ALMANACH_CONTENT, KAELEN_CONTENT, KAELEN_ARTWORK_URL, TRINITY_GODS, FORBIDDEN_GODS, FAITH_PRACTICES, MISSION_DATA, HAZE_LEVELS, HAZE_RULES, MAGIC_PROTOCOLS, HACKER_TECH } from './constants';
import { Shield, Radio, AlertTriangle, Fingerprint, Database, Skull, Activity, BookOpen, Quote, FileWarning, Crown, Eye, Lock, Paperclip, Sword, Wrench, Flame, Gavel, Scale, Cross, AlertOctagon, Zap, Leaf, Dices, FileText, Stamp, ChevronDown, ChevronUp, Syringe, Biohazard, ArrowUp, ArrowDown } from 'lucide-react';

export default function App() {
  const [currentSection, setCurrentSection] = useState<SectionType>(SectionType.HOME);
  const [showMission, setShowMission] = useState(false);

  const renderContent = () => {
    switch (currentSection) {
      case SectionType.HOME:
        return (
          <div className="space-y-16 animate-fade-in">
            {/* Hero Section */}
            <div className="text-center py-20 px-4 relative overflow-hidden">
               {/* Background Glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />
               
              <h1 className="text-6xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-600 mb-8 drop-shadow-sm font-serif">
                {CAMPAIGN_TITLE}
              </h1>
              <h2 className="text-xl md:text-3xl text-cyan-500 font-tech tracking-[0.3em] uppercase mb-12 flex items-center justify-center gap-4">
                <Radio className="w-6 h-6 animate-pulse" />
                {CAMPAIGN_SUBTITLE}
              </h2>
              <div className="max-w-4xl mx-auto p-10 border-t border-b border-slate-700 bg-slate-900/30 backdrop-blur-sm relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 bg-[#0a0f1c] text-slate-500 font-tech text-sm uppercase tracking-widest">Incoming Message</div>
                <p className="text-xl md:text-2xl text-slate-300 leading-relaxed whitespace-pre-line font-light italic text-left">
                  {INTRO_TEXT}
                </p>
              </div>
            </div>

            {/* Mission Briefing Hook */}
            <div className="max-w-4xl mx-auto">
              <button 
                onClick={() => setShowMission(!showMission)}
                className={`w-full group relative overflow-hidden transition-all duration-500 border-2 ${showMission ? 'border-red-600 bg-red-950/20' : 'border-red-900/50 bg-[#1a0505] hover:border-red-600'}`}
              >
                <div className="p-8 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className={`p-4 rounded border-2 ${showMission ? 'border-red-500 bg-red-500/20' : 'border-red-900 bg-red-950 text-red-800'}`}>
                      <AlertTriangle className={`w-8 h-8 ${showMission ? 'text-red-500 animate-pulse' : 'text-red-900'}`} />
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-serif font-bold text-red-500 uppercase tracking-widest mb-1">
                        Einberufungsbefehl
                      </h3>
                      <p className="font-tech text-red-400/60 uppercase tracking-wider text-sm">
                        Priorität: {MISSION_DATA.priority} // {MISSION_DATA.date}
                      </p>
                    </div>
                  </div>
                  <div className="text-red-500 transform transition-transform duration-500">
                    {showMission ? <ChevronUp className="w-8 h-8" /> : <ChevronDown className="w-8 h-8" />}
                  </div>
                </div>

                {/* Collapsible Content */}
                <div className={`transition-all duration-700 ease-in-out ${showMission ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-8 md:p-12 pt-0 border-t border-red-900/30 relative">
                     {/* Watermark */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-950/20 font-serif font-bold text-9xl -rotate-12 pointer-events-none select-none whitespace-nowrap">
                       ECHO-4
                     </div>

                     <div className="font-serif text-slate-300 space-y-8 relative z-10 text-lg leading-relaxed">
                        <div className="border-b border-red-900/50 pb-6 mb-8">
                          <h4 className="text-xl font-bold text-red-400 mb-1 uppercase">{MISSION_DATA.header}</h4>
                          <p className="text-red-400/60 text-sm font-tech uppercase tracking-wider">{MISSION_DATA.subHeader}</p>
                        </div>

                        <p className="font-bold text-slate-100">BETREFF: {MISSION_DATA.subject}</p>
                        
                        <p>{MISSION_DATA.intro}</p>
                        
                        <div className="bg-red-950/30 p-6 border-l-4 border-red-600 italic">
                          {MISSION_DATA.legal}
                        </div>

                        <div>
                          <h5 className="font-bold text-red-400 uppercase tracking-widest mb-4 border-b border-red-900/30 pb-2 inline-block">Ihre Mission</h5>
                          <p className="mb-4">{MISSION_DATA.instructions}</p>
                          <p className="mb-4"><strong className="text-red-400">Zielort:</strong> {MISSION_DATA.target}</p>
                          <ul className="list-none space-y-2 bg-slate-900/50 p-6 border border-slate-800">
                             {MISSION_DATA.situation.map((item, i) => (
                               <li key={i} className="flex gap-3">
                                 <span className="text-red-500 mt-1">&gt;&gt;</span>
                                 {item}
                               </li>
                             ))}
                          </ul>
                        </div>

                        <div className="flex items-start gap-4 text-red-400 bg-red-950/10 p-4 border border-red-900/50">
                          <AlertOctagon className="w-6 h-6 flex-shrink-0 mt-1" />
                          <p className="font-bold text-sm uppercase tracking-wide">{MISSION_DATA.warning}</p>
                        </div>

                        <p className="text-sm text-slate-500 italic border-t border-slate-800 pt-4 mt-4">
                          {MISSION_DATA.reward}
                        </p>

                        <div className="mt-12 flex justify-between items-end border-t-2 border-slate-800 pt-8">
                          <div className="text-sm font-tech text-slate-500">
                            {MISSION_DATA.footer}
                          </div>
                          <div className="text-right">
                             <div className="font-serif font-bold text-2xl text-slate-200 handwriting transform -rotate-3 mb-2">{MISSION_DATA.signoff}</div>
                             <div className="text-xs uppercase tracking-widest text-slate-500">{MISSION_DATA.role}</div>
                             {/* Stamp Graphic */}
                             <div className="mt-4 flex justify-end opacity-50">
                               <div className="w-20 h-20 border-4 border-red-800 rounded-full flex items-center justify-center relative rotate-12 mask-stamp">
                                  <div className="absolute inset-0 border-2 border-red-800 rounded-full m-1 border-dashed animate-[spin_60s_linear_infinite]" />
                                  <Skull className="w-10 h-10 text-red-800" />
                               </div>
                             </div>
                          </div>
                        </div>
                     </div>
                  </div>
                </div>
              </button>
            </div>

            {/* The 6 Truths */}
            <Section title="Die 6 Wahrheiten" subtitle="Basiswissen für das Überleben">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {TRUTHS.map((truth, i) => (
                   <div key={truth.id} className="bg-slate-800/40 p-8 border border-slate-700 hover:border-cyan-500/50 transition-colors group">
                     <div className="flex justify-between items-center mb-4">
                       <span className="text-sm font-tech text-slate-500 uppercase tracking-widest font-bold">
                         0{i + 1} // {truth.category}
                       </span>
                       <Database className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                     </div>
                     <h3 className="text-2xl font-serif text-amber-500 mb-3">{truth.title}</h3>
                     <p className="text-lg text-slate-300 leading-relaxed">{truth.content}</p>
                   </div>
                 ))}
               </div>
            </Section>
          </div>
        );

      case SectionType.KAELEN:
        return (
          <div className="animate-fade-in w-full pb-20">
             
             {/* 1. Cinematic Hero Banner */}
             <div className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden border-b-4 border-amber-900 mb-16">
                {/* Background Image with Parallax-like fix */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale brightness-[0.6] contrast-125"
                  style={{ backgroundImage: `url(${KAELEN_ARTWORK_URL})` }}
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/40 to-transparent" />
                
                {/* Hero Text */}
                <div className="relative z-10 text-center px-4 max-w-6xl">
                  <div className="inline-block px-4 py-2 bg-amber-900/30 border border-amber-600 rounded text-amber-500 text-sm md:text-base font-tech tracking-[0.3em] uppercase mb-6 backdrop-blur-md">
                    Bürger-Dossier #001
                  </div>
                  <h1 className="text-6xl md:text-9xl font-serif text-slate-100 mb-8 drop-shadow-[0_10px_10px_rgba(0,0,0,1)] tracking-tight font-bold">
                    DER LORD-PROTEKTOR
                  </h1>
                  <p className="text-xl md:text-3xl font-serif italic text-slate-300 max-w-4xl mx-auto leading-normal drop-shadow-md border-l-4 border-amber-500 pl-6 text-left md:text-center md:border-l-0">
                    "{KAELEN_CONTENT.headerQuote}"
                  </p>
                </div>
             </div>

             <div className="max-w-6xl mx-auto px-4 space-y-24">
               
               {/* 2. Official Doctrine - The "Light" Side */}
               <div className="relative">
                 <div className="flex items-center gap-4 mb-8 border-b border-amber-900/50 pb-4">
                   <Crown className="w-10 h-10 text-amber-500" />
                   <h2 className="text-3xl md:text-5xl font-serif text-slate-100 uppercase tracking-wide">
                     Die Doktrin
                   </h2>
                 </div>
                 
                 <div className="grid md:grid-cols-[1.5fr_1fr] gap-12">
                    <div className="space-y-8">
                      <p className="text-2xl text-slate-200 font-serif leading-relaxed">
                        {KAELEN_CONTENT.official.intro}
                      </p>
                      <div className="space-y-8">
                        {KAELEN_CONTENT.official.sections.map((sec, i) => (
                          <div key={i} className="bg-slate-900/50 border-l-2 border-amber-600 pl-6 py-2">
                            <h3 className="text-amber-500 font-bold mb-3 uppercase tracking-wider text-lg">{sec.title}</h3>
                            <p className="text-lg text-slate-400 leading-relaxed mb-4">{sec.text}</p>
                            {sec.points && (
                              <ul className="space-y-3">
                                {sec.points.map((pt, j) => (
                                  <li key={j} className="flex gap-3 text-base text-slate-500">
                                    <span className="text-amber-600 mt-1.5">•</span>
                                    {pt}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Sidebar / Stats / Propaganda */}
                    <div className="flex flex-col gap-6">
                       {KAELEN_CONTENT.quotes.map((q, i) => (
                         <div key={i} className="bg-slate-950 p-8 border border-slate-800 flex items-center justify-center text-center shadow-lg relative overflow-hidden group hover:border-amber-900/50 transition-colors">
                           <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                             <Crown className="w-full h-full text-white" />
                           </div>
                           <p className="text-amber-500/90 font-serif italic text-xl leading-relaxed relative z-10">"{q}"</p>
                         </div>
                       ))}
                    </div>
                 </div>
               </div>

               {/* 3. The Rumors - The "Dark" Side */}
               <div className="relative bg-[#050000] -mx-4 md:-mx-12 px-4 md:px-12 py-16 border-y-2 border-red-900/50 shadow-[inset_0_0_100px_rgba(0,0,0,1)]">
                 <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-between mb-12 border-b border-red-900/30 pb-4">
                      <div className="flex items-center gap-4">
                         <Eye className="w-10 h-10 text-red-600" />
                         <h2 className="text-3xl md:text-5xl font-serif text-red-500 uppercase tracking-wide">
                           Das Geflüster
                         </h2>
                      </div>
                      <div className="hidden md:block text-red-900 font-tech uppercase tracking-[0.3em] text-lg animate-pulse">
                        // Zugriff Verweigert
                      </div>
                    </div>

                    <p className="text-center text-red-400/60 font-serif italic text-2xl mb-12 max-w-3xl mx-auto">
                      "{KAELEN_CONTENT.rumors.quote}"
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                       {KAELEN_CONTENT.rumors.items.map((item, i) => (
                         <div key={i} className="bg-[#1a0505] p-8 border border-red-900/30 hover:border-red-600 transition-colors relative group overflow-hidden">
                           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                           <h3 className="text-xl font-bold text-slate-200 mb-2 relative z-10 group-hover:text-red-400 transition-colors">{item.title}</h3>
                           <p className="text-xs text-red-800 uppercase tracking-widest font-bold mb-6 relative z-10">{item.desc}</p>
                           <div className="space-y-4 relative z-10">
                             {item.details.map((det, j) => (
                               <p key={j} className="text-base text-slate-400 leading-relaxed pl-4 border-l border-red-900/50 italic">
                                 {det}
                               </p>
                             ))}
                           </div>
                         </div>
                       ))}
                    </div>
                 </div>
               </div>

               {/* 4. Magic Knowledge */}
               <div>
                 <h2 className="text-3xl md:text-4xl font-serif text-cyan-500 text-center uppercase tracking-widest mb-12">
                    {KAELEN_CONTENT.magic.title.replace("3. ", "")}
                 </h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                   {KAELEN_CONTENT.magic.points.map((pt, i) => (
                     <div key={i} className="p-8 bg-slate-900/30 border border-slate-700 hover:bg-slate-800/50 transition-all rounded-lg">
                       <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-950 border-2 border-slate-700 mb-6 text-cyan-400 font-bold text-2xl shadow-[0_0_20px_rgba(0,255,255,0.1)]">
                         {i + 1}
                       </div>
                       <h4 className="text-slate-100 font-bold mb-4 text-lg uppercase tracking-wider">{pt.label}</h4>
                       <p className="text-lg text-slate-400 leading-relaxed">{pt.text}</p>
                     </div>
                   ))}
                 </div>
               </div>
             </div>
          </div>
        );

      case SectionType.ALMANACH:
        return (
          <div className="space-y-16 animate-fade-in pb-12">
            <div className="text-center border-b-2 border-red-900/50 pb-12 mb-12">
              <h2 className="text-5xl md:text-7xl font-serif text-slate-200 mb-6 tracking-tight">ALMANACH DES<br/><span className="text-amber-600">AETHER-DOMINIONS</span></h2>
              <div className="inline-block border border-red-500/30 bg-red-950/20 px-6 py-2 rounded text-red-400 font-tech text-sm tracking-[0.2em] uppercase mb-8">
                Vertraulich // Nur für Bürger Klasse 4+
              </div>
              <p className="text-slate-400 italic max-w-3xl mx-auto border-l-4 border-amber-600 pl-6 py-2 text-xl text-left">
                "Die Welt ist zerbrochen. Wir sind der Stahl, der sie zusammenhält. Wenn wir rosten, stirbt alles."
                <br/><span className="text-base text-slate-500 not-italic block mt-2">— Marschall Ironwood, Ansprache zum 100. Tag der Stille</span>
              </p>
            </div>

            <div className="space-y-24 max-w-5xl mx-auto">
              {ALMANACH_CONTENT.map((chapter, idx) => (
                <div key={idx} className="relative pl-0 md:pl-12 border-l-2 border-slate-800 hover:border-amber-900/50 transition-colors">
                  {/* Chapter Number/Marker */}
                  <div className="absolute -left-[11px] top-0 w-5 h-5 bg-slate-900 border-2 border-slate-600 rounded-full" />
                  
                  <h3 className="text-4xl md:text-5xl font-serif text-amber-500 mb-3 uppercase">{chapter.title}</h3>
                  {chapter.subtitle && (
                    <h4 className="font-tech text-cyan-500/70 text-lg tracking-[0.2em] uppercase mb-8 flex items-center gap-2">
                      // {chapter.subtitle}
                    </h4>
                  )}

                  {chapter.quote && (
                    <div className="bg-slate-900/50 p-8 rounded-r border-l-4 border-slate-600 mb-10 italic text-slate-400 relative">
                       <Quote className="absolute top-4 left-4 w-8 h-8 text-slate-700 -z-10 opacity-50" />
                       <p className="mb-3 text-xl leading-relaxed">"{chapter.quote.text}"</p>
                       <footer className="text-base text-amber-600/80 font-tech not-italic">— {chapter.quote.author}</footer>
                    </div>
                  )}

                  {chapter.intro && (
                    <p className="text-slate-200 mb-10 font-light leading-relaxed text-xl">{chapter.intro}</p>
                  )}

                  <div className="space-y-10">
                    {chapter.subsections.map((sub, sIdx) => (
                      <div key={sIdx} className="bg-slate-800/20 p-8 border border-slate-800 rounded">
                        {sub.title && <h5 className="text-2xl font-bold text-slate-100 mb-6 font-serif border-b border-slate-800 pb-3">{sub.title}</h5>}
                        {sub.text && <p className="text-slate-300 text-lg mb-6 leading-relaxed">{sub.text}</p>}
                        {sub.list && (
                          <ul className="space-y-4">
                            {sub.list.map((item, lIdx) => (
                              <li key={lIdx} className="flex gap-4 text-lg">
                                <span className="text-amber-500 mt-2 w-2 h-2 bg-amber-500 rounded-full flex-shrink-0 shadow-[0_0_5px_orange]" />
                                <span className="text-slate-400">
                                  {item.label && <strong className="text-slate-200">{item.label}: </strong>}
                                  {item.content}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 p-10 border border-red-900/30 bg-red-950/10 text-center rounded">
              <FileWarning className="w-16 h-16 text-red-800 mx-auto mb-6" />
              <p className="font-tech text-red-900/50 text-sm tracking-widest uppercase">
                Ende des Dokuments // Verbrennen nach Lektüre
              </p>
            </div>
          </div>
        );

      case SectionType.FAITH:
        return (
          <div className="space-y-16 animate-fade-in">
             <div className="text-center mb-12">
               <div className="flex justify-center mb-6">
                 <div className="bg-amber-900/20 p-6 rounded-full border-2 border-amber-600/50">
                    <Flame className="w-16 h-16 text-amber-500" />
                 </div>
               </div>
               <h2 className="text-5xl md:text-7xl font-serif text-slate-200 mb-6 tracking-tight uppercase">
                 Glaube & Religion<br/><span className="text-cyan-500">im Dominion</span>
               </h2>
               <p className="text-slate-400 text-xl font-light italic max-w-2xl mx-auto border-l-4 border-amber-600 pl-6 py-2">
                 "Götter sterben nicht. Sie werden nur vergessen. Und was vergessen wird, verrottet im Dunkeln, bis es wieder hungrig wird."
                 <br/><span className="text-base text-slate-500 not-italic block mt-2">— Graffiti in den Slums von Sektor 4</span>
               </p>
             </div>

             <Section title="1. Die Staats-Trinität" subtitle="Der Erlaubte Glaube">
                <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                  Die Verehrung dieser drei Aspekte ist nicht nur erlaubt, sie ist Bürgerpflicht. Es gibt keine Tempel, es gibt nur "Hallen der Ausrichtung". Kleriker der Trinität sind oft Beamte, Richter oder Offiziere.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {TRINITY_GODS.map((god) => (
                    <div key={god.id} className="bg-slate-900 border border-slate-700 p-6 flex flex-col relative overflow-hidden group hover:border-amber-500 transition-colors">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50" />
                      
                      <div className="mb-4 text-center">
                        <div className="inline-block p-3 rounded-full bg-slate-950 border border-slate-800 mb-3 text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                           {god.id === 'ferrus' && <Wrench className="w-8 h-8" />}
                           {god.id === 'axiom' && <Scale className="w-8 h-8" />}
                           {god.id === 'bellona' && <Shield className="w-8 h-8" />}
                        </div>
                        <h3 className="text-xl font-bold font-serif text-slate-100 uppercase">{god.name}</h3>
                        <p className="text-xs text-amber-600 font-tech uppercase tracking-widest">{god.title}</p>
                      </div>

                      <div className="space-y-4 text-sm text-slate-400 flex-grow">
                        <p><strong className="text-slate-300 uppercase text-xs tracking-wider">Symbol:</strong> {god.symbol}</p>
                        <p><strong className="text-slate-300 uppercase text-xs tracking-wider">Dogma:</strong> <span className="italic text-amber-500/80">{god.dogma}</span></p>
                        <p className="border-t border-slate-800 pt-3 mt-3">{god.description}</p>
                      </div>
                      
                      <div className="mt-6 pt-4 border-t border-slate-800">
                         <span className="text-xs font-tech text-slate-500 uppercase">Anhänger: {god.followers}</span>
                      </div>
                    </div>
                  ))}
                </div>
             </Section>

             <Section title="2. Die Flüster-Götter" subtitle="Der Verbotene Kult" className="border-red-900/30">
                <div className="bg-red-950/10 p-6 border border-red-900/20 mb-10 flex items-start gap-4 rounded">
                  <AlertOctagon className="w-12 h-12 text-red-600 flex-shrink-0" />
                  <div>
                    <h4 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-1">Warnung: Ketzerei Klasse A</h4>
                    <p className="text-red-200/70 text-sm">
                      Die Anbetung dieser Wesenheiten steht unter Todesstrafe. Der Staat nennt sie "Chaos-Götzen". Wer ihre Symbole trägt, verschwindet in den Umerziehungslagern.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {FORBIDDEN_GODS.map((god) => (
                    <div key={god.id} className="bg-[#0f0505] border border-red-900/30 p-6 flex flex-col relative group overflow-hidden hover:border-red-600/50 transition-colors">
                      {/* Glitch Effect Overlay */}
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
                      
                      <div className="mb-4 relative z-10">
                        <div className="flex items-center gap-3 mb-2">
                           {god.id === 'sola' && <Flame className="w-6 h-6 text-red-500" />}
                           {god.id === 'green_father' && <Leaf className="w-6 h-6 text-green-700" />}
                           {god.id === 'weaver' && <Dices className="w-6 h-6 text-purple-600" />}
                           <h3 className="text-lg font-bold font-serif text-slate-200 uppercase">{god.name}</h3>
                        </div>
                        <p className="text-xs text-red-500 font-tech uppercase tracking-widest mb-4">Code-Name: {god.title}</p>
                        <p className="text-sm text-slate-400 italic mb-4">"{god.dogma}"</p>
                        <p className="text-sm text-slate-500 leading-relaxed">{god.description}</p>
                      </div>

                      <div className="mt-auto relative z-10 bg-red-950/20 p-3 border border-red-900/30 rounded text-xs text-red-300">
                        <strong className="block uppercase text-[10px] tracking-widest text-red-500 mb-1">Grund des Verbots:</strong>
                        {god.reasonForbidden}
                      </div>
                    </div>
                  ))}
                </div>
             </Section>

             <Section title="3. Religiöse Praxis" subtitle="Für Spieler">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {FAITH_PRACTICES.map((prac, i) => (
                   <div key={i} className={`p-8 border-l-4 ${i === 0 ? 'border-amber-500 bg-amber-900/10' : 'border-purple-500 bg-purple-900/10'}`}>
                     <h3 className="text-2xl font-serif text-slate-100 mb-4">{prac.title}</h3>
                     <p className="text-lg text-slate-300 mb-6 leading-relaxed">{prac.desc}</p>
                     <div className="flex items-start gap-3 text-sm text-slate-400 bg-slate-950/50 p-4 rounded">
                       <Zap className={`w-5 h-5 flex-shrink-0 ${i === 0 ? 'text-amber-500' : 'text-purple-500'}`} />
                       <p>{prac.magicFlavor}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </Section>
          </div>
        );

      case SectionType.CHARACTERS:
        return (
          <div className="space-y-20 animate-fade-in">
            {/* Intro Header */}
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-7xl font-serif text-slate-200 mb-4 tracking-tight">SESSION 0:<br/><span className="text-cyan-500">GUIDE</span></h2>
              <p className="text-slate-400 text-xl font-light italic max-w-2xl mx-auto">
                "In dieser Kampagne nutzen wir die Standard-Regeln von D&D 5e (SRD), aber wir passen das Aussehen und die Herkunft (Flavor) an unser 'Cosmic Industrial'-Setting an."
              </p>
            </div>

            {/* 1. Species */}
            <Section title="1. Die Spezies (Re-Skinned)" subtitle="Bürger, Arbeiter & Mutanten">
              <div className="space-y-10">
                <p className="text-lg text-slate-300 mb-8 border-l-4 border-amber-500 pl-4 italic">
                  In "Aether & Iron" sind die Völker keine fröhlichen Fantasy-Archetypen, sondern Produkte ihrer Umgebung.
                </p>
                
                <div className="grid grid-cols-1 gap-8">
                  {SPECIES.map((spec) => (
                    <div key={spec.id} className="bg-slate-800/20 border border-slate-700 p-8 hover:border-cyan-500/50 transition-colors relative group">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                        
                        {/* Header Area */}
                        <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-slate-700 pb-4 md:pb-0 md:pr-6">
                           <div className="flex items-center gap-3 mb-2">
                             <Fingerprint className="w-6 h-6 text-cyan-500" />
                             <h3 className="text-2xl font-bold font-serif text-slate-100">{spec.name}</h3>
                           </div>
                           <p className="text-amber-500 font-bold uppercase tracking-wider text-sm mb-2">{spec.title}</p>
                           <p className="text-slate-500 font-tech text-xs uppercase tracking-widest">SRD: {spec.srdStats}</p>
                        </div>

                        {/* Content Area */}
                        <div className="md:w-2/3">
                          <p className="text-lg text-slate-300 leading-relaxed mb-6">{spec.description}</p>
                          
                          {/* Variants if available */}
                          {spec.variants && (
                            <div className="space-y-4 mt-6 bg-slate-900/50 p-6 rounded border border-slate-700/50">
                              {spec.variants.map((variant, i) => (
                                <div key={i}>
                                  <h4 className="text-cyan-400 font-bold text-base mb-1">{variant.name}</h4>
                                  <p className="text-sm text-slate-400 leading-relaxed">{variant.desc}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Section>

            {/* 2. Classes */}
            <Section title="2. Die Klassen" subtitle="Flavor & Rolle">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {CLASSES.map((cls) => (
                   <div key={cls.id} className="bg-slate-900/40 p-8 border border-slate-700 hover:border-amber-500/50 transition-all flex flex-col h-full">
                     <div className="flex justify-between items-start mb-4 pb-4 border-b border-slate-800">
                       <div>
                         <h3 className="text-3xl font-serif text-slate-100 mb-1">{cls.name}</h3>
                         <span className="text-amber-600 font-tech text-xs uppercase tracking-widest font-bold">{cls.title}</span>
                       </div>
                       {/* Icon Placeholder based on class could go here */}
                     </div>
                     
                     <div className="mb-4">
                       <span className="text-slate-500 text-xs uppercase tracking-widest font-bold mr-2">Rolle:</span>
                       <span className="text-cyan-400 text-sm font-bold">{cls.role}</span>
                     </div>
                     
                     <p className="text-slate-300 text-base leading-relaxed mb-6 flex-grow italic">
                       "{cls.flavor}"
                     </p>

                     {cls.subinfo && (
                       <div className="mt-auto pt-4 border-t border-slate-800 text-sm text-slate-400">
                         <strong className="text-amber-500">Tipp: </strong> {cls.subinfo}
                       </div>
                     )}

                     {cls.options && (
                       <div className="mt-auto pt-4 space-y-3">
                         {cls.options.map((opt, i) => (
                           <div key={i} className="bg-slate-950 p-3 rounded border border-slate-800 text-sm">
                             <strong className="block text-slate-200 mb-1 text-xs uppercase tracking-wide">{opt.label}</strong>
                             <span className="text-slate-400">{opt.text}</span>
                           </div>
                         ))}
                       </div>
                     )}
                   </div>
                 ))}
               </div>
            </Section>

            {/* 3. Equipment */}
            <Section title="3. Waffen & Rüstung" subtitle="Visuals (Kopfkino)">
               <div className="bg-slate-900/80 p-8 border border-slate-700">
                 <div className="flex items-center gap-4 mb-8">
                   <div className="p-3 bg-amber-900/20 rounded-full border border-amber-900/50">
                     <Sword className="w-8 h-8 text-amber-500" />
                   </div>
                   <div>
                     <p className="text-lg text-slate-300">
                       Wir ändern keine Werte (Stats), nur die Namen für das "Kopfkino".
                     </p>
                   </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                   {EQUIPMENT_VISUALS.items.map((item, i) => (
                     <div key={i} className="flex flex-col border-b border-slate-800 pb-4 last:border-0">
                       <span className="text-cyan-500 font-bold font-serif text-lg mb-1">{item.original}</span>
                       <span className="text-slate-400 text-base">
                         <span className="text-slate-600 mr-2">&gt;&gt;</span>
                         {item.reskin}
                       </span>
                     </div>
                   ))}
                 </div>
               </div>
            </Section>
          </div>
        );

      case SectionType.RULES:
        return (
          <div className="space-y-12 animate-fade-in">
             <div className="text-center mb-12">
               <div className="flex justify-center mb-6">
                 <div className="bg-slate-900/50 p-6 rounded-full border-2 border-slate-600">
                    <FileText className="w-16 h-16 text-slate-200" />
                 </div>
               </div>
               <h2 className="text-5xl md:text-7xl font-serif text-slate-200 mb-6 tracking-tight uppercase">
                 EINSATZ-REGELN<br/><span className="text-red-500">HARDCORE V2.1</span>
               </h2>
             </div>

             {/* Haze Index */}
             <Section title="Der Haze-Index" subtitle="Psychische Kontamination">
                <div className="bg-slate-900 border border-slate-700 overflow-hidden mb-8">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-slate-950 border-b border-slate-700 text-slate-400 uppercase text-xs tracking-widest font-tech">
                        <th className="p-4 w-20 text-center">Lvl</th>
                        <th className="p-4 w-40">Zustand</th>
                        <th className="p-4">Mechanischer Effekt</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {HAZE_LEVELS.map((lvl) => (
                        <tr key={lvl.level} className="group hover:bg-slate-800/50 transition-colors">
                          <td className="p-4 text-center font-bold text-xl text-slate-500 group-hover:text-cyan-400">{lvl.level}</td>
                          <td className="p-4 font-serif font-bold text-slate-200">{lvl.state}</td>
                          <td className="p-4 text-slate-400 text-sm md:text-base">{lvl.effect}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-red-950/10 border border-red-900/30 p-6">
                    <div className="flex items-center gap-3 mb-4 text-red-500">
                      <ArrowUp className="w-6 h-6" />
                      <h4 className="font-bold uppercase tracking-wider">Haze steigt (+1 Level)</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-400">
                      {HAZE_RULES.increase.map((rule, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-red-500 mt-1">●</span>
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-green-950/10 border border-green-900/30 p-6">
                    <div className="flex items-center gap-3 mb-4 text-green-500">
                      <ArrowDown className="w-6 h-6" />
                      <h4 className="font-bold uppercase tracking-wider">Haze sinkt</h4>
                    </div>
                     <ul className="space-y-2 text-sm text-slate-400">
                      {HAZE_RULES.decrease.map((rule, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-green-500 mt-1">●</span>
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
             </Section>

             {/* Magie Protokoll */}
             <Section title="Magie-Protokoll" subtitle="Siphon-Interaktion">
               <div className="grid grid-cols-1 gap-8">
                 {MAGIC_PROTOCOLS.map((proto, i) => (
                   <div key={i} className={`border-l-4 p-8 bg-slate-900/40 border border-slate-700/50 ${proto.color.split(' ')[0]}`}>
                     <div className="flex items-start justify-between mb-6">
                       <div>
                         <h3 className={`text-2xl font-serif font-bold mb-1 ${proto.color.split(' ')[2]}`}>{proto.title}</h3>
                         <p className="text-slate-500 text-xs font-tech uppercase tracking-widest">{proto.classes}</p>
                       </div>
                       {proto.icon === 'Shield' && <Shield className="w-8 h-8 opacity-50" />}
                       {proto.icon === 'AlertTriangle' && <AlertTriangle className="w-8 h-8 opacity-50" />}
                       {proto.icon === 'Skull' && <Skull className="w-8 h-8 opacity-50" />}
                     </div>

                     <div className="space-y-4">
                       {proto.rules.map((rule, rIdx) => (
                         <div key={rIdx} className="flex flex-col md:flex-row gap-2 md:gap-4 text-sm border-t border-slate-800 pt-3 first:border-0 first:pt-0">
                           <span className={`md:w-24 flex-shrink-0 font-bold uppercase tracking-wider ${proto.color.split(' ')[2]} opacity-80`}>
                             {rule.label}:
                           </span>
                           <span className="text-slate-300 leading-relaxed">{rule.text}</span>
                         </div>
                       ))}
                     </div>
                   </div>
                 ))}
               </div>
             </Section>

             {/* Hacker Technik */}
             <div className="bg-slate-900 border border-cyan-500/30 p-8 md:p-12 relative overflow-hidden group hover:border-cyan-500/60 transition-colors">
               <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                 <Zap className="w-64 h-64 text-cyan-500" />
               </div>
               
               <div className="relative z-10">
                 <div className="flex items-center gap-3 mb-2">
                   <Zap className="w-6 h-6 text-amber-500 animate-pulse" />
                   <h3 className="text-amber-500 font-bold uppercase tracking-widest text-sm">{HACKER_TECH.title}</h3>
                 </div>
                 <h2 className="text-3xl md:text-4xl font-serif text-slate-100 mb-6">{HACKER_TECH.tech}</h2>
                 <p className="text-lg text-slate-300 mb-8 max-w-2xl">{HACKER_TECH.desc}</p>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="bg-red-950/20 p-6 border-l-2 border-red-500">
                     <strong className="block text-red-500 uppercase tracking-wider text-xs mb-2">Kosten</strong>
                     <p className="text-red-200">{HACKER_TECH.cost}</p>
                   </div>
                   <div className="bg-cyan-950/20 p-6 border-l-2 border-cyan-500">
                     <strong className="block text-cyan-500 uppercase tracking-wider text-xs mb-2">Nutzen</strong>
                     <p className="text-cyan-200">{HACKER_TECH.benefit}</p>
                   </div>
                 </div>
               </div>
             </div>

             {/* Footer Safety Tools (Moved from Logistics) */}
             <div className="mt-20 pt-10 border-t border-slate-800 text-center opacity-60 hover:opacity-100 transition-opacity">
               <h4 className="text-sm font-tech text-slate-500 uppercase tracking-widest mb-6">Sicherheitsprotokolle (Meta)</h4>
               <div className="flex flex-wrap justify-center gap-8">
                 {SAFETY_TOOLS.map((tool, i) => (
                   <div key={i} className="max-w-xs">
                     <strong className="block text-slate-400 mb-1">{tool.title}</strong>
                     <p className="text-xs text-slate-600">{tool.desc}</p>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200 pb-24 md:pb-0 font-sans">
      
      {/* Background Texture Overlay - Darker and grittier */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] z-0" />
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-[#0a0f1c] via-transparent to-[#0a0f1c] z-0" />
      
      <Navigation currentSection={currentSection} onNavigate={setCurrentSection} />
      
      <main className="md:ml-28 min-h-screen relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
          {renderContent()}
        </div>
      </main>

      {/* Mobile Footer Line */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-slate-900 via-cyan-600 to-slate-900 z-50 md:hidden" />
    </div>
  );
}