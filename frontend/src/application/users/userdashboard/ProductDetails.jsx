import axios from "axios";
import React, { useEffect } from "react";
import { API_URL } from "../../admin/costumesorce/Appcontroal";
import { useParams, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineTruck } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import AddToCard from "./AddToCard";
import { addToProduct, updateCounter } from "../../../globalshare/Action";

function ProductDetails() {
  const [cid, setproduct] = useState({});
  const [search, safeSearch] = useSearchParams();

  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();
  const { id } = useParams();

  const getprodata = async () => {
    // console.log(id);

    await axios.get(`${API_URL}/singleproduct/${id}`).then((phonedata) => {
      console.log(phonedata.data.data);
      setproduct(phonedata.data.data);
    });
  };

  useEffect(() => {
    getprodata();
  }, [id]);

  const setlocation = () => {
    alert("i am locations");
    var c = window.navigator;
    c.geolocation.getCurrentPosition((d) => {
      alert(d.coords.latitude, d.coords.longitude);
    });
  };

  const addCard = (Idcard) => {
    if (Idcard) {
      sessionStorage.setItem("productId", Idcard);
    }

    const sources = {
      image: cid.image,
      price: cid.price,
      name: cid.name,
      _id: Idcard,
    };

    dispatch(addToProduct(sources));
    console.log("this is the price", sources.price);

    const newCount = counter + 1;
    setCounter(newCount);
    dispatch(updateCounter(newCount));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-sm-12  mt-2 d-flex flex-row gap-1 g-1  border-box"
          style={{ heigth: "100vh" }}
        >
          <div className="col-sm-6   ">
            <div className="col-sm-12  oversk1 " style={{ height: "88vh" }}>
              {/* <AddToCard productData = {cid}></AddToCard> */}
              {cid.image?.map((img, index) => {
                return (
                  <img
                    key={index}
                    src={img}
                    alt="cid"
                    className="img-fluid mb-2"
                  />
                );
              })}
            </div>
          </div>
          <div className="col-sm-6  oversk1" style={{ height: "90vh" }}>
            <p className="ms-2 font-weight mt-3">select color: phone color</p>
            <div className="col-sm-3 ms-2  d-flex">
              {cid.image?.map((cd, index) => {
                return (
                  <img
                    src={cd}
                    alt="phone"
                    key={index}
                    className="img-fluid  ms-2 mouseho"
                    onClick={(e) => e.target.classList.add("mouseho")}
                    onMouseLeave={(s) => s.target.classList.remove("mouseho")}
                  />
                );
              })}
            </div>
            <h6 className="ms-3 mt-3 ">{cid.name} Visited Store</h6>
            <p className="ms-3 col-sm-5">{cid.descriptions}</p>
            <p className="ms-3">₹{cid.price}</p>

            <div className="col-sm-10 ms-3 ">
              <h4>Delivery details</h4>
              <div className="bg-light-opacity-25 mb-2 border rounded ms-3 col-sm-10 gap-2 d-flex">
                <h5>
                  <IoLocationOutline className="fs-6" />
                  Location not set
                </h5>
                <h6 className="mt-1 text-primary" onClick={setlocation}>
                  Select delivary location
                  <IoIosArrowForward />
                </h6>
              </div>
              <div className="bg-light-opacity-25 mb-2 border rounded ms-3 col-sm-10 ">
                <h6>
                  <AiOutlineTruck className="fs-6" /> Delivary by 12 feb,tue
                </h6>
                <h6 className="text-danger ms-3 lh-1">order in 01h 20m 50s</h6>
              </div>

              <div className="bg-light-opacity-25 mb-2 border rounded ms-3 hl-base col-sm-10 ">
                <p className="fontheight">
                  1 year Warranty On Handset And 6 Months Warranty On Accessries
                </p>
              </div>
            </div>
            <div className="col-sm-10 ms-3 mt-2  d-flex ">
              <Link to>
                <button
                  className="btn w-20 border ms-1"
                  onClick={() => addCard(cid?._id)}
                >
                  <IoCartOutline />
                </button>
              </Link>
              <button className="btn  border button1 ms-1">
                <h6>
                  Buy with EMI <br />
                  From 723/m
                </h6>
              </button>
              <button className="btn btn-warning button1 ms-1">
                <h6>
                  Buy now <br /> at ₹{cid.price}
                </h6>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
