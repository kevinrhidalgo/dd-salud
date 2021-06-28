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
<a href='https://lifeandhealth.org/lifestyle/can-your-diet-and-lifestyle-affect-your-vision/1611990.html'>
<div className='partUno1'></div>  
<div className='partDos'>
<h4>JUSTIN LEAL | DIET</h4>
<h1>Diet and Lifestyle</h1>
<p>Can your diet and lifestyle affect your vision?</p>
</div>
</a>
</div> 

<div className='storyDos'>
  <a href='https://lifeandhealth.org/lifestyle/how-to-get-better-sleep/1717188.html'>
<div className='partUno2'></div>  
<div className='partDos'>
<h4>HARVEY HAHN | FITNESS</h4>
<h1>Sleep Benefits</h1>
<p>How To Get Better Sleep</p>
</div>
</a>
</div> 
</div>



<div className='storySecOne'>

<div className='storyUno'>
<a href='https://lifeandhealth.org/healing/natural-remedies-a-brief-history/1711827.html'>
<div className='partUno3'></div>  
<div className='partDos'>
<h4>GRACE JAUWENA | BODY-HEALTH</h4>
<h1>Earthly Solutions</h1>
<p>A Brief History of Natural Remedies</p>
</div>
</a>
</div> 

<div className='storyDos'>
<a href='https://lifeandhealth.org/food/why-plant-based/an-interview-with-a-plant-based-doctor-and-autoimmune-disease-cookbook-author/0815050.html'>
<div className='partUno4'></div>  
<div className='partDos'>
<h4>GRACE JAUWENA | BODY-HEALTH</h4>
<h1>Healthy Lifestyle</h1>
<p>We Sit Down With Plant-Based Doctor And Autoimmune Disease Cookbook Author, Dr. Joyce Choe</p>
</div>
</a>
</div> 

</div>



<div className='storySecOne'>

<div className='storyUno'>
<a href='https://lifeandhealth.org/fitness/the-7-keys-to-a-long-and-healthy-life-exercise/0214317.html'>
<div className='partUno5'></div>  
<div className='partDos'>
<h4>WESTNEY WHITE | FITNESS</h4>
<h1>Fitness Lifestyle</h1>
<p>The 7 keys to a long and healthy life: Exercise</p>
</div>
</a>
</div> 

<div className='storyDos'>
<a href='https://lifeandhealth.org/fitness/5-ways-to-keep-your-motivation-to-exercise/1514065.html'>
<div className='partUno6'></div>  
<div className='partDos'>
<h4>WESTNEY WHITE | FITNESS</h4>
<h1>Fitness Lifestyle</h1>
<p>5 Ways to keep your motivation to exercise</p>
</div>
</a>
</div> 
</div>
      
    </div>



      
    </div> 
    )
}


export default PublicRoute