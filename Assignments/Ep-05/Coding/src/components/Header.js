import { lazy, useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/onlineStatus"



const Header = () =>{
    const [btnName,setBtnName] = useState("login")
    const onlineStatus = useOnlineStatus()

    
    return(
        <div className="navContainer">
            <div className="logoBox">
                <img className="logoImage" src={LOGO_URL} alt="logo" />
            </div>
            <div className="navBtn">
                <ul>
                    <li>Online Status : {onlineStatus?"✅":"⛔️"} </li>
                    <li><Link to="/"> Home</Link></li>
                    <li><Link to="about"> About</Link></li>
                    <li><Link to="contact">Contect Us</Link> </li>
                    <li>Cart</li>
                    <li> <button onClick={handleClick=>{btnName==="login"? setBtnName("logout"):setBtnName("login")}}>{btnName}</button> </li>
                </ul>
            </div>
        </div>
    )
}

export default Header