import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) {
      newErrors.password = "Password is required";
    } else if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(
        password
      )
    ) {
      newErrors.password =
        "Password must be at least 6 characters long, contain at least 1 special character, 1 number, and 1 letter.";
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Signup successful");
      toast.success("Signup successful!"); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.name ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all`}
          placeholder="Enter your name"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>
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
      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.confirmPassword ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all`}
          placeholder="Confirm your password"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
        )}
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-black  py-2 px-4 rounded-lg hover:bg-gray-900 text-white active:scale-95  transition-transform  duration-100"
        >
          Signup
        </button>
      </div>
    </form>
  );
};

export default Signup;
