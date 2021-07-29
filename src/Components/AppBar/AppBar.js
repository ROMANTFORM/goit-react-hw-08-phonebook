import { NavLink } from "react-router-dom";
import routes from "../../routes";
import "./AppBar.module.css";

const AppBar = () => {

    return (
        <>
            
        <nav className="Nav-Container">
            <div className="Nav-Container__left">
                <NavLink to={routes.about}>About</NavLink>
                <NavLink to={routes.contact}>Contact</NavLink>
            </div>
            <div className="Nav-Container__right">
                <NavLink to={routes.login}>Log in</NavLink>
                <NavLink to={routes.signup}>Sign up</NavLink>
            </div>
        </nav>
            
        <div className="Container">
               
        </div>
            
        </>
        
    )
};

export default AppBar;

