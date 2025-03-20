import { RowDataPacket } from "mysql2";
import pool from "../db";

export interface Blog {
  blog_id?: number;
  blog_body: string;
}

// すべてのブログ記事を取得
export async function getAllBlogs(): Promise<Blog[]> {
  const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM Blog");
  return rows as Blog[];
}

// ID でブログを取得
export async function getBlogById(blog_id: number): Promise<Blog | null> {
  const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM Blog WHERE blog_id = ?", [blog_id]);
  return rows.length ? rows[0] as Blog : null;
}

// 新しいブログを作成
export async function createBlog(blog: Blog): Promise<number> {
  const [result] = await pool.query("INSERT INTO Blog (blog_body) VALUES (?)", [blog.blog_body]);
  return (result as any).insertId;
}

// ブログを削除
export async function deleteBlog(blog_id: number): Promise<boolean> {
  const [result] = await pool.query("DELETE FROM Blog WHERE blog_id = ?", [blog_id]);
  return (result as any).affectedRows > 0;
}
