import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownComponent = ({ content }) => {
  // Replace '\ ' with '  ' to indicate line breaks in Markdown
  const processedContent = content.replace(/\\ /g, '  ');

  return (
    <div>
      <ReactMarkdown>{processedContent}</ReactMarkdown>
    </div>
  );
};

export default MarkdownComponent;
