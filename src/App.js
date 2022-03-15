import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./containers/Layout";

import CustomerForm from "./components/admin/CustomerForm";
import Customers from "./pages/admin/Customers";
import Settings from "./pages/Settings";
import Meetings from "./pages/admin/Meetings";
import Login from "./components/Login";
import PrivateRoutes from "./components/PrivateRoutes";
import AdminRoutes from "./components/admin/AdminRoutes";
import UserDashboard from "./pages/user/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard"
import { UserProvider } from "./context/User"
import { CookiesProvider } from "react-cookie";
import Home from "./pages/Home";

const App = () => (
  <BrowserRouter>

    <CookiesProvider>
      <UserProvider>
        <Layout>
          <Routes>

            <Route path="/" element={<Home />} />


            <Route element={<AdminRoutes />}  >
              <Route index path="/fm/dashboard" element={<AdminDashboard />} />
              <Route path="/clientes/*">
                <Route path="" element={<Customers />} />
                <Route path="nuevo" element={<CustomerForm />} />
              </Route>
              <Route path="/citas" element={<Meetings />} />
              <Route path="/ajustes" element={<Settings />} />
            </Route>


            <Route element={<PrivateRoutes />}  >
              <Route path="/dashboard" element={<UserDashboard />} index />
            </Route>

            <Route path="*" element={<div>Not found</div>} />

          </Routes>
        </Layout>
      </UserProvider>
    </CookiesProvider>
  </BrowserRouter>
);

export default App;
