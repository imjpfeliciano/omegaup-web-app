// TODO: Fetch stats from user profile
const CommunityStats: React.FC = () => (
  <div>
    <h2 className="font-semibold">Community stats</h2>
    <div className="flex flex-col gap-4">
      <div>
        <h3>Problems solved</h3>
        <p>100</p>
      </div>
      <div>
        <h3>Problems attempted</h3>
        <p>200</p>
      </div>
      <div>
        <h3>Problems created</h3>
        <p>10</p>
      </div>
    </div>
  </div>
);

export default CommunityStats;
