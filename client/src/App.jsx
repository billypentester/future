import { Routes, Route} from "react-router-dom";
import './App.css'

import Navbar from "./component/Navbar";

import Home from './views/Home'
import Apply from './views/Apply'

import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Profile from "./views/Profile";
import Content from "./views/Content";
import Terms from "./views/Terms";

import NoMatch from './views/NoMatch'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/content" element={<Content />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App
