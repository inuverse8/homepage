import { Router } from "express";
import { getBlogs, getBlog, createNewBlog, deleteBlogById } from "../controllers/blogController";

const router = Router();

router.get("/", getBlogs);
router.get("/:id", getBlog);
router.post("/", createNewBlog);
router.delete("/:id", deleteBlogById);

export default router;
