import { Faction, SpeciesEntry, LoreEntry, RuleEntry, AlmanachSection, ClassEntry, EquipmentEntry, GodEntry, FaithPracticeEntry } from './types';

export const CAMPAIGN_TITLE = "Project Aether & Iron";
export const CAMPAIGN_SUBTITLE = "Cosmic Industrial Horror // Session 0";

// PLATZHALTER FÜR DEIN ARTWORK
// Bitte ersetze diesen Link durch die URL deines hochgeladenen Bildes (z.B. aus Google Drive oder einem Image Hoster)
export const KAELEN_ARTWORK_URL = "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=1000";

export const MISSION_DATA = {
  header: "MINISTERIUM FÜR AUSSERGEWÖHNLICHE BEDROHUNGEN",
  subHeader: "Abteilung für Asymmetrische Kriegsführung & Spezialeinsätze",
  subject: "Einberufungsbefehl / Aktivierung der Einheit 'Echo-4'",
  priority: "Absolut",
  date: "43. Tag des Eisernen Zyklus",
  intro: "Sie wurden aufgrund Ihrer spezifischen Talente, Ihrer Akte oder Ihrer Schulden gegenüber dem Dominion für die Task Force Echo-4 ausgewählt.",
  legal: "Gemäß Sondererlass 7-B des Lord-Protektors sind alle bürgerlichen Rechte und vorherigen Verpflichtungen mit sofortiger Wirkung ausgesetzt. Ihr Leben gehört bis auf Weiteres dem Missionsziel.",
  instructions: "Sie werden sich unverzüglich am Dock 4 zur Einschiffung auf den Transporter Vigilance einfinden.",
  target: "Station Tenebris (Sektor Ozean / Tiefbohrung).",
  situation: [
    "Der Kontakt zur Station ist vor 48 Stunden abgebrochen.",
    "Verdacht auf: Sabotage, Seuche oder [GESCHWÄRZT].",
    "Ihr Auftrag: Sichern, Bergen, Eliminieren."
  ],
  warning: "Verweigerung dieses Befehls wird als Hochverrat gewertet und mit sofortiger Exekution durch die Inquisition geahndet.",
  reward: "Erfüllung des Auftrags führt zur Tilgung von Strafregistern, Auszahlung von 500 Gold-Aquinaren und Rangerhöhung.",
  footer: "Dienen Sie der Ordnung. Die Ordnung schützt uns alle.",
  signoff: "Oberst Vorn",
  role: "Militär-Attaché der Eiserne Garde"
};

export const INTRO_TEXT = `Hört gut zu.

Draußen, jenseits dieser Mauern, fällt der Regen. Er fällt immer in Metropol.
Wir nennen ihn den 'Schwarzen Tau'. Er wäscht nichts sauber. Er hinterlässt nur einen Film aus Öl auf der Haut und den Geschmack von Rost auf der Zunge.

Willkommen im Aether-Dominion.

Um zu verstehen, warum wir hier sind, müsst ihr zurückblicken.
Vor 150 Jahren schrie diese Welt. Im Krieg der Magier-Nationen wurde die Haut der Realität verbrannt, bis nur noch Asche blieb.

Dann kam die Stille.
Nicht durch Gebete, sondern durch den Omega-Siphon.
Kaelens Nadel. Der Anker der Eisernen Ordnung.

Man sagt, an jenem Tag hat er nicht nur den Krieg beendet. Er hat die Physik selbst in Ketten gelegt.
Vor dem Siphon waren Träume wild, ein Ozean aus unkontrolliertem Willen.
Doch die Maschine hat die Gezeiten gebrochen. Sie hat die Magie angesaugt, gewaschen und sterilisiert. Sie hat unsere Albträume befriedet, bis sie nur noch nützlicher Treibstoff waren.

Seitdem ist das Leben eine Gleichung. Bereinigt um das Chaos. Sicher. Still.
Zumindest glauben wir das.

Denn unsere Städte sind Inseln, umgeben von surrenden Thauma-Barrieren.
Draußen, im 'Totland', herrscht ein Darwinismus auf Steroiden. Die Natur dort hat uns nie verziehen. Das Ichor hat die Wälder in Bestien verwandelt, die Fleisch und Stahl gleichermaßen fressen. Wer die Barriere verlässt, wird Teil einer anderen Nahrungskette.

Und drinnen? Drinnen rattert die Maschine.
Unser Herzschlag ist der Takt der Kolben. Unser Blut ist Ichor – die schwarze, zähflüssige Macht, die wir aus den Tiefen der Erde pumpen. Es gibt uns Licht. Es wärmt uns. Und es fordert seinen Preis.

Seht nach oben.
Dort gibt es keinen blauen Himmel mehr. Dort hängt nur der Haze.
Der psychische Smog. Der Staub jener Träume, die der Siphon nicht fassen konnte. Atmet ihn zu tief ein, und ihr verliert mehr als nur eure Gesundheit. Ihr verliert den Verstand.

Aber das Dominion braucht euch nicht gesund. Es braucht euch funktionierend.

Ihr seid hier, nicht weil ihr Helden seid. Helden sterben dumm.
Ihr seid hier, weil ihr Fähigkeiten habt, die wir nicht verschwenden können.
Ihr seid Profis. Ihr seid Werkzeuge. Ihr seid Task Force Echo-4.

Euer Auftrag beginnt dort, wo die regulären Truppen versagen. Ihr geht dorthin, wo die Schatten länger sind als das Licht.
Ihr seid der Stahl, der verhindert, dass die Welt zerbricht.

Also frage ich euch...

Schaut auf eure Hände. Sind sie bereit, schmutzig zu werden?
Denn in Aether & Iron überlebt niemand mit einer reinen Weste.`;

