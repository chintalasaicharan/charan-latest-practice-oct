import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import App from './App';
import Food_library from './components/food_library/Food_library';
import HelloWorld from './helloWorld';
import TabledataBootstrp from './practiceOne/AddEditDelete/AddEditDeletBootsr';
import AdDeleteEditNrml from './practiceOne/AddEditDelete/AddEditDeleteNrml';
import ApiCalls from './practiceOne/ApiCalls/ApiCalls';
import BarCharts from './practiceOne/barChart/BarChart';
import ButtonPropParent from './practiceOne/BottonPropAction/ButtonPropParent';
import Increment from './practiceOne/BottonPropAction/Increment';
import { DolorToIndiaRupee } from './practiceOne/DolorToIndianRupee/DolorToIndianRupee';
import LoginUrl from './practiceOne/LoginsURL/LoginUrl';
import Loginform from './practiceOne/LOGIN_PAGE/Login';
import { MirrorsNum } from './practiceOne/MirrorNumbers/MirrorNum';
import { NotRepeatString } from './practiceOne/NotRepeatingString/NotRepeatingString';
import { OnMouseOver } from './practiceOne/OnMouseOver/OnMOuseOver';
import SearchOperation from './practiceOne/SearchOperations/SearchOperations';
import { Transperant } from './practiceOne/Transparant/Transparant';
import { TrimValue } from './practiceOne/TrimSpaces/TrimSpacees';
import Uniquewords from './practiceOne/UniqKeyWord/UniqueWord';
import UseEffectAxios from './practiceOne/UseEffectAxios/UseEffectAxios';

const Routess = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={< App/>}/>
            <Route path='/hello' element={< HelloWorld/>}/>
            <Route path='/Food_library' element={< Food_library/>}/>
            <Route path='/ApiCalls' element={< ApiCalls/>}/>
            <Route path='/BarCharts' element={< BarCharts/>}/>
            <Route path='/AdDeleteEditNrml' element={< AdDeleteEditNrml/>}/>
            <Route path='/TabledataBootstrp' element={< TabledataBootstrp/>}/>
            <Route path='/Loginform' element={< Loginform/>}/>
            <Route path='/UseEffectAxios' element={< UseEffectAxios/>}/>
            <Route path='/TrimValue' element={< TrimValue/>}/>
            <Route path='/Transperant' element={< Transperant/>}/>
            <Route path='/MirrorsNum' element={< MirrorsNum/>}/>
            <Route path='/OnMouseOver' element={< OnMouseOver/>}/>
            <Route path='/DolorToIndiaRupee' element={< DolorToIndiaRupee/>}/>
            <Route path='/Uniquewords' element={< Uniquewords/>}/>
            <Route path='/NotRepeatString' element={< NotRepeatString/>}/>
            <Route path='/SearchOperation' element={< SearchOperation/>}/>
            <Route path='/LoginUrl' element={< LoginUrl/>}/>
            <Route path='/ButtonPropParent' element={< ButtonPropParent/>}/>
            <Route path='/Increment' element={< Increment/>}/>


        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routess;