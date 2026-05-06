import Image from "next/image";
import PageHeading from "../common/page-heading";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
};

const teamMembers = [
  {
    name: "Daniel Desira",
    role: "Game Developer",
    bio: "Software developer by education and profession with a passion for both nature and technology.",
    photoUrl: "/danield.jpg",
  },
] satisfies TeamMember[];

export default function About() {
  return (
    <div className="flex flex-col gap-5">
      <PageHeading title="About Mission Sea Turtle Nest" />
      <div className="flex flex-col gap-3 items-center">
        <h3 className="text-2xl font-bold mb-4 text-primary">Core Team</h3>
        <div className="flex gap-3 items-center">
          {teamMembers.map(({ name, role, bio, photoUrl }, index) => (
            <div
              key={index}
              className="flex flex-col bg-primary text-white p-2 gap-2 rounded-sm max-w-50"
            >
              <span className="text-sm font-bold">{name}</span>
              <span className="text-sm font-medium italic">{role}</span>
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