export const KAELEN_CONTENT = {
  title: "BÜRGER-DOSSIER: DER LORD-PROTEKTOR",
  subtitle: "Sicherheitsstufe: Grün (Allgemeinwissen)",
  headerQuote: "Ein Vater fragt seine Kinder nicht, ob sie ins Bett wollen. Er schickt sie, damit sie sicher sind. Ich bin dieser Vater.",
  official: {
    title: "1. DAS OFFIZIELLE BILD (DIE DOKTRIN)",
    intro: "Für den Durchschnittsbürger ist Lord-Protektor Kaelen mehr als ein Herrscher. Er ist eine lebende Institution, der 'Eiserne Heilige', der das Dominion vor dem Untergang bewahrt.",
    sections: [
      {
        title: "Wer ist er?",
        text: "Kaelen van Aethelgard ist der Retter, der vor 150 Jahren das 'Zeitalter des Chaos' beendete. Er sitzt im Panoptikum in der Spitze der Nadel von Metropol."
      },
      {
        title: "Das Große Opfer",
        text: "Die Kirche der Trinität lehrt, dass Kaelen unendliche Qualen leidet, um uns zu beschützen.",
        points: [
          "Er ist physisch an den Siphon angeschlossen – die gigantische Maschine, die die magische Strahlung der Welt filtert.",
          "Er opfert seine Lebenskraft, um die wilde Magie zu reinigen, damit die Lampen brennen.",
          "Er schläft nie. Er wacht immer."
        ]
      },
      {
        title: "Sein Erscheinungsbild",
        text: "Niemand hat sein Gesicht seit Jahrzehnten gesehen. Auf Gemälden und Statuen trägt er immer die Weiße Maske – ein Symbol für seine Emotionslosigkeit und absolute Gerechtigkeit. Er ist kein Mensch mehr, er ist der Staat."
      }
    ]
  },
  rumors: {
    title: "2. DAS GEFLÜSTER (GERÜCHTE & VERSCHWÖRUNGEN)",
    quote: "Er blutet nicht. Maschinen bluten nicht. Sie rosten nur. — Unbekannter Docker, Sektor 4 (verhaftet)",
    intro: "Hinter vorgehaltener Hand erzählt man sich andere Geschichten.",
    items: [
      {
        title: "Gerücht A: Der Leichen-Thron",
        desc: "Viele glauben, dass Kaelen schon vor Jahren gestorben ist.",
        details: [
          "Theorie: Das Ministerium erhält nur seinen toten Körper am Leben. Der Siphon wird eigentlich von einem Rat aus Generälen gesteuert und Kaelen ist nicht mehr als eine Puppe.",
          "Indiz: Warum gibt es keine öffentlichen Auftritte mehr? Warum kommen seine Ansprachen nur noch über statische Lautsprecher?"
        ]
      },
      {
        title: "Gerücht B: Der Vampir",
        desc: "Die Magier im Untergrund flüstern, dass der Siphon nicht zum Filtern da ist.",
        details: [
          "Theorie: Kaelen ist ein uralter Hexenmeister, der nicht stirbt, weil er uns aussaugt. Er filtert die Magie nicht, um uns zu schützen. Er frisst sie, um sein unnatürlich langes Leben zu verlängern.",
          "Indiz: Elfen leben lange, aber Menschen werden keine 200 Jahre alt. Ichor allein erklärt das nicht."
        ]
      },
      {
        title: "Gerücht C: Das Panoptikum",
        desc: "Man sagt, Kaelen sieht wirklich alles.",
        details: [
          "Theorie: Seine Maske ist mit jedem Überwachungsauge in der Stadt verbunden. Wenn du in einer Gasse den Namen des Protektors fluchst, hört er es persönlich.",
          "Aberglaube: Viele Bürger drehen Bilder von Kaelen zur Wand, wenn sie über private Dinge sprechen, aus Angst, dass das Bild zuhört."
        ]
      }
    ]
  },
  magic: {
    title: "3. WAS DU ÜBER MAGIE WEISST (ALLTAGSWISSEN)",
    quote: "Magie ist wie Feuer. Im Ofen wärmt es das Haus. Im Wohnzimmer brennt es das Haus nieder. Kaelen ist der Ofen.",
    points: [
      { label: "Die Gefahr", text: "'Wilde' Magie (ungefiltert durch Kaelen) macht krank. Sie lockt Monster an oder verwandelt dich in eines (Haze)." },
      { label: "Der Schutz", text: "Wenn ein sanktionierter Kleriker oder ein Staats-Magier zaubert, leuchtet seine Magie meist blau oder golden (die Farben des Siphons). Das ist sicher." },
      { label: "Das Verbrechen", text: "Wenn jemand ohne Lizenz zaubert, flackert die Realität. Die Luft schmeckt nach Ozon und Blut. Das Ministerium spürt solche 'Risse' sofort." }
    ]
  },
  quotes: [
    "Freiheit ist die Illusion, dass es eine Wahl gibt zwischen Gehorsam und Chaos. Es gibt keine Wahl. Chaos ist der Tod.",
    "Ich trage die Maske nicht, um mich zu verstecken. Ich trage sie, damit ihr nicht seht, was die Verantwortung aus einem Menschen macht.",
    "Glaube nicht an Wunder. Glaube an Wartungsintervalle."
  ]
};

export const TRUTHS: LoreEntry[] = [
  {
    id: '1',
    title: 'Die Eiserne Ordnung',
    content: 'Vor 150 Jahren endete der große Krieg der Magier Nationen. Wir haben alle verloren. Der "Eiserne Souverän" hat den Kontinent unter einer Flagge vereint. Es gibt keine Kriege mehr, keinen Hunger und keine Arbeitslosigkeit. Der Preis dafür ist der freie Wille. Das Leben ist eine Gleichung, und du bist eine Variable. Abweichung ist Verrat.',
    category: 'POLITIK'
  },
  {
    id: '2',
    title: 'Das Blut der Erde (Ichor & Thaumatech)',
    content: 'Unsere industrielle Revolution wird nicht durch Dampf, sondern durch "Ichor" angetrieben. Es ist eine zähflüssige Substanz, die wir aus kilometertiefen Schächten pumpen. Die Wissenschaft sagt, es ist geologische Energie. Wir nennen die Technik die es antreibt "Thaumatech". Es ist mächtig, giftig und lebendig.',
    category: 'TECHNIK'
  },
  {
    id: '3',
    title: 'Der Haze (Der psychische Smog)',
    content: 'Über unseren Metropolen hängt kein normaler Rauch. Der "Haze" ist das Abfallprodukt verbrannten Ichors. Er ist giftig für die Lunge, aber schlimmer für den Verstand. Wer zu lange im Haze lebt ohne Schutzmaske, hört Stimmen und Mutationen sind möglich.',
    category: 'UMWELT'
  },
  {
    id: '4',
    title: 'Die Stille der Götter',
    content: 'Als der Eiserne Souverän den Thron bestieg, verstummten die Tempel. Der Staat erlaubt nur die Verehrung der "Trinität": Axiom (Gesetz), Ferrus (Maschine) und Bellona (Krieg). Die alten Götter sind verboten und werden nur im Untergrund angebetet.',
    category: 'RELIGION'
  },
  {
    id: '5',
    title: 'Task Force Echo-4',
    content: 'In dieser Welt ist das Abenteurer-Dasein illegal. Ihr seid keine Helden, ihr seid Profis. Ihr gehört zur "Task Force Echo-4", einer Spezialeinheit für asymmetrische Bedrohungen. Ihr werdet gerufen, wenn das Militär zu plump ist. Ihr seid "deniable assets".',
    category: 'MISSION'
  },
  {
    id: '6',
    title: 'Die Wildnis lebt (und hasst uns)',
    content: 'Die Städte sind sicher, solange die Thauma-Barrieren surren. Draußen, im "Totland", herrscht Darwinismus auf Steroiden. Durch die Verseuchung mit Ichor sind Tiere und Pflanzen zu grotesken Raubtieren mutiert.',
    category: 'GEFAHR'
  }
];

