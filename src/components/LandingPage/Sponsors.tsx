interface Sponsor {
  illustration: string;
  link: string;
}
const config: Sponsor[] = [
  //   {
  //     illustration: "https://omegaup.com/media/homepage/replit_logo.png",
  //     link: "https://replit.com/",
  //   },
];

const SponsorsSection = () => {
  if (config.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl text-center text-blue-700 font-bold">
          Thanks to our sponsors!
        </h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="flex justify-center items-center gap-4">
        {config.map((item) => (
          <a key={item.link} href={item.link} target="_blank" rel="noreferrer">
            <div className="w-[250px] self-center">
              <img
                src={item.illustration}
                alt="Sponsor"
                className="w-full grayscale"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SponsorsSection;
