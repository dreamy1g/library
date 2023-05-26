import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddBook() {

    let navigate=useNavigate();

    const [book, setBook]=useState({
        name: "",
        pages: "",
        author: "",
        price: "",
    });

    const {name, pages, author, price} = book;

    const onInputChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
      };

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/books", book);
        navigate("/");
    };

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-5 offset-md-2 p-3 mt-2 shadow">
                <h2 className="text-center m-4">Add Book</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                        Name
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter name"
                    name="name"
                    value={name}
                    onChange={(e) => onInputChange(e)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="Pages" className="form-label">
                        Pages
                    </label>
                    <input
                    type={"number"}
                    className="form-control"
                    placeholder="Enter pages"
                    name="pages"
                    value={pages}
                    onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Author" className="form-label">
                        Author
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter author"
                    name="author"
                    value={author}
                    onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Price" className="form-label">
                        Price
                    </label>
                    <input
                    type={"number"}
                    className="form-control"
                    placeholder="Enter price"
                    name="price"
                    value={price}
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
