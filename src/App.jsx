// App.jsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./components/Detail"; // 导入 Detail 组件
import Home from "./sections/Home";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productDetail/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
};

export default App;
