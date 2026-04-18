import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../admin/costumesorce/Appcontroal";

function Userproduct() {
  const [mobile, setMobile] = useState([]);
  const [a, b] = useState({ price: "", brand: "", rating: "" });
  const [allMobile, setAllMobile] = useState([]);
  const [options, setOptions] = useState({ price: [], brand: [], rating: [] }); // handel all the filter element

  const getmobile = async () => {
    try {
      const res = await axios.get(`${API_URL}/alldata`);
      // console.log(res.data.data);
      var data = res.data.data;
      setMobile(data);
      setAllMobile(data);
      setOptions({
        price: [
          ...new Set(
            data.map((e) => {
              return e.price;
            }),
          ),
        ],

        brand: [
          ...new Set(
            data.map((f) => {
              return f.brand;
            }),
          ),
        ],

        rating: [
          ...new Set(
            data.map((g) => {
              return g.numreview;
            }),
          ),
        ],
      });

      localStorage.setItem("apidata", JSON.stringify(res.data.data));
    } catch (error) {
      console.error("Error fetching mobiles:", error);
    }
  };

  var c = localStorage.getItem("apidata");
  var d = JSON.parse(c);

  useEffect(() => {
    getmobile();
  }, []);

  const getdata = (e) => {
    const { name, value } = e.target;
    console.log(name);

    b((a) => {
      return {
        ...a,
        [name]: value,
      };
    });

    const ssk = allMobile.filter((f) => {
      console.log("this is data");
      return (
        f.price == e.target.value ||
        f.brand == e.target.value ||
        f.numreview == e.target.value
      );
    });
    console.log("this is the filterdata", ssk);
    setMobile(ssk);
  };

  return (
    <div className="container-fluid text-center  ">
      <div className="row justify-content-center">
        <div className="col-sm-10 mt-2">
          <h5 style={{ color: "red" }}>
            Latest mobile phones are now available with advanced features and
            better performance.
          </h5>
        </div>

        <div className="col-sm-12  d-flex">
          <div className="col-sm-4 border mt-2 p-2 d-flex flex-column">
            <div className="h6 text-center">Sort</div>
            <p className="text-center">What's new</p>
            <div className="col-sm-11 bg-light border d-flex align-items-center flex-column">
              <h6 className="mt-1 w-75 text-start">Filter</h6>
              <div className="col-sm-10 d-flex flex-column gap-2">
                <select className="form-select" name="price" onChange={getdata}>
                  <option value="" hidden>
                    price
                  </option>
                  {options.price.map((d) => {
                    return (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    );
                  })}
                </select>

                <select
                  className="form-select"
                  name="brands"
                  onChange={getdata}
                >
                  <option value="" hidden>
                    Brand
                  </option>
                  {options.brand.map((sc) => {
                    return (
                      <option value={sc} key={sc}>
                        {sc}
                      </option>
                    );
                  })}
                </select>
                <select
                  className="form-select"
                  name="rating"
                  onChange={getdata}
                >
                  <option value="" hidden>
                    rating
                  </option>
                  {options.rating.map((sx) => {
                    return (
                      <option key={sx} value={sx}>
                        {sx}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>

          <div
            className="col-sm-8 border mt-2 p-2 oversk oversk1 "
            style={{ height: "80vh" }}
          >
            <div className="row ">
              {mobile.map((p, index) => (
                <Link
                  to={"shop/"+p._id}
                  className="col-sm-12 norclass alldiv  mb-3 d-flex"
                  key={index}
                >
                  <div className="col-sm-3  p-2">
                    {p.image?.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt="mobile"
                        className="img-fluid mb-2"
                      />
                    ))}
                  </div>

                  {/* Details */}
                  <div className="col-sm-5  p-2 text-start">
                    <h6>{p.name}</h6>
                    <h6>{p.id}</h6>
                    <p className="mb-1">Brand: {p.brand}</p>

                    <p className="mb-1">Descriptions:{p.description}</p>
                    <p className="mb-1">numreview:{p.numreview}</p>
                    <p className="mb-1">
                      stocks:
                      {p.stocks <= 60 ? 
                        <span className="text-danger tblink">{p.stocks}</span>
                       : 
                        p.stocks
                      }
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="col-sm-4  p-2 d-flex align-items-center mb-5">
                    <h4>Price: ₹{p.price}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userproduct;


