import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Stack from "@mui/material/Stack";

const FAQPage = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Stack direction={"column"} gap={2}>
      <Accordion
        defaultExpanded

      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            ⚙️ General Settings
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Basic information
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Here you can change language, theme, and display preferences.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ width: "33%", flexShrink: 0 }}>👥 Users</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Account management
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Add new users, edit roles, or remove inactive accounts.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            🔧 Advanced Settings
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Extra options
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Server configuration and performance controls.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            🔒 Personal Data
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>Privacy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Manage the data you share and review privacy policies.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ width: "33%", flexShrink: 0 }}>💡 FAQs</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Common questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Find answers to the most frequently asked questions.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            🌐 Network
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>Connectivity</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Internet and VPN settings.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            🔔 Notifications
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>Alerts</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Control which alerts you receive.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            🎨 Appearance
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>Themes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Choose the theme and colors that suit you.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel9"}
        onChange={handleChange("panel9")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ width: "33%", flexShrink: 0 }}>📂 Files</Typography>
          <Typography sx={{ color: "text.secondary" }}>Management</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Upload and organize your files.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel10"}
        onChange={handleChange("panel10")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            🛡️ Security
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>Protection</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Password settings and two‑factor authentication.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel11"}
        onChange={handleChange("panel11")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            📊 Reports
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>Statistics</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>View performance and usage reports.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel12"}
        onChange={handleChange("panel12")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            ❓ Support
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>Help</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Contact the support team for assistance.</Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};

export default FAQPage;
