import Image from "next/image";

type TeamMember = {
  name: string;
  bio: string;
  photoUrl: string;
};

const teamMembers = [
  {
    name: "Daniel Desira",
    bio: "Software developer by education and profession with a passion for both nature and technology.",
    photoUrl: "/danield.jpg",
  },
] satisfies TeamMember[];

export default function About() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-3xl font-bold mb-4">About Mission Sea Turtle Nest</h2>
      <div className="flex flex-col gap-3 items-center">
        <h3 className="text-2xl font-bold mb-4">Core Team</h3>
        <div className="flex gap-3 items-center">
          {teamMembers.map(({ name, bio, photoUrl }, index) => (
            <div
              key={index}
              className="flex flex-col bg-primary text-white p-2 rounded-sm max-w-50"
            >
              <span className="text-sm font-bold">{name}</span>
              <Image
                src={photoUrl}
                alt=""
                width={200}
                height={200}
                className="rounded-sm"
              />
              <p className="font-normal text-sm">{bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
