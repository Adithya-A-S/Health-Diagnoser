import React from 'react'
import "./Loading.css"

function Loading() {
    return (
        <div  className="container">
            <center>
                <img className="loading_image" src={`${process.env.PUBLIC_URL + '/assets/Loading.gif'}`} alt="Loading" />
            </center>
        </div>
    )
}

export default Loading