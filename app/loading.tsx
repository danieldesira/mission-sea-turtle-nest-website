import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col gap-5 items-center opacity-85 p-5 rounded-sm animate-ping max-w-full overflow-x-hidden">
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
