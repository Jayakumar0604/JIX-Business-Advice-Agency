// CommentForm/Index.js
import React, { useState } from 'react';

const CommentForm = ({ onCommentSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    text: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.text) {
      alert('Name and Comment are required!');
      return;
    }

    onCommentSubmit(formData); // Send data up to BlogDetail

    // Clear the form
    setFormData({ name: '', email: '', website: '', text: '' });
  };

  return (
    <div className="mt-10 pt-6 border-t border-gray-200">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        Submit a Comment
      </h3>
      <p className="text-sm text-gray-500 mb-4">
        Your email address will not be published. Required fields are marked{' '}
        <span className="text-red-500">*</span>
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text" className="sr-only">Comment *</label> 
          <textarea
            id="text"
            placeholder="Comment *"
            rows="6"
            className="w-full p-3 border border-gray-300 rounded-sm focus:ring-green-500 focus:border-green-500"
            required
            value={formData.text}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label htmlFor="name" className="sr-only">Name *</label>
          <input
            type="text"
            id="name"
            placeholder="Name *"
            className="p-3 border border-gray-300 rounded-sm focus:ring-green-500 focus:border-green-500"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="email" className="sr-only">Email *</label>
          <input
            type="email"
            id="email"
            placeholder="Email *"
            className="p-3 border border-gray-300 rounded-sm focus:ring-green-500 focus:border-green-500"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="website" className="sr-only">Website</label>
          <input
            type="text"
            id="website"
            placeholder="Website"
            className="p-3 border border-gray-300 rounded-sm focus:ring-green-500 focus:border-green-500"
            value={formData.website}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center">
          <input
            id="save-browser"
            type="checkbox"
            className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
          />
          <label
            htmlFor="save-browser"
            className="ml-2 block text-sm text-gray-700"
          >
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-sm transition duration-300"
        >
          Submit Comment
        </button>
      </form>
    </div>
  );
};

export default CommentForm;