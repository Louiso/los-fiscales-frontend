import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ResearchPage from "pages/research";
import ConvocatoriasPage from "pages/research/convocatorias";
import MiembrosPage from "pages/research/miembros";
import { CssBaseline, GlobalStyles, useTheme } from "@mui/material";

const Root: FC = () => {
  const theme = useTheme();
  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{ body: { backgroundColor: theme.palette.secondary.light } }}
      />
      <Routes>
        <Route
          path="/"
          caseSensitive
          element={<Navigate replace to="/research/miembros" />}
        />
        <Route path="research" element={<ResearchPage />}>
          <Route path="convocatorias" element={<ConvocatoriasPage />} />
          <Route path="miembros" element={<MiembrosPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default Root;
