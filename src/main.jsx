import React, { StrictMode, useMemo, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import App from "./App.jsx";
import getDesignTokens from "./createTheme.jsx";
// pages
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import ManageTeam from "./pages/team/ManageTeam.jsx";
import ContactsInformation from "./pages/contactsInfomation/ContactsInformation.jsx";
import InvoicesBalances from "./pages/invoicesBalances/InvoicesBalances.jsx";
import ProfileForm from "./pages/profileForm/ProfileForm.jsx";
import Calendar from "./pages/calendar/Calendar.jsx";
import FAQPage from "./pages/fAQPage/faq.jsx";
import BarChart from "./pages/barChart/BarChart.jsx";
import PieChart from "./pages/pieChart/PieChart.jsx";
import LineChart from "./pages/ineChart/LineChart.jsx";
import GeographyChart from "./pages/geographyChart/GeographyChart.jsx";

// Router
const router = (setMode) =>
  createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App setMode={setMode} />}>
        <Route index element={<Dashboard />} />
        <Route path="team" element={<ManageTeam />} />
        <Route path="contacts" element={<ContactsInformation />} />
        <Route path="invoices" element={<InvoicesBalances />} />
        <Route path="form" element={<ProfileForm />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="bar" element={<BarChart />} />
        <Route path="pie" element={<PieChart />} />
        <Route path="line" element={<LineChart />} />
        <Route path="geography" element={<GeographyChart />} />
      </Route>,
    ),
  );

function Main() {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("themeMode") || "dark";
  });

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router(setMode)} />
    </ThemeProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>,
);
