import { ChartContainer, StatsContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";

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
  //  const data = useLoaderData();

  const [stats, setStats] = useState({
    defaultStats: {},
    monthlyApplications: [],
  });
  const getData = async () => {
    try {
      const response = await customFetch.get("/jobs/stats");
      console.log(response.data);
      setStats({
        defaultStats: response.data.defaultStats,
        monthlyApplications: response.data.monthlyApplications,
      });
      const { defaultStats, monthlyApplications } = stats;
    } catch (error) {
      console.log(error);
      return;
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <StatsContainer defaultStats={stats.defaultStats} />
      {stats.monthlyApplications?.length > 1 && (
        <ChartContainer monthlyApplications={stats.monthlyApplications} />
      )}
    </>
  );
};
export default Stats;
