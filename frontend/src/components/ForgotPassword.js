import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    // Add your forgot password logic here
    // For example, you can use axios to call your API
    // axios.post('/api/forgot-password', { email })
    //   .then(response => {
    //     // Handle success
    //     setMessage('Password reset link sent to your email.');
    //   })
    //   .catch(error => {
    //     // Handle error
    //     setError('Failed to send password reset link.');
    //   });
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="card p-4" style={{ width: "100%", maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Forgot Password</h2>
        <form onSubmit={handleForgotPassword}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Send Reset Link
          </button>
        </form>
        {message && <p className="text-success mt-3">{message}</p>}{" "}
        {/* Display success message */}
        {error && <p className="text-danger mt-3">{error}</p>}{" "}
        {/* Display error message */}
        <p className="mt-3 text-center">
          Remembered your password? <a href="/">Login</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
