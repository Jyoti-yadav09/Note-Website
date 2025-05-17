import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import "./App.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AuthPage" element={<AuthPage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
       <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
