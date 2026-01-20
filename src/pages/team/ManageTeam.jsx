import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./teamData";
import { Box, Button, useTheme } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 30,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Name",
    headerName: "Name",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "age",
    headerName: "Age",
    width: 80,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "phone",
    headerName: "Phone",
    flex: 1,
    headerAlign: "center",
    align: "center",

  },

  {
    field: "role",
    headerName: "Access",
    flex: 1,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => {
      const theme = useTheme();
      return (
        <Box>
          <Button
            variant="contained"
            size="small"
            startIcon={
              params.row.role === "Admin" ? (
                <AdminPanelSettingsOutlined />
              ) : params.row.role === "Manager" ? (
                <SecurityOutlined />
              ) : (
                <LockOpenOutlined />
              )
            }
            sx={{
              width: "90px",
              height: "28px",
              fontSize: "10px",
              color: "white",
              p: 1,
              backgroundColor:
                params.row.role === "Admin"
                  ? theme.palette.error.main
                  : params.row.role === "Manager"
                  ? theme.palette.warning.main
                  : theme.palette.success.main,
              "&:hover": {
                backgroundColor:
                  params.row.role === "Admin"
                    ? theme.palette.error.dark
                    : params.row.role === "Manager"
                    ? theme.palette.warning.dark
                    : theme.palette.success.dark,
              },
            }}
          >
            {params.row.role}
          </Button>
        </Box>
      );
    },
  },
];

const ManageTeam = () => {
  return (
    <Box style={{ height: 600, width: "100%", margin: "auto" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 9, page: 0 } },
        }}
      />
    </Box>
  );
};

export default ManageTeam;
