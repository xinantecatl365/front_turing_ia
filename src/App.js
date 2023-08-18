import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen';
import Card from "./components/utilities/CardVertical";
import CardHorizontal from "./components/utilities/CardHorizontal"
import Home from "./components/screens/Home";
import { AuthProvider } from './components/context/AuthContext';
import PrivateRoute from './components/utilities/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <div className="bg-gray-300 font-roboto">
        <Router>
          <Routes>
            <Route path='/' element={<PrivateRoute children={<Home />} />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup" element={<RegisterScreen />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
