//Bloglist.js

// this here is one way to grab the values from blogs, but there's an even easier way after the comment.
/*const BlogList = (props) => {
  const blogs = props.blogs; // grabs everything from 'blogs' attribute (prop) on Home.js
  const title = props.title; // this will grab the title attribute from your BlogList on Home.js
*/
  const BlogList = ({blogs, title}) => { // grabs from both blogs and title attributes (or props) on BlogList on Home.js

  return (
    <div className="blog-list">
      <h2>{ title }</h2>
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

export default BlogList;
