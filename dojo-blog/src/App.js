//App.js
//import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'; // Add new import from Navbar.js
import Home from './Home'; // Add new import from Home.js

function App() {
  return (
    <div className="App">
      <Navbar /> { /*add self closing tag*/ }
      <div className="content">
        <Home /> { /*add self closing tag*/ }
      </div>
    </div>
  );
}

export default App;
