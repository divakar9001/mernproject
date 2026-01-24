import React from 'react'
import { Link } from 'react-router-dom'

function header1() {
  return (
    <div className='container-fulid'>
        <div className='row '>
            <div className='col-sm-12 border'>
                <ul>
                <li><Link to='#'>home</Link></li>
                <li><Link to='#'>contact</Link></li>
                <li><Link to='#'>support</Link></li>
                <li><Link to='#'>about</Link></li>
                <li><Link to='#'>nav</Link></li>
                </ul>
                
            </div>
        </div>
    </div>
  )
}

export default header1