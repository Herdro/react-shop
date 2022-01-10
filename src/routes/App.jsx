import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAccount from "../pages/CreateAccount";
import Layout from "../containers/Layout";
import Login from "../pages/Login";
import RecoveryPassword from "../pages/RecoveryPassword";
import EditAccount from "../pages/EditAccount";
import MyOrder from "../pages/MyOrder";
import MyOrders from "../pages/MyOrders";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import "../styles/global.css";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Create-Account" element= {<CreateAccount />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Recovery-Password" element={<RecoveryPassword />} />
          <Route exact path="/Edit-Account" element={<EditAccount />} />
          <Route exact path="/My-Order" element={<MyOrder />} />
          <Route exact path="/My-Orders" element={<MyOrders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
