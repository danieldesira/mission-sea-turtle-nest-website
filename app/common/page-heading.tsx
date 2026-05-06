type Props = { title?: string };

export default function PageHeading({ title }: Props) {
  return <h2 className="text-3xl font-bold mb-4 text-primary italic">{title}</h2>;
}
