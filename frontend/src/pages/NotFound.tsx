import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold text-red-600">404 - ページが見つかりません</h1>
      <p className="text-gray-500 mt-4">指定されたページは存在しません。</p>
      <Link to="/" className="mt-6 text-blue-500 hover:underline">
        ホームに戻る
      </Link>
    </div>
  );
};

export default NotFound;
