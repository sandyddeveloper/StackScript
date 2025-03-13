"use client";

import React, { useState } from "react";
import { posts } from "@/posts";
import Link from "next/link";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";

const Blog = () => {
  const [likes, setLikes] = useState<number[]>(new Array(posts.length).fill(0));
  const [liked, setLiked] = useState<boolean[]>(
    new Array(posts.length).fill(false)
  );

  const handleLike = (index: number) => {
    setLikes((prevLikes) => {
      const newLikes = [...prevLikes];
      newLikes[index] = liked[index]
        ? newLikes[index] - 1
        : newLikes[index] + 1;
      return newLikes;
    });

    setLiked((prevLiked) => {
      const newLiked = [...prevLiked];
      newLiked[index] = !prevLiked[index];
      return newLiked;
    });
  };

  return (
    <div>
      <h2 className="text-3xl font-extrabold text-center py-5">
        🚀 Latest <span className="text-blue-600">Blog Posts</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {posts.map((p, idx) => (
          <div
          key={idx}
          className="group w-full max-w-[400px] bg-white dark:bg-gray-800 bg-opacity-30 backdrop-blur-lg backdrop-filter border border-white/30 dark:border-gray-700 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
        >
        
            {/* Blog Thumbnail */}
            <Link href={`/blog/${p.slug}`} className="block relative h-48">
              <Image
                src={p.thumbnail}
                alt={p.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </Link>

            <div className="p-4">
              {/* Category */}
              <span className="text-sm bg-gray-100 dark:bg-gray-700 text-blue-700 dark:text-blue-400 font-semibold px-3 py-1 rounded-full">
                {p.category}
              </span>

              {/* Blog Title */}
              <Link href={`/blog/${p.slug}`}>
                <h3 className="text-lg font-bold mt-2 text-gray-900 dark:text-white hover:text-blue-500 transition">
                  {p.title}
                </h3>
              </Link>

              {/* Author and Date */}
              <div className="text-gray-500 text-sm mt-2 flex justify-between">
                <p>{p.author}</p>
                <p>{p.date}</p>
              </div>

              {/* Like Button */}
              <div className="flex justify-between items-center mt-3 p-3 border-t">
                <button
                  className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors cursor-pointer z-[10001]"
                  onClick={() => handleLike(idx)}
                >
                  <FaHeart
                    className={`text-xl transition-all duration-300 ${
                      liked[idx] ? "text-red-500" : "text-gray-500"
                    } cursor-pointer`}
                  />
                  <span className="font-semibold">{likes[idx]}</span>
                </button>
              </div>
            </div>
          </div> // Missing closing div added here
        ))}
      </div>
    </div>
  );
};

export default Blog;
