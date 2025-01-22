import React, { useEffect, useState } from "react";

export const Search = ({food, setFood}) => {

    const [query, setQuery] = useState("");

    useEffect(() => {
        async function setSearch() {
        const res = await fetch(`${import.meta.env.VITE_API_SEARCH}?query=${query}&apiKey=${import.meta.env.VITE_API_KEY}`);
        const data = await res.json();
        setFood(data.results);
        }
        setSearch();
    }, [query])

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">🍕 Food App</a>
      </div>
      <div className="flex-none gap-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
            onChange={ e => setQuery(e.target.value)}
          />
      </div>
    </div>
  );
};

export default Search;
