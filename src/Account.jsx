import React, {useState} from "react";
import Profile from "./Profile";
import Login from "./Login";

function Account(){
    const [user, updateUser] = useState(
        {
            fName: "Matt",
            lName: "Means",
            userName:"Mr. Jupiter",
            age: "32",
            email: "mattymeans@gmail.com",
            color: "bg-green-500",
            loggedin: false,
        }
    );
    const [accountOpen, toggleOpen] = useState(true)

    function accountClicked(){
        toggleOpen(!accountOpen)
    }

    function changeColor(color){
        updateUser(prevUserData => ({
            ...prevUserData,
            color: color
        }));
    }

    return(
        <div className="border-l-4 rounded-l-3xl border-purple-300/30 w-[20rem] min-h-full relative">
            {
                user.loggedin
                ?
                <div className="w-full h-full p-2 flex flex-col">
                    <h1 className={[`text-center text-2xl cursor-default ${user.color} rounded-2xl border-1 chewy-regular`]}>{user.userName}</h1>
                    <h2 className="text-center cursor-default">{user.fName} {user.lName}</h2>
                    <button className="text-[0.75rem] active:text-blue-500 cursor-pointer">Settings ⚙️</button>
                </div>
                :
                <button className="w-full h-full rounded-l-3xl text-4xl chewy-regular hover:bg-gray-400/40" onClick={() => (accountClicked())}>
                    Sign in or Sign up!
                </button>
            }

            <div className={[`fixed w-screen h-screen inset-0 bg-gray-700/50 ${accountOpen ? 'visible' : 'hidden'} place-content-center text-center`]}>
                {
                    user.loggedin ? 
                    <Profile 
                        fName = {user.fName}
                        lName = {user.lName}
                        userName = {user.userName}
                        age = {user.age}
                        email = {user.email}
                        color = {user.color}
                        colorSelect = {changeColor}
                        onExit = {accountClicked}
                    />:
                    <Login />
                }
            </div>
        </div>
    )
}

export default Account;