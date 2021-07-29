import { NavLink } from "react-router-dom";
import routes from "../routes";

const AuthBar = () => {
    return (
        <div className="Nav-Container__right">
            <NavLink to={routes.login} className="link" activeClassName="active-link">Log in</NavLink>
            <NavLink to={routes.signup} className="link" activeClassName="active-link">Sign up</NavLink>
        </div>
    );
};

export default AuthBar;