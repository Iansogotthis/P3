import React, { useState } from 'react';

function NewStoryPage() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
 

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the form data to your server
    console.log({ title, author, content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
      </label>
      <label>
        Author:
        <input type="text" value={author} onChange={e => setAuthor(e.target.value)} required />
      </label>
      <label>
        Content:
        <textarea value={content} onChange={e => setContent(e.target.value)} required />
      </label>
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewStoryPage;