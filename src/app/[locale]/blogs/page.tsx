"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowRight, Menu, Search } from 'lucide-react';
import Link from 'next/link';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from '@/components/ui/button';

const Blogs = () => {
  
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get('/api/blogs');
      
      // Sort blogs by date, newest first
    //   const sortedBlogs = response.data.blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
      setBlogs(response.data.blogs);
     };

    fetchBlogs();
  }, []);



  return (
    <div className='container pb-[20%] pt-[6%]'>
      

      <h1 className="text-primary text-3xl md:text-4xl font-extrabold text-center py-[20%] md:py-[5%]">Latest Blog Posts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 space-y-10 md:space-y-0 p-4">
        {blogs.map((blog) => (
          <Link key={blog._id} href={`/blogs/${blog._id}`} className="relative group">
            <img src={blog.thumbnailUrl} alt={blog.title} className="w-full h-64 object-cover rounded-md" />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-4 transform translate-y-0 group-hover:translate-y-full group-hover:bg-primary group-hover:text-white group-hover:rounded-b-xl transition-transform duration-300">
              <h2 className="text-white font-bold">{blog.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
