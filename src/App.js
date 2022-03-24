import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./containers/Layout";

import Home from "./pages/Home";
import CustomerForm from "./components/admin/CustomerForm";
import Customers from "./pages/admin/Customers";
import Settings from "./pages/admin/Settings"
import Meetings from "./pages/admin/Meetings";
import PrivateRoutes from "./components/PrivateRoutes";
import AdminRoutes from "./components/admin/AdminRoutes";
import UserDashboard from "./pages/user/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard"
import { UserProvider } from "./context/User"
import { CookiesProvider } from "react-cookie";

import { initAxiosInterceptors } from "./services/auth-helpers";
import CustomerDetails from "./components/admin/CustomerDetails";


initAxiosInterceptors();
const App = () => {
  initAxiosInterceptors();
  return (
    <BrowserRouter>
      <CookiesProvider>
        <UserProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route element={<AdminRoutes />}  >
                <Route index path="/fm/dashboard" element={<AdminDashboard />} />
                <Route path="clientes">
                  <Route path=":id" element={<CustomerDetails />} />
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
  )
}

export default App;
