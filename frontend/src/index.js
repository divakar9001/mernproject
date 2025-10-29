import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import  {Adminlogin}  from './application/admin/Adminlogin';
import Adminregister from './application/admin/Adminregister';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
  <React.StrictMode>
      <BrowserRouter>
          <Routes>

              <Route path='' element={<Adminlogin/>}></Route>
              <Route path='/register' element={<Adminregister/>}></Route>

              
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);


