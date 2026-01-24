import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer,toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../admin/costumesorce/Appcontroal';

function Showdetailis() {
  const [set,setUpdate] = useState({});

  const {id} = useParams();
  const showdata = async()=>{
   let token =  localStorage.getItem('token')
    await axios.get(`${API_URL}/singledata/${id}`,{headers :{ authorization: `Bearer ${token}`}}).then((d)=>{

      if(!d.data.singeldata && d.data.status == 402){
        toast.warning('unauthorised user')
      }
     
      // console.log(d.data.singeldata);
      else{
        
        setUpdate(d.data.singeldata);
      }
      
    })
  }

  useEffect(()=>{
    showdata();
  },[])
  
  return (
    <div className='container-fluid'>
      <div className='row'>
        <ToastContainer/>
        <div className='col-md-8'>
          <div className='container'>
            <div className='row shodow '>
              <div className='col-md-6'>

              {/* { {set.map((s)=>{
                return(
                  <div key={s._id}>
                    {s._id}
                    <h2>email:{s.email}</h2>
                    <h2>passward:{s.passward}</h2>
                    <h2>phone:{s.phone}</h2>
                    <h2>age:{s.age}</h2>
                  </div>
                )
              })} } */}
                
               <div key={set._id} >
                   <h1>user id:{set._id}</h1> 
                    <h2>email:{set.email}</h2>
                    <h2>passward:{set.passward}</h2>
                    <h2>phone:{set.phone}</h2>
                    <h2>age:{set.age}</h2>
                  </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Showdetailis

