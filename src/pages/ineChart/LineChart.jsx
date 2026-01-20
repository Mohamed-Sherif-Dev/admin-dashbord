import { ResponsiveLine } from "@nivo/line";
import { Box } from "@mui/material";
import { data } from "./data";
import { useTheme } from "@mui/material/styles";
import Header from "../../components/Header";

const getChartTheme = (isDark) => ({
  text: {
    fill: isDark ? "#fff" : "#000",
  },
  axis: {
    domain: {
      line: {
        stroke: isDark ? "#777" : "#333",
      },
    },
    ticks: {
      line: {
        stroke: isDark ? "#777" : "#333",
      },
      text: {
        fill: isDark ? "#fff" : "#000",
      },
    },
    legend: {
      text: {
        fill: isDark ? "#fff" : "#000",
      },
    },
  },
  legends: {
    text: {
      fill: isDark ? "#fff" : "#000",
    },
  },
});

const LineChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <div>
      {/* <Header title="Line Chart" subtitle="Simple Line Chart" /> */}
    <Box
      sx={{
        height: isDashboard ? "280px" : "75vh",
        width: "98%",
        margin: "auto",
      }}
    >
      <ResponsiveLine
        data={data}
        theme={getChartTheme(isDark)}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{
          type: "linear",
          stacked: true,
        }}
        axisBottom={{
          legend: isDashboard ? null : "transportation",
          legendOffset: 36,
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: "middle",
        }}
        axisLeft={{
          legend: isDashboard ? null : "count",
          legendOffset: -40,
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "seriesColor" }}
        enableTouchCrosshair
        useMesh
        enableGridX={false}
        enableGridY={false}
        colors={isDark ? { scheme: "category10" } : { scheme: "nivo" }}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            translateX: 100,
            itemWidth: 80,
            itemHeight: 22,
            symbolShape: "circle",
          },
        ]}
      />
    </Box>
    </div>
  );
};

export default LineChart;
