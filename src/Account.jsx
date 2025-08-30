import React, {useState} from "react";

function Account(){
    const [user, updateUser] = useState("");

    return(
        <div className="border-l-4 rounded-l-3xl border-purple-300/30 w-[20rem] min-h-full">
            {
                user == "" 
                ?
                <button className="w-full h-full rounded-l-3xl text-4xl chewy-regular hover:bg-gray-400/40">
                    Sign in or Sign up!
                </button>
                :
                <div className="w-full h-full">
                    <h1>Account Info</h1>
                </div>
            }
        </div>
    )
}

export default Account;