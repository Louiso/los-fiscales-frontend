import React, { FC } from "react";
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
  TableRow
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
import { faker } from "@faker-js/faker";

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

const labelsHist = [0.75, 1.25, 1.75, 2.25];

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
      position: "top" as const
    },
    title: {
      display: true
    }
  },
  pan: {
    enabled: true,
    mode: "xy"
  }
};

const dataBar = {
  labels: labelsHist,
  datasets: [
    {
      label: "Total",
      data: labelsHist.map(() => faker.datatype.number({ min: 0, max: 2000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)"
    }
  ]
};

const dataHist = {
  labels: labelsHist,
  datasets: [
    {
      borderColor: "black",
      data: [10, 20, 30, 40],
      borderWidth: 0.2,
      barPercentage: 1,
      categoryPercentage: 1,
      hoverBackgroundColor: "darkgray",
      barThickness: "flex",
      backgroundColor: "rgba(255, 99, 132, 0.5)"
    }
  ]
};

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

function createData(name: string, calories: number, fat: number) {
  return { name, calories, fat };
}

const rows = [
  createData("Pedro", 159, 2019),
  createData("Gabriel", 237, 2019),
  createData("Santiago", 262, 2021),
  createData("Raul", 305, 2021)
];

const AsideMetrics2: FC = () => {
  return (
    <Box sx={{ mt: 2.5 }} display="flex">
      <Grid item xs={6}>
        <Paper variant="outlined" sx={{ p: 1.5 }}>
          <Typography variant="body2">
            Funcionarios miembros de comite más sobrecargados
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 400 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Nombre</StyledTableCell>
                    <StyledTableCell align="right">
                      Convocatorias
                    </StyledTableCell>
                    <StyledTableCell align="right">Año</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.calories}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <a href={"https://www.google.com/"}>
              En este enlace se puede encontrar la data completa
            </a>
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper variant="outlined" sx={{ p: 1.5 }}>
          <Typography variant="body2">
            Porcentaje promedio de miembros con presunta responsabilidad por
            convocatoria
            <Bar options={optionsHist} data={dataBar} />
            <a href={"https://www.google.com/"}>
              En este enlace se puede encontrar la data completa
            </a>
          </Typography>
        </Paper>
      </Grid>
    </Box>
  );
};

export default AsideMetrics2;