export const FACTIONS: Faction[] = [
  {
    id: 'guild',
    name: 'Die Aether-Gilde',
    type: 'Elite & Forschung',
    description: 'Monopolisten der Energie. Arrogant, reich und die einzigen, die Thaumatech wirklich verstehen, ohne sofort wahnsinnig zu werden.',
    colors: 'border-cyan-500 bg-slate-900'
  },
  {
    id: 'guard',
    name: 'Die Eisen-Garde',
    type: 'Gesetz & Militär',
    description: 'Der Hammer des Souveräns. Sie tragen schwere Rüstungen, Gasmasken und stellen keine Fragen. Ordnung um jeden Preis.',
    colors: 'border-slate-400 bg-slate-900'
  },
  {
    id: 'cartels',
    name: 'Die Gossen-Kartelle',
    type: 'Unterwelt & Handel',
    description: 'Herrscher der Schattenökonomie. Wenn du illegale Filter, Nahrung oder Waffen brauchst, gehst du zu ihnen.',
    colors: 'border-green-600 bg-slate-900'
  }
];

export const SPECIES: SpeciesEntry[] = [
  { 
    id: 'human', 
    name: 'Menschen', 
    title: 'Die Bürger des Dominions',
    srdStats: 'Human (Standard)',
    description: 'Die dominierende Masse. Sie sind Arbeiter, Soldaten und Bürokraten. Die meisten haben nie etwas anderes als den Rauch der Städte gesehen.' 
  },
  { 
    id: 'dwarf', 
    name: 'Zwerge', 
    title: 'Die Tiefen-Gräber (Deep Drillers)',
    srdStats: 'Dwarf (Mountain/Hill)',
    description: 'Sie leben nicht in gemütlichen Hallen, sondern in klaustrophobischen Industriestollen nahe dem Erdkern. Sie sind blass, tragen oft Schutzbrillen wegen der Lichtempfindlichkeit und sind Experten für Ichor-Abbau. Viele leiden an "Tiefen-Zittern" (einer leichten Ichor-Vergiftung).',
    variants: [
        { name: 'Kultur', desc: 'Sie beten oft zu Ferrus (Gott der Maschine/Schmiedekunst) als ihren Beschützer.' }
    ]
  },
  { 
    id: 'elf', 
    name: 'Elfen', 
    title: 'Die Aether-Aristokratie & Wächter',
    srdStats: 'Elf (High/Wood/Drow)',
    description: 'In "Aether & Iron" sind Elfen keine Waldbewohner, sondern extrem angepasste Spezialisten.',
    variants: [
        { name: 'High Elf (Die Aether-Aristokratie)', desc: 'Sie leben in der "Spire" – den goldenen Nadelspitzen der Hauptstadt, die hoch über dem Smog (Haze) aufragen. Dank reinem, destilliertem Ichor leben sie fast ewig. Sie sind die Architekten des Siphons und die bürokratische Elite. Arrogant, schön, unnahbar.' },
        { name: 'Wood Elf (Die Öko-Guerilla)', desc: 'Sie leben in den mutierten Wäldern außerhalb der Barrieren. Sie haben sich an die Toxizität angepasst (tragen oft Filtermasken aus Knochen) und führen einen Guerillakrieg gegen die Züge des Dominions, um die Natur zu rächen.' },
        { name: 'Drow (Wächter der Tiefe)', desc: 'Sie leben im "Underdark" – den tiefsten Höhlen. Ein Volk von paranoiden Wächtern gegen die "Namenlose Furcht". Ihre Kultur basiert auf absoluter Stille. Lärm bringt den Tod.' }
    ]
  },
  { 
    id: 'halfling', 
    name: 'Halblinge', 
    title: 'Die Gossen-Läufer',
    srdStats: 'Halfling (Lightfoot/Stout)',
    description: 'Die Unterschicht der Slums. Sie passen perfekt in Wartungsschächte, wo Menschen stecken bleiben. Sie sind die besten Schmuggler und Diebe (Rat-Catchers), weil niemand sie beachtet. Oft schmutzig, pragmatisch und "street smart".' 
  },
  { 
    id: 'gnome', 
    name: 'Gnome', 
    title: 'Die Tinker & Ingenieure',
    srdStats: 'Gnome (Rock/Forest)',
    description: 'Die innovativen Geister dieser Welt. Der klassische Rock Gnome ist hier ein Thaumatech-Mechaniker. Ihr "Tinker Device" ist kein Spielzeug, sondern ein nützliches Gadget (Feuerzeug, Geigerzähler für Ichor).' 
  },
  { 
    id: 'tiefling', 
    name: 'Tieflinge', 
    title: 'Die Haze-Born (Die Gezeichneten)',
    srdStats: 'Tiefling',
    description: 'Keine Dämonen-Abkömmlinge, sondern Kinder, die zu nahe an Ichor-Raffinerien geboren wurden oder deren Eltern dem Haze ausgesetzt waren. Ihre Hörner sind Tumore oder Knochenwucherungen, ihre Haut hat die Farbe von Öl, Asche oder Chemikalien. Sie werden diskriminiert, gelten aber als magisch begabt.' 
  },
  { 
    id: 'dragonborn', 
    name: 'Drachenblütige', 
    title: 'Die Vat-Grown Soldiers',
    srdStats: 'Dragonborn',
    description: 'Keine stolze Rasse, sondern genetisch gezüchtete Supersoldaten aus den Laboren des Ministeriums (Projekt "Draco"). Ihre "Odem-Waffe" ist eine biologische Waffe (Säure-Spucke, napalm-artiges Feuer), die ihnen angezüchtet wurde. Viele dienen in der Eisernen Garde als Schocktruppen.' 
  }
];

