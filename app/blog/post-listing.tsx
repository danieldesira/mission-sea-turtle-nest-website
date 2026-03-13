import Link from "next/link";
import Image from "next/image";
import SafeRawHtmlWrapper from "../common/safe-raw-html-wrapper";
import { formatDate } from "../common/utils";

type Props = {
  id: number;
  title: string;
  authorName: string;
  excerpt: string;
  modifiedDate: string;
  featuredImage?: string;
};

export default function PostListing({
  id,
  title,
  authorName,
  excerpt,
  modifiedDate,
  featuredImage,
}: Props) {
  return (
    <Link href={`/blog/${id}`}>
      <div className="flex flex-col gap-1 bg-primary text-white rounded-sm p-2 max-w-96">
        <div className="flex flex-col gap-2">
          {featuredImage && (
            <Image
              src={featuredImage}
              alt={`${title} featured image`}
              width={2000}
              height={2000}
            />
          )}
          <div className="flex justify-between">
            <span className="font-bold text-xl">{title}</span>
            <span className="font-light text-lg">{authorName}</span>
          </div>
        </div>
        <div className="font-medium text-sm">
          <SafeRawHtmlWrapper html={excerpt} />
        </div>
        <span className="font-light text-sm">{formatDate(modifiedDate)}</span>
      </div>
    </Link>
  );
}
