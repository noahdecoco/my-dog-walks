import { useState } from "react";
import { ParkItem } from "./ParkItem";
import { SearchBar } from "../FilterBar";
import { Park } from "../../data/walks";

export const ParksList = ({ walks }: { walks: Park[] }) => {
  const [filteredData, setFilteredData] = useState(walks);

  const handleOnChange = (value: string) => {
    const filtered = walks.filter((walk) =>
      walk.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(() => filtered);
  };

  return (
    <div className="mb-20 mt-20">
      <SearchBar onChange={handleOnChange} />
      {filteredData.map((walk) => (
        <ParkItem
          className="odd:bg-slate-100 even:bg-slate-200"
          key={walk.id}
          park={walk}
        />
      ))}
    </div>
  );
};
