//Home.js
import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'Its a-meee!', body: 'lorem ipsum...', author: 'mario', id: 1},
    { title: 'Yahoooo!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
    { title: 'Yehee, go green!', body: 'lorem ipsum...', author: 'luigi', id: 3}
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log('use effect ran');
  }, []);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
    </div>
  );
}

export default Home;
