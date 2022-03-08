import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./containers/Layout";
import Home from "./pages/Home";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
