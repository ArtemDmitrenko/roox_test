import React from 'react';
import './style/style.scss';
import {
  Route, Routes, useNavigate,
} from 'react-router-dom';
import AllUsersPage from './pages/AllUsersPage/AllUsersPage';
import UserPage from './pages/UserPage/UserPage';

function App() {
  const navigate = useNavigate();

  const handleOnClick = (id: number) => {
    navigate(`/user/${id}`);
  };

  return (
    <Routes>
      <Route path="/" element={<AllUsersPage onClick={handleOnClick} />} />
      <Route path="user/:id" element={<UserPage />} />
    </Routes>
  );
}

export default App;
