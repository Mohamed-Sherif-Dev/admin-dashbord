

import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Box } from "@mui/material";
import Header from "../../components/Header";

const chartData = [
  { country: "AD", "hot dog": 30, burger: 120, sandwich: 136, kebab: 169, fries: 128, donut: 120 },
  { country: "AE", "hot dog": 106, burger: 169, sandwich: 64, kebab: 131, fries: 2, donut: 4 },
  { country: "AF", "hot dog": 24, burger: 16, sandwich: 82, kebab: 22, fries: 102, donut: 2 },
  { country: "AG", "hot dog": 124, burger: 62, sandwich: 9, kebab: 36, fries: 19, donut: 32 },
  { country: "AI", "hot dog": 96, burger: 112, sandwich: 110, kebab: 68, fries: 157, donut: 142 },
  { country: "AL", "hot dog": 102, burger: 196, sandwich: 169, kebab: 195, fries: 36, donut: 84 },
  { country: "AM", "hot dog": 8, burger: 27, sandwich: 134, kebab: 4, fries: 130, donut: 139 },
];

const BarChart = ({isDashbord = false} ) => {
  return (
    <Box sx={{ height: isDashbord ? "300px" : "75vh", width: "98%", margin: "auto", color: "white" }}>


      {/* <Header title="Bar Chart" subtitle="Simple Bar Chart" /> */}
      <ResponsiveBar
        data={chartData}
        keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: "pastel2" }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            translateX: 120,
            itemsSpacing: 3,
            itemWidth: 100,
            itemHeight: 16,
          },
        ]}
        axisBottom={{
          legend: "Country",
          legendOffset: 32,
        }}
        axisLeft={{
          legend: "Food",
          legendOffset: -40,
        }}
        tooltip={({ id, value, indexValue }) => (
          <strong>
            {indexValue} - {id}: {value}
          </strong>
        )}
        animate={true}
        motionConfig="gentle"

        theme={{
          axis: {
            legend: {
              text: {
                fontSize: 14,
                fill: "#161212",
              },
            },
          },
          legends: {
            text: {
              fontSize: 12,
              fill: "#ffeeee",
            },
          },
        }}
      />
    </Box>
  );
};

export default BarChart;