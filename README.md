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


!!!!! Components & Templates !!!!!
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
