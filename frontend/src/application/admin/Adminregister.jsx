import React from 'react';
import {useForm} from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './costumesorce/register.css';

function Adminregister() {
   const { register, handleSubmit, formState: { errors } } = useForm();

    const mycontrol = async(d)=>{
        try{
          await axios.post("http://localhost:5500/registerusers",d).then((f)=>{
            console.log(f);
          })
        }
        catch(errors){
          console.log(errors);
        }
    }
    return (
        <div className='container-fulid fornt '>
            <div className='container  mt-5 d-flex'>
                <div className='left'>
                    <div className='col-12 text-white text-center'>
                        <h1>MODREN REGISTER FORM</h1>
                    </div>

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
                <div className='right'>
                    <div className='container-fulid'>
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
                                        <input className='form-control' type='text'  {...register("name", { required: true })}></input>
                                        {errors.email && <p className='text-danger'>email is required</p>}
                                    </div>
                                </div>

                                <div className='col-md-8'>
                                    <div className='mb-3'>
                                        <label className='form-label'>EmailAddress</label>
                                        <input className='form-control' type='email' name='email' {...register("email", { required: true })}></input>
                                        {errors.email && <p className='text-danger'>email is required</p>}
                                    </div>
                                </div>

                                <div className='col-md-8'>
                                    <div className='mb-3'>
                                        <label className='form-label'>Passward</label>
                                        <input className='form-control' type='text' {...register('passward', { required: true, minLength: 5, maxLength: 8 })}></input>
                                        {errors.pass?.type === "required" && <p className='text-danger'>password is required</p>}
                                        {errors.pass?.type === "minLength" && <p className='text-warning'>minimum lenght charater 5</p>}
                                        {errors.pass?.type === "maxLength" && <p className='text-warning'>maximum lenght charater 8 only</p>}
                                    </div>
                                </div>

                               

                                <div className='col-md-8'>
                                    <div className='mb-3'>
                                        <label className='form-label'>phoneNo</label>
                                        <input className='form-control' type='text' {...register('phone')}></input>
                                    </div>
                                </div>


                                <div className='col-md-8'>
                                    <div className='mb-3'>
                                        <label className='form-label'>age</label>
                                        <input className='form-control' type='number' {...register('age')}></input>
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

export default Adminregister