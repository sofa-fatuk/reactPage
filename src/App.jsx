import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import MainPage from './pages/MainPage'
import UserProfile from './pages/UserProfile'
import ProfileEdit from './pages/ProfileEdit'
import CreateNews from './pages/CreateNews'

import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn title="title" />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/main-page" element={<MainPage />} />
        <Route path="/users/:id" element={<UserProfile />} />
        <Route path="/edit-profile" element={<ProfileEdit />} />
        <Route path="/create-news" element={<CreateNews />} />
        <Route
          path="*"
          element={<div>Error</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}
