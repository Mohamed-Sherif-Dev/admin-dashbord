import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { Box } from '@mui/material'
import Header from '../../components/Header'

const data = 

[
  {
    "id": "php",
    "label": "php",
    "value": 146,
    "color": "hsl(29, 70%, 50%)"
  },
  {
    "id": "haskell",
    "label": "haskell",
    "value": 585,
    "color": "hsl(86, 70%, 50%)"
  },
  {
    "id": "rust",
    "label": "rust",
    "value": 328,
    "color": "hsl(162, 70%, 50%)"
  },
  {
    "id": "scala",
    "label": "scala",
    "value": 563,
    "color": "hsl(144, 70%, 50%)"
  },
  {
    "id": "erlang",
    "label": "erlang",
    "value": 484,
    "color": "hsl(310, 70%, 50%)"
  }
]

const PieChart = ({isDashbord = false}) => {
  return (
    <Box sx={{ height: isDashbord ? "300px" : 400, width: "98%", margin: "auto" }}>
      {/* <Header title="Pie Chart" subtitle="Simple Pie Chart" /> */}
<ResponsivePie /* or Pie for fixed dimensions */
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.6}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                symbolShape: 'circle'
            }
        ]}
    />
    </Box>
  )
}

export default PieChart