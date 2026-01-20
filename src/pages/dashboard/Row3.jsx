
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../pieChart/PieChart";
import Bar from "../barChart/BarChart";
import Geo from "../geographyChart/GeographyChart";

const Row3 = () => {
  const theme = useTheme();

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      flexWrap="wrap"
      gap={1.5}
      mt={1.4}
    >
      {/* ===== Campaign ===== */}
      <Paper
        sx={{
          flex: "1 1 300px",
        }}
      >
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight={600}
          sx={{ p: "30px 30px 0" }}
        >
          Campaign
        </Typography>

        <Pie isDashbord />

        <Typography variant="h6" align="center" mt={2}>
          $48,352 revenue generated
        </Typography>

        <Typography variant="body2" align="center" px={1} pb={3}>
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>

      {/* ===== Sales Quantity ===== */}
      <Paper
        sx={{
          flex: "1 1 300px",
        }}
      >
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight={600}
          sx={{ p: "30px 30px 0" }}
        >
          Sales Quantity
        </Typography>

        <Bar isDashbord />
      </Paper>

      {/* ===== Geography ===== */}
      <Paper
        sx={{
          flex: "1 1 300px",
        }}
      >
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight={600}
          sx={{ p: "30px 30px 0" }}
        >
          Geography
        </Typography>

        <Geo isDashbord={true} />
      </Paper>
    </Stack>
  );
};

export default Row3;
