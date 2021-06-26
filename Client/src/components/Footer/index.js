import React from "react";
import "./Footer.css";

const footerBg={
  backgroundColor:'white',
  height:'200px',
  display:'flex',
  justifyContent:'center'
}
const footerInfo={
 color:'#222222',
 margin:'30px',
 fontSize:'15px',
 fontWeight:'bold',
 fontFamily: 'Old Standard TT, serif'
}
const myTitle={
  fontFamily:'Lobster Two, cursive',
  fontSize:'30px',
}

function Footer() {

  
  return (
    <div className='myFooter'>
    <nav style={footerBg} className="navbar navbar-expand  ">
      <div className="footerInfo">
      <p style={footerInfo}>Collaborate with Us</p>
  <p style={footerInfo}>Contact Us </p>   
    <p style={footerInfo}><span style={myTitle}>Salud.</span></p>
    <p style={footerInfo}>FAQ</p>
   <p style={footerInfo}> © 2021. Kevin Hidalgo</p>
   </div>
    </nav>
    </div>
  );
}

export default Footer;
