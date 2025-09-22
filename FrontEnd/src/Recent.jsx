import NavBar from "./NavBar"
import Head from "./Head"
import Search from "./Search";
import React, {useState} from "react";

function Recent(){
    return(
        <div className='container'>
            <Head />
            <NavBar />
            <div className="content">
                <h1 className="title chewy-regular">Recent</h1>
                <Search />
            </div>
        </div>
    )
}

export default Recent;