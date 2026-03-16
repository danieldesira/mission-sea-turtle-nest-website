import { PageQueryProps } from "@/app/types";
import { getSinglePost } from "../services";
import { ImageResponse } from "next/og";

export default async function Image({ params }: PageQueryProps) {
  const postId = (await params).id;
  const { featured_image } = await getSinglePost(postId);
  return new ImageResponse(
    <img src={featured_image} alt="" width={1200} height={640} />,
  );
}
