import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./containers/Layout";
import Home from "./pages/admin/Dashboard";
import CustomerForm from "./components/admin/CustomerForm";
import Customers from "./pages/admin/Customers";
import Settings from "./pages/Settings";
import Meetings from "./pages/admin/Meetings";
import Login from "./pages/Login";
import PrivateRoutes from "./components/PrivateRoutes";
import AdminRoutes from "./components/admin/AdminRoutes";
import Dashboard from "./pages/user/Dashboard";
import UserProvider from "./context/User";
import { CookiesProvider } from "react-cookie";

const App = () => (
  <BrowserRouter>
    <Layout>
      <CookiesProvider>
        <UserProvider>
          <Routes>
            <Route element={<AdminRoutes />}  >
              <Route index path="/fm/dashboard" element={<Home />} />
              <Route path="/clientes/*">
                <Route path="" element={<Customers />} />
                <Route path="nuevo" element={<CustomerForm />} />
              </Route>
              <Route path="/citas" element={<Meetings />} />
              <Route path="/ajustes" element={<Settings />} />
            </Route>
            <Route element={<PrivateRoutes />}>
              <Route xpath="/dashboard" element={<Dashboard />} index />
            </Route>
            <Route path="/iniciar-sesion" element={<Login />} />
            <Route path="*" element={<div>Not found</div>} />
          </Routes>
        </UserProvider>
      </CookiesProvider>
    </Layout>
  </BrowserRouter>
);

export default App;
