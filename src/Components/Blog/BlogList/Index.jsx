// BlogList/Index.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../../data/blogData'; // <-- Adjust path

const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter posts based on search term (title only)
  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Blog Posts</h1>

        {/* Search Input */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search posts by title..."
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <ul className="space-y-4">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <li key={post.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <Link
                  to={`/post/${post.id}`}
                  className="text-green-600 hover:underline text-xl font-semibold block"
                >
                  {post.title}
                </Link>
                {/* Display a snippet */}
                {post.content && post.content[0] && post.content[0].type === 'paragraph' && (
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                        {post.content[0].text.substring(0, 100)}...
                    </p>
                )}
                <p className="text-xs text-gray-500 mt-2">
                    By {post.author} on {post.date}
                </p>
              </li>
            ))
          ) : (
            <p className="text-gray-600 text-center">No posts found matching "{searchTerm}".</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default BlogList;