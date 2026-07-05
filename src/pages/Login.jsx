import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="form-container">
      <form className="form-box">
        <h2>Login</h2>

        <input type="email" placeholder="Email" />

        <input type="password" placeholder="Password" />

        <button type="submit">Login</button>

        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;