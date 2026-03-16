"use client";

import { DiscussionEmbed } from "disqus-react";

type Props = {
  id: number;
  title: string;
  url: string;
};

export default function CommentSection({ id, url, title }: Props) {
  return (
    <section className="flex flex-col p-2 gap-2">
      <h3 className="text-xl font-bold">Comments</h3>
      <DiscussionEmbed
        shortname="https-mission-sea-turtle-nest-website-vercel-app"
        config={{
          url,
          identifier: id.toString(),
          title,
        }}
      />
    </section>
  );
}
