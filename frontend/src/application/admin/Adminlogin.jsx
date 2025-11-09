import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Adminlogin = () => {

    const navigate = useNavigate();
    const [data, setValue] = useState({
        email: '',
        passward: ""
    });

    const handler = (p) => {
        //  console.log(email.target.value);
        // let name = email.target.name;
        // let value = email.target.value;

        const { name, value } = p.target;

        setValue((prev) => {
            return {
                ...prev,
                [name]: value,
            }


        });
    };

    const handelsubmit = async (submit) => {
        submit.preventDefault();
        await axios.post("http://localhost:5500/login", data).then((d) => {
            console.log(d)

            if (d.data.status == 413) {
                toast.warn(d.data.msg);
            }

            if (d.data.status == 201) {

                toast.success(d.data.msg);
                setTimeout(() => {
                    navigate('welcome')
                }, 2000);
            }




        });




    }

    return (
        <div className='container '>
            <div className='row justify-content-center'>
                <div className='col-md-5 bg-light shadow p-5'>
                    <div className='container-fulid '>
                        <div className='row '>
                            <div className='col-12 text-center'>
                                <p className='h4 pb-4'>App login page</p>
                                <ToastContainer />
                            </div>
                            <form onSubmit={handelsubmit}>
                                <div className='col-12'>
                                    <div className='mb-3'>

                                        <label className="form-label">Enter your email</label>
                                        <input type="email" className='form-control' name='email' value={data.email} onChange={handler} required={true} />
                                    </div>
                                </div>

                                <div className='col-12'>
                                    <div className='mb-3'>
                                        <label className="form-label">Enter your password</label>
                                        <input type="passward" className='form-control' name='passward' value={data.passward} onChange={handler} />
                                    </div>
                                </div>

                                <div className='col-md-12 text-end '>
                                    <div className='mb-3 '>
                                        <button type="submit" className="btn btn-success ms-4">Login</button>
                                        <Link to="/register" className='ms-5 mt-4 top '>register now</Link>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}



