import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from 'react';
import HomePage from '../pages/index';
function Approuter() {
  return (
 

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}/>
        </Routes>
      </BrowserRouter>
  
  
  );
}

export default Approuter;
