import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import LoginPage from "./pages/Login";
import styled from "styled-components";
import Business from "./pages/Business/AllBusiness";
import CreateNewBusiness from "./pages/Business/CreateNewBusiness";
const Container = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/Login" />} />
        <Route default path="/login" element={<CreateNewBusiness />} />
      </Routes>
    </Container>
  );
}

export default App;
