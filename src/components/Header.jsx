const Header = ({ sortBy, setSortBy, searchTerm, setSearchTerm }) => {
  const searchTermChangeHandler = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  const sortChangeHandler = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <header className="mx-auto mb-8 lg:mb-10 max-w-7xl">
      <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
        <div>
          <h6 className="mb-2 text-base lg:text-xl">Trending on 2021</h6>
          <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
            Trending Books of the Year
          </h2>

          <form>
            <div className="flex">
              <div className="relative w-full overflow-hidden rounded-lg border-2 border-[#1C4336] text-[#1C4336] md:min-w-[380px] lg:min-w-[440px]">
                <input
                  required
                  type="search"
                  value={searchTerm}
                  id="search-dropdown"
                  placeholder="Search Book"
                  onChange={searchTermChangeHandler}
                  className="z-20 block w-full bg-white px-4 py-2.5 pr-10 text-[#1C4336] placeholder:text-[#1C4336] focus:outline-none"
                />
                <div className="absolute top-0 right-0 flex items-center h-full">
                  <button
                    type="submit"
                    className="mr-1.5 flex items-center space-x-1.5 rounded-md rounded-e-lg bg-[#1C4336] px-4 py-2.5 text-sm text-white"
                  >
                    <svg
                      className="h-[14px] w-[14px]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span>Search</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="flex items-stretch space-x-3">
          <select
            id="sortBy"
            name="sortBy"
            value={sortBy}
            onChange={sortChangeHandler}
            className="px-4 py-2 text-center text-gray-600 border rounded-md cursor-pointer"
          >
            <option value="">Sort</option>
            <option value="name_asc">Name (A-Z)</option>
            <option value="name_desc">Name (Z-A)</option>
            <option value="year_asc">Publication Year (Oldest)</option>
            <option value="year_desc">Publication Year (Newest)</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
