import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import { Toaster } from "react-hot-toast"

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </Router>
      <Toaster />
    </>
  )
}

export default App