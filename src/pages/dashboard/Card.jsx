import { Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ResponsivePie } from "@nivo/pie";

const Card = ({ icon, title, subTitle, incres, data , scheme }) => {
  return (
    <Paper
      sx={{
        flexGrow: 1,
        marginTop: "10px",
        width: "300px",
        display: "flex",
        p: 1.5,
        justifyContent: "space-between",
      }}
      justifyContent={{ xs: "center", sm: "space-between", md: "flex-start" }}
    >
      <Stack gap={1} direction="column">
        {icon}
        <Typography variant="body2" sx={{ fontSize: "13px" }}>
          {title}
        </Typography>

        <Typography variant="body2" sx={{ fontSize: "20px" }}>
          {subTitle}
        </Typography>
      </Stack>

      <Stack alignItems={"center"}>
        <Box height={"80px"} width={"80px"}>
          <ResponsivePie /* or Pie for fixed dimensions */
            data={data}
            margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
            innerRadius={0.7}
            padAngle={0.7}
            cornerRadius={2}
            activeOuterRadiusOffset={8}
            enableArcLabels={false}
            enableArcLinkLabels={false}
            colors={{scheme: scheme}}
          />
        </Box>
        <Typography variant="body2">{incres}</Typography>
      </Stack>
    </Paper>
  );
};

export default Card;
