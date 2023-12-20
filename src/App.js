import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Board from "./component/board/Board";
import Show from "./component/show/Show";
import Main from "./component/main/Main";
import Homework from "./component/homework/Homework";
import Login from "./component/login/Login";
import Infor from "./component/infor/Infor";
import Notice from "./component/notice/Notice";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Board' element={<Board />} />
        <Route path='/Show' element={<Show />} />
        <Route path='/' element={<Main />} />
        <Route path='/Homework' element={<Homework />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Infor' element={<Infor />} />
        <Route path='/Notice' element={<Notice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
