import { auth } from "@/auth";

const ProfileBanner: React.FC = async () => {
  const session = await auth();

  console.log({ session });
  return (
    <div className="flex flex-row gap-2">
      <img
        src={session.user.image}
        alt="Profile picture"
        className="w-24 h-24 rounded-md"
      />
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="font-semibold text-xl">{session.user.username}</h1>

          <p className="text-slate-500">{session.user.name}</p>
        </div>

        <p className="text-slate-700 text-lg">
          Rank: {session.user.rankinfo.rank}
        </p>
      </div>
    </div>
  );
};

export default ProfileBanner;
