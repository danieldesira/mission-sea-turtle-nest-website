import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "./menu";
import Image from "next/image";
import { IconType } from "react-icons";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mission Sea Turtle Nest Community",
  description: "Community website for Mission Sea Turtle Nest game",
};

type SocialIcon = {
  Icon: IconType;
  url: string;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const socialIcons = [
    {
      Icon: FaInstagram,
      url: "https://www.instagram.com/turtlequest.webgame/",
    },
    { Icon: FaYoutube, url: "https://www.youtube.com/@SeaTurtleQuestGame" },
    {
      Icon: FaLinkedin,
      url: "https://www.linkedin.com/in/daniel-desira-50045b97/",
    },
    {
      Icon: FaGithub,
      url: "https://github.com/danieldesira/MissionSeaTurtleNest",
    },
  ] satisfies SocialIcon[];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col font-sans">
          <header className="fixed w-full flex justify-between items-center bg-primary text-white p-4 opacity-85">
            <Image
              className="animate-bounce-once"
              src="https://turtle-quest.vercel.app/assets/favicon-B1ZwkIgi.svg"
              alt="MSTN Logo"
              width={40}
              height={40}
            />
            <Menu />
          </header>
          <main className="flex-1 p-4 my-20">{children}</main>
          <footer className="fixed bottom-0 w-full bg-primary text-white p-4 flex gap-4 justify-center items-center opacity-85">
            {socialIcons.map(({ Icon, url }) => (
              <a key={url} href={url} target="_blank">
                <Icon className="w-8 h-8" />
              </a>
            ))}
          </footer>
        </div>
      </body>
    </html>
  );
}
