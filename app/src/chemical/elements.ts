export class Element {

    index: number;
    name: string;
    symbol: string;
    molarMass: number;

    constructor(
        index: number,
        name: string,
        symbol: string,
        molarMass: number
    ) {
        this.index = index;
        this.name = name;
        this.symbol = symbol;
        this.molarMass = molarMass;
    }

    static byIndex(i: number) : Element | undefined {
        return elements.filter(el => el.index === i)[0] || undefined;
    }

    static bySymbol(s: string) : Element | undefined {
        return elements.filter(el => el.symbol === s)[0] || undefined;
    }
}

const elements: Element[] = [
    //          Nr.     Name                Symbol  Mol. Mass
    new Element(1,      "Hydrogen",         "H",    1.008),
    new Element(2,      "Helium",           "He",   4.0026),
    new Element(3,      "Lithium",          "Li",   6.94),
    new Element(4,      "Beryllium",        "Be",   9.0122),
    new Element(5,      "Boron",            "B",    10.81),
    new Element(6,      "Carbon",           "C",    12.011),
    new Element(7,      "Nitrogen",         "N",    14.007),
    new Element(8,      "Oxygen",           "O",    15.999),
    new Element(9,      "Fluorine",         "F",    18.998),
    new Element(10,     "Neon",             "Ne",   20.180),
    new Element(11,     "Sodium",           "Na",   22.990),
    new Element(12,     "Magnesium",        "Mg",   24.305),
    new Element(13,     "Aluminum",         "Al",   26.982),
    new Element(14,     "Silicon",          "Si",   28.085),
    new Element(15,     "Phosphorus",       "P",    30.974),
    new Element(16,     "Sulfur",           "S",    32.06),
    new Element(17,     "Chlorine",         "Cl",   35.45),
    new Element(18,     "Argon",            "Ar",   39.948),
    new Element(19,     "Potassium",        "K",    39.098),
    new Element(20,     "Calcium",          "Ca",   40.078),
    new Element(21,     "Scandium",         "Sc",   44.956),
    new Element(22,     "Titanium",         "Ti",   47.867),
    new Element(23,     "Vanadium",         "V",    50.942),
    new Element(24,     "Chromium",         "Cr",   51.996),
    new Element(25,     "Manganese",        "Mn",   54.938),
    new Element(26,     "Iron",             "Fe",   55.845),
    new Element(27,     "Cobalt",           "Co",   58.933),
    new Element(28,     "Nickel",           "Ni",   58.693),
    new Element(29,     "Copper",           "Cu",   63.546),
    new Element(30,     "Zinc",             "Zn",   65.38),
    new Element(31,     "Gallium",          "Ga",   69.723),
    new Element(32,     "Germanium",        "Ge",   72.630),
    new Element(33,     "Arsenic",          "As",   74.922),
    new Element(34,     "Selenium",         "Se",   78.971),
    new Element(35,     "Bromine",          "Br",   79.904),
    new Element(36,     "Krypton",          "Kr",   83.798),
    new Element(37,     "Rubidium",         "Rb",   85.468),
    new Element(38,     "Strontium",        "Sr",   87.62),
    new Element(39,     "Yttrium",          "Y",    88.906),
    new Element(40,     "Zirconium",        "Zr",   91.224),
    new Element(41,     "Niobium",          "Nb",   92.906),
    new Element(42,     "Molybdenum",       "Mo",   95.95),
    new Element(43,     "Technetium",       "Tc",   undefined),
    new Element(44,     "Ruthenium",        "Ru",   101.07),
    new Element(45,     "Rhodium",          "Rh",   102.91),
    new Element(46,     "Palladium",        "Pd",   106.42),
    new Element(47,     "Silver",           "Ag",   107.87),
    new Element(48,     "Cadmium",          "Cd",   112.41),
    new Element(49,     "Indium",           "In",   114.82),
    new Element(50,     "Tin",              "Sn",   118.71),
    new Element(51,     "Antimony",         "Sb",   121.76),
    new Element(52,     "Tellurium",        "Te",   127.60),
    new Element(53,     "Iodine",           "I",    126.90),
    new Element(54,     "Xenon",            "Xe",   131.29),
    new Element(55,     "Cesium",           "Cs",   132.91),
    new Element(56,     "Barium",           "Ba",   137.33),
    new Element(57,     "Lanthanum",        "La",   138.91),
    new Element(58,     "Cerium",           "Ce",   140.12),
    new Element(59,     "Praseodymium",     "Pr",   140.91),
    new Element(60,     "Neodymium",        "Nd",   144.24),
    new Element(61,     "Promethium",       "Pm",   undefined),
    new Element(62,     "Samarium",         "Sm",   150.36),
    new Element(63,     "Europium",         "Eu",   151.96),
    new Element(64,     "Gadolinium",       "Gd",   157.25),
    new Element(65,     "Terbium",          "Tb",   158.93),
    new Element(66,     "Dysprosium",       "Dy",   162.50),
    new Element(67,     "Holmium",          "Ho",   164.93),
    new Element(68,     "Erbium",           "Er",   167.26),
    new Element(69,     "Thulium",          "Tm",   168.93),
    new Element(70,     "Ytterbium",        "Yb",   173.05),
    new Element(71,     "Lutetium",         "Lu",   174.97),
    new Element(72,     "Hafnium",          "Hf",   178.49),
    new Element(73,     "Tantalum",         "Ta",   180.95),
    new Element(74,     "Tungsten",         "W",    183.84),
    new Element(75,     "Rhenium",          "Re",   186.21),
    new Element(76,     "Osmium",           "Os",   190.23),
    new Element(77,     "Iridium",          "Ir",   192.22),
    new Element(78,     "Platinum",         "Pt",   195.08),
    new Element(79,     "Gold",             "Au",   196.97),
    new Element(80,     "Mercury",          "Hg",   200.59),
    new Element(81,     "Thallium",         "Tl",   204.38),
    new Element(82,     "Lead",             "Pb",   207.2),
    new Element(83,     "Bismuth",          "Bi",   208.98),
    new Element(84,     "Polonium",         "Po",   undefined),
    new Element(85,     "Astatine",         "At",   undefined),
    new Element(86,     "Radon",            "Rn",   undefined),
    new Element(87,     "Francium",         "Fr",   undefined),
    new Element(88,     "Radium",           "Ra",   undefined),
    new Element(89,     "Actinium",         "Ac",   undefined),
    new Element(90,     "Thorium",          "Th",   232.40),
    new Element(91,     "Protactinium",     "Pa",   231.04),
    new Element(92,     "Uranium",          "U",    238.03),
    new Element(93,     "Neptunium",        "Np",   undefined),
    new Element(94,     "Plutonium",        "Pu",   undefined),
    new Element(95,     "Americium",        "Am",   undefined),
    new Element(96,     "Curium",           "Cm",   undefined),
    new Element(97,     "Berkelium",        "Bk",   undefined),
    new Element(98,     "Californium",      "Cf",   undefined),
    new Element(99,     "Einsteinium",      "Es",   undefined),
    new Element(100,    "Fermium",          "Fm",   undefined),
    new Element(101,    "Mendelevium",      "Md",   undefined),
    new Element(102,    "Nobelium",         "No",   undefined),
    new Element(103,    "Lawrencium",       "Lr",   undefined),
    new Element(104,    "Rutherfordium",    "Rf",   undefined),
    new Element(105,    "Dubnium",          "Db",   undefined),
    new Element(106,    "Seaborgium",       "Sg",   undefined),
    new Element(107,    "Bohrium",          "Bh",   undefined),
    new Element(108,    "Hassium",          "Hs",   undefined),
    new Element(109,    "Meitnerium",       "Mt",   undefined),
    new Element(110,    "Darmstadtium",     "Ds",   undefined),
    new Element(111,    "Roentgenium",      "Rg",   undefined),
    new Element(112,    "Copernicium",      "Cn",   undefined),
    new Element(113,    "Nihonium",         "Nh",   undefined),
    new Element(114,    "Flerovium",        "Fl",   undefined),
    new Element(115,    "Moscovium",        "Mc",   undefined),
    new Element(116,    "Livermorium",      "Lv",   undefined),
    new Element(117,    "Tennessine",       "Ts",   undefined),
    new Element(118,    "Oganesson",        "Og",   undefined)
];
