//Home.js
import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true); // add this
  const [error, setError] = useState(null); // this is so you can output it instead of just log

  useEffect(() => {
    /*
    The setTimeout is simply to test a live loading time, because it'll
    otherwise show extremely quickly since this current setup is local.
    */
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
          /*
          This will return conditions of the response, and you can make conditions
          based off of them:
          Response {type: 'cors', url: 'http://localhost:8000/blogs', redirected: false, status: 200, ok: true, …}
          body: (...)
          bodyUsed: true
          headers: Headers {}
          ok: true (THIS ONE IS IMPORTANT)
          redirected: false
          status: 200
          statusText: "OK"
          type: "cors"
          url: "http://localhost:8000/blogs"
          [[Prototype]]: Response
          */
          //console.log(res);
          if(!res.ok) {
            // This will be added to the err.message below.
            // To simulate this, make the path for the fetch wrong.
            throw Error('Could not fetch the data for that resource');
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false); // now that the data is fetched, loading message false
          setError(null); // set error back to null since data has been fetched
        })
        .catch(err => {
          /*
          This will catch errors and post them to the console, to simulate one,
          we're going to go to the command window that's watching our JSON server
          and turn it off.
          */
          //console.log(err.message);
          setIsPending(false); // remove loading message when error shows
          setError(err.message); // show error message
        })
    }, 1000);
  }, []);

  return (
    <div className="home">
      {/* if error is set to true, it will output here */}
      { error && <div>{ error }</div> }
      {/*
        This is a condition that will show the loading message because isPending
        is set to true.
      */}
      { isPending && <div>Loading...</div> }
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
