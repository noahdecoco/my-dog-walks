import { ChangeEvent, useEffect, useRef, useState } from "react";

interface Props {
  value?: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value = "", onChange }: Props) => {
  const [searchValue, setSearchValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchValue(newValue);
    onChange(newValue);
  };

  const handleClear = () => {
    setSearchValue("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
    onChange("");
  };

  useEffect(() => {
    handleOnChange({ target: { value } } as ChangeEvent<HTMLInputElement>);
  }, [value]);

  return (
    <div className="fixed left-0 right-0 top-0 z-10 flex h-20 items-center bg-slate-500 px-4 drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]">
      <input
        ref={inputRef}
        className="h-12 w-full rounded-l-lg border-2 p-2 text-xl"
        type="text"
        name="filter"
        placeholder="Search..."
        value={searchValue}
        onChange={handleOnChange}
      />
      <button
        className="h-12 w-12 rounded-r-lg border-t-2 bg-white text-center"
        onClick={handleClear}
      >
        ✖️
      </button>
    </div>
  );
};
