import React from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./data";
import Header from "../../components/Header";
const InvoicesBalances = () => {
  return (
    <Box sx={{ height: 600, width: "98%", margin: "auto" }}>
      <Header title="Invoices Balances" subtitle="List of Invoices Balances" />
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        showToolbar
        initialState={{
          pagination: {
            paginationModel: { pageSize: 8, page: 0 },
          },
        }}
      />
    </Box>
  );
};

export default InvoicesBalances;
