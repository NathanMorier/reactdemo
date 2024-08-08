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
