"use client";

import Image from "next/image";
import WPLoginButton from "./wp-login-button";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { use } from "react";
import { getCurrentWpcomUser, getReplies } from "../services";
import SubmitButton from "@/app/common/submit-button";
import Comment from "./comment";

type Props = {
  id: number;
};

export default function CommentSection({ id }: Props) {
  const wpOauthToken = useSelector(
    (state: RootState) => state.wpcomToken.value,
  );
  const replies = use(getReplies(id));
  const user = use(getCurrentWpcomUser());

  return (
    <section className="flex flex-col p-2 gap-2">
      <h3 className="text-xl font-bold">Comments</h3>
      {replies.found ? (
        <>
          {replies.comments?.map(({ ID, author, date, content }, index) => (
            <Comment
              key={ID}
              avatarUrl={author?.avatar_URL ?? ""}
              authorName={author?.nice_name ?? ""}
              date={date!}
              content={content!}
              isEven={index % 2 === 0}
            />
          ))}
        </>
      ) : (
        <span>No comments yet... Be the first!</span>
      )}
      <h4 className="text-lg font-bold">Add a comment...</h4>
      {wpOauthToken ? (
        <form method="post" className="flex flex-col gap-2 items-center">
          <div className="flex gap-2 items-center">
            <Image
              width={200}
              height={200}
              className="w-10 h-10 rounded-sm"
              src={user.avatar_URL}
              alt=""
            />
            <span className="font-bold text-sm">{user.username}</span>
          </div>
          <textarea
            name="content"
            className="border border-primary p-2 w-full rounded-sm"
            required
            aria-required
          ></textarea>
          <SubmitButton>Post</SubmitButton>
        </form>
      ) : (
        <WPLoginButton />
      )}
    </section>
  );
}
