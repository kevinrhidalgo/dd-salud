import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import Login from "../LoginForm";
import AuthButton from "../AuthButton";
import { UserContext } from "../../utils/UserContext";
//I want to add some basic inline styling here, even though we are bringing in styles
const buttonStyle = {
  marginRight: 10
};

function Nav() {

  const [user, dispatch] = useContext(UserContext);

  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    if (open && width > 991) {
      setOpen(false);
    }
    setWidth(window.innerWidth)
  };

  // const toggleNav = () => {
  //   setOpen(!open);
  // };

const navBar1={
  backgroundColor:"white",
}

  useEffect(() => {

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    }
  }, [])


  return (
    <nav style={navBar1} className="navbar navbar-expand-lg navbar-secondary mb-2">
      <Link className="navbar-brand" to="/">
        <div>Salud.</div>
        </Link>
      <div className={`${open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
        {user.username ? <span className="userText text-white ml-3 pt-1" to="#">Hi {user.username} !</span> : ""}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item ">
            <Link style={buttonStyle} className=" btn btn-secondary" to="/public">Public</Link>
            <Link style={buttonStyle} className=" btn btn-secondary" to="/publicTwo">PublicTwo</Link>
            <Link style={buttonStyle} className="btn btn-danger" to="/protected">Protected</Link>
            <Link style={buttonStyle} className="btn btn-danger" to="/protectedTwo">protectedTwo</Link>
            {user.username ? "" :
              <Link style={buttonStyle} className="btn btn-warning" to="/register">Sign Up</Link>
            }
            <AuthButton />
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Nav;
