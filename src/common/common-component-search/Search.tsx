import { AiOutlineSearch } from "react-icons/ai";

function Search() {
  return (
    <div className="bg-blackDDS rounded-lg h-11 flex items-center justify-start py-2 px-2 gap-5">
      <AiOutlineSearch
        data-testid="search-icon"
        className="text-white h-6 w-6"
      />
      <input
        type="text"
        placeholder="Search"
        className="text-white text-base flex-1 focus:outline-none"
      />
    </div>
  );
}

export default Search;
