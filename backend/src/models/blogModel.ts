import { RowDataPacket } from "mysql2";
import pool from "../db";


export interface BlogMeta {
    blogId: number;
    blogTitle: string;
    date: Date;
    thumbnailUrl: string;
}

export interface Blog {
    blogBasicInfo: BlogMeta;
    blogBody: string;
}

export interface BlogCard {
    blogBasicInfo: BlogMeta;
    description: string;
}  


export async function getAllBlogs(): Promise<Blog[]> {
    try {
        console.info("[INFO] getBlogById starts process...");
        const query = `
            SELECT
                blog_id,
                title,
                DATE_FORMAT(date, '%Y-%m-%d') as date, 
                blog_body,
                thumbnail_url
            FROM Blog
        `;
        const [rows] = await pool.query<RowDataPacket[]>(query);
        console.info("[INFO] getBlogById successfully completed");
        return rows as Blog[];
    } catch (error) {
        console.error("[ERROR] getBlogById occurs error: ", error);
        throw error;
    }
}

export async function getBlogById(blog_id: number): Promise<Blog | null> {
    try {
        console.info("[INFO] getBlogById starts process...");
        const query = `
            SELECT 
                blog_id,
                title,
                DATE_FORMAT(date, '%Y-%m-%d') as date, 
                blog_body,
                thumbnail_url
            FROM Blog 
            WHERE blog_id = ?
        `
        const [rows] = await pool.query<RowDataPacket[]>(query, [blog_id]);
        console.info("[INFO] getBlogById successfully completed");
        return rows.length ? rows[0] as Blog : null;
    } catch (error) {
        console.error("[ERROR] getBlogById occurs error: ", error);
        throw error;
    }
}

export async function createBlog(blog: Blog): Promise<number> {
    try {
        console.info("[INFO] createBlog starts process...");
        const [result] = await pool.query("INSERT INTO Blog (blog_body) VALUES (?)", [blog.blogBody]);
        console.info("[INFO] createBlog successfully completed");
        return (result as any).insertId;
    } catch (error) {
        console.error("[ERROR] createBlog occurs error: ", error);
        throw error;
    }
}


export async function deleteBlogById(blog_id: number): Promise<boolean> {
    try {
        console.info("[INFO] deleteBlogById starts process...");
        const [result] = await pool.query("DELETE FROM Blog WHERE blog_id = ?", [blog_id]);
        console.info("[INFO] deleteBlogById successfully completed");
        return (result as any).affectedRows > 0;
    } catch (error) {
        console.error("[ERROR] deleteBlogById occurs error: ", error);
        throw error;
    }
}

export async function getAllBlogCards(): Promise<BlogCard[]> {
    try {
        console.info("[INFO] getAllBlogCards starts process...");
        const [rows] = await pool.query<RowDataPacket[]>(`
            SELECT 
                b.blog_id, 
                b.title, 
                b.description, 
                DATE_FORMAT(b.date, '%Y-%m-%d') AS date, 
                COALESCE(b.thumbnail_url)
            FROM Blog b
            ORDER BY b.date DESC`
        );

        if (!Array.isArray(rows)) {
            throw new Error("Query did not return an array.");
        }
        
        console.info("[INFO] getAllBlogCards successfully completed");
        return rows as BlogCard[];

    } catch (error) {
        console.error("[ERROR] getAllBlogCards occurs error: ", error);
        throw error;
    }
  }
  