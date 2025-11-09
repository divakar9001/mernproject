import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Showdetailis() {
  const [set,setUpdate] = useState([]);

  const {id} = useParams();
  const showdata = async()=>{
    await axios.get(`http://localhost:5500/singledata/${id}`).then((d)=>{
      // console.log(d.data.singeldata);
      setUpdate(d.data.singeldata)
    })
  }

  useEffect(()=>{
    showdata();
  },[])
  
  return (
    <div className='container-fulid'>
      <div className='row'>
        <div className='col-md-8'>
          <div className='container'>
            <div className='row shodow '>
              <div className='col-md-6'>

              {set.map((s)=>{
                return(
                  <div key={s._id}>
                    {s._id}
                    <h2>email:{s.email}</h2>
                    <h2>passward:{s.passward}</h2>
                    <h2>phone:{s.phone}</h2>
                    <h2>age:{s.age}</h2>
                  </div>
                  
                )
              })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Showdetailis