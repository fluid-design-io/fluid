import fs from "fs";
import matter from "gray-matter";
import path from "path";

export default function getDocBySlug(slug, folder = "/", locale = "us") {
  const docsDirectory = path.join(process.cwd(), `/content`, folder);
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(docsDirectory, `${realSlug}.${locale}.mdx`);
  let fileContents;
  try {
    fileContents = fs.readFileSync(fullPath, "utf8");
  } catch (e) {
    fileContents = fs.readFileSync(
      path.join(docsDirectory, `${realSlug}.en.mdx`),
      "utf8"
    );
  }
  const { content, data } = matter(fileContents);
  return { slug: realSlug, meta: data, content };
}
