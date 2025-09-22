import NavBar from "./NavBar"
import Head from "./Head"
import Search from "./Search";
import React, {useState} from "react";

function App() {
  const [popularFeed, updateFeed]= useState("");

  return (
    <div className='container'>
      <Head />
      <NavBar />
      <div className="content">
        <h1 className="title chewy-regular">Popular</h1>
        <Search />
      </div>
    </div>
  )
}

export default App
