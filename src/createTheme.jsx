import { grey } from "@mui/material/colors";

const getDesignTokens = (mode) => ({
  palette: {
    mode,

    ...(mode === "dark"
      ? {
          background: {
            default: "#0F172A", // slate-900
            paper: "#111827", // slate-800
          },
          primary: {
            main: "#38BDF8", // sky-400
          },
          secondary: {
            main: "#A78BFA", // violet-400
          },
          text: {
            primary: "#E5E7EB", // gray-200
            secondary: "#9CA3AF", // gray-400
          },
          divider: "rgba(255,255,255,0.08)",
        }
      : {
          background: {
            default: "#F9FAFB",
            paper: "#FFFFFF",
          },
          primary: {
            main: "#2563EB",
          },
        }),
  },

  typography: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backdropFilter: "blur(10px)",
        },
      },
    },
  },
});

export default getDesignTokens;
