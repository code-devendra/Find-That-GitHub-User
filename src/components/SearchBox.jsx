import { useState } from "react";

const SearchBox = ({ setName }) => {
  const [username, setUsername] = useState("");
  return (
    <div className=" w-11/12 max-w-sm mx-auto m-7 text-center">
      <input
        className="w-full pb-1 pl-2 text-lg border-b-2 border-slate-500 text-slate-700 outline-none"
        type="text"
        placeholder="Type username eg. code-devendra"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          setName(username);
        }}
        className=" w-1/5 py-2 my-3 rounded-md text-slate-50 font-semibold bg-indigo-600 hover:bg-indigo-700 "
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;
