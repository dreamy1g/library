import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Borrows() {

    let navigate=useNavigate();

    const [borrow, setBorrow]=useState({
        userId: "",
        bookId: "",
    });

    const {userId, bookId} = borrow;

    const onInputChange = (e) => {
        setBorrow({ ...borrow, [e.target.name]: e.target.value });
      };

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/borrows/" + userId + "/" + bookId, borrow)
        navigate("/");
    };

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-5 offset-md-2 p-3 mt-2 shadow">
                <h2 className="text-center m-4">Add Borrow</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="UserId" className="form-label">
                        User Id
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter User Id"
                    name="userId"
                    value={userId}
                    onChange={(e) => onInputChange(e)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="BookId" className="form-label">
                        Book Id
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter Book Id"
                    name="bookId"
                    value={bookId}
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
