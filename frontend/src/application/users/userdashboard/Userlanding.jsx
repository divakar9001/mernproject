import React from "react";
import { Link} from "react-router-dom";

function Userlanding() {
    
  // const mylink = useNavigate()

  // const handel = ()=>{
  //   console.log("hello ji")
    
  //     mylink('phone');
   
  // }
  return (
    <div className="container-fluid oversk1 mt-2" style={{ height: "92vh" }}>
      <div
        className="row  justify-content-center  border text-center "
        style={{ height: "70vh" }}
      >
        <div className="col-sm-12 bg1  text-center">
          <ul
            className="d-flex justify-content-end gap-5 nouse "
            style={{ color: "white", width: "70%", listStyleType: "none" }}
          >
            <li>header</li>
            <li>footer</li>
            <li>contect</li>
            <li>about</li>
            <li>more</li>
            <li>details</li>
          </ul>
          <h1 className="text-center mt-5 font-weight-bold"> LANDING</h1>
          <p className="boldfont-weight-bold costum-bold">
            this website is make for online shoping and explore something else
            and famalier with our traditions
          </p>
          <Link to={'phone'}>
          <button className="btn btn-danger" >Buy here</button>
          </Link>
        </div>
        <div className="col-sm-6  mt-4">
          <h1>PRE-BUILT LAYOUTS</h1>
        </div>
        <h6 className="mt-4">Landing Pages made easy!</h6>
        <div className="col-sm-10 mt-3">
          <p>
            Our online shopping platform makes buying easy, fast, and secure.
            Browse thousands of products, enjoy great deals, and get doorstep
            delivery with trusted payment options.
          </p>
          <p>
            Our online shopping platform makes buying easy, fast, and secure.
            Browse thousands of products, enjoy great deals, and get doorstep
            delivery with trusted payment options.
          </p>
          <p>
            Our online shopping platform makes buying easy, fast, and secure.
            Browse thousands of products, enjoy great deals, and get doorstep
            delivery with trusted payment options.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Userlanding;
