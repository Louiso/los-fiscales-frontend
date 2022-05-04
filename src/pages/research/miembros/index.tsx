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
import { useSWRConfig } from "swr";
import { SortByMemberOptions } from "utils/constants";
import { useGetMiembros, useSearchState } from "../services";
// import ConvocatoriaCard from "./ConvocatoriaCard";
import { useDebounce } from 'use-debounce'

const Miembros: FC = () => {
  const config = useSWRConfig()

  const { data: searchState } = useSearchState();

  const [searchTextDebounce] = useDebounce(searchState?.search ?? '', 500)

  const { data: miembros } = useGetMiembros({
    variables: {
      page: 0,
      search: searchTextDebounce,
      sortBy: searchState?.sortBy
    }
  });

  const _handleChange = ({target: { value, name }}: any) => {
    console.log("_handleChange")
    config.mutate(JSON.stringify({
      key: 'getSearchState',
    }), (resp: any) => {
      return {
        ...resp,
        [name]: value
      }
    }, false)
  }

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
          onChange={_handleChange}
          name="search"
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
          {searchState?.sortBy && (
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="sortBy"
              value={searchState?.sortBy}
              onChange={_handleChange}
              sx={{
                backgroundColor: "white"
              }}
              label="Ordenar por:"
            >
              {SortByMemberOptions.map((option) => (
                <MenuItem value={option.value} key={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          )}
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
        {(miembros ?? []).map((miembro) => (
          <MiembroConvocatoriaCard key={miembro._id} miembro={miembro} />
        ))}
      </Box>
    </div>
  );
};

export default Miembros;
