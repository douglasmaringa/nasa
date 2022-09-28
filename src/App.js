import React from "react";
import {BrowserRouter ,Routes,Route} from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/details" element={<Details/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </BrowserRouter>
  );
}