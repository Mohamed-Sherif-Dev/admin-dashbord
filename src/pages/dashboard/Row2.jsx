// import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
// import React from "react";
// import LineChart from "../ineChart/LineChart";
// import { DownloadOutlined } from "@mui/icons-material";
// import { Transactions } from "./data";

// const Row2 = () => {
//   const theme = useTheme();

//   return (
//     <Stack direction={{ xs: "column", md: "row" }} gap={1} mt={3}>
//       <Paper
//         sx={{
//           flex: 1,
//           minWidth: 0,
//         }}
//       >
//         <Stack
//           display={"flex"}
//           justifyContent={"space-between"}
//           direction="row"
//           flexWrap={"wrap"}
//         >
//           <Box>
//             <Typography
//               color={theme.palette.secondary.main}
//               fontWeight="bold"
//               p={1.5}
//             >
//               Sales Overview
//             </Typography>
//             <Typography
//               color={theme.palette.secondary.main}
//               fontWeight="bold"
//               p={1.5}
//             >
//               12,365
//             </Typography>
//           </Box>

//           <Box>
//             <IconButton>
//               <DownloadOutlined />
//             </IconButton>
//           </Box>
//         </Stack>

//         <LineChart isDashboard={true} />
//       </Paper>

//               <Paper>
//           <Typography
//             color={theme.palette.secondary.main}
//             fontWeight={"bold"}
//             p={1.2}
//             variant="h6"
//           >
//             Recent Transactions
//           </Typography>
//         </Paper>

//         {Transactions.map((item) => {
//           return (
//             <Paper
//               sx={{
//                 mt: 0.4,
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//               }}
//             >
//               <Box p={1.2}>
//                 <Typography variant="body1">{item.txId}</Typography>
//                 <Typography variant="body2">{item.user} </Typography>
//               </Box>
//               <Typography variant="body1">{item.date} </Typography>

//               <Typography
//                 borderRadius={1.4}
//                 p={1}
//                 bgcolor={theme.palette.error.main}
//                 color={theme.palette.getContrastText(theme.palette.error.main)}
//                 variant="body2"
//               >
//                 ${item.cost}
//               </Typography>
//             </Paper>
//           );
//         })}
//     </Stack>
//   );
// };

// export default Row2;



import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import LineChart from "../ineChart/LineChart";
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "./data";

const Row2 = () => {
  const theme = useTheme();

  return (
    <Stack direction={{ xs: "column", md: "row" }} gap={1} mt={3}>
      {/* ===== Chart Section ===== */}
      <Paper sx={{ flex: 1, minWidth: 0 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          p={1.5}
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              fontWeight="bold"
            >
              Sales Overview
            </Typography>
            <Typography
              color={theme.palette.secondary.main}
              fontWeight="bold"
            >
              12,365
            </Typography>
          </Box>

          <IconButton>
            <DownloadOutlined />
          </IconButton>
        </Stack>

        <LineChart isDashboard />
      </Paper>

      {/* ===== Transactions Section ===== */}
      <Paper sx={{ flex: 1, maxHeight: 420, overflow: "auto" }}>
        <Typography
          color={theme.palette.secondary.main}
          fontWeight="bold"
          p={1.5}
          variant="h6"
        >
          Recent Transactions
        </Typography>

        {Transactions.map((item) => (
          <Paper
            key={item.txId}
            sx={{
              mx: 1,
              mb: 0.6,
              p: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="body1">{item.txId}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item.user}
              </Typography>
            </Box>

            <Typography variant="body2">{item.date}</Typography>

            <Typography
              borderRadius={1}
              px={1.5}
              py={0.5}
              bgcolor={theme.palette.error.main}
              color={theme.palette.getContrastText(theme.palette.error.main)}
              variant="body2"
            >
              ${item.cost}
            </Typography>
          </Paper>
        ))}
      </Paper>
    </Stack>
  );
};

export default Row2;
