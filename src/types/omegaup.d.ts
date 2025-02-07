interface ProfileRankInfo {
  rank: number;
  name: string;
  problems_solved: number;
  author_ranking: number;
}

interface OmegaupUser {
  id: number;
  username: string;
  name: string;
  email: string;
  image: string;
  rankinfo: ProfileRankInfo;
}
