import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password && !isForgotPassword) {
      newErrors.password = "Password is required";
    } else if (
      password &&
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(
        password
      )
    ) {
      newErrors.password =
        "Password must be at least 6 characters long, contain at least 1 special character, 1 number, and 1 letter.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (isForgotPassword) {
        console.log("Forgot password email sent to:", email);
        toast.info("Forgot password email sent!"); 
      } else {
        console.log("Login successful");
        toast.success("Login successful!"); 
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all`}
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>
      {!isForgotPassword && (
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all`}
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>
      )}
      <div>
        <button
          type="submit"
          className="w-full bg-black text-white active:scale-95  transition-transform  py-2 px-4 rounded-lg hover:bg-gray-900  duration-100"
        >
          {isForgotPassword ? "Reset Password" : "Login"}
        </button>
      </div>
      <div className="text-center">
        <button
          type="button"
          onClick={() => setIsForgotPassword(!isForgotPassword)}
          className="text-sm text-gray-600 hover:text-gray-800"
        >
          {isForgotPassword ? "Back to Login" : "Forgot password?"}
        </button>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-sm text-gray-500">OR</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>
      <div className="space-y-4">
        <button
          type="button"
          className="w-full flex items-center justify-center bg-white text-gray-700 py-2 px-4 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-300"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Login with Google
        </button>
      </div>
    </form>
  );
};

export default Login;
