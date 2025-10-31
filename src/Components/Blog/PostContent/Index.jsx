// PostContent/Index.js
import React from 'react';

const PostContent = ({ content }) => {
  return (
    <article className="space-y-6 text-gray-800">
      {content.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p key={index} className="text-base leading-relaxed">
                {block.text}
              </p>
            );

          case 'heading': {
            const tag = `h${block.level}`;
            const headingClass =
              block.level === 2
                ? 'text-3xl'
                : block.level === 3
                ? 'text-2xl'
                : 'text-xl';
            return React.createElement(
              tag,
              {
                key: index,
                className: `${headingClass} font-bold text-gray-900`,
              },
              block.text
            );
          }

          case 'ul':
            return (
              <ul key={index} className="list-disc list-inside space-y-1">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );

          case 'ol':
            return (
              <ol key={index} className="list-decimal list-inside space-y-1">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ol>
            );

          case 'image':
            return (
              <img
                key={index}
                src={block.src}
                alt={block.alt}
                className="w-full rounded-md shadow-sm"
              />
            );

          default:
            return null;
        }
      })}
    </article>
  );
};

export default PostContent;