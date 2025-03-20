import { Router } from "express";
import { 
  getBlogs, 
  getBlog, 
  createNewBlog, 
  deleteBlogById, 
  getBlogCards 
} from "../controllers/blogController";

const router = Router();


/**
 * REST API ルール
 * Expressのルートは上から順に評価されるため、
 * より具体的なルートを先に書き、動的ルート (/:id など) を後に書く
 */
// 1. 固定パスを先に定義
router.get("/cards", getBlogCards); // ブログカード一覧

// 2. 一覧取得系の API
router.get("/", getBlogs); // すべてのブログ記事

// 3. ID指定のAPI
router.get("/:id", getBlog); // ID指定でブログ記事取得  

// 4. データを作成・更新・削除する API
router.post("/", createNewBlog); // 新しいブログ記事作成
router.delete("/:id", deleteBlogById); // ID指定でブログ記事削除

export default router;
