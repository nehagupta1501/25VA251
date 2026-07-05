import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="form-container">
      <form className="form-box">
        <h2>Create Account</h2>

        <input type="text" placeholder="Full Name" />

        <input type="email" placeholder="Email" />

        <input type="text" placeholder="College Name" />

        <input type="password" placeholder="Password" />

        <button type="submit">Signup</button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;