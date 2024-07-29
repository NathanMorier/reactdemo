//Navbar.js
const Navbar = () => { // thick arrows are acceptable, or you can do it like App.js
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" style={{
          color: "white",
          backgroundColor: '#f1356d',
          borderRadius: '8px'
        }}>New Blog</a>
      </div>
    </nav>
  );
}

export default Navbar;
