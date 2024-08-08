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


!!!!! Using State (useState hook) !!!!! (using-state-usestate-hook branch)

So the idea with the useState hook is for something on the page that might
change after an interaction, like updated text. This will all be done within
the Home.js file:

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
      <p>{ name } is { age } years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Home;


Comments should make it self explanatory, checkout the using-state-usestate-hook
branch for a live demo.

!!!!! Intro To React Dev Tools !!!!! (intro-to-react-dev-tools branch)

React Dev Tools is a browser extension, it adds a couple of more options in
the "inspection" dev tools. It's useful, get it!


!!!!! Outputting Lists !!!!! (outputting-lists branch)

Checkout the branch for a live demo, it's essentially a demo for a foreach loop!

//Home.js
import { useState } from 'react';

const Home = () => {
  const [blogs, /*setBlogs*/] = useState([ // 'blogs' is essentially the name of the array
    // Notice that 'setBlogs' is commented out, that's because we don't actually need it unless
    // there's an update taking place like in the useState hook lesson.
    { title: 'Its a-meee!', body: 'lorem ipsum...', author: 'mario', id: 1}, // id's MUST be unique
    { title: 'Yahoooo!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
    { title: 'Yehee, go green!', body: 'lorem ipsum...', author: 'luigi', id: 3}
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => ( // this is essentially a foreach loop, note the names
        // the rest should be self explanatory
        <div className="blog-preview" key={blog.id}>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
        </div>
      ))}
    </div>
  );
}

export default Home;


!!!!! Props !!!!!

This will be the start of outputting data for a blog, this will require editing
of Home.js, and creating a new file called BlogList.js, the comments should make
things self explanatory.

//Home.js
import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, /*setBlogs*/] = useState([ // 'blogs' is essentially the name of the array
    // Notice that 'setBlogs' is commented out, that's because we don't actually need it unless
    // there's an update taking place like in the useState hook lesson.
    { title: 'Its a-meee!', body: 'lorem ipsum...', author: 'mario', id: 1}, // id's MUST be unique
    { title: 'Yahoooo!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
    { title: 'Yehee, go green!', body: 'lorem ipsum...', author: 'luigi', id: 3}
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" />
    </div>
  );
}

export default Home;



//Bloglist.js

// this here is one way to grab the values from blogs, but there's an even easier way after the comment.
/*const BlogList = (props) => {
  const blogs = props.blogs; // grabs everything from 'blogs' attribute (prop) on Home.js
  const title = props.title; // this will grab the title attribute from your BlogList on Home.js
*/
  const BlogList = ({blogs, title}) => { // grabs from both blogs and title attributes (or props) on BlogList on Home.js

  return (
    <div className="blog-list">
      <h2>{ title }</h2>
      {blogs.map((blog) => ( // this is essentially a foreach loop, note the names
        // the rest should be self explanatory
        <div className="blog-preview" key={blog.id}>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;

Now, the reason WHY it is actually better to not have the array included in BlogList.js
even though you very well could, is because you may need a DIFFERENT blog array
for Home.js, compared to a different page with more filtered results.


!!!!! Reusing Components !!!!! (reusing-components branch)

So all we've done in this one is make the blog with a filter, which can be
done on Home.js, no explanation required:

<BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs" />


!!!!! Functions as Props !!!!! (functions-as-props branch)

This will allow the user to delete blog entries by using a function through
a prop, see below:

//Bloglist.js

// this here is one way to grab the values from blogs, but there's an even easier way after the comment.
/*const BlogList = (props) => {
  const blogs = props.blogs; // grabs everything from 'blogs' attribute (prop) on Home.js
  const title = props.title; // this will grab the title attribute from your BlogList on Home.js
*/
  const BlogList = ({blogs, title, handleDelete}) => { // Add new handleDelete prop

  return (
    <div className="blog-list">
      <h2>{ title }</h2>
      {blogs.map((blog) => ( // this is essentially a foreach loop, note the names
        // the rest should be self explanatory
        <div className="blog-preview" key={blog.id}>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          {/*
            Since the data is stored in Home.js, it's NOT a good idea to store
            the handleDelete function here, but rather where it is stored.
          */}
          <button onClick={() => handleDelete(blog.id)}>delete blog</button>
        </div>
      ))}
    </div>
  );
}

export default BlogList;

//Home.js
import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([ // 'blogs' is essentially the name of the array
    // Notice that 'setBlogs' is NO LONGER commented out, that's because it's
    // actually being used.
    { title: 'Its a-meee!', body: 'lorem ipsum...', author: 'mario', id: 1}, // id's MUST be unique
    { title: 'Yahoooo!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
    { title: 'Yehee, go green!', body: 'lorem ipsum...', author: 'luigi', id: 3}
  ]);

  // New function to handleDelete
  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} /> {/*new handleDelete prop*/}
    </div>
  );
}

export default Home;


!!!!! useEffect Hook [The Basics] !!!!! (useeffect-hook-the-basics branch)

This is a bit of a shorter lesson:

//Home.js
...
...
useEffect(() => {
  console.log('use effect ran');
  console.log(blogs);
});
...

There'll be more in the next lesson.


!!!!! useEffect Dependencies !!!!! (useeffect-dependancies branch [sic])

A bit of a continuation from last lesson:

//Home.js
import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'Its a-meee!', body: 'lorem ipsum...', author: 'mario', id: 1},
    { title: 'Yahoooo!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
    { title: 'Yehee, go green!', body: 'lorem ipsum...', author: 'luigi', id: 3}
  ]);

  const [name, setName] = useState('mario'); // add this

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log('use effect ran');
    console.log(name);
  }, [name]); // adding the name as a Dependencies DOES allow the useEffect to
  // run again, same with any other added. Notice if you click on the button
  // again, it DOESN'T run again, because it knows nothing has changed, it's
  // still luigi
  /*
  }, []); adding an empty array is if you on makes sure the useEffect will
  Only run once on the first render.
  */

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
      <button onClick={() => setName('luigi')}>change name</button>
      <p>{ name }</p>
    </div>
  );
}

