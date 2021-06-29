import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';
import "./Footer.css";
import { Link } from "react-router-dom";

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
 fontFamily: 'Old Standard TT, serif',
 textDecoration:'none'
}
const myTitle={
  fontFamily:'Lobster Two, cursive',
  fontSize:'30px',
}

function Footer() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };
  
  return (
    <div className='myFooter'>
    <nav style={footerBg} className="navbar navbar-expand  ">
      <div className="footerInfo">
      <p style={footerInfo}><a style={footerInfo} href="mailto:kevinrhidalgo@yahoo.com">Collaborate with us</a></p>


      <a onClick={openModal}><p style={footerInfo}>Contact us.</p></a>
        <Modal showModal={showModal} setShowModal={setShowModal} />

    <p style={footerInfo}><span style={myTitle}>Salud.</span></p>

    <p style={footerInfo}>FAQ </p>   
    
   <p style={footerInfo}> © 2021. Kevin Hidalgo</p>
   </div>
    </nav>
    </div>
  );
}

export default Footer;
