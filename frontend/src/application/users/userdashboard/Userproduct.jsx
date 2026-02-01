// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Userproduct() {
//   const [mobile, setMoblie] = useState([]);
//   const navigate = useNavigate();
//   const getmobile = async () => {
//     await axios.get("http://localhost:5500/alldata").then((s) => {
//       console.log(s.data.data);
//       setMoblie(s.data.data);
//     });
//   };
//   useEffect(() => {
//     getmobile();
//   }, []);
//   return (
//     <div className="container-fluid text-center">
//       <div className="row justify-content-center">
//         <div className="col-sm-10 mt-2">
//           <h5 style={{ color: "red" }}>
//             Latest mobile phones are now available with advanced features and
//             better performance.
//           </h5>
//         </div>

//         <div className="col-sm-12 border d-flex     ">
//           <div className="col-sm-4 border mt-2 p-2 d-flex flex-column ">
//             <div className="h6 text-center">short</div>
//             <p className="text-center">whats new</p>
//             <div className="col-sm-11 bg-light border d-flex align-items-center flex-column ">
//               <h6 className="mt-1  w-75 text-start">Filter</h6>
//               <div className="col-sm-10  d-flex flex-column">
//                 <select name="" id="" className="form-select">
//                   <option value="">price</option>
//                 </select>
//                 <select name="" id="" className="form-select">
//                   <option value="">size</option>
//                 </select>
//                 <select name="" id="" className="form-select">
//                   <option value="">brand</option>
//                 </select>
//                 <select name="" id="" className="form-select"></select>
//                 <select name="shose" id="" className="form-select">
//                   <option value="nilesh">price range</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//             <div className="col-sm-8 border mt-2 p-2">
//             <div className="col-sm-12 d-flex align-items-center">
//               {mobile.map((p, index) => {
//                 return (
//                   <>
//                     <div className="col-sm-12 border mb-3 d-flex" key={index}>
//                       //
//                       {p.image?.map((img, i) => {
//                         return (
//                           <div className="col-sm-3 border p-2">
//                             <img
//                               src={img}
//                               alt="mobile"
//                               key={i}
//                               className="img-fluid mb-2"
//                               style={{ height: "100%" }}
//                             />
//                           </div>
//                         );
//                       })}
//                     </div>
//                     <div className=" border col-sm-5">{p.brand}</div>
//                     <div className=" border col-sm-4">hello ji</div>
//                   </>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Userproduct;

import axios from "axios";
import React, { useEffect, useState } from "react";

function Userproduct() {
  const [mobile, setMobile] = useState([]);

  const getmobile = async () => {
    try {
      const res = await axios.get("http://localhost:5500/alldata");
      console.log(res.data.data)
      setMobile(res.data.data);
    } catch (error) {
      console.error("Error fetching mobiles:", error);
    }
  };

  useEffect(() => {
    getmobile();
  }, []);

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
          {/* 🔹 Filter Section */}
          <div className="col-sm-4 border mt-2 p-2 d-flex flex-column">
            <div className="h6 text-center">Sort</div>
            <p className="text-center">What's new</p>
            <div className="col-sm-11 bg-light border d-flex align-items-center flex-column">
              <h6 className="mt-1 w-75 text-start">Filter</h6>
              <div className="col-sm-10 d-flex flex-column gap-2">
                <select className="form-select">
                  <option value="">Price</option>
                </select>
                <select className="form-select">
                  <option value="">Size</option>
                </select>
                <select className="form-select">
                  <option value="">Brand</option>
                </select>
                <select className="form-select">
                  <option value="">Rating</option>
                </select>
                <select className="form-select">
                  <option value="">Price Range</option>
                </select>
              </div>
            </div>
          </div>

          {/* 🔹 Product Section */}
          <div className="col-sm-8 border mt-2 p-2 oversk " style={{height:'100vh'}}>
            <div className="row">
              {mobile.map((p, index) => (
                <div className="col-sm-12  mb-3 d-flex" key={index}>
                  {/* Images */}
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
                    <p className="mb-1">Brand: {p.brand}</p>
                    
                    <p className="mb-1">Descriptions:{p.description}</p>
                    <p className="mb-1">numreview:{p.numreview}</p>
                    <p className="mb-1">stocks:{p.stocks}</p>
                  </div>

                  {/* Actions */}
                  <div className="col-sm-4  p-2 d-flex align-items-center justify-content-center">
                    <h4>Price: ₹{p.price}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userproduct;
