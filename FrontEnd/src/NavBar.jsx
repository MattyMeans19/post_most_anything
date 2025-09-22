import React from "react";
import { NavLink } from "react-router";

function NavBar(){
    return(
        <div className='md:row-start-2 md:row-span-9 md:col-span-1 md:left-0 border-b-5 md:border-r-5 pt-10 border-purple-900/30 flex flex-row md:flex-col gap-10'>
            <NavLink to="/" className='sidebarOptions'>Popular</NavLink>
            <NavLink to="/recent" className='sidebarOptions'>Recent</NavLink>
            <NavLink to="/forums" className='sidebarOptions'>Forums</NavLink>
            <NavLink to="/qna" className='sidebarOptions'>Q&A</NavLink>
        </div>
    )
}

export default NavBar;