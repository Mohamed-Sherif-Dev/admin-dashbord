import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./DataRowContact";
import Header from "../../components/Header";

const ContactsInformation = () => {
  return (
    <Box sx={{ height: 600, width: "98%", margin: "auto" }}>
      <Header title="Contacts Information" subtitle="List of contacts" />
      <DataGrid
        rows={rows}
        columns={columns}
        showToolbar
        initialState={{
          pagination: {
            paginationModel: { pageSize: 9, page: 0 },
          },
        }}
      />
    </Box>
  );
};

export default ContactsInformation;
