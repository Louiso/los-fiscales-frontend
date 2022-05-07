import React, { FC, useEffect, useState } from "react";
import axios from 'axios'
import {
  Grid,
  Box,
  Paper,
  Typography
} from "@mui/material";
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

const optionsEntidad = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2
    }
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const
    }
  }
};

const optionsRegion = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2
    }
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const
    },
    title: {
      display: true
    }
  }
};

const AsideMetrics: FC = () => {

  const [entidad, setEntidad] = useState([
    {
      entidad: '',
      conteo_entidad: 0,
    }
  ]);

  const [entidadTotal, setEntidadTotal] = useState([
    {
      entidad: '',
      conteo_entidad: 0,
    }
  ]);

  const [region, setRegion] = useState([
    {
      departamento: '',
      total: 0,
    }
  ]);

  const [regionTotal, setRegionTotal] = useState([
    {
      departamento: '',
      total: 0,
    }
  ]);

  //Entidades
  useEffect( () => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/api/acusados_entidades/miembros`).then(rest => {
      console.log('resultado: ', rest.data);
      setEntidad(rest.data.results.slice(0, 10));
    });
  }, []);

  useEffect( () => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/api/acusados_entidades`).then(rest => {
      // console.log('resultado: ', rest.data);
      setEntidadTotal(rest.data.results.slice(0, 10));
    });
  }, []);

  //Regiones
  useEffect( () => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/api/acusados_lugar/miembros`).then(rest => {
      // console.log('resultado: ', rest.data);
      setRegion(rest.data.results.slice(0, 10));
    });
  }, []);

  useEffect( () => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/api/acusados_lugar`).then(rest => {
      // console.log('resultado: ', rest.data);
      setRegionTotal(rest.data.results.slice(0, 10));
    });
  }, []);

  const labelsEntidad = entidad.map(e => (
    e.entidad
  ));

  const labelsRegion = region.map(e => (
    e.departamento
  ));

  const dataEntidad = {
    labels: labelsEntidad,
    datasets: [
      {
        label: "Solo Miembros",
        data: entidad.map(e => (
            e.conteo_entidad
        )),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)"
      },
      {
        label: "Total",
        data: entidadTotal.map(e => (
            e.conteo_entidad
        )),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)"
      }
    ]
  };

  const dataRegion = {
    labels: labelsRegion,
    datasets: [
      {
        label: "Solo Miembros",
        data: region.map(e => (
            e.total
        )),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)"
      },
      {
        label: "Total",
        data: regionTotal.map(e => (
            e.total
        )),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)"
      }
    ]
  };

  return (
    <Box sx={{ mt: 2.5 }} display="flex">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={6}>
          <Paper variant="outlined" sx={{ p: 1.5 }}>
            <Typography variant="h6">
              Entidades con mayor cantidad de funcionarios con presunta
              responsabilidad
            </Typography>
            <Bar width={'300'} options={optionsEntidad} data={dataEntidad} />
            <Typography sx={{mt: 2, display: 'block'}} variant="h6" component = "a" href={"https://drive.google.com/drive/folders/1g_BExbBvt2tYWkQVP2PrN7iIepdzxKzD?fbclid=IwAR1vSV-jaHzgXPSkwTEdbgJycYC8K1E-htoW6Px7wbSQX1E7UNj9GlGyMec"} target="_blank" rel="noreferrer">
              En este enlace se puede encontrar la data completa
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <Paper variant="outlined" sx={{ p: 1.5 }}>
            <Typography variant="h6">
              Regiones con mayor cantidad de funcionarios con presunta
              responsabilidad
            </Typography>
            <Bar width={'300'} options={optionsRegion} data={dataRegion} />
            <Typography sx={{mt: 2, display: 'block'}} variant="h6" component = "a" href={"https://drive.google.com/drive/folders/1KZDMCAiXgrRv3YGmDD6j3DKv9Ils4A-V?fbclid=IwAR2zDDTTTrJ6Ieik8NqM3JZnqDXMFo30Wk-RBxPl__xx1Uc9Wqzi2gTFCEA"} target="_blank" rel="noreferrer">
              En este enlace se puede encontrar la data completa
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AsideMetrics;
