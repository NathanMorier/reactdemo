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
