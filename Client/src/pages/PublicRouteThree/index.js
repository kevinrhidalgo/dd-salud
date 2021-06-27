import React from 'react'
import { Link } from "react-router-dom";
import './Film.css'
import ReactPlayer from 'react-player'

const videoOne={
  display:'flex',
  justifyContent:'center',
  boxShadow: '5px 5px 10px'
}
const videoTwo={
  margin:'40px',
  boxShadow: '5px 5px 10px'
}
const vidBtns={
  fontFamily: 'Economica, sans-serif',
    fontSize: '18px',
    fontWeight:'900px',
    color:'black',
    marginLeft:'10px'
}

//simple page that is public that does not need authentication

function PublicRouteThree() {

    return (
        <>
        <div className='vidHeader'>
        <div class="vl"></div>
        <div><h1 className='videos'>THE FILMS</h1></div>
        <div class="vl"></div>
        </div>

        <br/>
    
        <div className='videoOne'>
        <ReactPlayer style={videoOne} url='https://www.youtube.com/watch?v=3xW2uv_VsqQ'
        onReady={() => console.log('onReady callback')}
        onStart={() => console.log('onStart callback')}
        onPause={() => console.log('onPause callback')}
        onEnded={() => console.log('onEnded callback')}
        onError={() => console.log('onError callback')}
        />
        </div>


        <div className='vidHeaderTwo'>
        <div class="vl"></div>
        <div><h1 className='videos'>FOOTAGES</h1></div>
        <div class="vl"></div>
        </div>
<div className='vidBtns'>
<h2 style={vidBtns}>SORT BY +</h2>
<Link className="btn" to="/blogs"><h2 style={vidBtns}> SEE BLOGS > </h2></Link>
</div>

<div className='midVertical'>
<div class="vl"></div>
<div class="vl"></div>
</div>

<div className='bottomVids'>

<div className='row'>
<div className='videoTwo'>
        <ReactPlayer width='380px' height='230px' controls style={videoTwo} url='https://www.youtube.com/watch?v=LCH_RIV5tmE'
        onReady={() => console.log('onReady callback')}
        onStart={() => console.log('onStart callback')}
        onPause={() => console.log('onPause callback')}
        onEnded={() => console.log('onEnded callback')}
        onError={() => console.log('onError callback')}
        />
</div>
</div>

<div className='row'> <div className='emptyBox1'> Coming Soon!</div></div>
<div className='row'> <div className='emptyBox2'>Coming Soon!</div></div>
</div>
    
</> 
    )
}


export default PublicRouteThree