import * as express from "express";
import * as cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

interface Blog {
  id: number;
  title: string;
  content: string;
}

const blogs: Blog[] = [];

app.get("/blogs", (req, res) => {
  res.json(blogs);
});

app.post("/blogs", (req, res) => {
  const newBlog: Blog = { id: Date.now(), ...req.body };
  blogs.push(newBlog);
  res.status(201).json(newBlog);
});

app.get("/blogs/:id", (req, res) => {
  const blog = blogs.find(b => b.id === Number(req.params.id));
  blog ? res.json(blog) : res.status(404).json({ error: "Blog not found" });
});

app.delete("/blogs/:id", (req, res) => {
  const index = blogs.findIndex(b => b.id === Number(req.params.id));
  if (index !== -1) {
    blogs.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ error: "Blog not found" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
