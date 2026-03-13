import SafeRawHtmlWrapper from "@/app/common/safe-raw-html-wrapper";
import { formatDate } from "@/app/common/utils";
import { getSinglePost } from "../services";
import { PageQueryProps } from "@/app/types";
import { Post } from "../interfaces";
import CommentSectionWrapper from "./comment-section-wrapper";

export default async function PostPage({ params }: PageQueryProps) {
  const post = (await getSinglePost((await params).id)) as Post;

  return (
    <div className="flex flex-col gap-3">
      <header
        className="flex justify-center items-center flex-wrap py-38 bg-cover bg-center rounded-sm"
        style={{ backgroundImage: `url(${post.featured_image})` }}
      >
        <h2 className="text-2xl font-bold">{post.title}</h2>
      </header>
      <article className="flex flex-col p-2 gap-2">
        <SafeRawHtmlWrapper html={post.content!} />
        <span className="font-light text-lg">{post.author?.nice_name}</span>
        <span className="font-light text-sm">{formatDate(post.modified!)}</span>
      </article>
      <CommentSectionWrapper id={post.ID!} />
    </div>
  );
}
