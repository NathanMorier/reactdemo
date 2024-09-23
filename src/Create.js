// Create.js
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    setIsPending(true);

    const { error } = await supabase
      .from('blogs')
      .insert([{ title, body, author }]);

    if (error) {
      console.error('Error adding blog:', error.message);
      setIsPending(false);
    } else {
      console.log('New blog added');
      setIsPending(false);
      navigate('/');
    }
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <textarea
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          type="text"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option name="mario">mario</option>
          <option name="luigi">Luigi</option>
          <option name="yoshi">Yoshi</option>
        </select>
        { !isPending && <button>Add Blog</button>}
        { isPending && <button disabled>Adding blog...</button>}
        <p>{ title }</p>
        <p>{ body }</p>
        <p>{ author }</p>
      </form>
    </div>
  );
}

export default Create;
