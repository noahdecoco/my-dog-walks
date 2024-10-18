import { useState } from "react";
import { Dog, Sex } from "../../data/dogs";
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
          className={`${
            dog.sex === Sex.FEMALE
              ? "bg-pink-200"
              : dog.sex === Sex.MALE
              ? "bg-blue-200"
              : "odd:bg-slate-200 even:bg-slate-100"
          }`}
          key={dog.id}
          dog={dog}
        />
      ))}
    </div>
  );
};
