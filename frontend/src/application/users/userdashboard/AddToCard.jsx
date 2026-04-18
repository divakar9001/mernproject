import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../../../globalshare/Action';
function AddToCard() {
    const allData = useSelector((state)=> state.card.allCardDetails);
    const dispatch = useDispatch();
    const removeFun = (delId)=>{
        dispatch(removeItem(delId))
    }
  return (
    <div className='container-fluid'>
        <div className='row justify-content-center mt-2'>
            <div className='col-sm-11 border d-flex gap-2 align-items-center'>
               {allData?.map((data,index)=>{
                    return(
                        <Fragment>
                    <div className='col-sm-3'>
                        <img src={data?.image[0]} alt="try to print" className="img-fluid mb-2" />
                    </div>
                        <div className='col-sm-2'>
                            <h5>name:{data?.name}</h5>
                        </div>

                        <div className='col-sm-2'>
                            <h5>price:{data?.price}</h5>
                        </div>

                        <div>
                            <button className='btn btn-danger' onClick={()=>removeFun(data?._id)}>Remove</button>
                        </div>
                    </Fragment>
                    )
               })}
            </div>
        </div>
    </div>
  )
}

export default AddToCard

