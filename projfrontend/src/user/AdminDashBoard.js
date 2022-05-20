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
        <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
      </div>
    );
  };

  const adminRightSide = () => {};

  return (
    <Base
      title="Welcome to admin area"
      description="Manage all of your products here"
      className="container bg-info"
    >
      <div className="row">
        <div className="col-3">{adminLeftSide()}</div>
        <div className="col-9">{adminRightSide()}</div>
      </div>
    </Base>
  );
};

export default AdminDashboard;
