import React, { FC } from "react";
import { makeStyles } from "@mui/styles";
import {
  Box,
  Container,
  Typography,
  TextField,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  Button
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

interface IFormInput {
  email: string;
  firstName: string;
  password: string;
}

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: "center"
  },
  submitButton: {
    textAlign: "center"
  }
}));

const Form: FC = () => {
  const { heading, submitButton } = useStyles();

  const [json, setJson] = useState<string>();

  const [checked, setChecked] = useState(false);

  const onSubmit = (data: IFormInput) => {
    setJson(JSON.stringify(data));
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const showChange = () => {
    setChecked(!checked);
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        p: 1.5,
        mt: 5,
        mb: 2
      }}
      maxWidth="xs"
    >
      <Typography className={heading} variant="h4">
        Formulario de Registro de Presunto Implicado
      </Typography>
      <form>
        <TextField
          variant="outlined"
          margin="normal"
          label="Pregunta sobre Corrupción"
          fullWidth
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          label="Nombre del Personaje Implicado"
          fullWidth
          required
        />
        <FormControl sx={{ width: 200 }}>
          <InputLabel id="demo-simple-select-label">Región</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Región"
            onChange={handleChange}
            required
          >
            <MenuItem value={10}>Lima</MenuItem>
            <MenuItem value={20}>Piura</MenuItem>
            <MenuItem value={30}>Arequipa</MenuItem>
          </Select>
        </FormControl>

        <FormControlLabel
          sx={{ p: 1 }}
          control={<Checkbox onChange={showChange} />}
          label="Pertenece a una Entidad?"
        />

        <FormControl sx={{ width: 400 }} className={"hidden"}>
          <InputLabel id="demo-simple-select-label">Entidad</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Entidad"
            onChange={handleChange}
          >
            <MenuItem value={10}>PNP</MenuItem>
            <MenuItem value={20}>Ministerio Transporte</MenuItem>
          </Select>
        </FormControl>

        <FormControlLabel
          sx={{ p: 1 }}
          control={<Checkbox />}
          label="Es Miembro de Comite?"
        />

        <TextField
          variant="outlined"
          margin="normal"
          label="Link de Perfil"
          type="text"
          fullWidth
          required
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={submitButton}
        >
          ENVIAR
        </Button>
        {json && (
          <>
            <Typography variant="body1">
              Below is the JSON that would normally get passed to the server
              when a form gets submitted
            </Typography>
            <Typography variant="body2">{json}</Typography>
          </>
        )}
      </form>
    </Box>
  );
};

export default Form;
