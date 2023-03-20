import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { GlobalStyles } from "../styles/Global.styles";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRouter from "./PrivateRouter";
import About from "../pages/about/About";
import Detail from "../pages/detail/Detail";

const AppRouter = ({ chosenTheme, setChosenTheme }) => {
  const [currentUser, setCurrentUser] = useState(
    sessionStorage.getItem("user") || false
  );

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <Login setCurrentUser={setCurrentUser} currentUser={currentUser} />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRouter />}>
          <Route path="/about" element={<About currentUser={currentUser} />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
      <Footer chosenTheme={chosenTheme} setChosenTheme={setChosenTheme} />
    </BrowserRouter>
  );
};

export default AppRouter;
