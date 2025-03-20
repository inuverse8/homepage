import React, { useEffect, useState } from "react";
import MainLayout from "../templates/MainLayout";
import BlogCard from "../organisms/BlogCard";
import { FONT_STYLE_BOLD, TEXT_SIZE_XXLARGE, PRIMARY_TEXT_COLOR, TEXT_SIZE_BASE } from "..";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

const Blog: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/blogs/cards")
      .then((response) => {
        if (!response.ok) {
          throw new Error("ブログデータの取得に失敗しました");
        }
        return response.json();
      })
      .then((data) => {
        console.log("📌 API レスポンス:", data); // ここでログを確認

        const formattedData = data.map((post: any) => {
          console.log("📌 post.date の値:", post.date); // ここで `date` の値をチェック

          let formattedDate = "日付なし"; // デフォルト値を設定

          if (post.date) {
            const date = new Date(post.date);
            formattedDate = date.toISOString().split("T")[0]; // YYYY-MM-DD に変換
          }

          let imageUrl = "https://picsum.photos/200/300"; // デフォルト値を設定
          if (post.thumbnail_url) {
            imageUrl = post.thumbnail_url
          }
          console.log("📌 imageUrl の値:", imageUrl);
          return {
            id: post.blog_id,
            title: post.title,
            description: post.description,
            date: formattedDate,
            imageUrl: imageUrl
          };
        });
        setBlogPosts(formattedData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <MainLayout>
      <div className="container mx-auto px-6 max-w-screen-md">
        <h1 className={`${TEXT_SIZE_XXLARGE} ${FONT_STYLE_BOLD} mb-4 ${PRIMARY_TEXT_COLOR}`}>ブログ</h1>
        <p className={`${TEXT_SIZE_BASE} ${PRIMARY_TEXT_COLOR} mb-4`}>ここにブログを公開していきます。</p>

        {loading && <p className="text-gray-500">読み込み中...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid grid-cols-1 gap-6">
          {!loading && !error &&
            blogPosts.map((post) => (
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
