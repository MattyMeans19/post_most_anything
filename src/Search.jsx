import React from "react";

function Search(){
    return(
        <div className="mx-10 border-b-5 border-purple-700/20 flex flex-nowrap justify-between">
           <input className="w-full border-2 border-gray-400/50 rounded-3xl pl-2" placeholder="Search for content"></input>
           <button className="bg-gray-500/10 rounded-2xl p-2 text-2xl active:bg-gray-500">🔎</button>
        </div>
    )
}

export default Search;