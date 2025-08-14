import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/blogsData";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <p className="text-center py-10">Blog not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <img src={blog.img} alt={blog.title} className="w-full rounded-lg mb-6" />
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 mb-6">{blog.date}</p>
      <p className="text-gray-700 mb-6">{blog.content}</p>
      <Link to="/" className="text-red-500 hover:underline">
        ← Back to Blogs
      </Link>
    </div>
  );
};

export default BlogDetail;
