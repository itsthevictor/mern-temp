import AreaChartComponent from "./AreaChart";
import BarChartComponent from "./BarChart";

import { useState } from "react";

import Wrapper from "../assets/wrappers/ChartsContainer";

const ChartContainer = ({ monthlyApplications }) => {
  const [barChart, setBarChart] = useState(true);
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? "area chart" : "bar chart"}
      </button>{" "}
      {barChart ? (
        <BarChartComponent data={monthlyApplications} />
      ) : (
        <AreaChartComponent data={monthlyApplications} />
      )}
    </Wrapper>
  );
};
export default ChartContainer;
