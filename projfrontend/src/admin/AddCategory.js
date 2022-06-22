import React, { useState } from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper";
import { Link } from "react-router-dom";

const AddCategory = () => {
  //setName -> this formate is defined by react
  const [name, setName] = useState("initialState");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user, token } = isAuthenticated();

  //goback button
  const goBack = () => (
    <div className="mt-5">
      <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">
        Admin Home
      </Link>
    </div>
  );

  //form creation
  const myCategoryForm = () => (
    //bootstrap again
    <form>
      <div className="form-group">
        <p className="lead">Enter the category</p>
        <input
          type="text"
          className="form-control my-3"
          autoFocus
          required
          placeholder="For Ex. Summer"
        />
        <button className="btn btn-outline-info">Create Category</button>
      </div>
    </form>
  );

  return (
    <Base
      title="Create a category here"
      description="Add a new category of tshirts"
      className="container bg-info p-4"
    >
      <div className="row bg-white rounded">
        <div className="col-md-8 offset-md-2">
          {myCategoryForm()} {goBack()}
        </div>
      </div>
    </Base>
  );
};

export default AddCategory;
