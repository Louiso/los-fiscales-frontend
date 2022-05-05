import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  // TablePagination,
  TextField
} from "@mui/material";
import MiembroConvocatoriaCard from "components/MiembroConvocatoriaCard";
import React, { FC, useMemo } from "react";
// import { useSWRConfig } from "swr";
import { SortByMemberOptionKey, SortByMemberOptions } from "utils/constants";
import { useGetMiembros } from "../services";
import qs from 'query-string'
// import ConvocatoriaCard from "./ConvocatoriaCard";
import { useDebounce } from 'use-debounce'
import { useLocation, useNavigate } from "react-router-dom";
import BoardPagination from "components/BoardPagination";

interface QueryParams {
  q: string; // search query
  sortBy: string; // sort by
  page: string; // page number
  limit: string; // limit
}

const ParseNameToQueryArg: Record<string, string> = {
  search: 'q',
  sortBy: 'sortBy',
  page: 'page',
  limit: 'limit'
}

const Miembros: FC = () => {
  // const config = useSWRConfig()
  const location = useLocation()
  const navigation = useNavigate()

  // const { data: searchState } = useSearchState();
  const queryParams = useMemo(() => {
    const params: QueryParams = qs.parse(location.search) as any

    return {
      search: params.q || '',
      sortBy: params.sortBy || SortByMemberOptionKey.PreRespPenal,
      page: params.page && !isNaN(Number(params.page)) ? Math.max(1, Number(params.page)) : 1,
      limit: Number(params.limit || 15),
    }
  }, [location.search])

  const [searchTextDebounce] = useDebounce(queryParams.search ?? '', 500)

  const getMiembrosQuery = useGetMiembros({
    variables: {
      page: 0,
      search: searchTextDebounce,
      sortBy: queryParams?.sortBy
    }
  });

  const _handleChange = ({target: { value, name }}: any) => {
    navigation({
      search: qs.stringify({
        ...qs.parse(location.search),
        [ParseNameToQueryArg[name]]: value
      })
    })
  }

  const { info, docs: miembros } = useMemo(() => {
    if (!getMiembrosQuery.data) return { info: null, docs: [] }

    const { info, docs } = getMiembrosQuery.data
    return { info, docs }
  }, [getMiembrosQuery])

  const _handleChangePage = (newPage: number) => {
    navigation({
      search: qs.stringify({
        ...qs.parse(location.search),
        page: newPage && !isNaN(Number(newPage)) ? Math.max(1, Number(newPage)) : 1
      })
    })
  }

  const _handleChangeRowsPerPage = (newRowsPerPage: number) => {
    navigation({
      search: qs.stringify({
        ...qs.parse(location.search),
        limit: newRowsPerPage,
        page: 1
      })
    })
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
          value={queryParams?.search}
          InputProps={{
            sx: {
              backgroundColor: "white"
            }
          }}
          placeholder="DNI/Nombres de Funcionario"
        />
        <FormControl sx={{ ml: 1, width: 320 }}>
          <InputLabel id="demo-simple-select-label">Ordenar por:</InputLabel>
          {queryParams?.sortBy && (
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="sortBy"
              value={queryParams?.sortBy}
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
      <BoardPagination
        rowsPerPageOptions={[15, 30, 50]}
        count={miembros.length}
        sx={{
          mt: 1
        }}
        totalDocs={info?.totalDocs ?? 0}
        rowsPerPage={queryParams.limit}
        page={queryParams.page}
        onPageChange={_handleChangePage}
        onRowsPerPageChange={_handleChangeRowsPerPage}
        />
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
      <BoardPagination
        sx={{
          mt: 1
        }}
        rowsPerPageOptions={[15, 30, 50]}
        count={miembros.length}
        totalDocs={info?.totalDocs ?? 0}
        rowsPerPage={queryParams.limit}
        page={queryParams.page}
        onPageChange={_handleChangePage}
        onRowsPerPageChange={_handleChangeRowsPerPage}
        />
    </div>
  );
};

export default Miembros;
