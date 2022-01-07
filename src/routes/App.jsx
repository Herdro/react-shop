import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAccount from "../containers/CreateAccount";
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import RecoveryPassword from "../containers/RecoveryPassword";
import EditAccount from "../containers/EditAccount";
import MyOrder from "../containers/MyOrder";
import MyOrders from "../containers/MyOrders";
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
