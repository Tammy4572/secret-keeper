import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";

import { loadTokenFromCookie } from "../actions";

class App extends Component {
 render() {
    return (
         <div className="app-container">
              <div className="body-div main-pg">
                   <h1 className="h1-title">Got Secrets?</h1>
                   <p className="description">Your Trapper-Keeper TM for secrets. Sign up today. Its easy, free, and about as reliable as somebody you sort of trust!</p>
                   <hr/>
                   <p>Create an account to get started, or log back in if you"re already a Secret Keeper.</p>
                   <div className="main-pg-btn">
                        <button className="btn btn-success"><Link to="/register">Register</Link></button>
                        <button className="btn btn-primary"><Link to="/login">Login</Link></button>
                   </div>
              </div>
         </div>
    );
  }
}
export default App;
