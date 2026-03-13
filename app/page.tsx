export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-3xl font-bold mb-4 text-primary">
        Welcome to Mission Sea Turtle Nest community site!
      </h2>
      <div className="flex flex-col gap-3 items-center">
        <p className="font-normal text-sm">
          I have been volunteering with patrols and nest watch on behalf of
          Nature Trust Malta since 2020, starting with two turtle nests at
          Għadira. The nests have hatched in September which has brought about
          concern of flooding and hence rotting of the eggs due to both rainfall
          and increased wave action. However, the planning of the coordinating
          team, as well as manual labour such as digging trenches on part of
          volunteers including myself has undoubtedly resulted in better
          numbers. Needless to say, the knowledge acquired from this experience
          and the people I`&apos`ve met through this journey, have inspired me to
          build this game from a mama turtle`&apos`s perspective.
        </p>
        <a
          href="https://turtle-quest.vercel.app/"
          target="_blank"
          className="px-4 py-2 bg-primary hover:bg-pink-400 transition-colors duration-300 text-white font-bold w-fit rounded-sm"
        >
          Launch Game
        </a>
        <p className="font-normal text-sm">
          Dedicated to our coordinators Angelique and Haley and countless turtle
          watch volunteers (past, present and future), including my dear friends
          Josette Darmenia, Stephen Spiteri, Ana Feder, Sheila Adams, Joanna
          Pullicino Kent, Rachel Doyle, Roberta Farrugia Debono, Glenn Brough,
          Joe Conti, Corrine Wood, Liza Sountsova, Kamilla Boross and Liz
          Gowland-Camilleri. And many others - it`&apos`s impossible to list them all
          here! These people have selflessly dedicated their time for
          safeguarding biodiversity and for that I wish to thank them
          wholeheartedly.
        </p>
        <p className="font-normal text-sm">
          Of course, also dedicated to mama and baby turtles this amazing team,
          together with the team of professionals from ERA, has helped to
          safeguard throughout the years. Lots of respect and love to all of
          those I have so far met in this journey.
        </p>
        <p className="font-normal text-sm">
          Many thanks to those of you have shared their honest feedback, as well
          as those who simply enjoyed playing. The list of contributors may be
          accessed&nbsp;
          <a
            href="https://github.com/danieldesira/MissionSeaTurtleNest/blob/master/contributors.md"
            target="__blank"
            className="underline"
          >
            here.
          </a>
          &nbsp; Special thanks goes to Marvic Refalo (educator at NTM and
          volunteer wildlife rescuer) for her constructive feedback from testing
          the game.
        </p>
        <p className="font-normal text-sm">
          Hope for many more baby turtles in the years to come!
        </p>
      </div>
    </div>
  );
}
