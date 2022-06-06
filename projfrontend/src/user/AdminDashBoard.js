import React from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper";

const AdminDashboard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();

  const adminLeftSide = () => {
    return (
      <div className="card">
        <h4 className="card-header bg-dark text-white"> Admin Navigation</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <link to="/admin/create/category" className="nav-link text-success">
              Create Categories
            </link>
          </li>
          <li className="list-group-item">
            <link to="/admin/create/product" className="nav-link text-success">
              Create Product
            </link>
          </li>
          <li className="list-group-item">
            <link to="/admin/products" className="nav-link text-success">
              Manage Orders
            </link>
          </li>
          <li className="list-group-item">
            <link to="/admin/orders" className="nav-link text-success">
              Manage Orders
            </link>
          </li>
        </ul>
      </div>
    );
  };

  const adminRightSide = () => {
    //
  };

  return (
    <Base
      title="Welcome to admin area"
      description="Manage all of your produts here"
      className="container bg-success py-4"
    >
      <div className="row">
        <div className="col-3">{adminLeftSide()}</div>
        <div className="col-9">{adminRightSide()}</div>
      </div>
    </Base>
  );
};

export default AdminDashboard;
