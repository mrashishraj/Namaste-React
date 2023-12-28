import { lazy, useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/onlineStatus"



const Header = () =>{
    const [btnName,setBtnName] = useState("login")
    const onlineStatus = useOnlineStatus()

    
    return(
        <div className="flex justify-between shadow-lg">
            <div className="logoBox">
                <img className="w-24" src={LOGO_URL} alt="logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="p-2 m-3 shadow-md rounded-md bg-blue-100">Online Status : {onlineStatus?"✅":"⛔️"} </li>
                    <li className="p-2 m-3 shadow-md rounded-md bg-blue-100"><Link to="/"> Home</Link></li>
                    <li className="p-2 m-3 shadow-md rounded-md bg-blue-100"><Link to="about"> About</Link></li>
                    <li className="p-2 m-3 shadow-md rounded-md bg-blue-100"><Link to="contact">Contect Us</Link> </li>
                    <li className="p-2 m-3 shadow-md rounded-md bg-blue-100">Cart</li>
                    <li className="p-2 m-3 shadow-md rounded-md bg-blue-100"> <button onClick={handleClick=>{btnName==="login"? setBtnName("logout"):setBtnName("login")}}>{btnName}</button> </li>
                </ul>
            </div>
        </div>
    )
}

export default Header