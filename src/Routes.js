import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import App from './App';
import Food_library from './components/food_library/Food_library';
import HelloWorld from './helloWorld';
import ApiCalls from './practiceOne/ApiCalls/ApiCalls';

const Routess = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={< App/>}/>
            <Route path='/hello' element={< HelloWorld/>}/>
            <Route path='/Food_library' element={< Food_library/>}/>
            <Route path='/ApiCalls' element={< ApiCalls/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routess;