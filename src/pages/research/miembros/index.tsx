import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@mui/material";
import MiembroConvocatoriaCard from "components/MiembroConvocatoriaCard";
import React, { FC } from "react";
// import ConvocatoriaCard from "./ConvocatoriaCard";
import { miembros } from "./data";

const Miembros: FC = () => {
  return (
    <div>
      <Box
        display="flex"
        alignItems="center"
        sx={{
          mt: 2.5
        }}
      >
        <TextField
          fullWidth
          InputProps={{
            sx: {
              backgroundColor: "white"
            }
          }}
          placeholder="DNI/Nombres de Funcionario"
        />
        <FormControl sx={{ ml: 1, width: 320 }}>
          <InputLabel id="demo-simple-select-label">Ordenar por:</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={"pre-resp-penal"}
            sx={{
              backgroundColor: "white"
            }}
            label="Ordenar por:"
            // onChange={handleChange}
          >
            <MenuItem value="pre-resp-penal">Presunta Resp. Penal</MenuItem>
            <MenuItem value="pre-resp-administrativa">
              Presunta Resp. Administrativa
            </MenuItem>
            <MenuItem value="pre-resp-total">Presunta Resp. Total</MenuItem>
            <MenuItem value="fre-part-conv">
              Frecuente Partición en Convocatorias
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          pt: 1.5,
          display: "grid",
          gridTemplateColumns: "1fr",
          gridGap: "12px"
        }}
      >
        {miembros.map((miembro) => (
          <MiembroConvocatoriaCard key={miembro._id} miembro={miembro} />
        ))}
      </Box>
    </div>
  );
};

export default Miembros;
