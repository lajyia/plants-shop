import React, { FC } from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { Navigate } from 'react-router-dom';


import Main from './pages/Main/Main';
import AdminUsers from './pages/Admin/AdminUsers/AdminUsers';
import AdminPosts from './pages/Admin/AdminPosts/AdminPosts';
import AdminPost from './pages/Admin/AdminPost/AdminPost';
import AdminProduct from './pages/Admin/AdminProduct/AdminProduct';
import AdminProducts from './pages/Admin/AdminProducts/AdminProducts';



const App: FC = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/admin" element={<Navigate to="/admin/users"/>}/>
          <Route path='/admin/posts' element={<AdminPosts/>}/>
          <Route path='/admin/users' element={<AdminUsers/>}/>
          <Route path='/admin/post' element={<AdminPost/>}/>
          <Route path='/admin/product' element={<AdminProduct/>}/>
          <Route path='/admin/products' element={<AdminProducts/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