export const CLASSES: ClassEntry[] = [
    {
        id: 'barbarian',
        name: 'Barbar',
        title: 'Der Chem-Warrior',
        role: 'Tank / Schläger',
        flavor: 'Du bist nicht einfach nur wütend. Deine Rage ist eine Reaktion auf experimentelle Kampfdrogen (Stimulanzien) oder eine Mutation durch den Haze. Wenn du wütest, schwellen deine Adern schwarz an, und du spürst keinen Schmerz.',
        subinfo: 'Subclass Tipp: Berserker (Der Drogen-Junkie/Mutant, der im Rausch unaufhaltsam ist).'
    },
    {
        id: 'bard',
        name: 'Barde',
        title: 'Der Resonanz-Weber (Echo Weaver)',
        role: 'Support / Face',
        flavor: 'In einer Welt, wo "Lärm" gefährlich sein kann (denn er lockt Dinge aus dem Haze an), ist die Kontrolle über den Schall Macht. Du bist kein Minne-Sänger. Du verstehst die Frequenzen der Welt. Du nutzt Töne, um den Haze zu manipulieren. Instrument: Eine seltsame Flöte aus Kristall, ein Thauma-Verstärker oder einfach deine Stimme.'
    },
    {
        id: 'cleric',
        name: 'Kleriker',
        title: 'Der Diener der Mächte',
        role: 'Heiler / Divine Caster',
        flavor: 'Deine Macht hängt davon ab, wem du dienst.',
        options: [
            { label: 'Option A: Der Staats-Kleriker (Sanktioniert)', text: 'Du dienst der Trinität (Axiom, Ferrus, Bellona). Deine Magie kommt offiziell durch den Siphon von Kaelen. Du bist Feldarzt oder spiritueller Kommissar. (Domains: Order, War, Life).' },
            { label: 'Option B: Der Schatten-Priester (Verboten)', text: 'Du betest zu den alten, toten Göttern (Natur, Licht, Trickery). Deine Magie ist illegal und gefährlich, weil sie Kaelens Filter umgeht. Du musst deine heiligen Symbole verstecken.' }
        ]
    },
    {
        id: 'druid',
        name: 'Druide',
        title: 'Der Öko-Terrorist / Wächter',
        role: 'Controller / Shifter',
        flavor: 'Die Natur ist nicht "nett", sie wehrt sich. Du bist ein radikaler Bewahrer der alten Welt oder ein Öko-Terrorist, der die Fabriken hasst. Deine Wild Shape Verwandlung sieht oft schmerzhaft oder mutiert aus (Knacken von Knochen, wucherndes Fell). Ziel: Du nutzt die mutierte Natur (Ranken, Sporen), um die Maschinen des Dominions zu zerstören.'
    },
    {
        id: 'fighter',
        name: 'Kämpfer',
        title: 'Der Soldat / Söldner',
        role: 'Waffen-Experte',
        flavor: 'Der Profi. Du verlässt dich auf Stahl, Schusswaffen und mit entsprechenden Ressourcen auf die beste Thaumatech, nicht auf Magie.'
    },
    {
        id: 'monk',
        name: 'Mönch',
        title: 'Der Pneuma-Adept',
        role: 'Skirmisher',
        flavor: 'Dein Körper ist eine Waffe. Dein "Ki" ist die Kontrolle über deine eigene Bio-Elektrizität oder der Dampfdruck in hydraulischen Handschuhen (bei Warforged/Cyborgs). Du kämpfst dort, wo Waffen verboten sind.'
    },
    {
        id: 'paladin',
        name: 'Paladin',
        title: 'Der Eid-Träger',
        role: 'Tank / Smite-Damage',
        flavor: 'Dein Eid ist Gesetz oder uralte Pflicht.',
        options: [
            { label: 'Option A: Der Enforcer (Staats-Paladin)', text: 'Dein Eid gilt dem Gesetz und dem Souverän. Du bist die Polizei. Dein Smite ist der "Schock-Schlagstock" oder sanktionierte Energie.' },
            { label: 'Option B: Der Wächter (Geheim/Drow)', text: 'Dein Eid ist uralt (z.B. Oath of the Watchers). Du hast geschworen, die "Stille" zu bewahren und jene zu jagen, die das Gleichgewicht der Tiefe stören. Du bist ein Monsterjäger aus Notwendigkeit.' }
        ]
    },
    {
        id: 'ranger',
        name: 'Waldläufer',
        title: 'Der Haze-Walker (Stalker)',
        role: 'Scout / Hunter',
        flavor: 'Ein Kopfgeldjäger oder Scout, der im verstrahlten Ödland (dem "Totland") überlebt. Er trägt Gasmaske, Geigerzähler und nutzt Fallen. Sein "Favored Enemy" sind Mutanten oder Deserteure.'
    },
    {
        id: 'rogue',
        name: 'Schurke',
        title: 'Der Spezialist',
        role: 'Skill-Monkey / DPS',
        flavor: 'Industriespionage, Attentäter, Saboteur oder Gassenjunge. Wenn du "Fast Hands" (Thief) nutzt, hantiert du vielleicht mit Dietrichen oder kleinen Gadgets. Als Assassin bist du ein Cleaner des Staates (oder der Unterwelt).'
    },
    {
        id: 'warlock',
        name: 'Hexenmeister',
        title: 'Der Paktierer',
        role: 'Blaster / Face',
        flavor: 'Du beziehst deine Magie nicht aus dem Siphon, sondern von "Außen".',
        options: [
            { label: 'Great Old One', text: 'Die Stimme im Dunkeln/Rauschen des Haze. Das Unterbewusstsein der Welt.' },
            { label: 'Fiend', text: 'Industrie-Dämonen. Ein Geist des Feuers, Rauchs oder Stahls (z.B. "Der Herr des Hochofens").' },
            { label: 'Hexblade', text: 'Du hast eine Waffe gefunden, die ein Eigenleben hat (vielleicht aus Ichor geschmiedet).' }
        ]
    },
    {
        id: 'wizard',
        name: 'Magier',
        title: 'Der Arkane Gelehrte',
        role: 'Utility / Ritual Caster',
        flavor: 'Du bist kein Ingenieur, du bist ein Mathematiker der Realität. Du verstehst den "Code" der Magie. Du bist derjenige, der den Siphon und die "Kaelen-Skala" am besten versteht. Dein Zauberbuch ist voll mit komplexen Formeln, um den Filter des Souveräns zu nutzen (oder sicher zu umgehen).'
    },
    {
        id: 'sorcerer',
        name: 'Zauberer',
        title: 'Der Aether-Conduit (Kanal)',
        role: 'Blaster',
        flavor: 'Du bist ein lebender Riss im System. Kaelen versucht, die Magie zu filtern, aber in dir fließt sie ungefiltert. Origin: Vielleicht hat deine Mutter verseuchtes Wasser getrunken (Ichor-Touched). Magie ist für dich nicht Studium, sondern ein physischer Drang, wie Erbrechen oder Schreien. Gefährlich und mächtig.'
    }
];

