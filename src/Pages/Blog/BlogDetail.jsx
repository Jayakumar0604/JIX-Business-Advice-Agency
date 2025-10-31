// BlogDetail/Index.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PostHeader from '../../Components/Blog/PostHeader/Index';
import PostContent from '../../Components/Blog/PostContent/Index';
import CommentSection from '../../Components/Blog/CommentSection/Index';
import CommentForm from '../../Components/Blog/CommentForm/Index';
import Sidebar from '../../Components/Blog/Sidebar/Index';
import { blogPosts, initialCommentsData, sidebarData } from '../../data/blogData'; // <-- Adjust path

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  // Use state to manage comments and the comment count dynamically
  const [comments, setComments] = useState(initialCommentsData);
  const [currentPostCommentsCount, setCurrentPostCommentsCount] = useState(initialCommentsData.length);

  const handleNewComment = (newCommentData) => {
    const newComment = {
      name: newCommentData.name,
      // Simple avatar generation based on first letter
      avatar: `https://via.placeholder.com/50/${Math.floor(Math.random()*16777215).toString(16)}/ffffff?text=${newCommentData.name.charAt(0).toUpperCase()}`,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
      text: newCommentData.text,
    };

    // Add the new comment to the start of the list
    setComments((prevComments) => [newComment, ...prevComments]);
    setCurrentPostCommentsCount((prevCount) => prevCount + 1);
  };

  // Error handling if post ID is invalid or not found
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 md:p-8 flex items-center justify-center">
        <p className="p-6 text-red-600 text-xl font-semibold">Post not found. Please check the URL.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 bg-white p-6 md:p-10 shadow-lg rounded-lg border border-gray-100">
            <PostHeader
              title={post.title}
              author={post.author}
              date={post.date}
              categories={post.categories}
              commentsCount={currentPostCommentsCount} // Dynamic count
            />
            <PostContent content={post.content} />
            
            {/* Pass dynamic comments state */}
            <CommentSection comments={comments} count={currentPostCommentsCount} /> 
            
            {/* Pass the submission handler */}
            <CommentForm onCommentSubmit={handleNewComment} /> 
          </div>
          <aside className="lg:col-span-1">
            <Sidebar
              recentPosts={sidebarData.recentPosts}
              recentComments={sidebarData.recentComments}
            />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;