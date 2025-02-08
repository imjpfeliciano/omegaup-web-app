import CommunityStats from "@/components/Profile/CommunityStats";
import PreferredLanguages from "@/components/Profile/PreferredLanguages";
import ProfileBanner from "@/components/Profile/ProfileBanner";
import ProfileContent from "@/components/Profile/ProfileContent";
import Card from "@/components/UI/Card";

const ProfilePage: React.FC = () => (
  <div className="max-w-screen-lg mx-auto h-[calc(100vh-8rem)]">
    <div className="grid grid-flow-col grid-rows-10 gap-4 grid-cols-6 h-full">
      <div className="row-span-10 col-span-2">
        <Card>
          <div className="flex flex-col gap-4">
            <ProfileBanner />
            {/* FIXME: This button should only appear if this is my profile and not others */}
            <button className="flex bg-green-50 text-center p-2 rounded">
              <span className="text-green-800 text-center w-full">
                Edit profile
              </span>
            </button>

            <hr />
            <CommunityStats />
            <hr />
            <PreferredLanguages />
          </div>
        </Card>
      </div>
      <div className="col-span-4 row-span-2 rounded flex flex-row gap-4">
        <Card>Stats</Card>
      </div>

      <div className="col-span-4 row-span-8 rounded">
        <Card>
          <ProfileContent />
        </Card>
      </div>
    </div>
  </div>
);

export default ProfilePage;
