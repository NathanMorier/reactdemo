//Home.js
import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import { supabase } from './supabaseClient';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*');

      if (error) {
        setError(error.message);
      } else {
        setBlogs(data);
      }
      setIsPending(false);
    };

    fetchBlogs();
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
