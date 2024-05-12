"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from '../components/BlogCard';

// Define an interface to describe the structure of a blog post
interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  minutesRead: number;
  slug: string;
  imageUrl: string;
}

// Now use the BlogPost interface in your component
const BlogPage: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]); // Specify the type as an array of BlogPost

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get<BlogPost[]>('https://http://localhost:1337/api/posts?populate=*');
        setBlogPosts(response.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {blogPosts.map((post) => (
        <BlogCard
          key={post.id}
          title={post.title}
          post={post.content}
          author={post.author}
          minutesRead={post.minutesRead}
          readMoreLink={`/blogposts/${post.slug}`}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
};

export default BlogPage;
