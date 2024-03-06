import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/Login";
import styled from "styled-components";
import Business from "./pages/Business/AllBusiness";
import CreateNewBusiness from "./pages/Business/CreateNewBusiness";
import ManageIntegrationsPage from "./pages/ManageIntegrations";

import Dashboard from "./pages/DashBoard";
import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";
import ManageIntegrationInitiate from "./pages/ManageIntegrations/ManageIntegrationInitiate";
import { useDispatch } from "react-redux";
import DatasetsPage from "./pages/Datasets/index";
import DatasetDetailPage from "./pages/Datasets/DatasetDetailPage";
import AllIntegration from "./pages/Integrations/AllIntegration";
import CreateIntegration from "./pages/Integrations/CreateIntegration";

const Container = styled.div``;
const App = () => {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handelLogin = async (username, passWord) => {
    console.log("hello");
    // if (username === "admin" && passWord === "password") {
    //   const response = await fetch("/login");
    //   const res_json = await response.json();
    //   console.log(res_json.status);
    //   if (res_json.status === "Succesfully Logged in") {
    setIsLoggedIn(true);
    // }
    // }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <Layout />
          <Container>
            <Routes>
              <Route path="/" element={<Navigate replace to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/business" element={<Business />} />
              <Route path="/createbusiness" element={<CreateNewBusiness />} />
              <Route path="/datasets" element={<DatasetsPage />} />
              <Route path="/dataset-detail" element={<DatasetDetailPage />} />

              <Route path="/allintegration" element={<AllIntegration />} />
              <Route
                path="/createintegration"
                element={<CreateIntegration />}
              />
              <Route
                path="/all-manage-integrations"
                element={<ManageIntegrationsPage />}
              />
              <Route
                path="/all-manage-integrations/:id"
                element={<ManageIntegrationInitiate />}
              />
            </Routes>
          </Container>
        </div>
      ) : (
        <LoginPage onLogin={handelLogin} />
      )}
    </div>
  );
};

export default App;
