import { useState } from "react";
import {BRAND_LOGO} from "../../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";


const Header = ()=>{
    const [btnNameReact,setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus()
    return (
        <div className="header">
            <div className="logo-container">
                <img src={BRAND_LOGO} alt="company_logo"/ >
            </div> 
            <div className="nav-items">
                <ul>
                    <li>Online Status {onlineStatus ? "🟢" : "🔴"}</li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contactus'>Contact Us</Link></li>
                    <li><Link to='/grocery'>Grocery</Link></li>
                    <li><Link to='/cart'>Cart</Link></li>
                    <button className="login" onClick={()=>btnNameReact === 'Login' ? setBtnNameReact("Logout"): setBtnNameReact("Login")}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;