import React from "react";
import { Link } from "react-router-dom";
function Error() {
    return (
       <div className="container-fluid text-center" >
            <div className="row mt-2 bg-danger justify-content-center" style={{ minHeight: '60vh' }}>
                <div className="col-sm-10 ">
                    <div className="h1  ertext">Oops!</div>
                </div>
                <div className="col-md-10 ">
                    <h2>404 page not found</h2>
                </div>
                <div className="col-md-10 ">
                    <p>the page you are looking for might have been removed had its name is changed or temporarly unvaibale</p>
                </div>
                <div className="col-md-10  me-1">
                   <Link to='/'><button className="btn btn-success">home page</button></Link> 
                </div>
            </div>
        </div>
    )
}

export default Error;
