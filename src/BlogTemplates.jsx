import React, { useState } from "react";
import "./styles.css";
/*
const BlogTemplates = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [blogs, setBlogs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = { title, content };
    setBlogs([...blogs, newBlog]);
    setTitle("");
    setContent("");
  };

  return (
    <div className="container">
      <h1>Blog Builder</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Enter content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button type="submit">Add Blog</button>
      </form>
      <div className="blogs">
        {blogs.map((blog, index) => (
          <div key={index} className="blog">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
*/


const BlogTemplates = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [blogs, setBlogs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = { title, content };
    setBlogs([...blogs, newBlog]);
    setTitle("");
    setContent("");
  };
  

  
 

  return (
    <>
    <form  onSubmit={handleSubmit}className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          rows="4"
          required
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Create Post</button>
    </form>
    <div className="blogs">
        {blogs.map((blog, index) => (
          <div key={index} className="blog">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
      </>

    
  );
};

export default BlogTemplates;








