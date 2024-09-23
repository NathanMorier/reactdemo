//Navbar.js
import { Link } from 'react-router-dom'; // import this

const Navbar = () => { // thick arrows are acceptable, or you can do it like App.js
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
        <Link to="/blogs/5">Blog Details</Link>
      </div>
    </nav>
  );
}

export default Navbar;
