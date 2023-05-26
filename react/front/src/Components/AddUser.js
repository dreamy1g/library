import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {

    let navigate=useNavigate();

    const [user, setUser]=useState({
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        number: "",
    });

    const {firstName,lastName,age,email,number} = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/users", user);
        navigate("/");
    };

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-5 offset-md-2 p-3 mt-2 shadow">
                <h2 className="text-center m-4">Register User</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="FirstName" className="form-label">
                        First Name
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your first name"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => onInputChange(e)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="LastName" className="form-label">
                        Last Name
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your last name"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">
                        Age
                    </label>
                    <input
                    type={"number"}
                    className="form-control"
                    placeholder="Enter your age"
                    name="age"
                    value={age}
                    onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        E-mail
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your e-mail"
                    name="email"
                    value={email}
                    onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="number" className="form-label">
                        Number
                    </label>
                    <input
                    type={"number"}
                    className="form-control"
                    placeholder="Enter your phone number"
                    name="number"
                    value={number}
                    onChange={(e) => onInputChange(e)}
                    />
                </div>
                
                <button type="submit" className="btn btn-outline-primary">Submit</button>
                <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
                </form>
            </div>
        </div>
    </div>
  );
}
