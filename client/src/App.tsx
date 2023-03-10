import React, { FC } from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';



import Main from './pages/Main/Main';


const App: FC = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/"/>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
