import { TextField } from "@mui/material";
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
      {convocatorias.map((convocatoria) => (
        <ConvocatoriaCard key={convocatoria._id} convocatoria={convocatoria} />
      ))}
    </div>
  );
};

export default Convocatorias;
