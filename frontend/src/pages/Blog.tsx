import React from "react";
import MainLayout from "../templates/MainLayout";
import BlogCard from "../organisms/BlogCard";
import { FONT_STYLE_BOLD, TEXT_SIZE_XXLARGE, PRIMARY_TEXT_COLOR, TEXT_SIZE_BASE } from "..";

const blogPosts = [
  {
    id: 1,
    title: "宇宙の膨張について",
    description: "宇宙の膨張とその影響について解説します。",
    date: "2025-03-17",
    imageUrl: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    title: "ブラックホールの謎",
    description: "ブラックホールがどのように形成されるのかを探ります。",
    date: "2025-03-12",
    imageUrl: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    title: "ダークマターとは？",
    description: "ダークマターの正体と現在の研究状況について。",
    date: "2025-03-05",
    imageUrl: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    title: "ブラックホールの謎",
    description: "ブラックホールがどのように形成されるのかを探ります。",
    date: "2025-03-12",
    imageUrl: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    title: "ダークマターとは？",
    description: "ダークマターの正体と現在の研究状況について。",
    date: "2025-03-05",
    imageUrl: "https://picsum.photos/200/300",
  },
  {
    id: 6,
    title: "ブラックホールの謎",
    description: "ブラックホールがどのように形成されるのかを探ります。",
    date: "2025-03-12",
    imageUrl: "https://picsum.photos/200/300",
  },
  {
    id: 7,
    title: "ダークマターとは？",
    description: "ダークマターの正体と現在の研究状況について。",
    date: "2025-03-05",
    imageUrl: "https://picsum.photos/200/300",
  },
  {
    id: 8,
    title: "ブラックホールの謎",
    description: "ブラックホールがどのように形成されるのかを探ります。",
    date: "2025-03-12",
    imageUrl: "https://picsum.photos/200/300",
  },
];

const Blog: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-6 max-w-screen-md">
        <h1 className={`${TEXT_SIZE_XXLARGE} ${FONT_STYLE_BOLD} mb-4 ${PRIMARY_TEXT_COLOR}`}>ブログ</h1>
        <p className={`${TEXT_SIZE_BASE} ${PRIMARY_TEXT_COLOR} mb-4`}>ここにブログを公開していきます。</p>
        
        <div className="grid grid-cols-1 gap-6">
          {blogPosts.map((post) => (
            <BlogCard 
              key={post.id}
              title={post.title} 
              description={post.description} 
              date={post.date}
              id={post.id}
              imageUrl={post.imageUrl}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Blog;
