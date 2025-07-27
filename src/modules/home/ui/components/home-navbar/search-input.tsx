import { SearchIcon } from "lucide-react";

export const SearchInput = () => {
  return (
    <form className="flex w-full max-w-[600px]">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-4 pr-12 py-2 rounded-l-full border focus:outline-none focus:border-blue-500"
        />
      </div>
      <button className="px-4 py-2 border border-l-0 rounded-r-full bg-gray-100">
        <SearchIcon className="size-5" />
      </button>
    </form>
  );
};
