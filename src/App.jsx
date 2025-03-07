import React, { useState } from "react";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md border border-gray-200">
        <div className="flex">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-4 text-lg font-semibold transition-colors duration-300 ${
              isLogin
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-4 text-lg font-semibold transition-colors duration-300 ${
              !isLogin
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Signup
          </button>
        </div>
        <div className="p-8">{isLogin ? <Login /> : <Signup />}</div>
      </div>
    </div>
  );
}

export default App;
