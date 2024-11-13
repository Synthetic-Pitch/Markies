import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Header from './components/Header/Header';
import MainMenu from './pages/MainMenu';
import Desert from './pages/Desert';
import Beverages from './pages/Beverages';
import Cart from './pages/Cart';
import Vouchers from './pages/Vouchers';
import Pending from './pages/Pending';
import Profile from './pages/Profile';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GlobalContext } from './Context/GlobalContext';

function App() {

  return (
   <GlobalContext>
      <GoogleOAuthProvider clientId="795468337489-oqs3dg7q59raqliejpvu5h6nlc70apuf.apps.googleusercontent.com">
        <Router>
         <AppContent />
        </Router>
      </GoogleOAuthProvider>
   </GlobalContext>
  );
}

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  
  return (
    <> 
      {!isLoginPage && <Header />}
      <Routes>
      <Route path="/Markies/login" element={<Login />} />
        <Route path="/Markies/home" element={<Home />} />
        <Route path="/Markies/mainMenu" element={<MainMenu />} />
        <Route path="/Markies/desert" element={<Desert />} />
        <Route path="/Markies/beverages" element={<Beverages />} />
        <Route path="/Markies/cart" element={<Cart />} />
        <Route path="/Markies/vouchers" element={<Vouchers />} />
        <Route path="/Markies/profile" element={<Profile />} />
        <Route path="/Markies/pending" element={<Pending />} />
      </Routes>
    </>
  );
}

export default App;