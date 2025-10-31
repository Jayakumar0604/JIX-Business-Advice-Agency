// PostHeader/Index.js
import React from 'react';

const PostHeader = ({ title, author, date, categories, commentsCount }) => (
  <header className="mb-8">
    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
      {title}
    </h1>
    <p className="text-sm text-gray-500 mb-6">
      By <span className="text-gray-700 font-medium">{author}</span> | {date} |{' '}
      <span className="text-green-600 font-medium">
        {categories.join(', ')}
      </span>{' '}
      | <span className="text-gray-700">{commentsCount} Comments</span>
    </p>
  </header>
);

export default PostHeader;