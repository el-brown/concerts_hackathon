import React, { useContext } from "react";
import { Menu } from "semantic-ui-react";
import { Link, useHistory, withRouter } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = (props) => {
  let history = useHistory();
  const { user, handleLogout } = useContext(AuthContext);
  const { location } = props;

  const rightNavItems = () => {
    if (user) {
      return (  
      <>
      <Link to="/createconcert">
        <Menu.Item active={location.pathname == "/createconcert"}>Create Concert</Menu.Item>
      </Link>
      <Link to='/user/'>
        <Menu.Item active={location.pathname == "/user/"}>Profile</Menu.Item>
      </Link>
        <Menu.Item onClick={() => handleLogout(history)}>Logout</Menu.Item>
      </>
      );
    };

      return (
        <>
          <Link to="/login">
            <Menu.Item active={location.pathname == "/login"}>Login</Menu.Item>
          </Link>
          <Link to="/register">
            <Menu.Item active={location.pathname == "/register"}>
              Register
            </Menu.Item>
          </Link>
        </>
      );
    }

  return (
    <Menu>
      <Link to="/">
        <Menu.Item active={location.pathname == "/"}>Home</Menu.Item>
      </Link>
      <Link to="/about">
        <Menu.Item active={location.pathname == "/"}>About</Menu.Item>
      </Link>
      <Link to="/artists">
        <Menu.Item active={location.pathname == "/artists"}>Find Artists</Menu.Item>
      </Link>
      <Link to="/venues">
        <Menu.Item active={location.pathname == "/venues"}>Venues</Menu.Item>
      </Link>
      <Menu.Menu position="right">{rightNavItems()}</Menu.Menu>
    </Menu>
  );
};

export default withRouter(Navbar);

