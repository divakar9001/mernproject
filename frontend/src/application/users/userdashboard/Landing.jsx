import axios from 'axios';
import React ,{toast,ToastContainer} from 'react-toastify'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

function Landing() {
    const [set, setUpdate] = useState([]);
    const nav = useNavigate();

    // const a = new String(window.location.href);
    // console.log(a);
    const fetchdata = async () => {
        let token = localStorage.getItem('token');
        await axios.get("http://localhost:5500/myusers" ,{headers :{ Authorization: `Bearer ${token}`}}).then((d) => {
            console.log(d.data.data);
            if(!d.data.data){
                toast.warn('login mandatory');
                setTimeout(()=>{
                    nav('/');
                },2000)
                
            }
            else{
                setUpdate(d.data.data);
            }
            
        });

    }

    // const changes = ()=>{
    //      var a = document.getElementsByClassName('changesize');
    // a[0].addEventListener('click',()=>{
    //     a[0].classList.toggle('changesize');
    // })
    // }
   

    const deleteuser = async(id)=>{
        await axios.delete(`http://localhost:5500/deleteuser/${id}`).then((data)=>{
            console.log(data);
            fetchdata();
        })
    }
    
    useEffect(() => {
        fetchdata();
    }, [])
    return (
        <div className='container-fulid'>
            <div className='row text-center mt-2'>
                <div className='col-12 h2'> All Data Of Userlist</div>
                <div className='row'>
                    <div className='col-md-12'>
                        <ToastContainer/>
                        <div className='row'>
                        <div className="card text-bg-light mb-3">
                            <div className="card-body shadow">
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">fullName</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">age</th>
                                            <th scope="col">phone</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {set.map((r) => {
                                            return (
                                                <tr key={r._id}>
                                                    <td className='changesize' onClick={(e) => e.target.classList.toggle("changesize")}>{r._id}</td>
                                                    <td>{r.name}</td>
                                                    <td className='changesize' onClick={(e) => e.target.classList.toggle("changesize")}>{r.email}</td>
                                                    <td>{r.age}</td>
                                                    <td>{r.phone}</td>
                                                    {/* <td>{r.passward}</td> */}
                                                    <td>
                                                        <Link to={'show/'+ r._id} className='btn btn-sm btn-info'>view</Link>
                                                        <Link to={'edit/'+r._id} className='btn btn-sm btn-warning'>edit</Link>
                                                        <button type="button" className='btn btn-sm btn-danger' onClick={() => deleteuser(r._id)}>Del</button>
                                                    </td>

                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Landing