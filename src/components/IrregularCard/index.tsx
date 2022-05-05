import { Box, Paper, Typography } from "@mui/material";
import React, { FC } from "react";
import { Irregular } from "types";
import { capitalizeSentence } from "utils";
import qs from "query-string";
import { Launch as LaunchIcon } from "@mui/icons-material";
import {
  ResponsabilidadSrcIconParser,
  ResponsabilidadSrcIconParserKey
} from "utils/parsers";
import { Link } from "react-router-dom";

interface IrregularCardProps {
  irregular: Irregular;
}

const IrregularCard: FC<IrregularCardProps> = ({ irregular }) => {
  return (
    <Paper
      variant="outlined"
      key={irregular._id}
      sx={{
        p: 1.5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <div>
        <Box
          display="flex"
          alignItems="baseline"
          justifyContent="space-between"
          width="100%"
        >
          <Typography
            variant="body2"
            sx={{
              color: "grey.700",
              fontWeight: "bold"
            }}
          >
            {capitalizeSentence(irregular.nombres)}
          </Typography>
          <Box position="relative" width={28} height={16}>
            <Link
              target="_blank"
              to={`/irregular?${qs.stringify({
                dni: irregular.dni
              })}`}
            >
              <LaunchIcon
                fontSize="small"
                sx={{ position: "absolute", top: 0 }}
              />
            </Link>
          </Box>
        </Box>
        <Typography variant="caption" component="div" sx={{ mt: 1 }}>
          Dni: {irregular.dni}
        </Typography>
        <Typography variant="caption" component="div">
          Grado: {irregular.grado}
        </Typography>
        <Typography variant="caption" component="div">
          Total de proyectos: {irregular.proyectosTotal}
        </Typography>
      </div>
      <Box display="flex" sx={{ mt: 1 }}>
        {irregular.presuntasIrregularidades.map((irregularidad) => (
          <Box
            key={irregularidad.valor}
            display="flex"
            alignItems="center"
            sx={{ mr: 1 }}
          >
            <img
              style={{
                width: 24,
                height: 24
              }}
              src={
                ResponsabilidadSrcIconParser[
                  irregularidad.valor as ResponsabilidadSrcIconParserKey
                ]
              }
            />
            &nbsp;&nbsp;
            <Typography variant="caption">{irregularidad.total}</Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default IrregularCard;
