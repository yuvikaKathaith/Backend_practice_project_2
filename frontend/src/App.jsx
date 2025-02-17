import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import { Toaster } from "react-hot-toast"
import { useContext, useEffect } from "react"
import axios from "axios"
import Context from "./main.jsx"

const App = () => {
  const {isAuthenticated, setIsAuthenticated, user, setUser} = useContext(Context);
  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:4000/api/v1/user/profile",
          {},
          { withCredentials: true }
        );
        setUser(data.user);
        setIsAuthenticated(true);
      } catch (error) {
        console.log(error.response?.data || error.message);
        setIsAuthenticated(false);
        setUser({});
      }
    };
    getUser();
  }, []);  
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