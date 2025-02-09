"use client";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

interface BadgesTabProps {
  username: string;
}

type OmegaupBadge = {
  badge_alias: string;
  assignation_time: number;
  first_assignation: number | null;
  owners_count: number;
  total_users: number;
}

const BadgesTab: React.FC<BadgesTabProps> = ({ username }) => {

  const { data, error, isLoading } = useSWR(`/api/profile/badges/?target_username=${username}`, fetcher);

  if (error) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (

    <div className="grid grid-cols-4 items-center justify-center gap-4 overflow-scroll">
      {
        data.data.badges.map((badge: OmegaupBadge) => (
          <div className="flex flex-col gap-2 items-center" key={badge.badge_alias}>

            <img
              src={`https://omegaup.com/media/dist/badges/${badge.badge_alias}.svg`}
              alt={badge.badge_alias}
              className="grid-cols-1 items-center justify-center w-24 h-24"

            />
            <p>{badge.badge_alias}</p>
          </div>
        ))
      }
    </div>
  )
};

export default BadgesTab;