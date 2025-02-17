import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/user/logout",
        {
          withCredentials: true,
        }
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Logout failed");
    }
  };

  return (
    <header className="bg-[#F9F5EB] shadow-md p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-[#4A5568] text-xl font-semibold hover:text-[#E76F51] transition-colors">HOME</Link>
        <Link 
          onClick={handleLogout} 
          className="bg-gradient-to-r from-[#E76F51] to-[#E63946] text-white py-2 px-6 rounded-lg font-medium transition-all duration-300 hover:from-[#E63946] hover:to-[#F4A261] shadow-md cursor-pointer"
        >
          LOGOUT
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;