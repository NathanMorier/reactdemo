# Complete-React-Tutorial
To start react, first make sure you have node installed, you can check by
typing 'node -v' in the command prompt.

Once you're sure it's installed, then cd into your project folder, and use this
command:
npx create-react-app <project-folder-name> (in this case it's "dojo-blog")

It will take a while to compile, and then afterwords, cd into your project,
and begin the "watch" command:
cd dojo-blog
npm run start

the address will be http://localhost:3000


!!!!! Intro to Components & Templates !!!!!
Components and templates are pretty much the same idea as in Angular.
Starting off, the only component in your project will be <App /> within index.js.
The "html" in the js documents (like App.js) is actually "JSX", there are subtle
differences like 'class="class_name"' is actually className="class_name".

In App.js, we have the following:

<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
      Learn React
    </a>
  </header>
</div>

but we're going to remove the header and replace it:

<div className="App">
  <div className="content">
    <h1>App Component</h1>
  </div>
</div>

Then at the end of the file, you'll notice this:
export default App;

That's because we are exporting the function for the JSX template just above it,
and that will allow us to use it in other files, like what's taking place in
index.js, where it imports it at the top of the document:

import App from './App';

You'll notice it has almost the identical syntax from Angular 2! But enough
about that, just below that we have this:

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

The <App /> is what we use to actually display the JSX template.


!!!!! Dynamic Values in Templates !!!!!

Now, going back to App.js, take a look at the added const values, and the
contents of the content div, what's taking place should be fairly obvious,
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



To see a live example, checkout the dynamic-values-in-templates branch.


!!!!! Multiple Components !!!!! (branch multiple-components)

App.js is the root component, and all others will be nested inside,
similar to Angular 2.

Start by making src/Navbar.js, and structure it like this, similarly to Angular.

//Navbar.js
const Navbar = () => { // thick arrows are acceptable, or you can do it like App.js
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
    </nav>
  );
}

export default Navbar;


Then make Home.js

//Home.js
const Home = () => { // thick arrows are acceptable, or you can do it like App.js
  return (
    <div className="home">
      <h2>Homepage</h2>
    </div>
  );
}

export default Home;


Now all you have to do is go to App.js, import the other two scripts, and then
place tags for where you want them to appear.

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

Checkout branch multiple-components to see it in action.


!!!!! Adding Styles !!!!! (adding-styles branch)

App.css will be applied to everything essntially, because it adds to styles to
the top of the document, rather than restricting it to that component. Separate
css files in react is for the most part just for organization, although it IS
possible to have it displayed only for certain components.

For this lesson, we're going to start be deleting App.css as well as the import
line at the top of App.js.

Take note of the import line in index.js:
import './index.css';

This acts as a global stylesheet, go ahead and add whatever styles you need
for index.css.

Now, if we want to do inline styles within our JSX, this is an example from
Navbar.js:

<a href="/create" style={{
  color: "white",
  backgroundColor: '#f1356d',
  borderRadius: '8px'
}}>New Blog</a>


!!!!! Click Events !!!!! (click-events branch)

For this lesson, all of the changes are within Home.js, to see a live
demonstration, checkout the click-events branch, and give the buttons a try
with the console log open to see the effect.

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
