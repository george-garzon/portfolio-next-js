import fs from "fs";
import path from "path";

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
}

const postsDirectory = path.join(process.cwd(), "content", "blog");

function parseFrontMatter(fileContents: string) {
    const frontMatterMatch = fileContents.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

    if (!frontMatterMatch) {
        return {
            metadata: {},
            content: fileContents.trim(),
        };
    }

    const metadata = frontMatterMatch[1]
        .split("\n")
        .filter(Boolean)
        .reduce<Record<string, string>>((fields, line) => {
            const separatorIndex = line.indexOf(":");

            if (separatorIndex === -1) {
                return fields;
            }

            const key = line.slice(0, separatorIndex).trim();
            const value = line.slice(separatorIndex + 1).trim().replace(/^["']|["']$/g, "");

            return {
                ...fields,
                [key]: value,
            };
        }, {});

    return {
        metadata,
        content: frontMatterMatch[2].trim(),
    };
}

function readPost(slug: string): BlogPost {
    const filePath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { metadata, content } = parseFrontMatter(fileContents);

    return {
        slug,
        title: metadata.title ?? slug,
        date: metadata.date ?? "",
        excerpt: metadata.excerpt ?? "",
        content,
    };
}

export function getPosts(): BlogPost[] {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    return fs
        .readdirSync(postsDirectory)
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => readPost(fileName.replace(/\.md$/, "")))
        .sort((firstPost, secondPost) => secondPost.date.localeCompare(firstPost.date));
}

export function getPost(slug: string): BlogPost | undefined {
    if (!fs.existsSync(path.join(postsDirectory, `${slug}.md`))) {
        return undefined;
    }

    return readPost(slug);
}
