import React from 'react'


//simple page that is public that does not need authentication

function PublicRoute() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                </div>
                <div className="col-sm">
                    <h3>Example Public Route</h3>
                    <h6>Anyone can see this content</h6>
                </div>
                <div className="col-sm">

                </div>
            </div>
        </div>
    )
}


export default PublicRoute