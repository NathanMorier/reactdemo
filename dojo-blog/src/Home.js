//Home.js
import { useState } from 'react'; // add import

const Home = () => {
  const [name, setName] = useState('mario'); // setName is a name we set, "name" grabs the useState value.
  const [age, setAge] = useState(25); // same like above

  const handleClick = () => {
    setName('luigi'); // change value of setName after click
    setAge(30); // same as above
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      {/* Note that you're calling "name" and "age", NOT setName/setAge */}
      <p>{ name } is { age } years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Home;
