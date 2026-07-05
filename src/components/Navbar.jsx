import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#2563eb",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        flexWrap: "wrap",
      }}
    >
      <h2>📚 Campus Notes Hub</h2>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>

        <Link to="/wishlist" style={{ color: "white", textDecoration: "none" }}>
          Wishlist
        </Link>

        <Link to="/profile" style={{ color: "white", textDecoration: "none" }}>
          Profile
        </Link>

        <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
          About
        </Link>

        <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
          Contact
        </Link>

        <Link to="/login" style={{ color: "white", textDecoration: "none" }}>

        <Link to="/">Home</Link>

<Link to="/notes">Notes</Link>

<Link to="/upload">Upload</Link>

<Link to="/wishlist">Wishlist</Link>

<Link to="/profile">Profile</Link>

<Link to="/login">Login</Link>
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;