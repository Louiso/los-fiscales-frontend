import { Box, TextField } from "@mui/material";
import React, { FC } from "react";
import ConvocatoriaCard from "./ConvocatoriaCard";
import { convocatorias } from "./data";

const Convocatorias: FC = () => {
  return (
    <div>
      <TextField
        sx={{
          mt: 2.5
        }}
        fullWidth
        placeholder="Nombre de convocatoria"
      />
      <Box sx={{pt: 1.5}}>
        {convocatorias.map((convocatoria) => (
          <ConvocatoriaCard key={convocatoria._id} convocatoria={convocatoria} />
        ))}
      </Box>
    </div>
  );
};

export default Convocatorias;
