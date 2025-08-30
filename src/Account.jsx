import React, {useState} from "react";

function Account(){
    const [user, updateUser] = useState(
        {
            fName: "",
            lName: "",
            userName:"",
            color: "bg-white"
        }
    );
    const [accountOpen, toggleOpen] = useState(true)

    function accountClicked(){
        toggleOpen(!accountOpen)
    }

    return(
        <div className="border-l-4 rounded-l-3xl border-purple-300/30 w-[20rem] min-h-full relative">
            {
                user.userName == "" 
                ?
                <button className="w-full h-full rounded-l-3xl text-4xl chewy-regular hover:bg-gray-400/40" onClick={() => (accountClicked())}>
                    Sign in or Sign up!
                </button>
                :
                <div className="w-full h-full p-2 flex flex-col">
                    <h1 className={[`text-center text-2xl cursor-default ${user.color} rounded-2xl border-1 chewy-regular`]}>{user.userName}</h1>
                    <h2 className="text-center cursor-default">{user.fName} {user.lName}</h2>
                    <button className="text-[0.75rem] active:text-blue-500 cursor-pointer">Settings ⚙️</button>
                </div>
            }

            <div className={[`fixed w-screen h-screen inset-0 bg-gray-700/50 ${accountOpen ? 'visible' : 'hidden'} place-content-center text-center`]}>
                <div className="bg-white border-5 rounded-3xl w-[80vw] h-[80vh] md:w-[50vw] md:h-[50vh] place-self-center flex flex-col p-10">
                    <button className="border-2 w-[2rem] place-self-end" onClick={() => (accountClicked())}>❌</button>
                </div>
            </div>
        </div>
    )
}

export default Account;