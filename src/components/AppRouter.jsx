import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import HeaderNav from "./UI/HeaderNav/HeaderNav";
import Todo from "./screens/Todo/Todo";
import Home from "./screens/Home/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <HeaderNav/>
      <Routes>
        <Route path="/todo" element={<Todo/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route
          path="*"
          element={<Navigate replace to="/home"/>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;