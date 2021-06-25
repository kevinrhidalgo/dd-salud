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

  useEffect(() => {

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    }
  }, [])


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
      
      <div className={`${open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
        {user.username ? <span className="userText text-white ml-3 pt-1" to="#">Hi {user.username} !</span> : ""}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item ">
            <Link style={buttonStyle} className=" btn btn-secondary" to="/home">Home</Link>
            <Link style={buttonStyle} className=" btn btn-secondary" to="/blog">Blog</Link>
            <Link style={buttonStyle} className=" btn btn-secondary" to="/videos">Videos</Link>

            <Link style={buttonStyle} className="btn btn-danger" to="/planner">planner</Link>
            <Link style={buttonStyle} className="btn btn-danger" to="/recipes">Recipes</Link>
            </li>

</ul>
<Link className="navbar-brand" to="/">
        <div>Salud.</div>
        </Link>
<ul className="navbar-nav ml-auto">
          <li className="nav-item ">
            
            {user.username ? "" :
              <Link style={buttonStyle} className="btn btn-warning" to="/register">Register a New User</Link>
            }
            <AuthButton />
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Nav;
