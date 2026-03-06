import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "src/content/blogs");

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    readTime: string;
    coverImage?: string;
    content: string;
}

export function getBlogSlugs() {
    if (!fs.existsSync(blogsDirectory)) {
        return [];
    }
    return fs.readdirSync(blogsDirectory);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = path.join(blogsDirectory, `${realSlug}.md`);

    if (!fs.existsSync(fullPath)) return undefined;

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug: realSlug,
        title: data.title || "",
        excerpt: data.excerpt || "",
        date: data.date || "",
        author: data.author || "",
        readTime: data.readTime || "",
        coverImage: data.coverImage,
        content: content,
    };
}

export function getAllBlogs(): BlogPost[] {
    const slugs = getBlogSlugs();
    const posts = slugs
        .map((slug) => getBlogPostBySlug(slug))
        .filter((post): post is BlogPost => post !== undefined)
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}
