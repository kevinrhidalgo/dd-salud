import React from 'react'
import './Film.css'
import ReactPlayer from 'react-player'

const videoOne={
  display:'flex',
  justifyContent:'center'
}
const videoTwo={
  margin:'40px'
}
const vidBtns={
  fontFamily: 'Economica, sans-serif',
    fontSize: '18px',
    fontWeight:'900px'
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
<h2 style={vidBtns}>SEE BLOGS ></h2>
</div>
        <div className='videoTwo'>
        <ReactPlayer width='380px' height='230px' controls style={videoTwo} url='https://www.youtube.com/watch?v=LCH_RIV5tmE'
        onReady={() => console.log('onReady callback')}
        onStart={() => console.log('onStart callback')}
        onPause={() => console.log('onPause callback')}
        onEnded={() => console.log('onEnded callback')}
        onError={() => console.log('onError callback')}
        />
        </div>
      
      </> 
    )
}


export default PublicRouteThree