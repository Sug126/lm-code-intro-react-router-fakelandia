import { NavLink } from "react-router-dom";

const Header = () =>{
    return(
        <nav>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/Confession'>Confession</NavLink></li>
                <li><NavLink to='/Misdemeanour'>Misdemeanour</NavLink></li>
            </ul>
        </nav>
    )
}


export default Header