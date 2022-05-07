import React, { FC } from "react";

import {
  Typography,
  Grid
} from "@mui/material";

const Footer: FC = () => {
  
  return (
    <div>
      <Grid textAlign='center' marginTop={3}>
        <Typography sx={{
          color: 'rgba(255, 255, 255)',
          backgroundColor: '#d44339',
          padding: 0.5,
          fontSize: '17px'
        }}>
          <p>
          ¿Eres Desarrollador?, revisa nuestra documentación de APIs en el siguiente enlace:&nbsp;&nbsp; 
            <a style={{color: '#33ACFF', fontWeight: 'bold'}} href="https://drive.google.com/file/d/1v49QaYGd4H_IkIKu2nfLM8vMaEhNuifq/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              DOCUMENTACIÓN DE APIS
            </a>
          </p>
          <p style={{fontSize: '16px', color: '#DDD'}}>
          También puedes encontrar la información completa de la Data en el siguiente enlace:&nbsp;&nbsp; 
            <a style={{color: '#33ACFF', fontWeight: 'bold'}} href="https://drive.google.com/drive/folders/1BDwH4HFbMHc_Thzpn3i7V9-gRZPkJBzD?usp=sharing" target="_blank" rel="noopener noreferrer">
              DATA COMPLETA
            </a>
          </p>
        </Typography>
      </Grid>
    </div>
  );
};

export default Footer;
