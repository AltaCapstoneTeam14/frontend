import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSubscribe, subscribeSelectors, deleteSubscribe } from "../../features/SubscribeSlice"
import { Button } from 'react-bootstrap';
import "./ShowSubscribe.css"
import { RiDeleteBin5Fill } from "react-icons/ri";
import NavAdmin from '../Navbar/NavAdmin'

const ShowSubscribe = () => {
  const dispatch = useDispatch();

  const subscribes = useSelector(subscribeSelectors.selectAll);

  useEffect(() => {
    dispatch(getSubscribe())
  }, [dispatch]) 

  return (
    <div>
      <div>
      <NavAdmin/>
      </div>
      <div className='titleTop'>
        <h2>Subscribe</h2>
      </div>
      {/* <div className='btnQuota'>
      <Link to="add"><Button variant="success">Add New</Button></Link>
      </div> */}
      <div className='ShowTopUp'>
        <table>
          <thead>
            <tr>
              <th className="thNo">No</th>
              <th>Email</th>
              <th className="thAct">actions</th>
            </tr>
          </thead>
          <tbody>
            {
              subscribes.map((subscribe, index) => (
                <tr key={subscribe.id}>
                  <td className="tdnumber">{index + 1}</td>
                  <td className='tdEmail'>{subscribe.email}</td>
                  <td>
                    <Button onClick={() => dispatch(deleteSubscribe(subscribe.id))} variant="danger" className='px-2 py-1 ms-2'><RiDeleteBin5Fill></RiDeleteBin5Fill></Button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ShowSubscribe;