export const EQUIPMENT_VISUALS: EquipmentEntry = {
    category: "Waffen & Rüstung (Visuals)",
    items: [
        { original: "Lederrüstung", reskin: "Schwerer Arbeitsmantel, verstärkte Weste." },
        { original: "Plattenrüstung", reskin: "Schwere 'Riot Gear' der Enforcer oder antike, dampfbetriebene Servo-Rüstung (ohne mechanische Vorteile, nur Optik)." },
        { original: "Armbrust (Leicht/Schwer)", reskin: "Revolver / Muskete / Bolzenschussgerät. (Mechanisch: Laden, Fernkampf, Schaden bleibt gleich)." },
        { original: "Langschwert", reskin: "Machete, Offizierssäbel." },
        { original: "Kriegshammer", reskin: "Großer Rohrschlüssel, Vorschlaghammer." },
        { original: "Schild", reskin: "Polizei-Schild, ein Stück Schott-Tür." }
    ]
};

export const ALMANACH_CONTENT: AlmanachSection[] = [
  {
    title: "1. Die Realität",
    subtitle: "Atmosphäre & Leben",
    quote: { text: "Wenn du denkst, der Regen wäscht dich sauber, warst du noch nie in Sektor 4. Hier wäscht der Regen nur die Hoffnung weg. Er hinterlässt Öl auf der Haut und Rost in der Seele.", author: "Unbekannter Bettler, District 9" },
    intro: "Vergiss grüne Wiesen und strahlende Helden. Diese Welt ist eine Maschine, und wir sind das Schmiermittel.",
    subsections: [
      {
        title: "Das Stadtbild: Metropol",
        text: "Eine Stadt, die nicht in die Breite, sondern in die Höhe gewachsen ist. Ein vertikaler Albtraum aus schwarzem Basalt, Messing und neon-leuchtendem Ichor-Glas.",
        list: [
          { label: "Der Himmel", content: "Tagsüber ein schmutziges Grau. Nachts leuchtet der 'Haze' (der magische Smog) in giftigen Farben. Es regnet fast immer – ein saurer, öliger Nieselregen, der 'Schwarzer Tau' genannt wird." },
          { label: "Der Geruch", content: "'Atme nicht zu tief. Die Stadt schmeckt nach Eisen und alten Sünden.' Die Luft ist schwer und metallisch. Über allem liegt der beißende Geruch von Ozon (Magie), verbrannter Kohle und nassem Stein." },
          { label: "Die Geräuschkulisse", content: "Die Stadt atmet. Das tiefe Wummern der Ichor-Pumpen ist so allgegenwärtig, dass man es nur bemerkt, wenn es aufhört. Dann herrscht Panik. Dazu das Kreischen der Hochbahnen, die wie stählerne Würmer durch die Nacht brechen, und die statischen Durchsagen des Ministeriums." }
        ]
      }
    ]
  },
  {
    title: "2. Die Eiserne Hierarchie",
    subtitle: "Gesellschaft",
    quote: { text: "Du bist, was du leistest. Wenn du nichts leistest, bist du Kompost für die Pilzgärten.", author: "Aufseher Krell, Schichtleiter" },
    intro: "Dein Wert bemisst sich nach deinem Nutzen für die Gleichung.",
    subsections: [
      {
        list: [
          { label: "Klasse 1: Die Architekten (Die Spire)", content: "'Gold oben, Scheiße unten. Die Schwerkraft funktioniert.' — Sprichwort der Kanalarbeiter. Elfen, Erzmagier, Hohe Generäle. Sie leben in den goldenen Spitzen der Türme, über dem Smog. Sie haben Sonnenlicht, echte Pflanzen und verlängertes Leben durch reines Ichor. Für sie ist das Dominion ein Paradies." },
          { label: "Klasse 2: Die Spezialisten (Der obere Kessel)", content: "Ingenieure, Offiziere, lizenzierte Kleriker. Sie haben sauberes Wasser und Fenster. Sie sind das Rückgrat der Verwaltung und glauben fest an das System." },
          { label: "Klasse 3: Die Arbeiter (Der Kessel)", content: "Die Masse. Fabrikarbeiter, Soldaten, Minencrew. Sie leben in Kasernen-Blöcken. Ihr Leben ist Arbeit, Schlaf und Rationierung. 'Ein voller Bauch macht faul.'" },
          { label: "Klasse 4: Die Entbehrlichen (District 9 / Slums)", content: "Mutanten, Tieflinge, Kriminelle, Arbeitslose. Sie sind kein Teil der Gleichung. Sie sind Abfall. Hier gilt kein Gesetz außer dem des Stärkeren." }
        ]
      }
    ]
  },
  {
    title: "3. Die Mächte",
    subtitle: "Fraktionen & Personen",
    quote: { text: "Vertraue niemandem, der eine Maske trägt. Und vertraue erst recht niemandem, der keine trägt – denn der lügt dir direkt ins Gesicht.", author: "Silas 'Rostfinger', Schrott-Baron" },
    subsections: [
      {
        title: "DAS MINISTERIUM (Die Staatsgewalt)",
        text: "Kaelens verlängerter Arm. Sie halten die Ordnung aufrecht – brutal und effizient.",
        list: [
          { label: "Lord-Protektor Kaelen", content: "Der unsterbliche Herrscher auf dem Thron. Gerüchten zufolge hat er sein Gesicht geopfert, um sich direkt an das Überwachungsnetz anzuschließen." },
          { label: "Marschall Ironwood (Ministerium des Stahls)", content: "Ein Hüne in dampfender Servorüstung. Er kontrolliert die Eiserne Garde (die gesichtslose Polizei) und die Arbeitslager. Sein Motto: 'Schmerz ist Disziplin.'" },
          { label: "Groß-Inquisitorin Vespera (Ministerium der Wahrheit)", content: "Sie jagt 'wilde Magier' und Ketzer. Ihre Agenten tragen spiegelnde Masken. Sie kontrolliert, was du denkst und was in der Zeitung steht." }
        ]
      },
      {
        title: "DIE AETHER-GILDE (Die Technokraten)",
        text: "Ein Bund aus Wissenschaftlern, die das Monopol auf Thaumatech haben.",
        list: [
          { label: "Anführer", content: "Arch-Mechanist Zylas. Ein Genie, das Moral für eine ineffiziente Schwäche hält." },
          { label: "Agenda", content: "Fortschritt um jeden Preis. Sie sehen Ethik als Hindernis. Sie hassen die Inquisition, weil diese 'wertvolle Subjekte' (Magier) verbrennt, anstatt sie zu sezieren." }
        ]
      },
      {
        title: "DIE SCHROTT-BARONE (Die Unterwelt)",
        text: "In den Slums und im Niemandsland regieren Warlords, die den Schwarzmarkt kontrollieren.",
        list: [
          { label: "Geschäft", content: "Drogen (Haze-Dust), Ichor ohne Lizenz, Waffen ohne Seriennummer." },
          { label: "Vibe", content: "Peaky Blinders trifft Mad Max. Jeder trägt eine Waffe, und niemand stellt Fragen." },
          { label: "Währung", content: "Gefallen und 'Reines' (ungefiltertes Ichor)." }
        ]
      },
      {
        title: "DIE LATERNEN-TRÄGER (Der Widerstand)",
        text: "Offiziell Terroristen. Inoffiziell Träumer.",
        list: [
          { label: "Symbole", content: "Eine brennende Laterne oder ein Motten-Symbol." },
          { label: "Agenda", content: "Sie wollen die Wahrheit über den Siphon enthüllen und die alten Götter zurückbringen. Manche sind Idealisten, andere sind gefährliche Anarchisten, die die Schutzschilde sabotieren würden, nur um Kaelen zu schaden." }
        ]
      }
    ]
  },
  {
    title: "4. Die Technologie des Lebens",
    subtitle: "Ichor & Thaumatech",
    quote: { text: "Es ist kein Öl, Junge. Es ist flüssiger Ehrgeiz. Und er brennt heißer als jede Hölle, von der die Priester predigen.", author: "Vorarbeiter Jenson, Tiefbohrung 4" },
    intro: "Es gibt keinen Schießpulver und keinen Dampf (im klassischen Sinne). Alles läuft mit Ichor.",
    subsections: [
      {
        title: "Der Brennstoff",
        list: [
          { label: "Ichor", content: "Eine schwarze, zähflüssige Substanz aus der Tiefe. Sie leuchtet, wenn sie verarbeitet wird." },
          { label: "Ichor-Zellen", content: "Leuchtende Batterien. Wenn sie leer sind, werden sie schwarz und spröde wie Glas." },
          { label: "Thaumatech", content: "Die Verbindung von Maschine und Magie. Ein 'Gewehr' (Ichor-Lanze) nutzt magnetische Spulen, um ein Projektil zu feuern." },
          { label: "Prothesen", content: "Wer einen Arm in der Presse verliert, kriegt einen aus Messing und Kolben – wenn er es sich leisten kann." }
        ]
      },
      {
        title: "Der Omega-Siphon",
        text: "Der riesige Turm in der Mitte von Metropol. Er reicht bis in die Stratosphäre.",
        list: [
          { label: "Offizielles Wissen", content: "'Der Siphon ist der Damm, der die Flut hält.' Vor Kaelen war Magie wildes Chaos. Der Siphon saugt diese Energie aus der Atmosphäre, filtert sie und leitet sie als 'sicheren Strom' in die Städte." },
          { label: "Konsequenz", content: "Ohne den Siphon würde die wilde Magie uns alle wahnsinnig machen. Kaelen ist der Einzige, der den Filter bedienen kann. Fällt er, fällt der Himmel." }
        ]
      }
    ]
  },
  {
    title: "5. Die Orte",
    subtitle: "Wo wir leben",
    quote: { text: "Geh nicht ins Totland. Selbst der Wind hat dort Zähne.", author: "Warnschild an Sektor-Tor 12" },
    subsections: [
      {
        title: "METROPOL: Die Eiserne Hauptstadt",
        text: "Das Herz des Imperiums. Hier schlägt der Puls der Welt, und hier wird er erstickt.",
        list: [
          { label: "Die Spire (Oben)", content: "Goldene Kuppeln, Luftschiffe, Stille." },
          { label: "Der Kessel (Mitte)", content: "Fabriken, Dampf, Lärm." },
          { label: "District 9 (Unten)", content: "'Wo die Ratten größer sind als die Hunde.' Ein Labyrinth aus eingestürzten Schächten." }
        ]
      },
      {
        title: "IRONHOLD: Die Grenzfestung",
        text: "Am Rand des bekannten Territoriums. Hier enden die Schienen und das Gesetz wird dünn.",
        list: [
          { label: "Vibe", content: "Wilder Westen trifft industrielle Hölle. Schlamm, Söldner, Saloons mit billigem Fusel. Jeder trägt eine Waffe, und niemand stellt Fragen." },
          { label: "Funktion", content: "Startpunkt der 'Tiefen-Züge', die wie gepanzerte Ungetüme in das Totland fahren, um Ressourcen zu bergen – und manchmal leer zurückkommen." }
        ]
      },
      {
        title: "DAS TOTLAND (The Wastes)",
        text: "Alles außerhalb der Barrieren. Ein mutierter Albtraum. Wälder, die Fleisch fressen. Stürme aus Asche, die Haut wie Schmirgelpapier abreiben. Alte Ruinen aus der Zeit vor dem Krieg, in denen Geister (oder Schlimmeres) hausen."
      }
    ]
  },
  {
    title: "6. Gesetze & Strafen",
    subtitle: "Codex Silentium",
    quote: { text: "Ein Gedanke ist wie ein Funke. In einer Welt aus Öl ist ein Funke ein Verbrechen.", author: "Auszug aus dem 'Codex Silentium'" },
    subsections: [
      {
        list: [
          { label: "1. Der Asche-Erlass", content: "Magie ohne Lizenz ist ein Kapitalverbrechen. Strafe: Zwangsdienst in den Ichor-Minen (Todesurteil auf Raten) oder 'Läuterung' (magische Lobotomie)." },
          { label: "2. Sperrzonen", content: "Das Betreten der Wildnis (Totland) oder der unteren Ebenen des Siphons ist Hochverrat. Grund: 'Seuchengefahr'." },
          { label: "3. Die Stille", content: "Öffentliche Panikmache, Aufwiegelung oder das Verbreiten von 'Alpträumen' (Kunst/Musik, die zu emotional ist) wird bestraft. 'Ruhe bewahren. Lärm lockt den Haze an.'" }
        ]
      }
    ]
  },
  {
    title: "Dein Status als Spieler",
    subtitle: "Troubleshooters",
    intro: "Ihr seid keine Helden, die in Tavernen auf Quests warten. Ihr seid 'Troubleshooter'.",
    subsections: [
      {
        list: [
          { label: "Rolle", content: "Ihr seid die, die man ruft, wenn ein Ichor-Leck mutierte Ratten erzeugt hat." },
          { label: "Aufgabe", content: "Ihr seid die, die Schmuggelware aus dem Totland bergen." },
          { label: "Status", content: "Ihr seid entbehrlich. Eure Ausrüstung ist alt, eure Moral ist grau, aber ihr habt einander." }
        ]
      },
      {
        text: "Wir spielen 'Survival Horror'. Munition ist knapp. Magie ist gefährlich. Vertrauen ist die härteste Währung."
      }
    ]
  }
];

