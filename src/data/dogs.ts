import { uniqueId } from "lodash";

export enum CollarSize {
  LARGE = "L",
  MEDIUM = "M",
  SMALL = "S",
  TINY = "XS",
}

export enum Sex {
  MALE = "M",
  FEMALE = "F",
}

export interface Dog {
  id: string;
  name: string;
  breed?: string;
  sex?: Sex;
  collarSize?: CollarSize;
  photo?: string;
  address: string;
  address2?: string;
  parkingGeoLocation?: string;
  leashToVan?: boolean;
}

export const data: Dog[] = [
  {
    name: "Lara",
    address: "Kadoelenweg 220",
    collarSize: CollarSize.MEDIUM,
    sex: Sex.FEMALE,
  },
  {
    name: "Pippe & Ollie",
    address: "Nieuwendammerkade 26A3",
    collarSize: CollarSize.SMALL,
  },
  {
    name: "Sjaak",
    address: "Overhoeksparklaan 20",
    collarSize: CollarSize.SMALL,
  },
  {
    name: "Floortje",
    address: "Monnikskapstraat 18",
    collarSize: CollarSize.SMALL,
  },
  {
    name: "Rocky",
    address: "Landsmeerderdijk 100",
    collarSize: CollarSize.MEDIUM,
  },
  {
    name: "Simca",
    address: "Bosrankstraat 8",
    collarSize: CollarSize.MEDIUM,
  },
  {
    name: "Billie B",
    address: "Vogelkade 1",
    collarSize: CollarSize.MEDIUM,
  },
  {
    name: "Fitz",
    address: "Boomgaardlaan 63",
    collarSize: CollarSize.TINY,
  },
  {
    name: "Wolfy",
    address: "Aurikelstraat 77",
    collarSize: CollarSize.MEDIUM,
  },
  {
    name: "Amy",
    address: "Zuiderzeelaan 8",
  },
  {
    name: "Angel",
    address: "Kraandrijverstraat 5",
  },
  {
    name: "Balou",
    address: "Buiksloterdijk 308",
    collarSize: CollarSize.LARGE,
    parkingGeoLocation: "52.39962054006912, 4.920145340839681",
  },
  {
    name: "Bennie",
    address: "Leeuwarderweg 72",
    collarSize: CollarSize.SMALL,
  },
  {
    name: "Bob & Betty",
    address: "Kadoelenweg 127",
  },
  {
    name: "Bop",
    address: "Oleanderstraat 37B",
  },
  {
    name: "Bobbi",
    address: "Klaprozenweg 51-E",
  },
  {
    name: "Boef",
    address: "Stoelenmatterspad 17",
  },
  {
    name: "Boomer ⚠️",
    address: "Badhuiskade 281",
    collarSize: CollarSize.LARGE,
    sex: Sex.MALE,
  },
  {
    name: "Boon",
    address: "H. Stolleplantsoen 7",
    collarSize: CollarSize.LARGE,
  },
  {
    name: "Boyke",
    collarSize: CollarSize.SMALL,
    sex: Sex.MALE,
    address: "Leeuwarderweg 54",
  },
  {
    name: "Carlos",
    address: "Nieuwendammerdijk 153",
  },
  {
    name: "Casey",
    address: "Kalkoenstraat 30-1",
  },
  {
    name: "Cees",
    address: "Banne Buikslootlaan 109C",
    collarSize: CollarSize.SMALL,
    leashToVan: true,
  },
  {
    name: "Charlie K",
    address: "Stoombootweg 106",
  },
  {
    name: "Cooper",
    address: "Landsmeerderdijk 34",
    collarSize: CollarSize.MEDIUM,
  },
  {
    name: "Diesel & Stella",
    address: "Stoombootweg 2A",
  },
  {
    name: "Donna",
    address: "Bosrankstraat 10",
    collarSize: CollarSize.MEDIUM,
  },
  {
    name: "Freek & Ted",
    address: "Leeuwarderweg 78",
  },
  {
    name: "Fitz",
    address: "Spreeuwenpark 38A",
    collarSize: CollarSize.TINY,
  },
  {
    name: "Fritz",
    address: "Klaprozenweg 130 ",
  },
  {
    name: "Freya",
    address: "Tt Vasumweg 32H3",
    collarSize: CollarSize.LARGE,
  },
  {
    name: "Guus",
    address: "Spadinalaan 266",
  },
  {
    name: "Guusje",
    address: "Astasiastraat 7-1",
  },
  {
    name: "Hugo",
    address: "Driedistelstraat 17",
    collarSize: CollarSize.MEDIUM,
    sex: Sex.MALE,
  },
  {
    name: "Ike",
    address: "Tt Vassumweg 77F1",
  },
  {
    name: "Inthi",
    address: "Amelandstraat 26",
    collarSize: CollarSize.SMALL,
  },
  {
    name: "Jagger",
    address: "Distelweg 48",
  },
  {
    name: "Jessie ⚠️",
    address: "Nieuwendammerdijk 26",
    collarSize: CollarSize.MEDIUM,
    parkingGeoLocation: "52.390507, 4.925234",
    sex: Sex.FEMALE,
  },
  {
    name: "Kaat",
    address: "Hammarbystraat 18",
  },
  {
    name: "Kees P",
    address: "Bundlaan 218",
  },
  {
    name: "Kenzo",
    address: "Fresiastraat 10",
  },
  {
    name: "Kick",
    sex: Sex.MALE,
    collarSize: CollarSize.LARGE,
    address: "Paterspoel 32",
  },
  {
    name: "L'eau",
    address: "Spadinalaan 175",
  },
  {
    name: "Lambert",
    address: "Amerbos 357",
    collarSize: CollarSize.LARGE,
  },
  {
    name: "Leela & Otje",
    address: "Ranonkelkade 7a",
    collarSize: CollarSize.SMALL,
  },
  {
    name: "Lemmy",
    address: "Schellingwouderdijk 332F",
  },
  {
    name: "Loetje",
    address: "Ms. van Riemsdijkweg 182",
  },
  {
    name: "Loki",
    address: "Mt Lincolnweg 14G2",
    collarSize: CollarSize.MEDIUM,
  },
  {
    name: "Loki S",
    address: "Lange Distelstraat 30",
  },
  {
    name: "Lola",
    address: "Buikslotermeerplein 459",
    collarSize: CollarSize.MEDIUM,
  },
  {
    name: "Luna",
    address: "Loenermark 364",
  },
  {
    name: "Luna K",
    address: "Schiermonnikoogstraat 15",
    collarSize: CollarSize.TINY,
  },
  {
    name: "Marley",
    address: "Abebe Bikilalaan 41",
    collarSize: CollarSize.SMALL,
  },
  {
    name: "Marley L",
    address: "Scheepsbouwweg 143",
  },
  {
    name: "Merlin",
    address: "Bundlaan 154",
  },
  {
    name: "Nola",
    address: "M.j.e. Lippitsstraat 9",
  },
  {
    name: "Noni",
    address: "Spyridon Louisweg 149",
  },
  {
    name: "Nox",
    address: "Ananasplein 4",
  },
  {
    name: "Nana",
    address: "Het Dok 11",
  },
  {
    name: "Nana*",
    address: "Van Der Pekstraat 72",
  },
  {
    name: "Ollie G",
    address: "Hellingbaan 24",
  },
  {
    name: "Ollie Z",
    address: "Planetenstraat 7",
  },
  {
    name: "Oos",
    address: "Kometensingel 577",
  },
  {
    name: "Pablo S",
    address: "Latherusstraat 80",
    collarSize: CollarSize.SMALL,
  },
  {
    name: "Pippe & Ollie (10 Days)",
    address: "Toetsenborweg 24/2",
    collarSize: CollarSize.SMALL,
  },
  {
    name: "Pitou",
    address: "Blazerpad 19",
    collarSize: CollarSize.MEDIUM,
  },
  {
    name: "Plien",
    address: "Binnenzagerij 10",
    collarSize: CollarSize.MEDIUM,
    sex: Sex.FEMALE,
  },
  {
    name: "Podi",
    address: "Eerste Vogelstraat 5",
  },
  {
    name: "Podi 2",
    address: "Waspunt Noord",
  },
  {
    name: "Puck",
    address: "Leeuwerikstraat 13B",
  },
  {
    name: "Puk",
    address: "Badhuiskade 103",
  },
  {
    name: "Quintus",
    address: "Nieuwe Purmerweg 152",
    collarSize: CollarSize.SMALL,
    sex: Sex.MALE,
    parkingGeoLocation: "52.39306255784903, 4.937961406200711",
  },
  {
    name: "Rifka",
    address: "Leen De Jongewaardkade 123",
    collarSize: CollarSize.MEDIUM,
  },
  {
    name: "Rita",
    address: "Jacob honingstraat 45",
    collarSize: CollarSize.MEDIUM,
    sex: Sex.FEMALE,
  },

  {
    name: "Roul",
    address: "Hammerbystraat 158",
  },
  {
    name: "Sam L",
    address: "Schellingwouderdijk 319",
    collarSize: CollarSize.MEDIUM,
  },
  {
    name: "Sancho",
    address: "Ceramiquelaan 113",
  },
  {
    name: "Sjef",
    address: "Pirolastraat 55",
  },
  {
    name: "Snoop Dog",
    address: "Aldebaranstraat 27",
  },
  {
    name: "Spencer",
    address: "Nieuwendammerkade 28A3",
  },
  {
    name: "Spencer 2",
    address: "Hammerbystraat 26",
  },
  {
    name: "Storm",
    address: "Zoutberg 27",
  },
  {
    name: "Ted",
    address: "Nieuwendammerdijk 333",
    collarSize: CollarSize.LARGE,
  },
  {
    name: "Timo",
    address: "Ridderspoorweg 169",
    address2: "Amsterdam",
    collarSize: CollarSize.TINY,
    breed: "Chihuahua",
    photo: "timo.png",
  },
  {
    name: "Tobie",
    address: "Westerlengte 51",
  },
  {
    name: "Toby ⚠️",
    address: "IJburglaan 982",
    collarSize: CollarSize.MEDIUM,
    breed: "Labradoodle",
  },
  {
    name: "Tony L",
    address: "Stoombootweg 32",
  },
  {
    name: "Twirre",
    address: "Fazantenweg 81H",
  },
  {
    name: "Zuzu",
    address: "Abebe Bikilalaan 39",
  },
  {
    name: "Axel",
    address: "Ijburglaan 784",
  },
  {
    name: "Baloe D",
    address: "Zwanebloemlaan 188",
  },
  {
    name: "Beike",
    address: "Dennenhof 3",
    collarSize: CollarSize.MEDIUM,
    sex: Sex.FEMALE,
  },
  {
    name: "Bikkel",
    address: "Lisdoddelaan 8",
  },
  {
    name: "Binky",
    address: "Emmy Andriessestraat 10",
  },
  {
    name: "Bliksem",
    address: "Nicolaas Hennemanhof 1",
  },
  {
    name: "Bubba",
    address: "Dennenhof 9",
  },
  {
    name: "Buddy B",
    address: "Wim Noordhoekkade 632",
  },
  {
    name: "Charlie",
    address: "Eef Kamerbeekstraat 684",
  },
  {
    name: "Donny",
    address: "John Fernhouthof 48",
  },
  {
    name: "Elmo",
    address: "Krijn Taconiskade 25",
  },
  {
    name: "Enzo",
    address: "Kees Broekmanstraat 80",
  },
  {
    name: "Joep",
    address: "Cas Oorthuyskade 194",
  },
  {
    name: "Kenzo H",
    address: "Jan Vrijmanstraat 14",
  },
  {
    name: "Koos",
    address: "Zwanebloemlaan 64",
  },
  {
    name: "Kenna",
    address: "Jan Vrijmanstraat 228",
    collarSize: CollarSize.LARGE,
    sex: Sex.FEMALE,
  },
  {
    name: "Lotje",
    address: "Nico Jessekade 225",
    collarSize: CollarSize.LARGE,
    sex: Sex.FEMALE,
  },
  {
    name: "Louie",
    address: "Emmy Andriessestraat 50",
    collarSize: CollarSize.MEDIUM,
    sex: Sex.FEMALE,
  },
  {
    name: "Lucky",
    address: "Windjammerdijk 82",
    collarSize: CollarSize.SMALL,
    sex: Sex.FEMALE,
  },
  {
    name: "Max",
    address: "Lisdoddelaan 62",
  },
  {
    name: "Moos L",
    address: "Ad Windighof 12",
  },
  {
    name: "Morris",
    address: "Emmy Andriessestraat 20",
  },
  {
    name: "Philly B",
    address: "John Fernhouthof 6",
  },
  {
    name: "Pip",
    address: "Krijn Taconiskade 400",
  },
  {
    name: "Rana",
    address: "Nida Senffstraat 63",
  },
  {
    name: "Rex",
    address: "Zwenkgrasstraat 2",
  },
  {
    name: "Suus",
    address: "Jan Vrijmanstraat 209",
    collarSize: CollarSize.LARGE,
  },
  {
    name: "Teddy T",
    address: "Lisdoddelaan 44",
  },
  {
    name: "Teo",
    address: "Pieter Oosterhuisstraat 118",
  },
  {
    name: "Tommie",
    address: "Kea Bouwmanstraat 76",
  },
  {
    name: "Vito",
    address: "Noorderduinstraat 517",
  },
  {
    name: "Vos",
    address: "Johan Van Der Keukenstraat 79a",
  },
  {
    name: "Warhol",
    address: "Leen Jongewaardkade 9",
    collarSize: CollarSize.MEDIUM,
  },
  {
    name: "Zoe",
    address: "Mattenbiesstraat 99",
  },
  {
    name: "Zorro & Ziggy",
    address: "Ben Van Meerendonkstraat 138",
  },
  {
    name: "Otje J",
    address: "Spadinalaan 87",
    collarSize: CollarSize.SMALL,
  },
  {
    name: "Lara C",
    address: "Texelweg 64",
    collarSize: CollarSize.MEDIUM,
  },
  {
    name: "Sjors",
    address: "Nieuwendammerdijk 97",
    collarSize: CollarSize.SMALL,
    sex: Sex.FEMALE,
    parkingGeoLocation: "52.39189560297361, 4.928525890824903",
  },
  {
    name: "Nelson",
    address: "Grasweg 268",
    collarSize: CollarSize.TINY,
  },
  {
    name: "Ellie",
    address: "Leen Jongewaardkade 43",
    collarSize: CollarSize.MEDIUM,
  },
  {
    name: "Bodhi",
    address: "Mariadistelkade 67",
    collarSize: CollarSize.LARGE,
    sex: Sex.MALE,
  },
  {
    name: "Kip",
    address: "Ceramiquelaan 375",
    collarSize: CollarSize.SMALL,
  },
  {
    name: "Woody",
    address: "Conny Stuartstraat 48",
    collarSize: CollarSize.SMALL,
  },
  {
    name: "Kobe",
    address: "Bundlaan 228",
    collarSize: CollarSize.SMALL,
    breed: "Labradoodle",
  },
  {
    name: "Coco J",
    address: "Spandinalaan 178",
    collarSize: CollarSize.SMALL,
    breed: "Labradoodle",
  },
  {
    name: "Bela & Mila",
    address: "Uilenburgerwerf 6",
    collarSize: CollarSize.SMALL,
  },
  {
    name: "Gimli",
    address: "Overhoeksparklaan 218",
  },
  {
    name: "Bob ⚠️",
    sex: Sex.MALE,
    collarSize: CollarSize.LARGE,
    address: "Diopter 182",
  },
  {
    name: "Jack",
    address: "Talbotstraat 12",
    collarSize: CollarSize.LARGE,
    sex: Sex.MALE,
  },
  {
    name: "Keetje ⚠️",
    address: "Buiksloterdijk 394",
    collarSize: CollarSize.SMALL,
    sex: Sex.FEMALE,
  },
  {
    name: "Frankie F",
    collarSize: CollarSize.MEDIUM,
    sex: Sex.FEMALE,
    address: "Amerbos 391",
  },
  {
    name: "Odie 3012",
    address: "Ms Van Riemsdijkweg 47",
  },
  {
    name: "Lasse",
    address: "Hoopende Swaen 36",
  },
  {
    name: "Loetje L",
    address: "Nico Jessekade 147",
  },
  {
    name: "Ollie S",
    address: "Taconiskade 25",
  },
  {
    name: "Skye & Mo",
    address: "Ceramiquelaan 317",
  },
  {
    name: "Freddie",
    address: "Ijburglaan 356",
  },
  {
    name: "Bello",
    address: "Nico Jessekade 157",
    breed: "Labrador",
  },
  {
    name: "Freya T",
    address: "Landsmeerderdijk 14",
  },
  {
    name: "Pippa G",
    address: "Leeuwarderweg 36",
  },
  {
    name: "Joey",
    address: "Zwanebloemlaan 66",
    breed: "Jack Russel",
  },
  {
    name: "Lola R",
    address: "Elstarstraat 3",
  },
  {
    name: "Kimi",
    address: "Schokkerjachtdijk 3",
  },
  {
    name: "Pep",
    address: "Zwanebloemlaan 101",
  },
  {
    name: "Dora",
    address: "Hellingbaan 220",
  },
  {
    name: "Pita",
    address: "Elstarstraat 39",
  },
  {
    name: "Nyla",
    address: "Schooltuinpad 35",
  },
  {
    name: "Mila",
    address: "Boterbloemstraat 19",
  },
  {
    name: "Oscar",
    address: "Spadinalaan 424",
  },
  {
    name: "Nio",
    address: "Hammerbystraat 234",
  },
  {
    name: "Bjork",
    address: "NDSM-straat 107",
  },
  {
    name: "Pepper L",
    address: "Distelweg 303",
  },
  {
    name: "Rosie B",
    address: "Badhuiskade 109",
  },
  {
    name: "Movi",
    address: "Landsmeerderdijk 7",
  },
  {
    name: "Tuga",
    address: "Boomgaardlaan 118",
  },
  {
    name: "Mo",
    address: "Ceramiquelaan 317",
  },
  {
    name: "Clara",
    address: "Sausalitolaan 242",
  },
  {
    name: "Lambert 1",
    address: "Buiten Kadijken 6",
    collarSize: CollarSize.LARGE,
  },
  {
    name: "Bobbie L",
    address: "Oostenburgervoorstraat 35",
    collarSize: CollarSize.MEDIUM,
  },
  {
    name: "Pablo K (harness) ⚠️",
    address: "Willem Parelstraat 386 (Maps is wrong)",
    collarSize: CollarSize.TINY,
  },
  {
    name: "Loup ⚠️",
    address: "Javakade 746",
    collarSize: CollarSize.SMALL,
  },
  {
    name: "Luca",
    address: "Oostelijke handelskade 62-1",
    collarSize: CollarSize.SMALL,
  },
  {
    name: "Fien & Kalle (harness)",
    address: "Stuurmankade 202",
    collarSize: CollarSize.SMALL,
  },
  {
    name: "Job (2314)",
    address: "Ertskade 254",
    collarSize: CollarSize.TINY,
  },
  {
    name: "Ben",
    address: "Wijttenbachstraat 50A",
    collarSize: CollarSize.MEDIUM,
  },
  {
    name: "Timo 2",
    address: "Linnaeusstraat 42B",
    collarSize: CollarSize.TINY,
  },
  {
    name: "Maggie",
    address: "Berkelstraat 5D",
    collarSize: CollarSize.SMALL,
  },
  {
    name: "Charlie T ⚠️ (harness + tracker)",
    address: "Waalstraat 6HS",
    collarSize: CollarSize.TINY,
  },
  {
    name: "Sasha",
    address: "Victorieplein 47-10",
    collarSize: CollarSize.LARGE,
  },
  {
    name: "Dax",
    address: "Zuidelijke Wandelweg 169",
    collarSize: CollarSize.MEDIUM,
  },
  {
    name: "Sammy F",
    address: "Stadhouderskade 151-1",
    areaColour: "GREEN",
  },
  {
    name: "Marley S",
    address: "Eerste Van der Heijdenstraat 33b",
  },
  {
    name: "Dib",
    address: "Frans van Mierisstraat 24HS",
  },
  {
    name: "Philly & Toet 2",
    address: "Valeriusplein 28H",
  },
  {
    name: "Bobbie D",
    address: "Schuberstraat 4",
  },
  {
    name: "Kees",
    address: "Watteaustraat 24",
  },
  {
    name: "Ollie C",
    address: "Plantage Westermanlaan 1",
  },
  {
    name: "Storm A",
    address: "Plantage muidergracht 97C2",
  },
  {
    name: "Ben",
    address: "Wijttenbachstraat 50A",
  },
  {
    name: "Kees B",
    address: "Platanenweg 14-2",
  },
  {
    name: "CocoH",
    address: "Sarphatistraat 43A",
  },
  {
    name: "Memphis",
    address: "Daniël Stalpertstraat 26",
  },
  {
    name: "Harry",
    address: "Rooseveltlaan 98-2",
  },
  {
    name: "Maggie",
    address: "Berkelstraat 5D",
  },
  {
    name: "Butch",
    address: "Corellistraat 20",
  },
  {
    name: "Betsie",
    address: "Corellistraat 4",
  },
  {
    name: "Jackie",
    address: "George Gershwinlaan 81B",
  },
  {
    name: "Lana",
    address: "George Gershwinlaan 64",
  },
  {
    name: "Lola L",
    address: "Zocherstraat 37",
  },
  {
    name: "Chef",
    address: "Tweede Constantijn Huygensstraat 73h",
  },
  {
    name: "Willis",
    address: "Overtoom 282-2",
  },
  {
    name: "Sonic",
    address: "Vrolikstraat 429a",
  },
  {
    name: "Georges",
    address: "Van Eeghenstraat 212",
  },
  {
    name: "Milo M",
    address: "Veerstraat 12-3",
  },
  {
    name: "Sjors S",
    address: "Poeldijkstraat 385",
  },
  {
    name: "Louie G",
    address: "Ottho Heldringstraat 3D16",
  },
  {
    name: "Mina",
    address: "Emmy Andriessestraat 306",
  },
  {
    name: "Bobbie J",
    address: "Zeeburgerkade 746",
  },
  {
    name: "Theo & Herbert *",
    address: "Zonneplein 18b",
  },
  { name: "Lasse", address: "Hoopende Swaen 36" },
  { name: "Finn", address: "Haringbuisdijk 635" },
  { name: "Bliksem", address: "Nicolaas Hennemanhof 1" },
  { name: "Mies", address: "Kadoelenweg 141" },
  { name: "Kaat S", address: "Edmond Halleylaan 26C" },
  { name: "Suki", address: "Groetstraat 142" },
  { name: "Joffi", address: "Nieuwe Uilenburgerstraat 7D" },
  { name: "Lincoln & Clementine", address: "Oudeschans 100" },
  { name: "Jack W", address: "Oosterburgervoorstraat 63A" },
  { name: "Dexter S", address: "Flevoparkweg 84" },
  { name: "Loutje", address: "Krijn Taconiskade 503" },
  { name: "Bowie", address: "Hoopende Swaen 14" },
  { name: "Toon", address: "Elzenhagensingel 111" },
  { name: "Oreo", address: "Haringbuisdijk 873" },
  { name: "Jimi", address: "Talbotstraat 8" },
  { name: "Jack L", address: "Zwanebloemlaan 186" },
  { name: "Murphy", address: "Landsmeerderdijk 34" },
  { name: "Benito", address: "Nico Jessekade 147" },
]
  .map((item) => ({ ...item, id: uniqueId("dog_") }))
  .sort((a, b) => a.name.localeCompare(b.name));
