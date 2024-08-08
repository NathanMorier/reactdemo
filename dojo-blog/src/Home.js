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
