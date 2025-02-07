import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      username: string;
      name: string;
      email: string;
      image: string;
      rankinfo: {
        rank: number;
        name: string;
        problems_solved: number;
        author_ranking: number;
      };
    };
  }

  interface User extends OmegaupUser {}

  interface JWT {
    id: number;
    username: string;
    name: string;
    email: string;
    image: string;
    rankinfo: {
      rank: number;
      name: string;
      problems_solved: number;
      author_ranking: number;
    };
  }
}
