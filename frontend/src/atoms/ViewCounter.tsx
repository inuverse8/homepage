import React, { useEffect, useRef, useState } from "react";

/**
 * 修正予定
 * 今後、サーバ側でカウントするようにする
 * ローカルストレージでは、ブラウザを閉じるとカウントがリセットされるため
 * サーバ側でカウントすることで、ブラウザを閉じてもカウントが維持される
 */
const ViewCounter: React.FC = () => {
  const [views, setViews] = useState(0);
  const hasUpdated = useRef(false); // 初回のみ実行を制御

  useEffect(() => {
    if (hasUpdated.current) return; // 初回のみ実行
    hasUpdated.current = true; // 実行後にフラグを立てる

    // ローカルストレージから現在の閲覧回数を取得
    const storedViews = localStorage.getItem("pageViews");
    const newViews = storedViews ? parseInt(storedViews, 10) + 1 : 1;

    // 更新された回数をローカルストレージに保存
    localStorage.setItem("pageViews", newViews.toString());

    // ステートに設定
    setViews(newViews);
  }, []);

  return (
    <div className="text-gray-700 text-lg mt-4">
      この記事は <span className="font-bold">{views}</span> 回閲覧されました。
    </div>
  );
};

export default ViewCounter;