export default Home;


!!!!! Using JSON Server !!!!! (using-json-server branch)

Note, you can go here for making a JSON Server: https://www.youtube.com/watch?v=mAqYJF-yxO8&list=PL4cUxeGkcC9i2v2ZqJgydXIcRq_ZizIdD&index=2

Create a data/db.json file, notice the 'blogs' name assigned to it:
{
  "blogs": [
    {
      ...items
    },
    {
      ...items
    },
    {
      ...items
    }
  ]
}

After that, you'll run the following command:
npx json-server --watch data/db.json --port 8000

Should be pretty self explanatory with 1 necessary mention; putting the server
on port 8000 is a conscious choice because it's NOT 3000, which is what our
react site is working on.

You'll notice that it gives you this address:
http://localhost:8000/blogs

We have some strategic "end points" we can use, which includes the following:

/blogs --------- GET ---- Fetch all Blogs
/blogs/{id} ---- GET ---- Fetch a single blog
/blogs --------- POST --- Add a new blog
/blogs/{id} ---- DELETE - Delete a blog

But we'll find out more, in the next lesson.


!!!!! Fetching Date with UseEffect !!!!! (fetching-date-with-useeffect branch)

//Home.js
import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null); // change to null

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then((data) => {
        //console.log(data);
        setBlogs(data);
      })
  }, []);

  return (
    <div className="home">
      {/*
        Notice the new conditional wrapper? Without it we'd actually get an
        error. When the page first loads, it still thinks that blogs is 'null'
        because the stuff from useEffect hasn't loaded yet. TO correct this, we
        have wrapped the condition as you see here, since 'blogs' is null, it
        moves onto the next thing after the &&, and loads the data.
      */}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
}

export default Home;

Now the posts will be coming in from the JSON server! Onto the next lesson.
