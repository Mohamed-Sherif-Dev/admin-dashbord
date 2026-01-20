import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Button from "@mui/material/Button";
import { DownloadOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <div>
      <Header title="Dashboard" subtitle="Welcome to your dashboard" />

      <Box style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" text-transform="capitalize" color="primary">
          <DownloadOutlined />
          Download Report
        </Button>
      </Box>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
};

export default Dashboard;
