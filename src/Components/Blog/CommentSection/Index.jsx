// CommentSection/Index.js
import React from 'react';

// Sub-component for a single comment
const Comment = ({ comment }) => (
  <div className="flex space-x-4 p-4 border-b border-gray-100">
    <div className="flex-shrink-0">
      <img
        src={comment.avatar}
        alt={`${comment.name}'s avatar`}
        className="w-12 h-12 rounded-full"
      />
    </div>
    <div className="flex-grow">
      <div className="flex justify-between items-start">
        <div className="text-sm">
          <p className="font-semibold text-gray-800">{comment.name}</p>
          <p className="text-gray-500 text-xs">
            {comment.date} at {comment.time}
          </p>
        </div>
        <button className="text-sm text-green-600 hover:text-green-800 border border-green-600 px-3 py-1 rounded-sm transition duration-150">
          Reply
        </button>
      </div>
      <p className="mt-2 text-gray-700 leading-relaxed">{comment.text}</p>
    </div>
  </div>
);

// Main Comment Section component
const CommentSection = ({ comments, count }) => (
  <section className="mt-12">
    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
      {count} Comments
    </h2>
    <div className="space-y-4">
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  </section>
);

export default CommentSection;