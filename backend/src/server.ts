import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import blogRoutes from "./routes/blogRoutes";

// 環境変数を読み込む
dotenv.config();

// アプリケーションを作成
const app = express();

// ミドルウェアを設定
app.use(cors());
app.use(express.json());
app.use("/blogs", blogRoutes);

// ポートを設定
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});