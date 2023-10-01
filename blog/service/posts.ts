import { readFile } from "fs/promises";
import path from "path";

export type Post = {
  title: string;
  content: string;
  date: Date;
  category: string;
  path: string;
};

export async function getPost(): Promise<Post[]> {
  try {
    const postPath = path.join(process.cwd(), "data", "posts.json");
    return readFile(postPath, "utf-8").then(JSON.parse);
  } catch (err) {
    console.error(err);
    throw new Error("getPost Error");
  }
}
