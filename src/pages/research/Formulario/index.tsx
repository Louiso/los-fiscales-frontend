import React, { FC } from "react";
import { makeStyles } from "@mui/styles";
import { ubigeo } from 'peruuse';
import axios from 'axios';

// import Select from 'react-select';

import {
  Box,
  Typography,
  TextField,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  Button,
  Grid,
  Alert,
  Paper
} from "@mui/material";
import { useState } from "react";

const useStyles = makeStyles(() => ({
  heading: {
    textAlign: "center"
  },
  submitButton: {
    textAlign: "center",
  }
}));

ubigeo.getDepartments();

const Form: FC = () => {
  const { heading, submitButton} = useStyles();
  
  const [state, setState] = useState({
    nombre_denunciado: '',
    region: '',
    flag_entidad: false,
    entidad: '',
    flag_miembro_comite: false,
    url_denunciado: '',
    email_denunciante: '',
    flag_terminos: false,
  });

  const [emailField, setEmailField] = useState({
    value: "",
    hasError: false,
  });

  const [terminos, setTerminos] = useState('');
  
  const [alert, setAlert] = useState(false);

  const [entidadShow, setEntidadShow] = useState('none');
  
  const handleSubmit = async (event:any) => {
    event.preventDefault();
    console.log(state);
    
    const payload = { nombre_denunciado: state.nombre_denunciado,
      email_denunciante:state.email_denunciante,
      region:state.region,
      flag_entidad: Number(state.flag_entidad),
      nombre_entidad:state.entidad,
      flag_miembro_comite: Number(state.flag_miembro_comite),
      miembro_comite: '',
      prueba_url: state.url_denunciado};
    
    if (state.flag_terminos){
      try {
        const rest = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/denuncias/create`, payload);   
        console.log('succes: ',rest);
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 3000)
        setTerminos('');
        setState({
          nombre_denunciado : '',
          region : '',
          flag_entidad : false,
          entidad : '',
          flag_miembro_comite : false,
          url_denunciado : '',
          email_denunciante : '',
          flag_terminos: false
        });
      }
      catch (error){
        setAlert(false);
        console.log('error');
      }
    }
    else{
      setTerminos('Debe aceptar los términos y condiciones');
    }   
  };

  const handleChange = (event: any) => {
    setState((prev)=>({
      ...prev,
      [event.target.name]: event.target.value
    })); 
  };
  console.log(state);

  const handleChecked = (event: any) => {
    if (event.target.name == 'flag_entidad'){
      if (event.target.checked && event.target.name == 'flag_entidad'){
        setEntidadShow('');
      }
      else{
        setEntidadShow('none');
      }
    }
    setEntidadShow
    setState((prev)=>({
      ...prev,
      [event.target.name]: event.target.checked
    }));
  };

  const handleBlur = (event: any) => {
    const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
    const hasError = !emailRegexp.test(event.target.value);
    console.log('hasError: ', hasError);
    setEmailField((prev) => ({ 
      ...prev, 
      hasError 
    }));

    if (!event.target.value){
      setEmailField((prev) => ({ 
        ...prev, 
        hasError: false
      }));
    }
  }

  return (
    <Paper
      sx={{
        bgColor: "white",
        py: 8,
        px: 8,
        mt: 5,
        mb: 2
      }}
    >
      <Typography sx={{mb: 5}} className={heading} variant="h3">
        ¿Conoces algún acto de corrupción?
      </Typography>
      <form onSubmit={handleSubmit} >
        <Box display="flex" alignItems='center' sx={{mt: 2.5}}>
          <TextField
            variant="outlined"
            label="Nombre del Personaje Implicado"
            value = {state.nombre_denunciado}
            name = 'nombre_denunciado'
            onChange={handleChange}
            fullWidth
            required
          />
          
          <FormControl sx={{ width: 200, ml: 2.5 }} >
            <InputLabel id="demo-simple-select-label">Región</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value = {state.region}
              label="Región"
              name = 'region'
              onChange={handleChange} 
              MenuProps={{ 
                PaperProps: {
                  sx: {
                    height: 200,
                  },
                },
              }}
              required
            >
              {ubigeo.getDepartments().map((department)=>(
                <MenuItem value={department.name} key={department.name}>{department.name}</MenuItem>      
              ))}
            </Select>
          </FormControl>
        </Box>
        
        <Box display="flex" alignItems='center' sx={{mt: 2.5}}>
          <FormControlLabel
            control={(
              <Checkbox 
                onChange={handleChecked}
                checked = {state.flag_entidad}
                name='flag_entidad' />
            )}
            label="¿Pertenece a una Entidad?"
          />

          <TextField
            sx={{ width: 400, display: entidadShow }}
            variant="outlined"
            // margin="normal"
            label="Entidad"
            value = {state.entidad}
            name = 'entidad'
            onChange={handleChange}
            fullWidth
            required = {state.flag_entidad}
          />
        </Box>

        <FormControlLabel
          control={<Checkbox />}
          label="¿Es Miembro de Comité?"
          checked={state.flag_miembro_comite}
          name='flag_miembro_comite'
          onChange={handleChecked}
        />

        <TextField
          variant="outlined"
          margin="normal"
          label="Link de Evidencia"
          type="text"
          value={state.url_denunciado}
          name='url_denunciado'
          onChange={handleChange}
          fullWidth
          required
        />
        <Typography sx={{
          fontSize: '20px',
          fontWeight: 'normal',
          mt: 2.5
        }}>
          Déjanos tu correo para contactarte:
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          label="Email (Opcional)"
          type="email"
          value={state.email_denunciante}
          name='email_denunciante'
          onChange={handleChange}
          onBlur={handleBlur} 
          fullWidth
        />
        <Typography sx={{
          color: 'rgba(255, 0, 0)',
          padding: 1
        }}>
          {emailField.hasError ? 'Ingrese un email válido' : ''}
        </Typography>
        <FormControlLabel
          control={<Checkbox />}
          label={
            <a href="https://drive.google.com/file/d/1tWlS2KRcK7wkAN4CFZD9jHuJq-rY47L6/view?fbclid=IwAR3YR1oVZItTPsmqnSBLAP0BlCCV1aAZIWxqf7SZNsOJYwRL-s2Yo6gZnlw" target="_blank" rel="noopener noreferrer">
            {"Acepta los Términos y Condiciones"}
          </a>}
          // "Acepta los Términos y Condiciones"
          checked={state.flag_terminos}
          name='flag_terminos'
          onChange={handleChecked}
        />
        <Typography sx={{
          color: 'rgba(255, 0, 0)',
          padding: 1
        }}>
          {terminos}
        </Typography>
        {alert ? (
          <Alert severity="success">Registro Exitoso</Alert>
        ) : (
          ''
        )}
        <Grid textAlign='center' marginTop={3}>
          <Button
            type="submit"
            // fullWidth
            variant="contained"
            color="primary"
            className={submitButton}
            size='large'
          >
            ENVIAR
          </Button>
          
        </Grid>
      </form>
    </Paper>
  );
};

export default Form;
