

function Profile(props){
    return(
        <div className="bg-white border-5 rounded-3xl w-[80vw] h-[90vh] md:w-[50vw] md:h-[50vh] place-self-center flex flex-col md:grid grid-cols-7 grid-rows-10 gap-4 p-10 chewy-regular">
            <button className="border-2 w-[2rem] col-start-7 row-span-1 place-self-end" onClick={() => (props.onExit())}>❌</button>
            <span className="text-4xl row-start-2 row-span-2 col-span-full border-b-4">Account Settings</span>
            <div className="row-start-4 row-span-3 col-span-2">
                <div className="inline-flex flex-col gap-5 text-start text-2xl">
                    <span>Username: <span className={[`${props.color} rounded-2xl border-1 px-2`]}>{props.userName}</span></span>
                    <span>Name: {props.fName} {props.lName}</span>
                    <span>Age: {props.age}</span>
                    <span>email: {props.email}</span> 
                </div>
            </div>
            <div className="row-start-4 col-start-3 col-span-5 inline-flex flex-row gap-2 md:gap-5 justify-center">
                <button className="border-1 bg-red-500 w-[30px] h-[1.5rem] md:size-[1.5rem]" onClick={() => props.colorSelect("bg-red-500")}></button>
                <button className="border-1 bg-blue-500 w-[30px] h-[1.5rem] md:size-[1.5rem]" onClick={() => props.colorSelect("bg-blue-500")}></button>
                <button className="border-1 bg-green-500 w-[30px] h-[1.5rem] md:size-[1.5rem]" onClick={() => props.colorSelect("bg-green-500")}></button>
                <button className="border-1 bg-yellow-500 w-[30px] h-[1.5rem] md:size-[1.5rem]" onClick={() => props.colorSelect("bg-yellow-500")}></button>
                <button className="border-1 bg-orange-500 w-[30px] h-[1.5rem] md:size-[1.5rem]" onClick={() => props.colorSelect("bg-orange-500")}></button>
                <button className="border-1 bg-purple-500 w-[30px] h-[1.5rem] md:size-[1.5rem]" onClick={() => props.colorSelect("bg-purple-500")}></button>
                <button className="border-1 bg-pink-500 w-[30px] h-[1.5rem] md:size-[1.5rem]" onClick={() => props.colorSelect("bg-pink-500")}></button>
                <button className="border-1 bg-cyan-500 w-[30px] h-[1.5rem] md:size-[1.5rem]" onClick={() => props.colorSelect("bg-cyan-500")}></button>
                <button className="border-1 bg-emerald-500 w-[30px] h-[1.5rem] md:size-[1.5rem]" onClick={() => props.colorSelect("bg-emerald-500")}></button>
                <button className="border-1 bg-fuchsia-500 w-[30px] h-[1.5rem] md:size-[1.5rem]" onClick={() => props.colorSelect("bg-fuchsia-500")}></button>
                <button className="border-1 bg-amber-500 w-[30px] h-[1.5rem] md:size-[1.5rem]" onClick={() => props.colorSelect("bg-amber-500")}></button>
            </div>
            <div className="row-start-5 col-start-4 col-span-3 inline-flex flex-row gap-5 justify-center text-3xl">
                <label htmlFor="explicit">Show Explicit Content</label>
                <input type="checkbox" id="explicit" className="size-[1.5rem] place-self-center md:place-self-end"/>
            </div>
            <div className="row-start-7 text-2xl col-start-4 col-span-4 inline-flex flex-col md:flex-row gap-5 justify-center">
                <label htmlFor="password">Change Password</label>
                <input type="text" id="password" className="border-1 rounded-2xl p-5" autoComplete="off"/>
            </div>
            <button className="primaryButton w-full h-full row-start-9 row-span-2 col-start-5 col-span-2">Save</button>
        </div>     
    )
}

export default Profile;