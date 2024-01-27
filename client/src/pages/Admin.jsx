import { FaSuitcaseRolling, FaCalendarCheck } from "react-icons/fa";
import { useState, useEffect } from "react";
import customFetch from "../utils/customFetch";
import Wrapper from "../assets/wrappers/StatsContainer";
import { toast } from "react-toastify";
import { StatItem } from "../components";

export const loader = async () => {
  console.log("admin page loader loading");
  return null;
};

const Admin = () => {
  const [data, setData] = useState({});

  const getData = async () => {
    try {
      const { data } = await customFetch.get("/users/stats");
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
      toast.error("you are not authorized to view this page");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper>
      <StatItem
        title="current users"
        count={data.users}
        color="#e9b949"
        bcg="#fcefc7"
        icon={<FaSuitcaseRolling />}
      />
      <StatItem
        title="total jobs"
        count={data.jobs}
        color="#647acb"
        bcg="#e0e8f9"
        icon={<FaCalendarCheck />}
      />
    </Wrapper>
  );
};
export default Admin;
