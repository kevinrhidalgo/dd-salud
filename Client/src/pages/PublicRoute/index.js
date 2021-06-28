import React from 'react'
import './Home.css'

const quote={
  color:'white',
  fontSize:'17px',
  fontFamily: 'Benne, serif',
  display:'flex',
  justifyContent:'center',
  marginTop:'260px',
}
const quoter={
  fontStyle:"italic",
  color:"teal"
}
//simple page that is public that does not need authentication

function PublicRoute() {

    return (
        <div className='homePage'>

          <div className='home'>
      <div style ={quote} className='daQuotes'>
        <div className='quoteColumn'>
      “Health is a state of complete harmony of the body, mind and spirit. <br/> When one is free from physical disabilities and mental distractions, <br/> the gates of the soul open.”  
      <p style={quoter} className='quoteColumn'>– B.K.S. Iyengar</p>
      </div> 
      </div>
      </div>



      
    </div> 
    )
}


export default PublicRoute