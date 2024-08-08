//Home.js
import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true); // add this

  useEffect(() => {
    /*
    The setTimeout is simply to test a live loading time, because it'll
    otherwise show extremely quickly since this current setup is local.
    */
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false); // now that the data is fetched, loading message false
        })
    }, 1000);
  }, []);

  return (
    <div className="home">
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
