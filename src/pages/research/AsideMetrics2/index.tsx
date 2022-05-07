import React, { FC, useEffect, useMemo, useState } from "react";
import axios from 'axios'
import {
  Grid,
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  TableFooter,
  TablePagination,
  InputLabel,
  Select,
  FormControl,
  MenuItem
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend
);

const optionsHist = {
  indexAxis: "x" as const,
  elements: {
    bar: {
      borderWidth: 2
    }
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      display: false
    },
    title: {
      display: true
    }
  },
  pan: {
    enabled: true,
    mode: "xy"
  },
  zoom: {
    enabled: true,
    drag:true,
    mode: 'xy',
  },
  options: {
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 1.3,
        ticks: {
            max: 3,
        }
      }, {
        display: true,
        ticks: {
            autoSkip: false,
            max: 4,
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
};

const labels = ['0-10 %','10-20 %','20-30 %','30-40 %','40-50 %','50-60 %','60-70 %','70-80 %','80-90 %','90-100 %'];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0
  }
}));


const AsideMetrics2: FC = () => {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [anio, setAnio] = useState('');

  const [flag, setFlag] = useState(true);

  const [func, setFunc] = useState([
    {
      nombre_persona_evaluada: '',
      anio: 0,
      conteo_convocatorias: 0,
      conteo_acusacion: 0,
    }
  ]);

  const [frec, setFrec] = useState([
    {
      key: 0,
      value: 0
    }
  ]);

  
  useEffect( () => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/api/funcionarios/sobrecargaAll`).then(rest => {
      setFunc(rest.data.results);
    });
    axios.get(`${import.meta.env.VITE_SERVER_URL}/api/convocatoria/frecuenciaAcusacion`).then(rest => {
      setFrec(rest.data.results);
    });
  }, []);

  const dataHist = {
    labels: labels,
    datasets: [
      {
        label: "Total",
        data: frec,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        barPercentage: 1,
        categoryPercentage: 1,
        borderWidth: 0.2,
      }
    ]
  };

  function createData(name: string, year: number, count_convoc: number, count_acus: string) {
    if (Number(count_acus) > 0) {
      count_acus = 'SI';
    }
    else{
      count_acus = 'NO';
    }
    return { name, year, count_convoc, count_acus };
  }
  
  const rows = useMemo(() => (
    func.map(e => (
      createData(e.nombre_persona_evaluada, e.anio, e.conteo_convocatorias, String(e.conteo_acusacion))
    )).filter(e => (
      anio ? String(e.year) === String(anio) : true
    )).slice(0,100)
  ), [anio, func])

  //PAGINACION
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChange = (event: any) => {
    setAnio(event.target.value); 
    setFlag(false);
    setPage(0);
  };

  useEffect( () => (
    setFlag(true)
  ), [anio])

  return (
    <Box sx={{ mt: 2.5 }} display="flex">
      <Grid container spacing = {2}>
        <Grid item xs={6}>
          <Paper variant="outlined" sx={{ p: 1.5 }}>
            <Box display={'flex'} justifyContent={'space-between'} marginBottom={1}>
              <Typography variant="h6">
                Funcionarios miembros de comite más sobrecargados
              </Typography>
              <FormControl sx={{ width: 100, ml: 2.5 }} >
                <InputLabel id="demo-simple-select-label">Año</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value = {anio}
                  label="Año"
                  onChange={handleChange}
                >
                  <MenuItem value={''}>Seleccionar</MenuItem>
                  <MenuItem value={'2018'}>2018</MenuItem>
                  <MenuItem value={'2019'}>2019</MenuItem>
                  <MenuItem value={'2020'}>2020</MenuItem>
                  <MenuItem value={'2021'}>2021</MenuItem>
                  <MenuItem value={'2022'}>2022</MenuItem>
                </Select>
              </FormControl>
            </Box>            
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 400 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Nombre</StyledTableCell>
                    <StyledTableCell align="right">Año</StyledTableCell>
                    <StyledTableCell align="right">Convocatorias</StyledTableCell>
                    <StyledTableCell align="right">¿Ha tenido presuntas irregularidades?</StyledTableCell>
                  </TableRow>
                </TableHead>
                {flag?(
                  <>
                  <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                    <StyledTableRow key={row.name + row.year}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.year}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.count_convoc}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.count_acus}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 15]}
                      count = {rows.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      SelectProps={{
                        native: true,
                      }}
                      labelRowsPerPage = {'Registros por página:'}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                  </TableRow>
                </TableFooter>
                  </>
                ): null}
              </Table>
            </TableContainer>
            <Typography sx={{mt: 2, display: 'block'}} variant="h6" component = "a" href={"https://docs.google.com/spreadsheets/d/1DBMsYqudcCYSI60t2kKEf9zx0RYUEwTh/edit?rtpof=true&sd=true&fbclid=IwAR0a0KToOEST0Z75dog6E6-4-tXG_aNn4Qd1bmH-gQ5sYT-F0Mv5afZc4-s"} target="_blank" rel="noreferrer">
              En este enlace se puede encontrar la data completa
            </Typography>
          </Paper>
        </Grid>
        <Grid  item xs={6}>
          <Paper variant="outlined" sx={{ p: 1.5 }}>
            <Typography  variant="h6">
              Porcentaje promedio de miembros con presunta irregularidad por convocatoria
            </Typography>
            <Typography  sx={{ fontSize: 12.5, fontStyle: 'italic' }}>
            Se lee: Existen 161101 comites con menos del 10% de sus miembros con presuntas irregularidades.
            </Typography>   
            <Bar width={150} options={optionsHist} data={dataHist} />
            <Typography sx={{mt: 2, display: 'block'}} variant="h6" component = "a" href={"https://docs.google.com/spreadsheets/d/1xNhOpEwyD7b3I_Dva1YE9M-rgUkO8Lkg/edit?fbclid=IwAR0BA3ooyD49Ea6jOlEt5myhm58c_yHsMnDNQCorSrLz4Bu640ryRZAyHPg#gid=516076021"} target="_blank" rel="noreferrer">
              En este enlace se puede encontrar la data completa
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AsideMetrics2;
