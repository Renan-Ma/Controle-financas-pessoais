import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/cadastro" element={<Register />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
