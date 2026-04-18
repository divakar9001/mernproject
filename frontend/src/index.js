import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./application/admin/costumesorce/global.css";
import { Adminlogin } from "./application/admin/Adminlogin";
import Adminregister from "./application/admin/Adminregister";
import Welcome from "./application/users/userdashboard/Welcome";
import Landing from "./application/users/userdashboard/Landing";
import Useredit from "./application/users/dashboard/Useredit";
import Showdetailis from "./application/users/dashboard/Showdetailis";
import Error from "./application/users/share/Error";
import Userlanding from "./application/users/userdashboard/Userlanding";
import Userproduct from "./application/users/userdashboard/Userproduct";
import { store } from "./globalshare/Store";
import { Provider } from "react-redux";
import ProductDetails from "./application/users/userdashboard/ProductDetails";
import AddToCard from "./application/users/userdashboard/AddToCard";
const Loader = lazy(() => import("./application/users/share/Loader"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Adminlogin />}></Route>
          <Route path="/register" element={<Adminregister />}></Route>
          <Route path="welcome" element={<Welcome />}>
            <Route path="userpage" element={<Userlanding />}></Route>
            <Route path="userpage/phone" element={<Userproduct />}></Route>
            <Route path="userpage/phone/shop/:id" element={<ProductDetails />}></Route>
              <Route path="show" element={<AddToCard />}></Route>
           
            <Route path="landing" element={<Landing />}></Route>
            <Route path="landing/show/:id" element={<Showdetailis />}></Route>
            <Route path="landing/edit/:id" element={<Useredit />}></Route>
            <Route
              path="loder"
              element={
                <Suspense
                  fallback={<h1 className="myloader">Loading Page...</h1>}
                >
                  <Loader />
                </Suspense>
              }
            ></Route>

            <Route path="*" element={<Error />}></Route>
          </Route>

          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
