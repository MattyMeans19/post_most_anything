
function Login(props){
    return(
        <div className="bg-white border-5 rounded-3xl w-[80vw] h-[90vh] md:w-[50vw] md:h-[50vh] place-self-center flex flex-col gap-15 p-10 chewy-regular">
            <button className="border-2 w-[2rem] place-self-end hover:bg-gray-500/20" onClick={() => (props.onExit())}>❌</button>
            <input type="text" id="username" placeholder="Username or Email" className="text-center border-3 rounded-3xl p-3 w-[25rem] place-self-center"/>
            <input type="password" id="password" placeholder="Password" className="text-center border-3 rounded-3xl p-3 w-[25rem] place-self-center"/>
            <button className="primaryButton w-[15rem] place-self-center">Login</button>
        </div>
    )
}

export default Login;