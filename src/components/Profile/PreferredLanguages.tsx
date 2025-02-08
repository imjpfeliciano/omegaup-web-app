import Chip from "../ui/Chip";

// TODO: Fetch stats from user profile
const PreferredLanguages: React.FC = () => (
  <div>
    <h2 className="font-semibold">Languages</h2>
    <div className="flex flex-row gap-2 flex-wrap">
      <Chip>C++</Chip>
      <Chip>Python</Chip>
      <Chip>Java</Chip>
      <Chip>JavaScript</Chip>
      <Chip>Rust</Chip>
    </div>
  </div>
);

export default PreferredLanguages;
