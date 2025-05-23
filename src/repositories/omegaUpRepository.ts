interface Problem {
  // Add problem interface properties here
  [key: string]: any;
}

interface ProblemListResponse {
  data: Problem[];
}

interface ProblemDetailsResponse {
  statement: string;
  // Add other problem details properties here
}

class OmegaUpRepository {
  private static instance: OmegaUpRepository;
  private cache: Map<string, { data: any; timestamp: number }>;
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

  private constructor() {
    this.cache = new Map();
  }

  public static getInstance(): OmegaUpRepository {
    if (!OmegaUpRepository.instance) {
      OmegaUpRepository.instance = new OmegaUpRepository();
    }
    return OmegaUpRepository.instance;
  }

  private getCacheKey(endpoint: string, params: Record<string, any>): string {
    return `${endpoint}?${new URLSearchParams(params).toString()}`;
  }

  private isCacheValid(timestamp: number): boolean {
    return Date.now() - timestamp < this.CACHE_DURATION;
  }

  private async fetchWithCache<T>(
    endpoint: string,
    params: Record<string, any> = {}
  ): Promise<T> {
    const cacheKey = this.getCacheKey(endpoint, params);
    const cachedData = this.cache.get(cacheKey);

    if (cachedData && this.isCacheValid(cachedData.timestamp)) {
      return cachedData.data;
    }

    const queryParams = new URLSearchParams(params).toString();
    const url = `${process.env.OMEGAUP_API_URL}${endpoint}${
      queryParams ? `?${queryParams}` : ""
    }`;

    const response = await fetch(url, {
      headers: {
        Authorization: `token ${process.env.OMEGAUP_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    const data = await response.json();
    this.cache.set(cacheKey, { data, timestamp: Date.now() });

    return data;
  }

  public async getListOfProblems(
    params: {
      page?: number;
      pageSize?: number;
      query?: string;
    } = {}
  ): Promise<ProblemListResponse> {
    return this.fetchWithCache<ProblemListResponse>("/problem/list", params);
  }

  public async getProblemDetails(
    problemId: string
  ): Promise<ProblemDetailsResponse> {
    return this.fetchWithCache<ProblemDetailsResponse>("/problem/details", {
      problem_alias: problemId,
    });
  }

  public clearCache(): void {
    this.cache.clear();
  }
}

export const omegaUpRepository = OmegaUpRepository.getInstance();
