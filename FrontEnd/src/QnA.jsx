import NavBar from "./NavBar"
import Head from "./Head"
import Search from "./Search";
import React, {useState} from "react";

function QnA(){
    return(
        <div className='container'>
            <Head />
            <NavBar />
            <div className="content">
                <h1 className="title chewy-regular">Q & A</h1>
                <Search />
            </div>
        </div>
    )
}

export default QnA;