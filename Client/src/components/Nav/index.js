import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import Login from "../LoginForm";
import AuthButton from "../AuthButton";
import { UserContext } from "../../utils/UserContext";
//I want to add some basic inline styling here, even though we are bringing in styles
const buttonStyle = {
  color:'#222222',
  fontFamily: 'Fira Sans, sans-serif',
};
const pTitle={
  fontFamily: 'Lobster Two, cursive',
  fontSize:'55px',
  color:'#222222',
  color:'#89981a'
}
const navBg={
  backgroundColor:'white',
height:'70px',
marginBottom:'50px'
}

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
    <nav style={navBg} className="navbar navbar-expand  ">
      
      <div className={`${open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
        {user.username ? <span className="userText text-white ml-3 pt-1" to="#">Hi {user.username} !</span> : ""}

        <Link className="btn" to="/home">
        <div style={pTitle}>Salud.</div>
        </Link>    
        <ul className="navbar-nav ml-flex">
          <li className="nav-item ">

            <Link style={buttonStyle} className=" btn " to="/home">
            <div id="loading-btn ">
            <div className='btnStyle'><span>Home</span></div>
</div></Link>

            <Link style={buttonStyle} className=" btn" to="/blog">
            <div id="loading-btn">
            <div className='btnStyle'><span>Blog</span></div>
</div></Link>

            <Link style={buttonStyle} className=" btn" to="/film">
            <div id="loading-btn">
            <div className='btnStyle'><span>Films</span></div>
</div></Link>

            <Link style={buttonStyle} className="btn" to="/planner">
            <div id="loading-btn">
            <div className='btnStyle'><span> Planner </span></div>
</div></Link>

            <Link style={buttonStyle} className="btn" to="/recipes">
            <div id="loading-btn">
            <div className='btnStyle'><span>Recipes</span></div>
</div></Link>
            </li>

</ul>


<ul className="navbar-nav ml-auto">
          <li className="nav-item ">
            
            {user.username ? "" :
              <Link style={buttonStyle} className="btn" to="/register">
            <div id="loading-btn">  
            <div className='btnStyle'><span> Sign Up</span></div>
</div></Link>
            }
            <AuthButton />
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Nav;
