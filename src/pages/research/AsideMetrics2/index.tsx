import React, { FC, useEffect, useState } from "react";
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
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
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

const labels = ['0-10', '10-20','20-30','30-40','40-50','50-60','60-70','70-80','80-90','90-100'];


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
    axios.get(`${import.meta.env.VITE_SERVER_URL}/api/funcionarios/sobrecargados?page=1`).then(rest => {
      console.log('resultado Sobrecargo: ', rest.data);
      setFunc(rest.data.data.docs);
    });
    axios.get(`${import.meta.env.VITE_SERVER_URL}/api/convocatoria/frecuenciaAcusacion`).then(rest => {
      console.log('resultado Frecuencia: ', rest.data);
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
  
  const rows = func.map(e => (
    createData(e.nombre_persona_evaluada, e.anio, e.conteo_convocatorias, String(e.conteo_acusacion))
  ));

  return (
    <Box sx={{ mt: 2.5 }} display="flex">
      <Grid container spacing = {2}>
        <Grid item xs={6}>
          <Paper variant="outlined" sx={{ p: 1.5 }}>
            <Typography variant="body2">
              Funcionarios miembros de comite más sobrecargados
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 400 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Nombre</StyledTableCell>
                      <StyledTableCell align="right">Año</StyledTableCell>
                      <StyledTableCell align="right">Convocatorias</StyledTableCell>
                      <StyledTableCell align="right">Acusado?</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.name}>
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
                </Table>

                {/* <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={1000}
                  rowsPerPage={10}
                  
                /> */}
              </TableContainer>
              <a href={"https://www.google.com/"}>
                En este enlace se puede encontrar la data completa
              </a>
            </Typography>
          </Paper>
        </Grid>
        <Grid  item xs={6}>
          <Paper variant="outlined" sx={{ p: 1.5 }}>
            <Typography  variant="body2">
              Porcentaje promedio de miembros con presunta responsabilidad por
              convocatoria
              <Bar width={150} options={optionsHist} data={dataHist} />
              <a href={"https://www.google.com/"}>
                En este enlace se puede encontrar la data completa
              </a>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AsideMetrics2;
