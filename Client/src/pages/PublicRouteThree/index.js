import React from 'react'
import './Film.css'
import ReactPlayer from 'react-player'

const videoOne={
  display:'flex',
  justifyContent:'center'
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
        <div className='videoOne'>
        <ReactPlayer style={videoOne} url='https://www.youtube.com/watch?v=3xW2uv_VsqQ'
    />
        </div>
      </> 
    )
}


export default PublicRouteThree