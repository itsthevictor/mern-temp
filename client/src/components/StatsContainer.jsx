import StatItem from "./StatItem";
import Wrapper from "../assets/wrappers/StatsContainer";
import {
  FaSuitcaseRolling,
  FaCalendarCheck,
  FaBug,
  FaCheck,
} from "react-icons/fa";

const StatsContainer = ({ defaultStats }) => {
  const stats = [
    {
      title: "pending applications",
      count: defaultStats?.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: "#e9b949",
      bcg: "#fcefc7",
    },
    {
      title: "interviews",
      count: defaultStats?.interview || 0,
      icon: <FaCalendarCheck />,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "declined applications",
      count: defaultStats?.declined || 0,
      icon: <FaBug />,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
  ];
  return (
    <Wrapper>
      {stats.map((item, index) => {
        return (
          <StatItem
            title={item.title}
            count={item.count}
            icon={item.icon}
            color={item.color}
            bcg={item.bcg}
            key={index}
          />
        );
      })}
    </Wrapper>
  );
};
export default StatsContainer;
