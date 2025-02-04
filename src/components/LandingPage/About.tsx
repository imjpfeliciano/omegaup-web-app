const config = [
  //   {
  //     illustration: "https://omegaup.com/media/homepage/contests_section.svg",
  //     title: "Compete",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     link: "/problemset",
  //   },
  {
    illustration: "https://omegaup.com/media/homepage/problems_section.svg",
    title: "Train",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/problemset",
  },
  //   {
  //     illustration: "https://omegaup.com/media/homepage/create_section.svg",
  //     title: "Create",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     link: "/problemset",
  //   },
  {
    illustration: "https://omegaup.com/media/homepage/courses_section.svg",
    title: "Teach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/courses",
  },
];

const AboutSection = () => (
  <div className="flex flex-col gap-4">
    {config.map((item) => (
      <div
        key={item.title}
        className="flex flex-col lg:flex-row gap-4 odd:flex-row-reverse items-center"
      >
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl text-center text-blue-700 font-bold">
            {item.title}
          </h2>
          <div className="flex flex-col gap-2 justify-center items-center text-center">
            <p>{item.description}</p>

            <a
              href={item.link}
              className="rounded-full bg-blue-500 text-white px-4 py-2 w-max"
            >
              Learn more
            </a>
          </div>
        </div>

        <img
          src={item.illustration}
          alt={item.title}
          className="aspect-video max-w-[300px] lg:max-w-[500px]"
        />
      </div>
    ))}
  </div>
);

export default AboutSection;
