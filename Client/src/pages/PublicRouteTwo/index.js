import { DocumentProvider } from 'mongoose'
import React from 'react'
import './Blog.css'


const footerInfo={
  color:'#222222',
  marginTop:'20px',
  padding:'10px',
  display:'flex',
  justifyContent:'center',
  fontSize:'23px',
  fontWeight:'bold',
  fontFamily: 'Economica, sans-serif',
  textDecoration:'none'
 }
const pTagBlog={
  fontFamily: 'sans-serif',
  fontSize:'12px',
  width:'230px',
  display:'flex',
  justifyContent:'center',
  padding:'10px',
}
const colabLook={
  backgroundColor:'#89981a',
  color:'white',
  fontFamily: 'Economica, sans-serif',
  display:'flex',
  justifyContent:'center',
  height:'50px',
  paddingTop:'11px',
  fontSize:'20px',
  textDecoration:'none'

  }


//simple page that is public that does not need authentication

function PublicRouteTwo() {

    return (
        <div className='blogSpot'>

<div className='vidHeader'>
        <div class="vl"></div>
        <div><h1 className='blog'>THE BLOG SPOT</h1></div>
        <div class="vl"></div>
</div>

<div className='firstBlog'>
<div className="blogContainer">
<div id="col-1">
  <h1>This is half of a page</h1>
</div>
<div id="col-2">
  <h1>This is another half of a page</h1>
</div>
</div>
<div className='blogCollab'>
  
  <h1 style={footerInfo}>Collaborate with us</h1>
  <div class="colabVl"></div>
  <p style={pTagBlog}>We are still growing. Whether it has to do with the application to ideas itself to implement. It would be a pleasure to hear what
    you think and any collaborations you'd like to add. Whether it's a story blog or even a mini cooking film of your own. 
  </p>

  <div>
  <a style={colabLook} href="mailto:kevinrhidalgo@yahoo.com">Collaborate</a>
  </div>

  </div>
</div>


<div class="blogVl"></div>


<div className="blogContainer">
<div id="col-1">
  <h1>This is half of a page</h1>
</div>
<div id="col-2">
  <h1>This is another half of a page</h1>
</div>
</div>


<div class="blogVl"></div>

<div></div>
<div className="blogContainer">
<div id="col-1">
  <h1>This is half of a page</h1>
</div>
<div id="col-2">
  <h1>This is another half of a page</h1>
</div>
</div>



<div class="blogVl"></div>


<div className="blogContainer">
<div id="col-1">
  <h1>This is half of a page</h1>
</div>
<div id="col-2">
  <h1>This is another half of a page</h1>
</div>
</div>




    </div> 
    )
}


export default PublicRouteTwo