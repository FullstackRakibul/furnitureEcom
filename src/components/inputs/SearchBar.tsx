import { ChangeEvent, useId, useState } from "react";
import { TbSearch } from "react-icons/tb";
const SearchBar = () => {
  const [query, setQuery] = useState("");
  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const id = useId();
  return (
    <div className="p-2 shadow-md md:shadow-none md:p-0">
      <div
        className="
        md:flex-row-reverse
        relative border-2 flex dark:bg-slate-900
              dark:border-gray-700 
              dark:text-gray-400"
      >
        <div className="text-gray-400 text-2xl flex items-center justify-center p-2">
          <TbSearch className="" />
        </div>
        <div className="flex-1">
          <label htmlFor={id} className="sr-only">
            Search
          </label>
          <input
            onChange={handleSearchInput}
            value={query}
            type="text"
            name="hs-table-with-pagination-search"
            id={id}
            className="
        p-3 block w-full 
        bg-inherit
        text-inherit
        border-gray-200 
            rounded-md 
            text-sm focus:border-blue-500
             focus:ring-blue-500
              "
            placeholder="Search for items"
          />
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
