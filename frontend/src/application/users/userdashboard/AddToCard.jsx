
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../../../globalshare/Action';

function AddToCard() {
    const allData = useSelector((state)=> state.card.allCardDetails);
    const dispatch = useDispatch();

    const removeFun = (delId)=>{
        dispatch(removeItem(delId))
    }

  return (
    <div className='container mt-4'>
        <div className='row'>
            {allData?.map((data)=>(
                <div className='col-md-12 mb-3' key={data?._id}>
                    <div className='card shadow-sm p-3'>
                        <div className='row align-items-center'>
                            
                            <div className='col-md-3 text-center'>
                                <img 
                                  src={data?.image[0]} 
                                  alt="product" 
                                  className="img-fluid rounded"
                                  style={{maxHeight:"120px", objectFit:"cover"}}
                                />
                            </div>

                            <div className='col-md-3'>
                                <h6 className='mb-0'>Name</h6>
                                <p className='text-muted'>{data?.name}</p>
                            </div>

                            <div className='col-md-3'>
                                <h6 className='mb-0'>Price</h6>
                                <p className='text-success fw-bold'>₹ {data?.price}</p>
                            </div>

                            <div className='col-md-3 text-end'>
                                <button 
                                  className='btn btn-danger'
                                  onClick={()=>removeFun(data?._id)}
                                >
                                    Remove
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AddToCard