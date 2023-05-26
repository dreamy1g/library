import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import './App.css';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);
  const [borrows, setBorrows] = useState([]);

  const {id} = useParams();

  useEffect(() => {
    loadUsers();
    loadBooks();
    loadBorrows();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    console.log(result.data);
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/users/${id}`);
    loadUsers();
  };

  const loadBooks = async () => {
    const result = await axios.get("http://localhost:8080/books");
    setBooks(result.data);
  };

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:8080/books/${id}`);
    loadBooks();
  };

  const loadBorrows = async ()=> {
    const result = await axios.get("http://localhost:8080/borrows");
    console.log(result.data);
    setBorrows(result.data);
  };

  const deleteBorrow = async (id) => {
    await axios.delete(`http://localhost:8080/borrows/${id}`);
    loadBorrows();
  };


  return (
    <div className="container">
      <div className="py-4">
      <h3 className="header">READERS</h3>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Age</th>
              <th scope="col">Email</th>
              <th scope="col">Number</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user, index)=>(
                <tr>
                    <th scope="row" key={index}>{index+1}</th>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                    <td>{user.number}</td>
                    <td>
                        <Link className="btn btn-outline-primary mx-2"
                        to={`/edituser/${user.userId}`}>Edit</Link>
                        <button className="btn btn-outline-danger mx-2" onClick={()=>deleteUser(user.userId)}>
                          Delete</button>
                    </td>

                </tr>
                ) )
            }
          </tbody>
        </table>
      </div>

      <div className="py-4">
      <h3 className="header">BOOKS</h3>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Pages</th>
              <th scope="col">Author</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
                books.map((book, index)=>(
                <tr>
                    <th scope="row" key={index}>{index+1}</th>
                    <td>{book.name}</td>
                    <td>{book.pages}</td>
                    <td>{book.author}</td>
                    <td>{book.price}</td>
                    <td>
                        <Link className="btn btn-outline-primary mx-2"
                        to={`/editbook/${book.bookId}`}>Edit</Link>
                        <button className="btn btn-outline-danger mx-2" onClick={()=>deleteBook(book.bookId)}>
                          Delete</button>
                    </td>
                </tr>
                ) )
            }
          </tbody>
         
           
        </table>
      </div>

      <div className="py-4">
      <h3 className="header">BORROWS</h3>
        <table className="table border shadow ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Reader</th>
              <th scope="col">Book</th>
            </tr>
          </thead>
          <tbody>
            {
                borrows.map((borrow, index)=>(
                
                
                <tr>
                    <th scope="row" key={index}>{index+1}</th>
                    <td>{borrow.userId.lastName}</td>
                    <td>{borrow.bookId.name}</td>
                    <td>
                          <button className="btn btn-outline-danger mx-2" onClick={()=>deleteBorrow(borrow.borrowId)}>
                           Delete</button>
                    </td>
                </tr>
                ) )
            }
          </tbody>

        </table>

      </div>
    </div>


    
  );
}