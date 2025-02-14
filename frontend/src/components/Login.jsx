import React, { useState } from 'react'
import toast from "react-hot-toast"
import axios from "axios"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async(e) => {
    e.preventDefault();
    try{
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/login", 
        { email, password },
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      );
      toast.success(data.message);
    }
    catch(error){
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  return (
    <section>
      <div className="flex items-center justify-center min-h-screen bg-[#F9F5EB] p-6">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full border-t-4 border-[#E76F51]">
          <h3 className="text-2xl font-semibold text-center text-[#4A5568] mb-6">Create an Account</h3>

          <form className="space-y-4"
            onSubmit={handleLogin}
          >
            <div>
              <label className="block text-[#4A5568] font-medium">Your Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E76F51] bg-gray-50"
              />
            </div>
            <div>
              <label className="block text-[#4A5568] font-medium">Your Password</label>
              <input
                type="password"
                placeholder="Set Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E76F51] bg-gray-50"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#E76F51] to-[#E63946] text-white py-3 rounded-lg font-medium text-lg transition-all duration-300 hover:from-[#E63946] hover:to-[#F4A261] shadow-md"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login