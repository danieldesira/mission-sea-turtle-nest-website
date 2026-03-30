import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center opacity-85 rounded-sm animate-bounce">
      <Image
        src="https://turtle-quest.vercel.app/assets/favicon-B1ZwkIgi.svg"
        alt="MSTN Logo"
        width={60}
        height={60}
      />
      Loading...
    </div>
  );
}
