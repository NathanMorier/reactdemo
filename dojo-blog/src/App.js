//App.js
//import logo from './logo.svg';
import './App.css';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  //const person = {name: 'yoshi', age: 30 }; // This will come later in the course
  const trueFalseTest = true;
  const link = "https://search.brave.com/";

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Like { likes } times!</p>
        <small>True or false, this is react: { trueFalseTest }</small>
        <p><a href={link} target="_blank" rel="noopener noreferrer">Brave Search</a></p>

        {/* comments */}
        <p>{ 10 }</p>
        <p>{ "Hello, ninjas" }</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ Math.random() * 10 }</p>
      </div>
    </div>
  );
}

export default App;
