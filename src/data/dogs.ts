import { uniqueId } from "lodash";

export enum CollarSize {
  LARGE = "L",
  MEDIUM = "M",
  SMALL = "S",
  TINY = "XS",
}

export interface Dog {
  id: string;
  name: string;
  collarSize?: CollarSize;
  address: string;
  parkingGeoLocation?: string;
  leashToVan?: boolean;
}

export const data: Dog[] = [
  {
    name: "Lara",
    address: "Kadoelenweg 220",
    collarSize: CollarSize.MEDIUM,
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
    name: "Boomer",
    address: "Badhuiskade 281",
  },
  {
    name: "Boon",
    address: "H. Stolleplantsoen 7",
    collarSize: CollarSize.LARGE,
  },
  {
    name: "Boyke",
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
    address: "Kogeldistelstraat 22",
    collarSize: CollarSize.MEDIUM,
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
    name: "Jessie",
    address: "Nieuwendammerdijk 26",
    collarSize: CollarSize.MEDIUM,
    parkingGeoLocation: "52.390507, 4.925234",
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
    parkingGeoLocation: "52.39306255784903, 4.937961406200711",
  },
  {
    name: "Rifka",
    address: "Hellingbaan 296",
    collarSize: CollarSize.MEDIUM,
  },
  {
    name: "Rita",
    address: "Kleine Zonneplein 1",
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
  },
  {
    name: "Tobie",
    address: "Westerlengte 51",
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
    name: "Woody",
    address: "Bercylaan 99",
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
    name: "Jack",
    address: "Talbotstraat 12",
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
  },
  {
    name: "Lotje",
    address: "Nico Jessekade 225",
  },
  {
    name: "Louie",
    address: "Emmy Andriessestraat 50",
  },
  {
    name: "Lucky",
    address: "Windjammerdijk 82",
    collarSize: CollarSize.SMALL,
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
    name: "Zoe",
    address: "Mattenbiesstraat 99",
  },
  {
    name: "Zorro & Ziggy",
    address: "Ben Van Meerendonkstraat 138",
  },
]
  .map((item) => ({ ...item, id: uniqueId("dog_") }))
  .sort((a, b) => a.name.localeCompare(b.name));
