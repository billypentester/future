import { Routes, Route} from "react-router-dom";
import './App.css'

import Navbar from "./component/Navbar";

import Home from './views/Home'
import Apply from './views/Apply'
import NoMatch from './views/NoMatch'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App
