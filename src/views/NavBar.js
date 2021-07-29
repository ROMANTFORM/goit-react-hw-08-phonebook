import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import routes from "../routes";
import AuthBar from "./AuthBar";
import UserBar from "./UserBar";
import * as authSelectors from "../redux/auth/auth-selectors";


const NavBar = ({isAuthenticated}) => {

    return (
        <>
            
        <nav className="Nav-Container">
            <div className="Nav-Container__left">
                <NavLink exact to={routes.home} className="link" activeClassName="active-link">Home</NavLink>
                    <NavLink to={routes.about} className="link" activeClassName="active-link">About</NavLink>
                    <NavLink to={routes.contact} className="link" activeClassName="active-link">Contacts</NavLink>
                </div>

                {isAuthenticated ? <UserBar /> : <AuthBar />}
        </nav>
              
        </>  
    )
};

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getAuthenticated(state),
});

export default connect(mapStateToProps)(NavBar);