import React from "react";
import ViewCounter from "../atoms/ViewCounter";
import MainLayout from "../templates/MainLayout";
import ImageWithText from "../molecules/ImageWithText";
import HomeOverview from "../organisms/HomeOverview";
import WhatsNew from "../organisms/WhatsNew";
import RecommendedArticles from "../organisms/RecommendedArticles";
import spiderweb_protocluster from "../assets/spiderwebProtocluster.jpg";
import { HOME_PAGE_TITLE, SECONDARY_TEXT_COLOR } from "../index";

const Home: React.FC = () => {
  return (
    <MainLayout>
      {/* メインビジュアル */}
      <ImageWithText
        imageSrc={spiderweb_protocluster}
        altText="spiderweb_protocluster"
        overlayText={HOME_PAGE_TITLE}
        textColor={SECONDARY_TEXT_COLOR}
        position="items-center justify-start" // 左中央
        padding="pl-20" // 左に余白を追加
        background="bg-black/50" // もう少し暗く
        textSize="text-7xl" // 文字を大きく
        imgSize="w-full h-[500px] object-cover" // 画像サイズをカスタマイズ
      />

      {/* 閲覧回数カウンター */}
      <div className="container mx-auto px-4 mt-6">
        <ViewCounter />
      </div>

      {/* コンテンツエリア */}
      <div className="container mx-auto px-4 mt-10 space-y-10">
        <HomeOverview />
        <WhatsNew />
        <RecommendedArticles />
      </div>
    </MainLayout>
  );
};

export default Home;
