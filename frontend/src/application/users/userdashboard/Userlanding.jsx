import React from 'react'

function Userlanding() {
  return (
    <div className='container-fluid mt-2'>
      <div className='row justify-content-center border  'style={{height:'70vh'}}>
        <div className='col-sm-12 bg1 text-center'>
            <ul className='d-flex justify-content-end gap-5 ' style={{color:'white', width:'70%',listStyleType:'none'}}>
              <li>header</li>
              <li>footer</li>
              <li>contect-us</li>
              <li>about</li>
              <li>more</li>
              <li>details</li>
            </ul>
            <h1 className='text-center mt-5 font-weight-bold'> LANDING</h1>
            <p className='boldfont-weight-bold costum-bold'>this website is make for online shoping and explore something else and famalier with our traditions</p>
        </div>
      </div>
    </div>
  )
}

export default Userlanding;