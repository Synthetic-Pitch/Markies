import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import MainMenu from "./pages/MainMenu";
import Desert from "./pages/Desert";
import Beverages from "./pages/Beverages";
import Cart from "./pages/Cart";
import Vouchers from "./pages/Vouchers";
import Pending from "./pages/Pending";
import Profile from "./pages/Profile";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GlobalContext } from "./Context/GlobalContext";

function App() {
  return (
    <GlobalContext>
      <GoogleOAuthProvider clientId="795468337489-oqs3dg7q59raqliejpvu5h6nlc70apuf.apps.googleusercontent.com">
        <Router basename="/Markies">
          <AppContent />
        </Router>
      </GoogleOAuthProvider>
    </GlobalContext>
  );
}

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {!isLoginPage && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mainMenu" element={<MainMenu />} />
        <Route path="/desert" element={<Desert />} />
        <Route path="/beverages" element={<Beverages />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/vouchers" element={<Vouchers />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/pending" element={<Pending />} />
      </Routes>
    </>
  );
}

export default App;
