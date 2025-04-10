 import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Layout from "./layouts/Layout";
import Home from "./features/employee/pages/employees"; 

function App() {
  return (
    <BrowserRouter>
    {/* <Layout> */}
      <Routes>
        <Route path="/" element={<Home />} /> 
      </Routes>
    {/* </Layout> */}
  </BrowserRouter>
  );
}

export default App;
