import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./containers/Layout";
import Home from "./pages/Home";
import CustomerForm from "./components/CustomerForm";
import Customers from "./pages/Customers";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientes/*">
          <Route path="" element={<Customers />} />
          <Route path="nuevo" element={<CustomerForm />} />
        </Route>
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
