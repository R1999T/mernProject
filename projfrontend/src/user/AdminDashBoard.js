import React from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();

  const adminLeftSide = () => {
    return (
      <div className="card">
        <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/admin/create/category" className="nav-link text-success">Create Categories</Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/create/products" className="nav-link text-success">Create products</Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/products" className="nav-link text-success">Manage products</Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/orders" className="nav-link text-success">Manage orders</Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminRightSide = () => {
    return(
      <div className="card mb-4">
        <h4 className="card-header">Admin Information</h4>
        <ul className="list-group">
          <li className="list-group-item">
              <span className="text-success">Name: </span>{name}
          </li>
          <li className="list-group-item">
              <span className="text-success">Email: </span>{email}
          </li>
          <li className="list-group-item">
              <span className="text-danger">Admin area</span>
          </li>
        </ul>
        
      </div>
    );
  };

  return (
    <Base
      title="welcome to the admin area"
      description="manage all of your products here"
      className="container bg-success p-4"
    >
      <div className="row">
        <div className="col-3">{adminLeftSide()}</div>
        <div className="col-9">{adminRightSide()}</div>
      </div>
    </Base>
  );
};

export default AdminDashboard;
