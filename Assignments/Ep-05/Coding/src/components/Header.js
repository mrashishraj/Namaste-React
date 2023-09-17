import { LOGO_URL } from "../utils/constants"





const Header = () =>{
    return(
        <div className="navContainer">
            <div className="logoBox">
                <img className="logoImage" src={LOGO_URL} alt="logo" />
            </div>
            <div className="navBtn">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contect Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header