export const TRINITY_GODS: GodEntry[] = [
    {
        id: 'ferrus',
        name: 'FERRUS, DER SCHMIED',
        title: 'Der Eiserne Vater',
        aspects: 'Industrie, Handwerk, Stärke.',
        symbol: 'Ein Hammer umschlossen von einem Zahnrad.',
        dogma: '"Fleisch ist schwach, Stahl ist ewig."',
        description: 'Ferrus ist der Gott, der die Maschinen am Laufen hält. Man betet zu ihm, damit der Kessel nicht explodiert und die Quote erfüllt wird. Er lehrt, dass Arbeit die höchste Form des Gebets ist. Faulheit ist eine Sünde gegen Ferrus.',
        followers: 'Zwerge, Fabrikarbeiter, Artificer, Schmiede.'
    },
    {
        id: 'axiom',
        name: 'AXIOM, DER RICHTER',
        title: 'Das Blinde Auge',
        aspects: 'Gesetz, Ordnung, Wahrheit.',
        symbol: 'Eine Waage, die absolut stillsteht (perfektes Gleichgewicht).',
        dogma: '"Ordnung ist das Fundament der Existenz. Abweichung ist der Riss im Damm."',
        description: 'Axiom wacht über die Verträge und Gesetze. Man betet zu ihm, um Streit zu schlichten oder Schutz vor Kriminalität zu erbitten. Aber man fürchtet ihn auch, denn Axiom kennt keine Gnade, nur Konsequenzen.',
        followers: 'Richter, Inquisitoren, Bürokraten, Taktiker.'
    },
    {
        id: 'bellona',
        name: 'BELLONA, DIE MAID',
        title: 'Die Eiserne Heilige',
        aspects: 'Krieg, Schutz, Loyalität.',
        symbol: 'Ein Schild mit Dornen oder ein Schwert, das nach unten zeigt.',
        dogma: '"Wir bluten, damit die Welt leben kann."',
        description: 'Sie ist die Schutzpatronin der Soldaten und Wächter. Man betet zu ihr, wenn die Monster aus dem Nebel kommen oder wenn ein Sohn in den Krieg zieht. Sie ist streng, aber sie ist die Einzige der Trinität, der man Mitleid zuschreibt – Mitleid durch den schnellen Tod der Feinde.',
        followers: 'Soldaten, Paladine (Enforcer), Mütter, Wächter.'
    }
];

