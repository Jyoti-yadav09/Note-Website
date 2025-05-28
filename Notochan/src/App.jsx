import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import "./App.css";
import Create from "./pages/Create";
import MyNotes from "./pages/MyNote";
import Remainder from "./pages/Remainder";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AuthPage" element={<AuthPage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
       <Route path="/profile" element={<Profile />} />
       <Route path="/create" element={<Create/>}/>
      <Route path="/my-notes" element={<MyNotes/>}/>
      <Route path="/remainder" element={<Remainder/>}/>
      </Routes>
    </Router>
  );
}

export default App;
