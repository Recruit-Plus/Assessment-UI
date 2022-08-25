import React from 'react';

import Navbar from './components/Navbar';
import Create_assessment from './components/Create_assessment';
import PreviewWindow from './components/PreviewWindow';
import { Switch, Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
 return (
  <>
  
  {/* <Create_assessment/> */}
  
    <Routes>
      
        {/* <Route path='/Create_assessment' element={<Create_assessment/>}/> */}
        <Route path='/PreviewWindow'element={<PreviewWindow/>} />
        <Route path='/Create_assessment'element={<Create_assessment/>} />
      
    </Routes> 

  </>
  
      
);
}

export default App;
