import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { API_URL } from '../../admin/costumesorce/Appcontroal';

function Useredit() {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const [set, setUpdate] = useState({
    name: '',
    email: '',
    passward: '',
    phone: '',
    age: ''
  });

  const fildata = (fil) => {
    // console.log(fil);
    const { name, value } = fil.target;

    setUpdate((sprede) => {
      return {
        ...sprede,
        [name]: value
      }
    })
  }

  const navi = useNavigate();

  let token = localStorage.getItem('token');
  const callapi = async () => {

    await axios.get(`${API_URL}/singledata/${id}`, { headers: { authorization: `Bearer ${token}` } }).then((f) => {
      // console.log(f.data.singeldata[0]);
      if(f.data?.singeldata?.length > 0){
         setUpdate(f.data.singeldata[0]);
        
      }
      else{
       toast.warn("unauthorized user")
      }
      
    });
  }
  useEffect(() => {
    callapi();
  }, [])



  const mycontrol = async (d) => {

    await axios.patch(`${API_URL}/update/${id}`, set, { headers: { authorization: `Bearer ${token}` } }).then((t) => {
      console.log(t);

      if (t.data.status == 251) {
        toast.success(t.data.msg);
        setTimeout(() => {
          navi('/');
        }, 1000)
      }


    });




  }
  return (

    <div className='container'>
      <div className='row border shadow mt-2'>
        <div className='col-12 d-flex'>
          <div className='container-fulid'>
            <ToastContainer />
            <div className='row'>
              <div className='col-md-6'>
                <div className='col-12  mt-5'>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies</p>
                </div>

                <div className='col-12  mt-5'>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies</p>
                </div>

                <div className='col-12  mt-5'>
                  <Link to='/' className='ms-3'>
                    <button>alradey have an account</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-12 text-center'>
                <p className='h3 mb-3'>Registor page</p>
              </div>
            </div>
            <form onSubmit={handleSubmit(mycontrol)}>
              <div className='row'>

                <div className='col-md-8'>
                  <div className='mb-3'>
                    <label className='form-label'>FullName</label>
                    <input className='form-control' type='text' name='name' value={set.name} {...register("name")} onInput={fildata}></input>
                  </div>
                </div>

                <div className='col-md-8'>
                  <div className='mb-3'>
                    <label className='form-label'>EmailAddress</label>
                    <input className='form-control' type='email' name='email' value={set.email} {...register("email")} onInput={fildata}></input>
                    {/* {errors.email && <p className='text-danger'>email is required</p>} */}
                  </div>
                </div>

                <div className='col-md-8'>
                  <div className='mb-3'>
                    <label className='form-label'>Passward</label>
                    <input className='form-control' type='text' name='passward' value={set.passward} {...register('passward')} onInput={fildata}></input>
                    {/* {errors.pass?.type === "required" && <p className='text-danger'>password is required</p>}
                    errors.pass?.type === "minLength" && <p className='text-warning'>minimum lenght charater 5</p>}
                       {errors.pass?.type === "maxLength" && <p className='text-warning'>maximum lenght charater 8 only</p>} */}
                  </div>
                </div>



                <div className='col-md-8'>
                  <div className='mb-3'>
                    <label className='form-label'>phoneNo</label>
                    <input className='form-control' type='text' name='phone' value={set.phone} {...register('phone')} onInput={fildata}></input>
                  </div>
                </div>


                <div className='col-md-8'>
                  <div className='mb-3'>
                    <label className='form-label'>age</label>
                    <input className='form-control' type='number' name='age' value={set.age} {...register('age')} onInput={fildata}></input>
                  </div>
                </div>

                <div className='col-12 text-center'>
                  <div className="mb-3">
                    <input type="submit" className="btn btn-success" value="submit" />
                    <input type="reset" className="btn btn-danger ms-3" value="cancel" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Useredit