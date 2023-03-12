import React, { FC } from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { Navigate } from 'react-router-dom';


import Main from './pages/Main/Main';


const App: FC = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/"/>
          <Route element={<Navigate to="/admin/users"/>} path="/admin"/>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
