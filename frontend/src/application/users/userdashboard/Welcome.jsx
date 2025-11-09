import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from  '../share/Sidebar';
import Header from '../share/Header';
import { Fragment } from 'react';

function Welcome() {
  return (
     <Fragment>
    <Header></Header>
    <div className='container-fluid'>
        <div className='row cus-page'>
            <div className='col-md-2 cus-bg'>
                <Sidebar></Sidebar>
            </div>
            <div className='col-md-10 bg-light'>
                   <Outlet>  </Outlet>
            </div>
        </div>
    </div>
    </Fragment>
  )
}

export default Welcome