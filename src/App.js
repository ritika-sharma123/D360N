import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/Login";
import styled from "styled-components";
import ManageIntegrationsPage from "./pages/ManageIntegrations";
import CommonHeader from "./components/HeaderPages";
import PrivateRoute from "./pages/Routes";
import Dashboard from "./pages/DashBoard";

const Container = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/manage-integrations"
            element={<ManageIntegrationsPage />}
          />
          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
