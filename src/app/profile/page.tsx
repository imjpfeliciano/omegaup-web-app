import Card from "@/components/UI/Card";

const ProfilePage: React.FC = () => (
    <div className="max-w-screen-lg mx-auto h-screen">
        <div className="grid grid-flow-col grid-rows-3 gap-4">
            <div className="row-span-3">
                <Card>
                    <div className="flex flex-row gap-4">
                        <div>
                            <img src="" alt="Profile picture" />
                        </div>
                        <button>
                            Edit profile
                        </button>
                    </div>
                </Card>
            </div>
            <div className="col-span-2 border rounded">
                Rank and badges
            </div>
            <div className="col-span-2 border rounded">
                Profile tabs
            </div>
        </div>

    </div>
)

export default ProfilePage;