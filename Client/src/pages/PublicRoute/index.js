import React from 'react'
import './Home.css'

const quote={
  color:'white',
  fontSize:'18px',
  fontFamily: 'Benne, serif',
  display:'flex',
  justifyContent:'center',
  marginTop:'260px',
}
const quoter={
  fontStyle:"italic",
  color:"teal",
  marginTop:'0px'
}
const workingTitle={
  display:'flex',
  justifyContent:'center',
  fontFamily:'Lobster Two, cursive',
  fontSize:'30px',
  paddingTop:'20px'
}
const middleInfo={
  display:'flex',
  justifyContent:'center',
  color:'#222222',
  margin:'30px',
  fontSize:'15px',
  fontWeight:'bold',
  fontFamily: 'Old Standard TT, serif',
  textDecoration:'none'
 }
 
//simple page that is public that does not need authentication

function PublicRoute() {

    return (
        <div className='homePage'>
<div className='homeBackground'>
          <div className='home'>
      <div style ={quote} className='daQuotes'>
        <div className='quoteColumn'>
      “Health is a state of complete harmony of the body, mind and spirit. <br/> When one is free from physical disabilities and mental distractions, <br/> the gates of the soul open.”  
      <p style={quoter} className='quoteColumn'>– B.K.S. Iyengar</p>
      </div> 
      </div>
      </div>
  </div> 

  <div className='middleSection'>
  <h1 style={workingTitle}>About us.</h1>
  <p style={middleInfo}>Salud celebrates healthy lifestyles. 
  From recipes, <br/> to workouts, to how 
  you life or view life. 
  </p>
  </div>

    <div className='homeBody'>

    <div className='vidHeader'>
        <div class="vl"></div>
        <div><h1 className='blog'>STORIES</h1></div>
        <div class="vl"></div>
    </div>

<div className='storySecOne'>

<div className='storyUno'>
<div className='partUno'></div>  
<div className='partDos'></div>
</div> 

<div className='storyDos'>
<div className='partUno'></div>  
<div className='partDos'></div>
</div> 
</div>

<div className='storySecOne'>

<div className='storyUno'>
<div className='partUno'></div>  
<div className='partDos'></div>
</div> 

<div className='storyDos'>
<div className='partUno'></div>  
<div className='partDos'></div>
</div> 
</div>

<div className='storySecOne'>

<div className='storyUno'>
<div className='partUno'></div>  
<div className='partDos'></div>
</div> 

<div className='storyDos'>
<div className='partUno'></div>  
<div className='partDos'></div>
</div> 
</div>
      
    </div>



      
    </div> 
    )
}


export default PublicRoute