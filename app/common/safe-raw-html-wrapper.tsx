import DOMPurify from "isomorphic-dompurify";

type Props = { html: string };

export default function SafeRawHtmlWrapper({ html }: Props) {
  return (
    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}></div>
  );
}
