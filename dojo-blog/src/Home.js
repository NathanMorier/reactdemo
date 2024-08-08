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
