import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import "./Jobportal.css";

function Header() {



    return (
        <div className="head">

            <h1 >Welcome to  Online JobPortal    </h1>
            <Link to="/Login" >  Login</Link> &nbsp;   &nbsp; &nbsp; &nbsp;
            <Link to="/" >  Home</Link>&nbsp;   &nbsp; &nbsp; &nbsp;
            <Link to="/Reg" >  Applicant ReGistration</Link>&nbsp;   &nbsp; &nbsp; &nbsp;
        </div>
    );
}

export default Header;