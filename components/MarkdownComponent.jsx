import React from 'react';
import ReactMarkdown from 'react-markdown';
import './MarkdownComponent.css'; //

const MarkdownComponent = ({ content }) => {
  // Replace '\ ' with '  ' to indicate line breaks in Markdown
  const processedContent = content.replace(/\\ /g, '  ');

  return (
    <div> className="markdown-content">
      <ReactMarkdown>{processedContent}</ReactMarkdown>
    </div>
  );
};

export default MarkdownComponent;
