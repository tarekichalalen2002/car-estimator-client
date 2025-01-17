const modelsByMarks = [
  {
    mark: "AUDI",
    models: [
      "Q5 Sportback",
      "A1 Sportback",
      "A6",
      "E-Tron Sportback",
      "Q2",
      "A5 Sportback",
      "Q7",
      "Q3",
      "E-Tron",
      "A6 Avant",
      "A1 Allstreet",
      "A4",
      "A3",
      "A3 Sportback",
      "Tt Roadster",
      "Q8",
      "Q8 E-Tron",
      "Q4 Sportback E-Tron",
      "Q3 Sportback",
      "Q4 E-Tron",
      "Q5",
      "Tt",
      "A4 Avant",
      "A7 Sportback",
      "A3 Berline",
      "Q8 E-Tron Sportback",
      "A5 Cabriolet",
      "A5",
      "E-Tron Gt",
      "A1",
      "Sq5",
      "A1 Citycarver",
      "A8",
      "A3 Cabriolet",
      "Sq8",
    ],
  },
  {
    mark: "BMW",
    models: [
      "Serie 1",
      "Serie 5 Touring",
      "Serie 3 Touring",
      "Serie 2 Active Tourer",
      "X1",
      "X2",
      "I3",
      "Serie 4 Gran Coupe",
      "Ix",
      "X7",
      "I4",
      "Serie 5",
      "Ix3",
      "X3",
      "X5",
      "Z4 Roadster",
      "Serie 3",
      "Serie 8 Gran Coupe",
      "Serie 4 Coupe",
      "Xm",
      "M4 Coupe",
      "X4",
      "X6",
      "Serie 2 Gran Tourer",
      "Serie 8",
      "Serie 2 Cabriolet",
      "Serie 4 Cabriolet",
      "M2 Coupe",
      "Serie 2 Coupe",
      "Serie 2 Gran Coupe",
      "Serie 7",
      "X3 M",
      "X4 M",
      "X6 M",
      "I7",
      "Serie 3 Gran Turismo",
      "M5",
      "i3",
      "116",
      "218",
      "530",
      "118",
      "318",
      "840",
      "220",
      "320",
      "420",
      "435",
      "M2",
      "520",
      "M4",
      "535",
      "230",
      "418",
      "330",
      "Z3",
      "440",
      "640",
      "540",
      "730",
      "528",
      "525",
      "Z4",
      "550",
      "430",
      "216",
      "316",
      "335",
      "120",
      "325",
      "225",
      "M3",
      "735",
      "240",
      "135",
      "M6",
      "740",
      "X5 M",
      "545",
      "114",
      "Z4 M",
      "1er M Coupé",
      "X2 M",
      "633",
      "745",
      "Z3 M",
      "750",
      "650",
      "328",
      "125",
      "523",
      "732",
      "Active Hybrid 3",
      "323",
      "428",
      "128",
      "214",
      "635",
      "Z1",
      "518",
      "645",
      "850",
      "Active Hybrid 7",
      "235",
      "340",
      "760",
      "M550",
      "M1",
      "228",
      "123",
    ],
  },
  {
    mark: "CITROEN",
    models: [
      "C3",
      "C4",
      "C3 Aircross",
      "Berlingo Van",
      "C5 Aircross",
      "C4 Cactus",
      "C5 X",
      "C-Zero",
      "Jumpy",
      "C1",
      "Grand C4 Spacetourer",
      "Berlingo",
      "C4 X",
      "Ds 5",
      "C-Elysee",
      "Ds 4",
      "Ds 3",
      "C4 Spacetourer",
      "C4 Picasso",
      "Ami",
      "Grand C4 Picasso",
      "Jumper",
      "Spacetourer",
      "DS3",
      "Xsara Picasso",
      "C2",
      "Nemo",
      "DS4",
      "AX",
      "Xsara",
      "C8",
      "XM",
      "SAXO",
      "Xantia",
      "DS",
      "BX",
      "DS5",
      "CX",
      "C-Crosser",
      "C6",
    ],
  },
  {
    mark: "DACIA",
    models: [
      "Duster",
      "Sandero",
      "Lodgy",
      "Spring",
      "Logan",
      "Jogger",
      "Logan Mcv",
      "Dokker",
    ],
  },
  {
    mark: "DS",
    models: [
      "Ds 3 Crossback",
      "Ds 7 Crossback",
      "Ds 4",
      "Ds 3",
      "Ds 7",
      "Ds 5",
      "Ds 4 Crossback",
      "Ds 9",
      "Ds 3 Cabrio",
    ],
  },
  {
    mark: "FORD",
    models: [
      "Fiesta",
      "Transit Custom",
      "Puma",
      "Focus",
      "Kuga",
      "C-Max",
      "Transit 2t",
      "Mustang Mach-E",
      "Ka",
      "Transit Connect",
      "Explorer",
      "Ecosport",
      "Galaxy",
      "Transit Courier",
      "Mondeo",
      "Tourneo Connect",
      "Fiesta Active",
      "Ka+",
      "Ranger",
      "Mondeo Sw",
      "Bronco",
      "Focus Active",
      "Grand Tourneo Connect",
      "Transit Custom Kombi",
      "Focus Sw",
      "Tourneo Courier",
      "S-Max",
      "Edge",
      "Focus Active Sw",
      "B-Max",
      "Mustang",
      "EcoSport",
      "Transit",
      "Tourneo",
      "Ka/Ka+",
      "Focus C-Max",
      "Cougar",
      "Fusion",
      "Grand C-Max",
      "Focus CC",
      "Escort",
      "Sierra",
      "Maverick",
    ],
  },
  {
    mark: "HYUNDAI",
    models: [
      "Kona",
      "Tucson",
      "I20",
      "I10",
      "Ix35",
      "I30",
      "Ioniq",
      "Santa Fe",
      "Ix20",
      "Bayon",
      "I30 Fastback",
      "TUCSON",
      "iX35",
      "SANTA FE",
      "IONIQ",
      "Coupe",
      "i20",
      "i30",
      "i40",
      "VELOSTER",
      "KONA",
      "iX20",
      "i10",
      "Matrix",
      "Getz",
      "Atos",
      "Trajet",
      "SONATA",
      "H-1",
    ],
  },
  {
    mark: "MERCEDES",
    models: [
      "Classe A Berline",
      "Classe A",
      "Eqs",
      "Classe B",
      "Classe C Break",
      "Sprinter",
      "Gla",
      "Cla Shooting Brake",
      "Eqt",
      "Eqa",
      "Glc",
      "Vito",
      "Glb",
      "Eqe Suv",
      "Gle Coupe",
      "Classe E Coupe",
      "Classe S",
      "Eqc",
      "Citan",
      "Cla",
      "Glc Coupe",
      "Classe Sl",
      "Classe C Coupe",
      "Classe C All-Terrain",
      "Gle",
      "Classe E",
      "Classe C",
      "Classe E Break",
      "Cle Coupe",
      "Classe V",
      "Eqb",
      "Eqe",
      "Classe G",
      "Amg Gt",
      "Classe C Cabriolet",
      "Vito Tourer",
      "Marco Polo",
      "Cle Cabriolet",
      "Classe E Cabriolet",
      "Classe T",
      "Eqv",
      "Classe Cls",
      "Slc",
      "Amg Gt Roadster",
    ],
  },
  {
    mark: "MERCEDES-BENZ",
    models: [
      "G",
      "CL",
      "B 180",
      "E 250",
      "GLA 180",
      "A 45 AMG",
      "A 200",
      "E 200",
      "CLA 250",
      "B 200",
      "C 200",
      "E 220",
      "CLA 220",
      "CLA 180",
      "GLC 300",
      "S 63 AMG",
      "A 180",
      "GLC 43 AMG",
      "CLA 200",
      "E 320",
      "A 170",
      "GLC 350",
      "C 220",
      "S 320",
      "E 350",
      "E 280",
      "GLA 200",
      "E 300",
      "A 250",
      "E 500",
      "S 560",
      "CLA 45 AMG",
      "EQB 250",
      "SL 500",
      "SL 560",
      "C 350",
      "C 63 AMG",
      "GLC 200",
      "A 220",
      "GLC 250",
      "GLC 220",
      "E 63 AMG",
      "SL 380",
      "EQA",
      "A 160",
      "S 400",
      "S 250",
      "S 500",
      "B 220",
      "SL 320",
      "E 43 AMG",
      "S 350",
      "A 35 AMG",
      "E 55 AMG",
      "C 180",
      "C 250",
      "EQC 400",
      "SL 350",
      "CLA 35 AMG",
      "A 140",
      "GLC 450",
      "E 290",
      "A 150",
      "C 280",
      "C 36 AMG",
      "C 160",
      "C 43 AMG",
      "S 600",
      "E 240",
      "SL 450",
      "SL 55 AMG",
      "C 300",
      "E 400",
      "SL 300",
      "E 50 AMG",
      "GLA 45 AMG",
      "C 450",
      "B 160",
      "G 400",
      "E 270",
      "S 55 AMG",
      "GLA 250",
      "CL 500",
      "S 280",
      "GLA 220",
      "C 320",
      "EQA 250",
      "B 250",
      "S 300",
      "E 450",
      "G 55 AMG",
      "CL 200",
      "GLC 400",
      "G 500",
      "E 260",
      "SL 600",
      "SL 60 AMG",
      "B 170",
    ],
  },
  {
    mark: "NISSAN",
    models: [
      "Qashqai",
      "Leaf",
      "Juke",
      "Micra",
      "X-Trail",
      "Ariya",
      "Nv300",
      "Primastar",
      "Townstar",
      "Nv200",
      "Navara",
      "Nv250",
      "370z Roadster",
      "Pulsar",
      "Patrol",
      "NV300",
      "Qashqai+2",
      "Note",
      "370Z",
      "NV200",
    ],
  },
  {
    mark: "OPEL",
    models: [
      "Mokka",
      "Grandland",
      "Grandland X",
      "Corsa",
      "Crossland X",
      "Combo Cargo",
      "Astra Sports Tourer",
      "Mokka X",
      "Astra",
      "Insignia Sports Tourer",
      "Vivaro",
      "Movano",
      "Combo Life",
      "Zafira",
      "Adam",
      "Meriva",
      "Insignia Grand Sport",
      "Antara",
      "Combo",
      "GT",
      "Insignia",
      "Manta",
      "Vectra",
      "Agila",
      "Zafira Tourer",
      "Cascada",
      "Tigra",
      "Speedster",
      "Karl",
    ],
  },
  {
    mark: "OTHERS",
    models: [
      "Mini",
      "Range Rover Sport",
      "Ux",
      "E-Pace",
      "Picanto",
      "F-Pace",
      "500",
      "Levante",
      "Clubman",
      "Countryman",
      "Range Rover Evoque",
      "Xceed",
      "Fortwo Coupe",
      "Xk Coupe",
      "Discovery Sport",
      "Fortwo Cabriolet",
      "Ducato",
      "Range Rover",
      "Ct",
      "Cr-V",
      "Ehs",
      "Rx",
      "Arona",
      "Leon",
      "Tonale",
      "Range Rover Velar",
      "Nx",
      "Cabrio",
      "Ceed",
      "500l",
      "Panda",
      "Niro",
      "Space Star",
      "Ibiza",
      "Eclipse Cross",
      "Ghibli",
      "Rz",
      "Pro Ceed",
      "Sportage",
      "Mg5",
      "Tipo",
      "Formentor",
      "Rio",
      "Daily",
      "Stonic",
      "Giulia",
      "Stelvio",
      "Mii Electric",
      "500x",
      "Ateca",
      "Cherokee",
      "Ev6",
      "Mito",
      "Asx",
      "Doblo Cargo",
      "Tarraco",
      "Fx",
      "Rc",
      "Cx-3",
      "Ceed Sw",
      "Range Rover Evoque Cabriolet",
      "A110",
      "E-Niro",
      "V8 Vantage",
      "500c",
      "Renegade",
      "Defender",
      "E-Soul",
      "Cx-5",
      "F-Type Coupe",
      "Es",
      "Cx-30",
      "Giulietta",
      "Zs",
      "#1",
      "Mg4",
      "Grecale",
      "I-Pace",
      "Is",
      "Continental Gt",
      "Corvette Cabriolet",
      "Quattroporte",
      "Zr-V",
      "Mazda2",
      "Mazda3",
      "600",
      "Gladiator",
      "Xe",
      "Compass",
      "Tivoli",
      "Tipo Sw",
      "Sorento",
      "#3",
      "Tipo Cross",
      "Model X",
      "U5",
      "Q30",
      "Granturismo",
      "Model 3",
      "Trezia",
      "Hr-V",
      "Xf",
      "Marvel R",
      "Scudo",
      "Mc20 Cielo",
      "Lbx",
      "Forfour",
      "Punto",
      "Wrangler Unlimited",
      "Leon St",
      "Fullback",
      "Q50",
      "Corvette",
      "Civic",
      "Grand Cherokee",
      "Jazz",
      "Ev9",
      "L200",
      "Eclipse",
      "Model S",
      "5",
      "ASX",
      "6",
      "MX-5",
      "3",
      "CX-5",
      "CX-3",
      "2",
      "CX-30",
      "Pajero",
      "Outlander",
      "Lancer",
      "Colt",
      "Premacy",
      "Grandis",
      "RX-8",
      "RX-7",
    ],
  },
  {
    mark: "PEUGEOT",
    models: [
      "2008",
      "3008",
      "208",
      "308",
      "308 Sw",
      "Expert",
      "Rifter",
      "Partner",
      "5008",
      "508",
      "Partner Tepee",
      "408",
      "108",
      "508 Sw",
      "Boxer",
      "Ion",
      "4008",
      "207",
      "206",
      "307",
      "407",
      "205",
      "1007",
      "RCZ",
      "107",
      "807",
      "iOn",
      "504",
      "Traveller",
      "406",
      "306",
      "607",
      "4007",
      "106",
      "Bipper",
    ],
  },
  {
    mark: "PORSCHE",
    models: [
      "Cayenne Coupe",
      "Cayenne",
      "911 Coupe",
      "Panamera",
      "911 Targa",
      "Panamera Sport Turismo",
      "Taycan",
      "Cayman",
      "Macan",
      "911 Cabriolet",
      "718 Boxster",
      "718 Cayman",
      "Boxster",
      "924",
      "944",
      "928",
      "968",
      "Targa",
    ],
  },
  {
    mark: "RENAULT",
    models: [
      "Clio",
      "Kadjar",
      "Captur",
      "Megane",
      "Zoe",
      "Arkana",
      "Twingo",
      "Scenic",
      "Megane Estate",
      "Austral",
      "Kangoo",
      "Express",
      "Trafic",
      "Espace",
      "Grand Scenic",
      "Master",
      "Talisman Estate",
      "Modus",
      "Talisman",
      "Koleos",
      "Kangoo Van",
      "Kangoo Express",
      "Trafic Combi",
      "Clio Estate",
      "Twizy",
      "Trafic Spacenomad",
      "Megane Cc",
      "Laguna",
      "ZOE",
      "Avantime",
      "Grand Espace",
      "R 19",
      "Grand Modus",
      "Fluence",
      "R 4",
      "Wind",
      "R 5",
      "Mascott",
      "Vel Satis",
      "Spider",
      "Latitude",
    ],
  },
  {
    mark: "SKODA",
    models: [
      "Fabia",
      "Kamiq",
      "Citigo E Iv",
      "Superb",
      "Octavia",
      "Octavia Combi",
      "Karoq",
      "Superb Combi",
      "Scala",
      "Kodiaq",
      "Yeti",
      "Enyaq Iv",
      "Fabia Combi",
      "Enyaq",
      "Rapid/Spaceback",
      "Roomster",
      "Citigo",
    ],
  },
  {
    mark: "SUZUKI",
    models: [
      "Across",
      "Swift",
      "Vitara",
      "S-Cross",
      "Celerio",
      "Jimny",
      "Ignis",
      "Swace",
      "Sx4 S-Cross",
      "Grand Vitara",
      "Baleno",
      "SX4 S-Cross",
      "SX4",
      "Alto",
      "Splash",
    ],
  },
  {
    mark: "TOYOTA",
    models: [
      "Yaris",
      "Prius",
      "Corolla",
      "C-Hr",
      "Corolla Touring Sports",
      "Rav4",
      "Aygo X",
      "Aygo",
      "Yaris Cross",
      "Bz4x",
      "Highlander",
      "Proace City Verso",
      "Auris",
      "Proace City",
      "Proace",
      "Auris Touring Sports",
      "Proace Combi",
      "Prius Hybride Rechargeable",
      "Camry",
      "Proace Verso",
      "Verso",
      "C-HR",
      "RAV 4",
    ],
  },
  {
    mark: "VOLKSWAGEN",
    models: [
      "T-Roc",
      "Tiguan",
      "Golf Sportsvan",
      "Golf",
      "Id.5",
      "T-Cross",
      "Polo",
      "Taigo",
      "Tiguan Allspace",
      "E-Up!",
      "Golf Sw",
      "T-Roc Cabriolet",
      "Transporter",
      "Touareg",
      "Id.4",
      "Passat Sw",
      "Id.3",
      "Passat",
      "Cross Polo",
      "Touran",
      "Arteon",
      "Id. Buzz",
      "Passat Alltrack",
      "Crafter",
      "Id.7",
      "Up!",
      "Multivan",
      "Caddy",
      "Caddy Cargo",
      "ID.3",
      "e-Golf",
      "Sharan",
      "Scirocco",
      "Amarok",
      "New Beetle",
      "T5 California",
      "Passat Variant",
      "Beetle",
      "T6 California",
      "up!",
      "T5 Caravelle",
      "T4 Multivan",
      "T6 Multivan",
      "LT",
      "Fox",
      "T5 Multivan",
      "Jetta",
      "Polo GTI",
      "Passat CC",
      "T4 Caravelle",
      "Phaeton",
      "Bora",
      "T5 Shuttle",
      "T6 Transporter",
      "CC",
      "Eos",
      "T4",
      "T6 Caravelle",
      "Polo Cross",
    ],
  },
  {
    mark: "VOLVO",
    models: [
      "Xc40",
      "Xc90",
      "Xc60",
      "V40",
      "C40",
      "S60",
      "Ex30",
      "V40 Cross Country",
      "V60",
      "V90",
      "XC60",
      "XC40",
      "XC90",
      "C30",
      "XC70",
      "V90 Cross Country",
      "V70",
      "240",
      "S40",
      "C70",
      "S90",
      "V50",
      "S80",
      "850",
      "740",
    ],
  },
];

export default modelsByMarks;
