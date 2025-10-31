// Sidebar/Index.js
import React from 'react';

const Sidebar = ({ recentPosts, recentComments }) => (
  <div className="space-y-8">
    {/* Search Box (Placeholder for future functionality) */}
    <div className="p-4 border border-gray-200 rounded-md bg-white shadow-sm">
      <div className="relative">
        <label htmlFor="search" className="sr-only">Search</label>
        <input
          id="search"
          type="text"
          placeholder="Search"
          className="w-full p-2 border border-gray-300 rounded-sm focus:ring-green-500 focus:border-green-500"
        />
        <button className="absolute right-0 top-0 h-full px-3 text-gray-500 hover:text-gray-700">
          <svg
            className="w-5 h-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </div>
    </div>

    {/* Recent Posts */}
    <div className="p-4 border border-gray-200 rounded-md bg-white shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
        Recent Posts
      </h3>
      <ul className="space-y-2 text-sm">
        {recentPosts.map((post, index) => (
          <li key={index} className="text-gray-600 hover:text-green-600">
            <a href="#" className="block">
              {post}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Recent Comments */}
    <div className="p-4 border border-gray-200 rounded-md bg-white shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
        Recent Comments
      </h3>
      <ul className="space-y-2 text-sm">
        {recentComments.map((comment, index) => (
          <li key={index} className="text-gray-600">
            <span className="font-semibold text-gray-800 mr-1">
              {comment.split(' on ')[0]}
            </span>
            on
            <a href="#" className="ml-1 hover:text-green-600">
              {comment.split(' on ')[1]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Sidebar;