//Home.js
const Home = () => { // thick arrows are acceptable, or you can do it like App.js

  const handleClick = () => {
    console.log('hello, ninjas');
  }

  const handleClickAgain = (name) => {
    console.log('hello ' + name);
  }

  // To take advantage of event properties:
  const handleClickWithEvent = (e) => {
    console.log('hello, ninjas', e);
  }

  const handleClickAgainWithEvent = (name, e) => {
    console.log('hello ' + name, e.target);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      {/*
        If you do it like this with the brackets, it'll call the function
        as soon as the page loads, you have to make sure you do it WITHOUT
        the brackets for it to only happen on click.
        <button onClick={ handleClick() }>Click me</button>
      */}
      <button onClick={ handleClick }>Click me</button>
      <button onClick={() => {
        handleClickAgain('mario')
      }}>Click me again</button>
      {/*
        Alternatively, this can be done on one line, and curly brackets removed:
        <button onClick={() => handleClickAgain('mario') }>Click me again</button>
      */}
      <button onClick={ handleClickWithEvent }>Click me (with event)</button>
      <button onClick={(e) => {
        handleClickAgainWithEvent('luigi', e)
      }}>Click me again (with event)</button>
    </div>
  );
}

export default Home;
