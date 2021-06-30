import React from 'react'
import './Home.css'
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom";
import habits from '../../pages/PublicRouteTwo/habits.jpeg'

const quote={
  color:'white',
  fontSize:'18px',
  fontFamily: 'Benne, serif',
  display:'flex',
  justifyContent:'center',
  marginTop:'190px',
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
  paddingTop:'20px',
}
const middleInfo={
  display:'flex',
  justifyContent:'center',
  color:'#222222',
  margin:'30px',
  fontSize:'15px',
  fontWeight:'bold',
  fontFamily: 'Old Standard TT, serif',
 }
 const authorName={
   color:'gray',
   fontSize:'12px',
   fontFamily: 'Quicksand, sans-serif',
  
 }
 const genre={
   color:'#222222',
  fontSize:'12px',
  fontFamily: 'Quicksand, sans-serif',
  
 }
 const articleTitle={
   color:'black',
   fontFamily: 'Quicksand, sans-serif',
   fontSize:'25px'
   
 }
 const articleDesc={
  color:'#222222',
  fontFamily: 'Sans-serif',
  fontSize:'12px',
width:'400px'
 }
 const videoOne={
  display:'flex',
  justifyContent:'center',
  boxShadow: '5px 5px 10px'
}
const vidBtns={
  fontFamily: 'Economica, sans-serif',
    fontSize: '18px',
    fontWeight:'900px',
    color:'black',
    marginLeft:'10px'
}
const colh1={
  fontFamily:'Georgia, Times New Roman, Times, serif',
  fontSize:'25px',
}
const colp={
fontFamily:'Georgia, Times New Roman, Times, serif',
fontSize:'14px',
marginTop:'20px',
paddingRight:'30px'
}
const cola={
color:'teal'
}
const veganImg={
  width:'430px',
  height:'500px'
 }
const homeAtag = {
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
  
<a style={homeAtag} href='https://lifeandhealth.org/lifestyle/can-your-diet-and-lifestyle-affect-your-vision/1611990.html'>
<div className='partUno1'></div>  
<div className='partDos'>
<div><span style={authorName}>JUSTIN LEAL</span> | <span style={genre}>DIET</span></div>
<h1 style={articleTitle}><strong>Diet and Lifestyle</strong></h1>
<p style={articleDesc}>Can your diet and lifestyle affect your vision?</p>
</div>
</a>
</div> 

<div className='storyDos'>
  <a style={homeAtag} href='https://lifeandhealth.org/lifestyle/how-to-get-better-sleep/1717188.html'>
<div className='partUno2'></div>  
<div className='partDos'>
<h4><span style={authorName}>HARVEY HAHN</span> | <span style={genre}>FITNESS</span></h4>
<h1 style={articleTitle}><strong>Sleep Benefits</strong></h1>
<p style={articleDesc}>How To Get Better Sleep</p>
</div>
</a>

</div> 

  
</div>



<div className='storySecOne'>

<div className='storyUno'>
<a style={homeAtag} href='https://lifeandhealth.org/healing/natural-remedies-a-brief-history/1711827.html'>
<div className='partUno3'></div>  
<div className='partDos'>
<h4><span style={authorName}>GRACE JAUWENA</span> | <span style={genre}>BODY-HEALTH</span></h4>
<h1 style={articleTitle}><strong>Earthly Solutions</strong></h1>
<p style={articleDesc}>A Brief History of Natural Remedies</p>
</div>
</a>
</div> 

<div className='storyDos'>
<a style={homeAtag} href='https://lifeandhealth.org/food/why-plant-based/an-interview-with-a-plant-based-doctor-and-autoimmune-disease-cookbook-author/0815050.html'>
<div className='partUno4'></div>  
<div className='partDos'>
<h4><span style={authorName}>GRACE JAUWENA</span> | <span style={genre}>BODY-HEALTH</span></h4>
<h1 style={articleTitle}><strong>Healthy Lifestyle</strong></h1>
<p style={articleDesc}>Sitting Down With Plant-Based Doctor And Autoimmune Disease Cookbook Author, Dr. Joyce Choe</p>
</div>
</a>
</div> 

</div>



<div className='storySecOne'>

<div className='storyUno'>
<a style={homeAtag} href='https://lifeandhealth.org/fitness/the-7-keys-to-a-long-and-healthy-life-exercise/0214317.html'>
<div className='partUno5'></div>  
<div className='partDos'>
<h4><span style={authorName}>WESTNEY WHITE</span> | <span style={genre}>FITNESS</span></h4>
<h1 style={articleTitle}><strong>Fitness Lifestyle</strong></h1>
<p style={articleDesc}>The 7 keys to a long and healthy life: Exercise</p>
</div>
</a>
</div> 

<div className='storyDos'>
<a style={homeAtag} href='https://lifeandhealth.org/fitness/5-ways-to-keep-your-motivation-to-exercise/1514065.html'>
<div className='partUno6'></div>  
<div className='partDos'>
<h4><span style={authorName}>WESTNEY WHITE</span> | <span style={genre}>FITNESS</span></h4>
<h1 style={articleTitle}><strong>Fitness Lifestyle</strong></h1>
<p style={articleDesc}>5 Ways to keep your motivation to exercise</p>
</div>
</a>
</div> 
</div>

<div className='viewMore'>
  <div className='viewMore2'><h3>MORE STORIES +</h3></div>
  </div>


<div className='middleSection2'>
  <p style={middleInfo}>“To ensure good health: eat lightly, breathe deeply, live moderately, cultivate cheerfulness, and maintain an interest in life.” 
  <span style={quoter}><br/>-William Londen</span></p>
  </div>

  <div className='vidOfTheDay'>
<div className='vidHeader'>
        <div class="vl"></div>
        <div><h1 className='blog'>FEATURED FILM</h1></div>
        <div class="vl"></div>
    </div>

    <div className='vidBtns'>
<Link className="btn" to="/film"><h2 style={vidBtns}> SEE FILMS > </h2></Link>
</div>

<div className='videoOne'>
        <ReactPlayer style={videoOne} url='https://www.youtube.com/watch?v=3xW2uv_VsqQ'
        onReady={() => console.log('onReady callback')}
        onStart={() => console.log('onStart callback')}
        onPause={() => console.log('onPause callback')}
        onEnded={() => console.log('onEnded callback')}
        onError={() => console.log('onError callback')}
        />
        </div>
  </div>
<div className='homePageBlog'>
  <div className='vidHeader'>
        <div class="vl"></div>
        <div><h1 className='blog'>FEATURED BlOG</h1></div>
        <div class="vl"></div>
    </div>

    <div className='vidBtns'>
<Link className="btn" to="/blog"><h2 style={vidBtns}> SEE BLOGS > </h2></Link>
</div>
<div className="homeblogContainer">
<div id="col-3">
<h1 style={colh1}>From Dieting to Healthy Eating Habits</h1>
  <p style={colp}>I am no stranger to dieting. Over the years, I followed many different weight-loss plans.</p>
  <a style={cola}>Read More ></a>
</div>
<div id="col-2">
<img style={veganImg} src={habits}/>
</div>
</div>
</div>
</div>




      
    </div> 
    )
}


export default PublicRoute