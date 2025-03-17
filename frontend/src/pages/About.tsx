import React from "react";
import MainLayout from "../templates/MainLayout";
import { PRIMARY_TEXT_COLOR, TEXT_SIZE_XXLARGE, FONT_STYLE_BOLD, TEXT_SIZE_LARGE } from "../index";

const About: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-6 max-w-screen-md">
        {/* 管理人の経歴 */}
        <h2 className={`${TEXT_SIZE_XXLARGE} ${FONT_STYLE_BOLD} mb-4 ${PRIMARY_TEXT_COLOR}`}>経歴</h2>
        <ul className={`list-disc pl-5 ${PRIMARY_TEXT_COLOR}`}>
          <li>2015年3月 佐賀大学理工学部物理科学科 入学</li>
          <li>2019年3月 佐賀大学理工学部物理科学科 卒業</li>
          <li>2019年4月 佐賀大学大学院修士課程 入学</li>
          <li>2021年3月 佐賀大学大学院修士課程 修了</li>
          <li>2021年4月 佐賀大学大学院博士後期課程 入学</li>
          <li>2024年3月 佐賀大学大学院博士後期課程 修了</li>
          <li>2024年4月 株式会社Retail AI (Retail AI, Inc.) 入社 開発チームのフロントエンド</li>
          <li>2025年2月 株式会社Retail AI (Retail AI, Inc.) 部署移動 開発チームのバックエンド</li>
        </ul>

        {/* セクションの間に空白を追加 */}
        <div className="mt-10"></div> 

        {/* 管理人が携わった論文 */}
        <h2 className={`${TEXT_SIZE_XXLARGE} ${FONT_STYLE_BOLD} mb-4 ${PRIMARY_TEXT_COLOR}`}>携わった論文</h2>
        <ul className={`list-disc pl-5 ${PRIMARY_TEXT_COLOR}`}>
          <li>
            <a 
            href="https://arxiv.org/abs/2112.05283" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:underline">
            Relaxing inflation models with non-minimal coupling: A general study
            </a>
          </li>
          <li>
            <a href="https://arxiv.org/abs/2302.05866" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline">
              Nonminimally Assisted Inflation: A General Analysis
            </a>
          </li>
          <li>
            <a href="https://arxiv.org/abs/2309.11272" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline">
              Generalized early dark energy and its cosmological consequences
            </a>
          </li>
        </ul>

        {/* セクションの間に空白を追加 */}
        <div className="mt-10"></div> 

        {/* 管理人のスキル */}
        <h2 className={`${TEXT_SIZE_XXLARGE} ${FONT_STYLE_BOLD} mb-4 ${PRIMARY_TEXT_COLOR}`}>スキル</h2>
        <div className="space-y-4">
          <div>
            <h3 className={`${TEXT_SIZE_LARGE} ${FONT_STYLE_BOLD} mb-2`}>プログラミング言語</h3>
            <table className="w-full">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 pr-4 w-32">C</td>
                  <td className="py-2">主に数値計算で使用。基本的な微積分は数値計算の実装可能。使用歴5年ほど。</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">Python</td>
                  <td className="py-2">
                    数値計算で得られたデータの出力、業務システムの開発経験あり。
                    機械学習関連の実装にも使用（JAXやPytorch）
                    使用歴3年ほど。</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">JavaScript</td>
                  <td className="py-2">主にフロントエンドで使用。1年ほど。</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">TypeScript</td>
                  <td className="py-2">主にフロントエンドで使用。1年ほど。</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">Kotlin</td>
                  <td className="py-2">主にバックエンドで使用。1年ほど。</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* セクションの間に空白を追加 */}
          <div className="mt-5"></div>  

          <div>
            <h3 className={`${TEXT_SIZE_LARGE} ${FONT_STYLE_BOLD} mb-2`}>フレームワーク・ライブラリ</h3>
            <table className="w-full">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 pr-4 w-32">TailwindCSS</td>
                  <td className="py-2">主にフロントエンド開発で使用。1年ほど。</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4 w-32">React</td>
                  <td className="py-2">主にフロントエンド開発で使用。1年ほど。型があって嬉しい。</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">Quarkus</td>
                  <td className="py-2">主にバックエンド開発で使用。1年ほど。</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* セクションの間に空白を追加 */}
          <div className="mt-5"></div> 

          <div>
            <h3 className={`${TEXT_SIZE_LARGE} ${FONT_STYLE_BOLD} mb-2`}>語学</h3>
            <table className="w-full">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 pr-4 w-32">英語</td>
                  <td className="py-2">義務教育からなので、ざっと15年ほど。TOEIC615。
                    初めて受けたTOEICは195点だったから、多分まだまだ伸びるよ（という気持ち）。</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* セクションの間に空白を追加 */}
          <div className="mt-5"></div> 

          <div>
            <h3 className={`${TEXT_SIZE_LARGE} ${FONT_STYLE_BOLD} mb-2`}>その他スキル</h3>
            <table className="w-full">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 pr-4 w-32">Gnuplot</td>
                  <td className="py-2">数値計算で得られたデータの出力に使用。使用歴4年ほど。
                    Pythonで出力する以前はGnuplotに頼り切りだった。ありがとよ、Gnu。</td>
                </tr>

                <tr className="border-b">
                  <td className="py-2 pr-4 w-32">HTML/CSS</td>
                  <td className="py-2">フロントエンド開発で使用。使用歴1年ほど。</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4 w-32">TeX</td>
                  <td className="py-2">レポートや論文の執筆に使用。使用歴7年ほど。</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">Mathematica</td>
                  <td className="py-2">
                    科学計算に使用。使用歴5年ほど。
                    自前のLaptopには本家は入っていない。
                    しかし、Wolfram EngineとJupyter Labを組み合わせることでMathematicaを使用。
                    最近、WLJS bookというサービスでMathematicaを使用中。</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">Git/Git Hub</td>
                  <td className="py-2">コードの管理。使用歴1年ほど。Git Flow is 大事。</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">Docker/Orbstack</td>
                  <td className="py-2">コンテナの管理。使用歴1年ほど。</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">Google Cloud Platform</td>
                  <td className="py-2">デプロイやGCS、Artifact Registryなど。使用歴1年ほど。
                    Google Cloud Architecture目指して勉強中。</td>
                </tr>
              </tbody>
            </table>
          </div>
        


        </div>
      </div>
    </MainLayout>
  );
};

export default About;
