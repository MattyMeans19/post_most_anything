import React from "react";
import Logo from "/PMA_Icon.png"
import Account from "./Account";


function Head(){
    return(
        <div className='flex flex-nowrap md:col-span-full md:row-span-1 border-b-10 rounded-b-2xl border-purple-900/30 shadow-xl shadow-gray-700/25'>
            <img src={Logo} className='size-[50px] md:size-[75px]'></img>
            <h1 className='text-4xl md:text-6xl chewy-regular grow cursor-default'>Post 'Most Anything</h1>
            <Account />
         </div>
    )
}

export default Head;