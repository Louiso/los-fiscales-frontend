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
import { SortByMemberOptions } from "utils/constants";
import { useGetMiembros, useSearchState } from "../services";
// import ConvocatoriaCard from "./ConvocatoriaCard";

const Miembros: FC = () => {
  const { data: searchState } = useSearchState();

  const { data: miembros } = useGetMiembros({
    variables: {
      page: 0,
      search: searchState?.search,
      sortBy: searchState?.sortBy
    }
  });

  if (!miembros) return <div>Cargando...</div>;

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
          value={searchState?.search}
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
            value={searchState?.sortBy}
            sx={{
              backgroundColor: "white"
            }}
            label="Ordenar por:"
            // onChange={handleChange}
          >
            {SortByMemberOptions.map((option) => (
              <MenuItem value={option.value} key={option.value}>
                {option.label}
              </MenuItem>
            ))}
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
