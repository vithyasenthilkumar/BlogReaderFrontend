import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddNewBlogComponent from "./components/AddNewBlogComponent/AddNewBlogComponent";
import EditBlogComponent from "./components/EditBlogComponent/EditBlogComponent";
import GetAllBlogsComponent from "./components/GetAllBlogsComponent/GetAllBlogsComponent";
function App() {
  return (
    <Router>
            <div className="container">
              <h1>Blog App</h1>
              
            <nav className="nav-menu">
                <Link to="/" >Home</Link>
                <Link to="/admin/add" >Add Blog</Link>
                <Link to="/admin/edit" >Edit Blog</Link>
            </nav>
           <Routes>
                 <Route exact path='/' element={<GetAllBlogsComponent/>}></Route>
                 <Route path='/admin/add' element={<AddNewBlogComponent/>}></Route>
                 <Route path='/admin/edit' element={<EditBlogComponent/>}></Route>
          </Routes>
          </div>
       </Router>
  );
}

export default App;