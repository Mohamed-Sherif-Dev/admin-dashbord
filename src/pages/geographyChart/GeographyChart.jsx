import React from "react";
import { Box } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geo } from "./world_countries";
import { data } from "./data";
import Header from "../../components/Header";


const GeographyChart = ({isDashbord = false}) => {

  return (
<>
    {/* <Header title="Geography Chart" subtitle="Simple Geography Chart" /> */}
    <Box
      sx={{
        height: isDashbord ? "400px" : "75vh",
        margin: "auto",
        border: isDashbord ? "none" : "1px solid white",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
          <ResponsiveChoropleth /* or Choropleth for fixed dimensions */
        data={data}
        features={geo.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="spectral"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        enableGraticule={false}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        projectionScale={isDashbord ? 70 : 100}
        legends={[

          isDashbord ? [] :
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: '#737171',
                itemOpacity: 0.85,
                symbolSize: 18
            }
        ]}
    />
    </Box>
    </>
  );
};

export default GeographyChart;
