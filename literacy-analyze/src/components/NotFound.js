import React from "react";
import { Link } from "react-router-dom";
const NotFound=()=>{
    return(
        <div className="container">
            <h1>404</h1>
            <h5>Oops! This Page Could Not Be Found</h5>
            <p>SORRY BUT THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST, HAVE BEEN REMOVED. NAME CHANGED OR IS TEMPORARILY UNAVAILABLE</p>
            <Link to="/MainPage" className="btn btn-primary">GO TO HOMEPAGE</Link>


        </div>
    );
}

export default NotFound;