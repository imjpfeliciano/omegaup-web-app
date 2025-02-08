"use client";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const BadgesTab = () => {
  const { data, error, isLoading } = useSWR("/api/profile/badges", fetcher);

  if (error) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading</div>;
  }
};
