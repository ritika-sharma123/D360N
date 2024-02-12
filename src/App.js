import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import LoginPage from './pages/Login';
import styled from 'styled-components';

const Container = styled.div`
     height:100vh;
`;

function App() {
  return (
    <Container>
     <Header />
     <Routes>
        <Route path="/" element={<Navigate replace to="/Login" />} />
        <Route default path="/login" element={<LoginPage/>}/>
      </Routes>
    </Container>
  );
}

export default App;
