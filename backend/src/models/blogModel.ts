import { RowDataPacket } from "mysql2";
import pool from "../db";

/**
 * ブログのインターフェイス
 */
// ブログ記事の型
export interface Blog {
  blog_id?: number;
  blog_body: string;
}

/**
 * ブログカードのインターフェイス
 */
// ブログカード情報の型
export interface BlogCard {
    blog_id: number;
    title: string;
    description: string;
    date: string;
    imageUrl: string;
}  

/**
 * ブログのモデル
 */
// すべてのブログ記事を取得
export async function getAllBlogs(): Promise<Blog[]> {
    try {
        const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM Blog");
        return rows as Blog[];
    } catch (error) {
        throw error;
    }
}

// ID でブログを取得
export async function getBlogById(blog_id: number): Promise<Blog | null> {
    try {
        const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM Blog WHERE blog_id = ?", [blog_id]);
        return rows.length ? rows[0] as Blog : null;
    } catch (error) {
        throw error;
    }
}

// 新しいブログを作成
export async function createBlog(blog: Blog): Promise<number> {
    try {
        const [result] = await pool.query("INSERT INTO Blog (blog_body) VALUES (?)", [blog.blog_body]);
        return (result as any).insertId;
    } catch (error) {
        throw error;
    }
}

// ブログを削除
export async function deleteBlog(blog_id: number): Promise<boolean> {
    try {
        const [result] = await pool.query("DELETE FROM Blog WHERE blog_id = ?", [blog_id]);
        return (result as any).affectedRows > 0;
    } catch (error) {
        throw error;
    }
}

// ブログカード情報を取得
export async function getAllBlogCards(): Promise<BlogCard[]> {
    try {
        const [rows] = await pool.query<RowDataPacket[]>(`
            SELECT 
                b.blog_id, 
                bi.title, 
                bi.description, 
                DATE_FORMAT(bi.date, '%Y-%m-%d') AS date, 
                COALESCE(bi.thumbnail_url, 'https://picsum.photos/200/300') AS imageUrl
            FROM Blog b
            JOIN BlogBasicInfo bi ON b.blog_id = bi.blog_id
            ORDER BY bi.date DESC`
      );

        // 配列でない場合はエラー
        if (!Array.isArray(rows)) {
            throw new Error("Query did not return an array.");
        }
        
        // 配列であれば、BlogCard型に変換して返す
        return rows as BlogCard[];

    } catch (error) {
        throw error;
    }
  }
  