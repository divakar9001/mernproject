import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';


function Adminregister() {
    const navi = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const mycontrol = async (d) => {

        await axios.post("http://localhost:5500/registerusers", d).then((f) => {
            console.log(f);
            if (f.data.status == 321) {
                toast.warn(f.data.msg, { position: 'top-left', autoClose: 2000, theme: 'dark' });
            }
            if (f.data.status == 221) {
                toast.success(f.data.msg, { position: 'top-left', autoClose: 2000, theme: 'dark' });
                setTimeout(() => {
                    navi('/');
                }, 1000)
            }

        })

    }
    return (
        // <div className='container-fulid fornt '>
        //     <div className='row  mt-5 d-flex'>

        //         <div className='col-12 text-white text-center'>
        //             <h1>MODREN REGISTER FORM</h1>

        //         </div>
        //         <ToastContainer />
        //         <div className='col-12  mt-5'>
        //             <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies</p>
        //         </div>

        //         <div className='col-12  mt-5'>
        //             <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies</p>
        //         </div>

        //         <div className='col-12  mt-5'>
        //             <Link to='/' className='ms-3'>
        //                 <button>alradey have an account</button>
        //             </Link>
        //         </div>
        //     </div>

        //     <div className='container'>
        //         <div className='row'>
        //             <div className='col-12 text-center'>
        //                 <p className='h3 mb-3'>Registor page</p>
        //             </div>
        //         </div>
        //         <form onSubmit={handleSubmit(mycontrol)}>
        //             <div className='row'>

        //                 <div className='col-md-8'>
        //                     <div className='mb-3'>
        //                         <label className='form-label'>FullName</label>
        //                         <input className='form-control' type='text'  {...register("name")}></input>
        //                     </div>
        //                 </div>

        //                 <div className='col-md-8'>
        //                     <div className='mb-3'>
        //                         <label className='form-label'>EmailAddress</label>
        //                         <input className='form-control' type='email' name='email' {...register("email")}></input>
        //                         {/* {errors.email && <p className='text-danger'>email is required</p>} */}
        //                     </div>
        //                 </div>

        //                 <div className='col-md-8'>
        //                     <div className='mb-3'>
        //                         <label className='form-label'>Passward</label>
        //                         <input className='form-control' type='text' {...register('passward')}></input>
        //                         {/* {errors.pass?.type === "required" && <p className='text-danger'>password is required</p>}
        //                                 {errors.pass?.type === "minLength" && <p className='text-warning'>minimum lenght charater 5</p>}
        //                                 {errors.pass?.type === "maxLength" && <p className='text-warning'>maximum lenght charater 8 only</p>} */}
        //                     </div>
        //                 </div>



        //                 <div className='col-md-8'>
        //                     <div className='mb-3'>
        //                         <label className='form-label'>phoneNo</label>
        //                         <input className='form-control' type='text' {...register('phone')}></input>
        //                     </div>
        //                 </div>


        //                 <div className='col-md-8'>
        //                     <div className='mb-3'>
        //                         <label className='form-label'>age</label>
        //                         <input className='form-control' type='number' {...register('age')}></input>
        //                     </div>
        //                 </div>



        //                 <div className='col-12 text-center'>
        //                     <div className="mb-3">

        //                         <input type="submit" className="btn btn-success" value="submit" />
        //                         <input type="reset" className="btn btn-danger ms-3" value="cancel" />

        //                     </div>
        //                 </div>
        //             </div>
        //         </form>
        //     </div>

        // </div>


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
                                        <input className='form-control' type='text'  {...register("name")}></input>
                                    </div>
                                </div>

                                <div className='col-md-8'>
                                    <div className='mb-3'>
                                        <label className='form-label'>EmailAddress</label>
                                        <input className='form-control' type='email' name='email' {...register("email")}></input>
                                        {/* {errors.email && <p className='text-danger'>email is required</p>} */}
                                    </div>
                                </div>

                                <div className='col-md-8'>
                                    <div className='mb-3'>
                                        <label className='form-label'>Passward</label>
                                        <input className='form-control' type='text' {...register('passward')}></input>
                                        {/* {errors.pass?.type === "required" && <p className='text-danger'>password is required</p>}
                                         {errors.pass?.type === "minLength" && <p className='text-warning'>minimum lenght charater 5</p>}
                                         {errors.pass?.type === "maxLength" && <p className='text-warning'>maximum lenght charater 8 only</p>} */}
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