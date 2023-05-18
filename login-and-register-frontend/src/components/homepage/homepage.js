import React from "react"
import "./homepage.css"

const Homepage = ({setLoginUser}) => {
    return (
        
        <div className="homepage">
        
            <h1>Welcome</h1>
            <div className="button"><a target="_blank" href={process.env.PUBLIC_URL + "calc.html"} > Calculator</a></div>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Homepage