export const FORBIDDEN_GODS: GodEntry[] = [
    {
        id: 'sola',
        name: 'SOLA, DIE LEUCHTE',
        title: 'Das Verblassende Licht',
        aspects: 'Licht, Heilung, Hoffnung.',
        symbol: 'Eine fast heruntergebrannte Kerze oder eine Sonnenfinsternis.',
        dogma: 'Glaube an das Licht, auch wenn es brennt.',
        description: 'Im Geheimen beten Heiler und die Armen zu ihr. Sie glauben, dass sie die Einzige ist, die den Haze wirklich vertreiben kann.',
        followers: 'Kleriker des Lebens, Rebellen, Drow (die das Licht paradoxerweise suchen).',
        forbidden: true,
        reasonForbidden: 'Der Staat lehrt, dass Solas Licht "falsche Hoffnung" verbreitet und die Menschen unzufrieden mit ihrem Platz im Getriebe macht. Zudem zieht helles Licht in der Wildnis Monster an.'
    },
    {
        id: 'green_father',
        name: 'DER GRÜNE VATER',
        title: 'Der Wuchernde König',
        aspects: 'Natur, Überleben, der Kreislauf.',
        symbol: 'Ein Hirschschädel, aus dessen Augenhöhlen Pilze oder Wurzeln wachsen.',
        dogma: 'Die Maschine rostet, die Wurzel bleibt.',
        description: 'Der Grüne Vater steht für das unkontrollierte Wachstum, das Mauern sprengt und Maschinen rosten lässt. Er ist der Feind der Zivilisation.',
        followers: 'Öko-Terroristen, Ausgestoßene, Druiden.',
        forbidden: true,
        reasonForbidden: 'In dieser Welt ist die Natur nicht friedlich – sie ist toxisch und mutiert.'
    },
    {
        id: 'weaver',
        name: 'DIE WEBERIN',
        title: 'Lady Luck',
        aspects: 'Glück, Zufall, Schicksal, Diebe.',
        symbol: 'Drei gezinkte Würfel oder eine Spinne mit dem Gesicht einer lachenden Frau.',
        dogma: 'Es gibt keinen Plan.',
        description: 'Glücksspieler, Diebe, Schmuggler und alle, die sich nicht an Regeln halten wollen. Man flüstert ihren Namen, bevor man einen riskanten Sprung wagt.',
        followers: 'Schurken, Barden, Hexenmeister, Freidenker.',
        forbidden: true,
        reasonForbidden: 'Für das Dominion ist "Zufall" ein mathematischer Fehler. Glück gibt es nicht, nur Planung. Die Weberin wird als Agentin des Chaos gejagt, die Pläne sabotiert.'
    }
];

