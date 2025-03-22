import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; 
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw"; // ✅ 追加
import "highlight.js/styles/github-dark.css";
import MainLayout from "../templates/MainLayout";
import { FONT_STYLE_BOLD, TEXT_SIZE_XXLARGE, PRIMARY_TEXT_COLOR } from "..";

interface BlogPost {
  blog_id: number;
  title: string;
  blog_body: string;
  date: string;
}

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/blogs/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("ブログの取得に失敗しました");
        }
        return response.json();
      })
      .then((data) => {
        setBlog(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-gray-500">読み込み中...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!blog) return <p className="text-gray-500">ブログが見つかりません</p>;

  return (
    <MainLayout>
      <div className="container mx-auto px-6 max-w-screen-md">
        <h1 className={`${TEXT_SIZE_XXLARGE} ${FONT_STYLE_BOLD} mb-4 ${PRIMARY_TEXT_COLOR}`}>
          {blog.title}
        </h1>
        <p className="text-gray-600 text-sm mb-4">{blog.date}</p>
        <div className="prose-lg max-w-none dark:prose-invert">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm, remarkMath]} 
            rehypePlugins={[rehypeRaw, rehypeKatex, rehypeHighlight]} // ✅ rehypeRaw を追加
          >
            {blog.blog_body}
          </ReactMarkdown>
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogDetail;
