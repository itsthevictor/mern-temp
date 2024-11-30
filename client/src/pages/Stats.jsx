import { ChartContainer, StatsContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

// export const loader = async () => {
//   console.log("loader fired");
//   try {
//     const response = await customFetch.get("/jobs/stats");
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };

const Stats = () => {
  // const data = useLoaderData();

  const [stats, setStats] = useState({
    defaultStats: {},
    monthlyApplications: [],
  });

  // const getData = async () => {
  //   try {
  //     const response = await customFetch.get("/jobs/stats");
  //     if (response) {
  //       setStats({
  //         defaultStats: response.data.defaultStats,
  //         monthlyApplications: response.data.monthlyApplications,
  //       });
  //     } else return;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  const { isLoading, isError, data } = useQuery({
    queryKey: ["stats"],
    queryFn: () => customFetch.get("/jobs/stats"),
  });
  if (isLoading) return <h4>loading...</h4>;
  if (isError) return <h4>there's been an error...</h4>;

  const { defaultStats, monthlyApplications } = data.data;

  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {stats.monthlyApplications?.length > 1 && (
        <ChartContainer monthlyApplications={monthlyApplications} />
      )}
    </>
  );
};
export default Stats;
