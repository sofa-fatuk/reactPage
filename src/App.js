import './App.css'
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

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/main-page" element={<MainPage />} />
        <Route path="/users/:id" element={<UserProfile />} />
        <Route path="/profile" element={<ProfileEdit />} />
        <Route
          path="*"
          element={<div>Error</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}
