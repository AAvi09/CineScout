import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/CineScout🎥📺.png";

const Header = ({ query, setQuery }) => {
  return (
    <div>
      <div className="w-screen h-32 bg-gradient-to-r from-zinc-800 to-black text-white flex  ">
        <img src={logo} className="object-cover rounded-4xl" />

        <div className="w-6xl bg-gradient-to-r from-amber-500 to-amber-800  rounded-2xl items-center justify-center flex">
          <Link to="/home">
            <button className="bg-zinc-900 p-4 m-4 rounded-2xl cursor-pointer hover:bg-gray-800">
              Home
            </button>
          </Link>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Movies Here"
            className="bg-neutral-900 text-fuchsia-50 text-xl p-4 m-4 rounded-xl  w-2xl"
          />
          <button className="bg-gradient-to-l from-black to-gray-600 p-4 m-4 rounded-2xl cursor-pointer hover:bg-gray-800">
            Search
          </button>
        </div>
        <div className="text-white rounded-lg p-4 m-4 h-10 items-center justify-center bg-gray-800">
          <Link to="/favorites">Favorites</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
