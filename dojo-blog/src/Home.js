//Home.js
import { useState } from 'react';

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
      {blogs.map((blog) => ( // this is essentially a foreach loop, note the names
        // the rest should be self explanatory
        <div className="blog-preview" key={blog.id}>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
