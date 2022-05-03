import React, { FC } from 'react'
import { Box, Paper, Typography } from "@mui/material"
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const AsideMetrics: FC = () => {


  return (
    <Box sx={{mt: 2.5}}>
      <Paper variant='outlined' sx={{p: 1.5}}>
        <Typography variant="body2">
          Entidades con mayor cantidad de funcionarios con presunta responsabilidad
          <Line
            options={options}
            data={data}
          />
        </Typography>
      </Paper>
      <Paper variant='outlined' sx={{p: 1.5, mt: 1}}>
        <Typography variant="body2">
          Entidades se encuentran los funcionarios mas sobrecargados
        </Typography>
      </Paper>
      <Paper variant='outlined' sx={{p: 1.5, mt: 1}}>
        <Typography variant="body2">
          Convocatorias con algún miembro con presunta responsabilidad
        </Typography>
      </Paper>
      <Paper variant='outlined' sx={{p: 1.5, mt: 1}}>
        <Typography variant="body2">
          Porcentaje promedio de miembros con presunta responsabilidad por convocatoria
        </Typography>
      </Paper>
    </Box>
  )
}

export default AsideMetrics