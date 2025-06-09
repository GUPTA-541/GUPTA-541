import React from 'react';
import Carousel from './Carousel';
import TopStories from './TopStories';
import Markets from './Markets';
import Weather from './Weather';
import NewsCard from './NewsCard';

const BlogCard = () => {
  return (
    <div className="bg-[#121212] min-h-screen text-white px-4 lg:px-10 py-6">
      <h1 className="text-center text-amber-500 font-bold text-4xl mb-6">News & Insights Listing</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6">
          <Carousel />
        </div>

        <div className="lg:col-span-3 space-y-4">
          <TopStories />
        </div>

        <div className="lg:col-span-3 space-y-4">
          <Markets />
        </div>
      </div>

      <div className="mt-5">
        <NewsCard />
        <Weather/>
        <NewsCard />
      </div>
    </div>
  );
};
 
export default BlogCard;
