import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
function Appheaderpage() {
  const location = useLocation();
  const getID = sessionStorage.getItem("productId");
  console.log("geter", getID);
  const isActive = location.pathname.includes(`/userpage/phone/shop/${getID}`);
  console.log(isActive);
  const counterValue = useSelector((state)=>state.card.counter);
  console.log('this is the counter',counterValue)

  return (
    <nav className="navbar navbar-expand-lg shadow bg-light pfixed">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">
                Home{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Pricing{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" aria-disabled="true">
                Disabled
              </Link>
            </li>
          </ul>
        </div>
        <Link to='show'>
          {isActive ? (
            <button>
              <IoCartOutline /><sup>{counterValue}</sup>
            </button>
          ) : (
            ""
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Appheaderpage;
