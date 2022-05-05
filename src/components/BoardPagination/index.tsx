import React, { FC } from 'react'
import { Box, FormControl, IconButton, MenuItem, Select, Typography } from "@mui/material"
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from '@mui/icons-material';

interface BoardPaginationProps {
  rowsPerPageOptions: number[];
  count: number;
  rowsPerPage: number;
  page: number;
  totalDocs: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rowsPerPage: number) => void;
}

const BoardPagination: FC<BoardPaginationProps> = ({rowsPerPageOptions, rowsPerPage, onRowsPerPageChange, onPageChange, page, totalDocs}) => {

  const _handleChangeSelectRowsPerPage = (e: any) => {
    onRowsPerPageChange(e.target.value)
  }

  const _handleChangePage = (direction: number) => () => {
    const newPage = page + direction

    if (newPage >= 1 && newPage < Math.ceil(totalDocs / rowsPerPage)) {
      onPageChange(newPage)
    }
  }

  return (
    <Box display='flex' alignItems='center' justifyContent='space-between' width='100%'>
      <Box display='flex' alignItems='center'>
        <Typography variant="caption">
          Filas por pagina: 
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          {/* <InputLabel id="select-rows-per-pagesmall">Age</InputLabel> */}
          <Select
            sx={{
              width: 74,
              '& > div': {
                paddingTop: .5,
                paddingBottom: .5,
              }
            }}
            labelId="select-rows-per-pagesmall"
            id="select-rows-per-pagesmall"
            value={rowsPerPage}
            // label="Age"
            onChange={_handleChangeSelectRowsPerPage}
          >
            {rowsPerPageOptions.map((option) => (
              <MenuItem value={option} key={option}>{option}</MenuItem>  
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box display='flex' alignItems='center'>
        <IconButton onClick={_handleChangePage(-1)} disabled={page <= 1}>
          <ChevronLeftIcon/>
        </IconButton>
        <IconButton onClick={_handleChangePage(1)} disabled={(page + 1) >=  Math.ceil(totalDocs / rowsPerPage)}>
          <ChevronRightIcon/>
        </IconButton>
      </Box>
    </Box>
  )
}

export default BoardPagination