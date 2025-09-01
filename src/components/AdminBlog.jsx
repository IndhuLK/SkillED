import React from "react";
import Dashboard from "../pages/Dashboard";
import AddBlog from "../pages/AddBlog";
import AllBlogs from "../pages/AllBlogs";
import BlogView from "../pages/BlogView";

const AdminBlog = () => {
  return (
    <div>
      <Dashboard />
      <AddBlog />
      <AllBlogs />
      <BlogView />
    </div>
  );
};

export default AdminBlog;
