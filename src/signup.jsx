import React from "react";

// Don't forget to download the Bootstrap CSS file too OR 
// remove the following line if you're already using Bootstrap 
import "bootstrap/dist/css/bootstrap.min.css";

export const Signup = () => {
  return (
    <div id="webcrumbs" className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg" style={{ width: '400px' }}>
        <div className="card-body">
          <h1 className="card-title text-center mb-4">Sign Up</h1>

          <form>
            {/* Name Field */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Field */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Confirm Password Field */}
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                placeholder="Confirm your password"
                required
              />
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Sign Up
            </button>
          </form>

          {/* Already Have an Account Section */}
          <p className="mt-3 text-center">
            Already have an account?{" "}
            <a href="/login" className="text-primary">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
