import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';



import './App.css';
import AdminSidebar from "./pages/AdminSidebar";


function App() {
  return (
    <BrowserRouter>
      <Suspense>



        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/AdminSidebar" element={<AdminSidebar />} />

          {/* <Route path="/login" element={<Login />} /> */}

        </Routes>
      </Suspense>
    </BrowserRouter >
  );
}

export default App;
