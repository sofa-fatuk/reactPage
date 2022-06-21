import './App.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MainPage from './pages/MainPage';
import UserProfile from './pages/UserProfile';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';


export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/main-page" element={<MainPage />} />
        <Route path="/user" element={<UserProfile />} />
        <Route
          path="*"
          element={<div>Error</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}