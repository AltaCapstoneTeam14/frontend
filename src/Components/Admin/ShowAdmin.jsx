import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAdmin,
  adminSelectors,
} from "../../features/AdminSlice";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./ShowAdmin.css";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";

import NavAdmin from "../Navbar/NavAdmin";

const ShowAdmin = () => {
  const dispatch = useDispatch();

  const admin = useSelector(adminSelectors.selectAll);


  useEffect(() => {
    dispatch(getAdmin());
  }, [dispatch]);

  

  return (
    <div>
      <div>
        <NavAdmin />
      </div>
      <div className="container">
        <div className="titleTop">
          <h2>Data Admin</h2>
        </div>

        <div className="ShowAdmin">
          <table>
            <thead>
              <tr>
                <th className="thNo">No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Balance Id</th>
                <th>Balance Amount</th>
                <th>Coin Id</th>
                <th>Coin Amount</th><th className="thAct">actions</th>
              </tr>
            </thead>
            <tbody>
              {admin.map((point, index) => (
                <tr key={point.id}>
                  <td className="tdnumber">{index + 1}</td>
                  <td>{point.name}</td>
                  <td>{point.email}</td>
                  <td>{point.phone}</td>
                  <td>{point.balance.id}</td>
                  <td>{point.balance.amount}</td>
                  <td>{point.coin.id}</td>
                  <td>{point.coin.amount}</td>
                 
                  <td> 
                  <Link to={`edit/${point.id}`}>
                      <Button variant="primary" className="px-2 py-1">
                        <AiFillEdit></AiFillEdit>
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowAdmin;
