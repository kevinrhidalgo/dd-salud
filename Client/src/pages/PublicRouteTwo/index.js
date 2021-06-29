import React from 'react'
import { Link } from "react-router-dom";
import './Blog.css'
import vegan from './vegan.jpeg'
import steps from './smallsteps.jpeg'
import habits from './habits.jpeg'
import diet from './diet.jpeg'

const collabInfo={
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
 height:'350px'
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
  <h1 style={colh1}>How going vegan changed <br/>my life.</h1>
  <p style={colp}>What is the first thing when you hear the phrase, "I am vegan". </p>
  <Link className="btn" to="/vegan-changed-my-life">Read More ></Link>
</div>
<div id="col-2">
<img style={veganImg} src={vegan}/>
</div>
</div>
<div className='blogCollab'>
  
  <h1 style={collabInfo}>Collaborate with us</h1>
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
<div>
<h1 style={colh1}>Small Steps, Big Benefits</h1>
  <p style={colp}>Growing up I never worked out. I chose video games over physical activities. </p>
  <Link className="btn" to="/small-steps-big-benefits">Read More ></Link>
  </div>
</div>
<div id="col-2">
<img style={veganImg} src={steps}/>
</div>
</div>


<div class="blogVl"></div>

<div></div>
<div className="blogContainer">
<div id="col-1">
<h1 style={colh1}>Focusing on Eating Habits.</h1>
  <p style={colp}>The first step I took toward healthy eating was to stop going to fast-food restaurants. </p>
  <Link className="btn" to="/focus-on-eating-habits">Read More ></Link>
</div>
<div id="col-2">
<img style={veganImg} src={diet}/>
</div>
</div>



<div class="blogVl"></div>


<div className="blogContainer">
<div id="col-1">
<h1 style={colh1}>From Dieting to Healthy Eating Habits</h1>
  <p style={colp}>I am no stranger to dieting. Over the years, I followed many different weight-loss plans.</p>
  <Link className="btn" to="/diet-to-healthy-habits">Read More ></Link>
</div>
<div id="col-2">
<img style={veganImg} src={habits}/>
</div>
</div>

<div className='turnPage'>
  <div className='pageNumber'>
  <div className='pageNum'><h3>Page I of I</h3></div>
  </div>
</div>




    </div> 
    )
}


export default PublicRouteTwo