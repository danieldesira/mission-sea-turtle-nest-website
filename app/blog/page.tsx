import PostListing from "./post-listing";
import { getPosts } from "./services";

export default async function Blog() {
  const { posts, found } = await getPosts();
  return (
    <div className="flex flex-col gap-3">
      <header className="flex justify-between items-center flex-wrap">
        <h2 className="text-2xl font-bold">Blog</h2>
      </header>
      {found ? (
        <div className="border border-primary rounded-sm overflow-auto p-2 flex flex-wrap gap-2">
          {posts?.map(
            ({ ID, author, modified, title, excerpt, featured_image }) => (
              <PostListing
                key={ID}
                id={ID!}
                title={title!}
                authorName={author?.nice_name ?? ""}
                excerpt={excerpt!}
                modifiedDate={modified!}
                featuredImage={featured_image}
              />
            ),
          )}
        </div>
      ) : (
        <span className="text-lg font-bold">No blog posts yet...</span>
      )}
    </div>
  );
}
