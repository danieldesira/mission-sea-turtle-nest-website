"use client";

import { store } from "@/app/store";
import { Provider } from "react-redux";
import CommentSection from "./comment-section";

type Props = { id: number };

export default function CommentSectionWrapper({ id }: Props) {
  return (
    <Provider store={store}>
      <CommentSection id={id} />
    </Provider>
  );
}
