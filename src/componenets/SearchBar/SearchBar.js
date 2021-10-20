import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./SearchBar.scss";

function SearchBar() {
  const { push } = useHistory();
  const [profileName, setProfileName] = useState("");
  const [recentSearches, setRecentSearches] = useState(
    localStorage.getItem("recent-searches")
      ? JSON.parse(localStorage.getItem("recent-searches"))
      : []
  );
  const [inputFocused, setInputFocused] = useState("not-focused");

  const handleDescChange = (e) => {
    setProfileName(e.target.value);
  };

  const handleFocusChange = (status) => {
    status ? setInputFocused("focused") : setInputFocused("not-focused");
  };

  const updateRecentSearches = () => {
    if (localStorage.getItem("recent-searches") !== null) {
      let recentSearchesStorage = JSON.parse(
        localStorage.getItem("recent-searches")
      );
      recentSearchesStorage.unshift(profileName);
      localStorage.setItem(
        "recent-searches",
        JSON.stringify(recentSearchesStorage.slice(0, 3))
      );
    } else {
      localStorage.setItem("recent-searches", JSON.stringify([profileName]));
    }
    setRecentSearches(JSON.parse(localStorage.getItem("recent-searches")));
  };

  const handleSearch = () => {
    push({
      pathname: `/${profileName}`,
    });
    updateRecentSearches();
  };

  const handleClick = (redirect) => {
    push({
      pathname: `/${redirect}`,
    });
  };

  const displayRecentSearches = () => {
    if (recentSearches.length > 0) {
      return (
        <div className="recent-searches">
          <span>Recent Searches</span>
          {recentSearches.map((search) => {
            return (
              <div className="recent-search" key={search}>
                <Link to={`/${search}`} onMouseDown={() => handleClick(search)}>
                  {search}
                </Link>
              </div>
            );
          })}
        </div>
      );
    }
  };

  return (
    <div id="search-bar" className={"relative h-16 -top-8 " + inputFocused}>
      <div className="container h-full">
        <div className="flex items-center justify-between bg-gray-darker rounded-lg h-full">
          <div className="flex items-center flex-1">
            <span className="fa fa-search text-indigo-dark mx-4"></span>
            <input
              type="text"
              className="block outline-none	w-full bg-transparent font-body text-sm tracking-wider text-body-light"
              placeholder="Search by profile name..."
              onBlur={() => handleFocusChange(false)}
              onFocus={() => handleFocusChange(true)}
              spellCheck="false"
              onChange={handleDescChange}
            />
          </div>

          <div className="mr-4">
            <button
              type="button"
              className="cursor-pointer	font-body py-2.5 px-5 rounded-lg text-white outline-none bg-indigo-dark transition-colors	duration-300 ease-in-out hover:bg-indigo-darker focus:bg-indigo-darker"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
        {/* {displayRecentSearches()} */}
      </div>
    </div>
  );
}

export default SearchBar;
