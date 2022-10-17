import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import App from './App';
import HelloWorld from './helloWorld';

const Routess = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/app' element={< App/>}/>
            <Route path='/hello' element={< HelloWorld/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routess;