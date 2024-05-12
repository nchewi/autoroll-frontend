// components/BlogCard.tsx
import React from 'react';

interface BlogCardProps {
  title: string;
  post: string;
  author: string;
  minutesRead: number;
  readMoreLink: string;
  imageUrl: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  post,
  author,
  minutesRead,
  readMoreLink,
  imageUrl,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 sm:w-96 md:w-80 lg:w-96 xl:w-96 mx-auto">
      <img src={imageUrl} alt={title} className="w-full h-auto mb-4 rounded-lg" />
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700 mb-4">{post}</p>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-500">
        <p className="mb-2 sm:mb-0">{author}</p>
        <p>{minutesRead} min read</p>
      </div>
      <a href={readMoreLink} className="text-blue-500 hover:underline block mt-4">
        Read more
      </a>
    </div>
  );
};

export default BlogCard;
