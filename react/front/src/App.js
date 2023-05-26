import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './Components/AddUser';
import AddBook from './Components/AddBook';
import EditUser from './Components/EditUser';
import EditBook from './Components/EditBook';
import Borrows from './Components/Borrows';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/adduser" element={<AddUser/>}/>
        <Route exact path="/addbook" element={<AddBook/>}/>
        <Route exact path="/edituser/:id" element={<EditUser/>}/>
        <Route exact path="/editbook/:id" element={<EditBook/>}/>
        <Route exact path="/borrows" element={<Borrows/>}/>
      </Routes>

      </Router>
    
    
    </div>
  );
}

export default App;
