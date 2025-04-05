import { Request, Response } from "express";
import {
    getAllBlogs,
    getBlogById,
    createBlog,
    deleteBlogById,
    getAllBlogCards,
} from "../models/blogModel";

/**
 * ブログのコントローラー
 */
// すべてのブログを取得
export async function getBlogs(req: Request, res: Response) {
    console.info("🔍 Fetching all blogs...");
    try {
        const blogs = await getAllBlogs();
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// ID でブログを取得
export async function getBlog(req: Request, res: Response) {
    console.info("🔍 Fetching blog by ID...");
    try {
        const blog = await getBlogById(Number(req.params.id));
        blog ? res.json(blog) : res.status(404).json({ error: "Blog not found" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// 新しいブログを作成
export async function createNewBlog(req: Request, res: Response) {
    console.info("🔍 Creating new blog...");
    try {
        const blogId = await createBlog(req.body);
        res.status(201).json({ id: blogId, ...req.body });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// ブログを削除
export async function deleteBlog(req: Request, res: Response) {
    console.info("🔍 Deleting blog by ID...");
    try {
        const success = await deleteBlogById(Number(req.params.id));
    success
      ? res.status(204).send()
      : res.status(404).json({ error: "Blog not found" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// すべてのブログカード情報を取得
export async function getBlogCards(req: Request, res: Response) {
    console.info("🔍 Fetching blog cards...");
    try {
        const blogCards = await getAllBlogCards();
        res.json(blogCards);
    } catch (error: any) {
        res.status(500).json({error: "Internal Server Error"});
    }
}
