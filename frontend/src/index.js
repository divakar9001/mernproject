import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import './application/admin/costumesorce/register.css';
import { Adminlogin } from './application/admin/Adminlogin';
import Adminregister from './application/admin/Adminregister';
import Welcome from './application/users/userdashboard/Welcome';
import Landing from './application/users/userdashboard/Landing';
import Useredit from './application/users/dashboard/Useredit';
import Showdetailis from './application/users/dashboard/Showdetailis';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='' element={<Adminlogin />}></Route>
                <Route path='/register' element={<Adminregister />}></Route>
                <Route path='welcome' element={<Welcome/>}>
                    <Route path='' element={<Landing/>}></Route>
                    <Route path='show/:id' element={<Showdetailis/>}></Route>

                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);


