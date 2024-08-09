//Home.js
//import { useState, useEffect } from 'react'; // no longer needed since everything has been moved to useFetch.js
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs'); // this will pass the values between here and useFetch.js

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
