import React from "react";
import logo from "./logo.JPG";
import welcome from "./welcome.jpeg";

function FirstPage() {
  return (
    <div className="title">
        <img className="f-logo" src={logo} alt="logo" />
        <div className="welcome-title">
            <h1>Welcome</h1>
        </div>
        <div className="btn-container">
            <div>
                 <form action="http://localhost:3000/sign-in" >
                    <button className="btn-sign">Sign In</button>
                 </form>
            </div>
            <div>
             <form action="http://localhost:3000/home">
               <button className="btn-guest">Continue as guest</button>
              </form>
            </div>
        </div>
    </div>
  );
}

export default FirstPage;
