// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import axios from "axios";
// import { API_URL } from "./costumesorce/Appcontroal";

// function Adminregister() {
//   const navi = useNavigate();
//   const [set, setUpdate] = useState({});
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const mycontrol = async (d) => {
//     const formData = new FormData();

//     formData.append("name", d.name);
//     formData.append("email", d.email);
//     formData.append("passward", d.passward);
//     formData.append("phone", d.phone);
//     formData.append("age", d.age);
//     formData.append("fileupload", d.fileupload[0]);
   
//     await axios.post(`${API_URL}/registerusers`, formData).then((f) => {
//       console.log(f.data.mydata);
//       setUpdate(f.data.mydata);
//       if (f.data.status == 321) {
//         toast.warn(f.data.msg, {
//           position: "top-left",
//           autoClose: 2000,
//           theme: "dark",
//         });
//       }
//       if (f.data.status == 322) {
//         toast.warn(f.data.msg);
//       }
//       if (f.data.status == 221) {
//         toast.success(f.data.msg, {
//           position: "top-left",
//           autoClose: 2000,
//           theme: "dark",
//         });
//         setTimeout(() => {
//           navi("/");
//         }, 1000);
//       }
//     });
//   };
//   return (
//     <div className="container">
//       <div className="row border shadow mt-2">
//         <div className="col-sm-12 d-flex">
//           <div className="container-fulid">
//             <ToastContainer />
//             <div className="row">
//               <div className="col-sm-6">
//                 <div className="col-sm-12  mt-5">
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
//                     Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
//                     natoque penatibus et magnis dis parturient montes, nascetur
//                     ridiculus mus. Donec quam felis, ultricies
//                   </p>
//                 </div>

//                 <div className="col-sm-12  mt-5">
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
//                     Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
//                     natoque penatibus et magnis dis parturient montes, nascetur
//                     ridiculus mus. Donec quam felis, ultricies
//                   </p>
//                 </div>

//                 <div className="col-sm-12  mt-5">
//                   <Link to="/" className="ms-3">
//                     <button>alradey have an account</button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="container">
//             <div className="row">
//               <div className="col-sm-12 text-center">
//                 <p className="h3 mb-3">Registor page</p>
//               </div>
//             </div>
//             <form
//               onSubmit={handleSubmit(mycontrol)}
//               encType="multipart/form-data"
//             >
//               <div className="row">
//                 <div className="col-sm-8">
//                   <div className="mb-3">
//                     <label className="form-label">FullName</label>
//                     <input
//                       className="form-control"
//                       type="text"
//                       name="name"
//                       {...register("name")}
//                     ></input>
//                   </div>
//                 </div>

//                 <div className="col-sm-8">
//                   <div className="mb-3">
//                     <label className="form-label">EmailAddress</label>
//                     <input
//                       className="form-control"
//                       type="email"
//                       name="email"
//                       {...register("email")}
//                     ></input>
//                     {/* {errors.email && <p className='text-danger'>email is required</p>} */}
//                   </div>
//                 </div>

//                 <div className="col-sm-8">
//                   <div className="mb-3">
//                     <label className="form-label">Passward</label>
//                     <input
//                       className="form-control"
//                       name="passward"
//                       type="text"
//                       {...register("passward")}
//                     ></input>
//                   </div>
//                 </div>

//                 <div className="col-sm-8">
//                   <div className="mb-3">
//                     <label className="form-label">phoneNo</label>
//                     <input
//                       className="form-control"
//                       name="phone"
//                       type="text"
//                       {...register("phone")}
//                     ></input>
//                   </div>
//                 </div>

//                 <div className="col-sm-8">
//                   <div className="mb-3">
//                     <label className="form-label">age</label>
//                     <input
//                       className="form-control"
//                       name="age"
//                       type="number"
//                       {...register("age")}
//                     ></input>
//                   </div>
//                 </div>

//                 <div className="col-sm-8">
//                   <div className="mb-3">
//                     <label className="form-label">file</label>
//                     <input
//                       className="form-control "
//                       name="fileupload"
//                       type="file"
//                       {...register("fileupload")}
//                     ></input>
//                     <button className="d-flex" type="submit">
//                       upload
//                     </button>
//                   </div>
//                 </div>

//                 <div className="col-sm-12 text-center">
//                   <div className="mb-3">
//                     <input
//                       type="submit"
//                       className="btn btn-success"
//                       value="submit"
//                     />
//                     <input
//                       type="reset"
//                       className="btn btn-danger ms-3"
//                       value="cancel"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Adminregister;


import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { API_URL } from "./costumesorce/Appcontroal";

function Adminregister() {
  const navi = useNavigate();
  const [set, setUpdate] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const mycontrol = async (d) => {
    const formData = new FormData();

    formData.append("name", d.name);
    formData.append("email", d.email);
    formData.append("passward", d.passward);
    formData.append("phone", d.phone);
    formData.append("age", d.age);

    if (d.fileupload && d.fileupload[0]) {
      formData.append("fileupload", d.fileupload[0]);
    }

    try {
      const f = await axios.post(
        `${API_URL}/registerusers`,
        formData
      );

      console.log(f.data.mydata);
      setUpdate(f.data.mydata);

      if (f.data.status === 321) {
        toast.warn(f.data.msg, {
          position: "top-left",
          autoClose: 2000,
          theme: "dark",
        });
      }

      if (f.data.status === 322) {
        toast.warn(f.data.msg, {
          position: "top-left",
          autoClose: 2000,
          theme: "dark",
        });
      }

      if (f.data.status === 221) {
        toast.success(f.data.msg, {
          position: "top-left",
          autoClose: 2000,
          theme: "dark",
        });

        setTimeout(() => {
          navi("/");
        }, 1000);
      }
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong. Please try again!", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="container py-3 py-md-5  overregister " style={{height:'60vh'}}>
      <ToastContainer />

      <div className="row border shadow rounded ">

       
        <div className="col-12 col-lg-5 bg-light p-4 p-md-5">

          <div className="mb-4">
            <h2 className="fw-bold mb-3">
              Create Your Account
            </h2>

            <p className="text-muted">
              Join our platform today and become part of our growing
              community. Create your account to access all features
              and manage your profile easily.
            </p>
          </div>

          <div className="mb-4">
            <h5 className="fw-bold mb-3">
              Why Register?
            </h5>

            <ul className="list-group list-group-flush">

              <li className="list-group-item bg-light">
                ✓ Create and manage your personal profile
              </li>

              <li className="list-group-item bg-light">
                ✓ Access exclusive features and services
              </li>

              <li className="list-group-item bg-light">
                ✓ Keep your information secure and organized
              </li>

              <li className="list-group-item bg-light">
                ✓ Access your account anytime and anywhere
              </li>

            </ul>
          </div>

          <div className="mt-4">
            <p className="text-muted">
              Already have an account? Sign in and continue where you
              left off.
            </p>

            <Link
              to="/"
              className="text-decoration-none"
            >
              <button
                type="button"
                className="btn btn-outline-primary w-100"
              >
                Login to Your Account
              </button>
            </Link>
          </div>

        </div>

        
        <div className="col-12 col-lg-7 p-4 p-md-5">

          <div className="text-center mb-4">

            <h3 className="fw-bold">
              Register Account
            </h3>

            <p className="text-muted">
              Fill in your details below to get started.
            </p>

          </div>

          <form
            onSubmit={handleSubmit(mycontrol)}
            encType="multipart/form-data"
          >

            <div className="row">

              
              <div className="col-12 col-md-6 mb-3">

                <label className="form-label">
                  Full Name
                </label>

                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter your full name"
                  {...register("name", {
                    required: "Full name is required",
                  })}
                />

                {errors.name && (
                  <small className="text-danger">
                    {errors.name.message}
                  </small>
                )}

              </div>

            
              <div className="col-12 col-md-6 mb-3">

                <label className="form-label">
                  Email Address
                </label>

                <input
                  className="form-control"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />

                {errors.email && (
                  <small className="text-danger">
                    {errors.email.message}
                  </small>
                )}

              </div>

              {/* PASSWORD */}
              <div className="col-12 col-md-6 mb-3">

                <label className="form-label">
                  Password
                </label>

                <input
                  className="form-control"
                  type="password"
                  placeholder="Enter your password"
                  {...register("passward", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message:
                        "Password must be at least 6 characters",
                    },
                  })}
                />

                {errors.passward && (
                  <small className="text-danger">
                    {errors.passward.message}
                  </small>
                )}

              </div>

              
              <div className="col-12 col-md-6 mb-3">

                <label className="form-label">
                  Phone Number
                </label>

                <input
                  className="form-control"
                  type="tel"
                  placeholder="Enter your phone number"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                />

                {errors.phone && (
                  <small className="text-danger">
                    {errors.phone.message}
                  </small>
                )}

              </div>

              {/* AGE */}
              <div className="col-12 col-md-6 mb-3">

                <label className="form-label">
                  Age
                </label>

                <input
                  className="form-control"
                  type="number"
                  placeholder="Enter your age"
                  {...register("age", {
                    required: "Age is required",
                    min: {
                      value: 18,
                      message:
                        "You must be at least 18 years old",
                    },
                  })}
                />

                {errors.age && (
                  <small className="text-danger">
                    {errors.age.message}
                  </small>
                )}

              </div>

              
              <div className="col-12 col-md-6 mb-3">

                <label className="form-label">
                  Profile Image
                </label>

                <input
                  className="form-control"
                  type="file"
                  accept="image/*"
                  {...register("fileupload", {
                    required: "Please upload a profile image",
                  })}
                />

                {errors.fileupload && (
                  <small className="text-danger">
                    {errors.fileupload.message}
                  </small>
                )}

              </div>

              <div className="col-12 mt-3">

                <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center">

                  <button
                    type="submit"
                    className="btn btn-success px-4 py-2"
                  >
                    Create Account
                  </button>

                  <button
                    type="reset"
                    className="btn btn-danger px-4 py-2"
                  >
                    Cancel
                  </button>

                </div>

              </div>

            </div>

          </form>

        </div>

      </div>
    </div>
  );
}

export default Adminregister;


