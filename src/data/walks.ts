import { uniqueId } from "lodash";

export interface Park {
  id: string;
  name: string;
  address: string;
}

export const data: Park[] = [
  {
    name: "Stroop",
    address: "Parkeerplaats 1025 AP",
  },
  {
    name: "Beach",
    address: "Muiderstrand 1309 BA",
  },
  {
    name: "VV",
    address: "Bergplaats 1359",
  },
  {
    name: "DB",
    address: "Muiderstraatweg 61-66",
  },
]
  .map((item) => ({ ...item, id: uniqueId("walk_") }))
  .sort((a, b) => a.name.localeCompare(b.name));
