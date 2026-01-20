import { useTheme, Stack } from "@mui/material";
import Card from "./Card";

import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { data1, data2, data3, data4 } from "./data";

const Row1 = () => {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      gap={1}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <Card
        icon={
          <EmailIcon
            sx={{ color: theme.palette.secondary.main, fontSize: "23px" }}
          />
        }
        title={"12,365"}
        subTitle={"Email Sent"}
        data={data1}
        incres={"+5.8%"}
        scheme={"nivo"}
      />
      <Card
        icon={
          <PointOfSaleIcon
            sx={{ color: theme.palette.secondary.main, fontSize: "25px" }}
          />
        }
        title={"$24,695"}
        subTitle={"Sales"}
        data={data2}
        incres={"+21.4%"}
        scheme={"accent"}
      />
      <Card
        icon={
          <PersonAddIcon
            sx={{ color: theme.palette.secondary.main, fontSize: "25px" }}
          />
        }
        title={"$24,695"}
        subTitle={"New User"}
        data={data3}
        incres={"+5.6%"}
        scheme={"set1"}
      />
      <Card
        icon={
          <TrafficIcon
            sx={{ color: theme.palette.secondary.main, fontSize: "25px" }}
          />
        }
        title={"$24,695"}
        subTitle={"Traffic"}
        data={data4}
        incres={"+2.4%"}
        scheme={"set2"}
      />
    </Stack>
  );
};

export default Row1;