export const FAITH_PRACTICES: FaithPracticeEntry[] = [
    {
        title: 'Der Loyalist (Sanktioniert)',
        desc: 'Du trägst dein Heiliges Symbol (Zahnrad, Waage, Schild) offen. Du bist Teil der Hierarchie. Deine Gebete klingen wie Befehle oder technische Protokolle. Du glaubst, dass du die Welt vor dem Chaos bewahrst.',
        magicFlavor: 'Deine Zauber wirken sauber, geometrisch und industriell (goldenes Licht, Zahnrad-Schilde).'
    },
    {
        title: 'Der Ketzer (Wild)',
        desc: 'Du versteckst dein Symbol (Kerze, Schädel, Würfel) in einem falschen Stiefelabsatz oder unter der Rüstung. Deine Gottesdienste sind konspirative Treffen in Kellern. Du glaubst, dass das Dominion die Seele der Welt tötet.',
        magicFlavor: 'Deine Zauber wirken organisch, wild und unberechenbar (flackerndes Feuer, Wurzeln, Schatten).'
    }
];

export const HAZE_LEVELS = [
  { level: 1, state: 'Zittern', effect: 'Nachteil auf Initiative & Perception. (Du bist nervös).' },
  { level: 2, state: 'Isolation', effect: 'Du kannst nicht von der Help Action, Flanking oder Inspiration profitieren. (Du traust niemandem).' },
  { level: 3, state: 'Lücke', effect: 'Du verlierst deine Reaction. (Kein Shield, kein Opportunity Attack).' },
  { level: 4, state: 'Riss', effect: 'Anfälligkeit (Vulnerability) für Psychic Dmg. Nachteil auf Mental-Saves (WIS/INT/CHA).' },
  { level: 5, state: 'Bruch', effect: 'Du erhältst eine permanente Mutation. Reset auf Level 3.' },
];

export const HAZE_RULES = {
  increase: [
    'Kritischer Treffer durch ein Monster mit "Ichor"-Tag.',
    'Fehlschlag beim Zaubern von "Gezeichneter Magie".',
    'Kontakt mit rohem Ichor oder Fallen auf 0 HP in verseuchter Zone.',
    'Freiwillige Nutzung von Aether-Burn.'
  ],
  decrease: [
    'Lange Rast an einem sicheren Ort (Sektor 1-3) = -1 Level.',
    'Zauber: Lesser Restoration (-1 Level), Greater Restoration (Reset auf 0).'
  ]
};

export const MAGIC_PROTOCOLS = [
  {
    title: 'A. SANKTIONIERT',
    classes: 'Kleriker, Paladine, Staats-Magier',
    color: 'border-cyan-500 bg-cyan-950/20 text-cyan-400',
    icon: 'Shield',
    rules: [
      { label: 'Regel', text: 'Du wirkst alle Zaubergrade (1-9) sicher. Keine Checks.' },
      { label: 'Risiko', text: 'Wenn du den Staat verrätst, aktiviert Kaelen den Kill-Switch. Du verlierst alle Slots und regenerierst keine neuen, bis du Buße tust.' }
    ]
  },
  {
    title: 'B. WILD',
    classes: 'Druiden, Barden, Waldläufer, Freie Magier',
    color: 'border-amber-500 bg-amber-950/20 text-amber-500',
    icon: 'AlertTriangle',
    rules: [
      { label: 'Regel', text: 'Du musst den Siphon "hacken".' },
      { label: 'Grad 1-3', text: 'Sicher. (Unter dem Radar).' },
      { label: 'Grad 4', text: 'Warnung. Kaelen bemerkt dich. (Inquisition kommt später).' },
      { label: 'Grad 5', text: 'Widerstand. Mache einen Spellcasting Check DC 15 oder der Zauber verpufft.' },
      { label: 'Grad 6-8', text: 'Gefahr. Mache einen CON Save (DC 10+Grad). Fail = Zauber weg + Schaden. Success = Zauber klappt.' },
      { label: 'Grad 9', text: 'Tödlich. CON Save DC 25 oder 0 HP.' }
    ]
  },
  {
    title: 'C. GEZEICHNETE',
    classes: 'Hexenmeister & Zauberer',
    color: 'border-red-500 bg-red-950/20 text-red-500',
    icon: 'Skull',
    rules: [
      { label: 'Regel', text: 'Ihr ignoriert den Siphon (keine Checks), aber ihr zahlt mit eurem Körper.' },
      { label: 'Warlock', text: 'Sichere Zauber Pro Tag gleich des Charisma Modifikators, ansonsten CON Save (DC 10+Grad), Fail = Garantierter Schaden (Grad x 2) oder alternativ freiwillig +1 Haze statt CON Save.' },
      { label: 'Sorcerer', text: 'Zauber ab Grad 4, CON Save (DC 10+Grad), Fail = Garantierter Schaden (Grad x 2) oder alternativ freiwillig +1 Haze statt CON Save.' }
    ]
  }
];

export const HACKER_TECH = {
  title: 'HACKER-TECHNIK (FÜR ALLE)',
  tech: 'AETHER-BURN (High Risk / High Reward)',
  desc: 'Du kannst bei jedem Zauber (Grad 1+) ansagen, dass du ihn überlädst.',
  cost: 'Du nimmst sofort automatisch +1 Haze-Level und +1 Exhaustion',
  benefit: 'Der Zauber wird um 2 Grade höher gewirkt (Upcast), ohne einen höheren Slot zu verbrauchen und umgeht die obigen Beschränkungen.'
};

export const SAFETY_TOOLS = [
  { title: 'X-Card', desc: 'Jederzeit "Stop" sagen, ohne Erklärung.' },
  { title: 'Lines & Veils', desc: 'Grenzen werden vor dem Spiel definiert.' },
  { title: 'Open Door', desc: 'Jeder kann den Raum/Call verlassen, wenn es zu viel wird.' }
];