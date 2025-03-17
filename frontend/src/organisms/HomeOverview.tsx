import React from "react";

const HomeOverview: React.FC = () => {
  return (
    <section className="border p-6 rounded-lg shadow-lg bg-white">
      <h2 className="text-3xl font-bold mb-4">ここは何のホームページ？</h2>
      <p className="text-gray-700">
        多くの人に、自然科学の楽しさを知ってほしい！
        そんな思いから、このホームページを作成しました。
        このホームページでは、主に物理学や数学、機械学習、プログラミングなどについての記事を書いています （間違っていることがあればContactから連絡してね！🙏）。
        のちのち、数値計算やシミュレーションのコードも載せたり、実際に視覚的に確認できるようなホームページにしていきたいと思います。中高生にも楽しんでいただきたいですからね！
        まだまだ、発展途上ですが、どうぞよろしくお願いします🙇
      </p>
    </section>
  );
};

export default HomeOverview;
