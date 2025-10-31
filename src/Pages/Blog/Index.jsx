import React from "react";
import Back from "../../assets/Blog.jpg";
import PageBack from "../../Components/PageBack/Index";
import { Routes, Route } from "react-router-dom";
import BlogList from "../../Components/Blog/BlogList/Index";
import BlogDetail from "./BlogDetail";

const Blog = () => {
  return (
    <>
      <PageBack
        backgroundImage={Back}
        title="Our Blog"
        content="Stay ahead with expert insights. Our blog features the latest in financial strategy, in-depth business advice, and best practices for high-performance React development. Read and grow!"
      />
      <Routes>
        {/* The main list page route */}
        <Route path="/" element={<BlogList />} />

        {/* The detail page route, using the :id parameter */}
        <Route path="/post/:id" element={<BlogDetail />} />

        {/* Optional: A catch-all route for any unhandled URLs within the blog path */}
        <Route
          path="*"
          element={
            <p className="text-center text-xl p-8">
              Page Not Found in Blog Section
            </p>
          }
        />
      </Routes>
    </>
  );
};

export default Blog;
