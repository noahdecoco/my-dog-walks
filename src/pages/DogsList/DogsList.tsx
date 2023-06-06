import { useState } from "react";
import { Dog } from "../../data/dogs";
import { DogItem } from "./DogItem";
import { SearchBar } from "../FilterBar";

export const DogsList = ({ dogs }: { dogs: Dog[] }) => {
  const [filteredData, setFilteredData] = useState(dogs);

  const handleOnChange = (value: string) => {
    const filtered = dogs.filter((dog) =>
      dog.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(() => filtered);
  };

  return (
    <div className="mb-20 mt-20">
      <SearchBar onChange={handleOnChange} />
      {filteredData.map((dog) => (
        <DogItem
          className="odd:bg-slate-100 even:bg-slate-200"
          key={dog.id}
          dog={dog}
        />
      ))}
    </div>
  );
};
