import React, { useState } from "react";
import logo from "../assets/olx logo.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";


const Login = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const navigate = useNavigate();
  const {error, setError, login ,user } = useAuth();

//   console.log(auth?.currentUser?.email);
  
const handleSubmit = async (e) => {
  e.preventDefault();
  setError(""); // Clear any previous error messages
  try {
    await login(email, password); // Make sure login function is correctly implemented
   history.push('/home')
  } catch (error) {
    setError("Invalid Credentials");
  }
};

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="container bg-gray-100 p-12 rounded-md w-2/3 md:w-1/2 lg:w-1/3 mx-auto">
          <div className="flex justify-center mb-5">
            <img
              src={logo}
              alt="Logo"
              className="w-10 h-10 mr-2 flex justify-cen"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name="email"
              id="email"
              className="bg-gray-200 p-3 mb-4 rounded-md"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              id="password"
              className="bg-gray-200 p-3 mb-4 rounded-md"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-red-500 text-xs italic text-center">{error}</p>

            <button
              className="bg-blue-600 text-white px-4 py-2 mt-5 rounded-md"
              onClick={handleSubmit}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
