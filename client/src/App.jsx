import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";

const App = () => {
  return (

    <div>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
