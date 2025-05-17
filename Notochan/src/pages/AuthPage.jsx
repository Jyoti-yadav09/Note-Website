import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();

    if (isLogin) {
     
      if (!email) {
        alert("Please enter your email to login.");
        return;
      }
      localStorage.setItem("userToken", "fake_token_123");
      localStorage.setItem("userEmail", email);
      
      if (!localStorage.getItem("userName")) {
        localStorage.setItem("userName", "Guest User");
      }
      navigate("/dashboard");
    } else {
     
      if (!name) {
        alert("Please enter your full name to register.");
        return;
      }
      if (!email) {
        alert("Please enter your email to register.");
        return;
      }
      localStorage.setItem("userToken", "fake_token_123");
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userName", name);
      alert("Registered successfully!");
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-[#F7F7F7] px-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`px-4 py-2 rounded-l-full ${
                isLogin ? "bg-[#ADD8E6] text-[#4B0082]" : "bg-gray-100"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`px-4 py-2 rounded-r-full ${
                !isLogin ? "bg-[#ADD8E6] text-[#4B0082]" : "bg-gray-100"
              }`}
            >
              Register
            </button>
          </div>

          <h2 className="text-2xl font-semibold text-center mb-6 text-[#4B0082]">
            {isLogin ? "Welcome Back!" : "Join NotoChan 📝"}
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {!isLogin && (
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />

            {!isLogin && (
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
            )}

            <button
              type="submit"
              className="w-full bg-[#4B0082] text-white py-2 rounded-lg hover:bg-[#5e2ca5] transition"
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </form>

          <button
            onClick={() => navigate('/')}
            className="mt-4 w-full bg-gray-200 text-[#4B0082] font-medium py-2 rounded-lg hover:bg-gray-300 transition"
          >
            ← Back to Home
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AuthPage;
