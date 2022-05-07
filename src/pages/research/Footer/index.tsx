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
          padding: 1,
          fontSize: '17px'
        }}>
          <p>
          ¿Eres Desarrollador?, revisa nuestra documentación de APIs en el siguiente enlace:&nbsp;&nbsp; 
            <a style={{color: '#33ACFF', fontWeight: 'bold'}} href="https://docs.google.com/document/d/1-mCz3GMBLcCeSpt8oGF0uLZvwENm81WETeWW54MzmUs/edit?fbclid=IwAR3KJG4fadNvFcPXaX3iM0HPvbHFAKNt9cQvjwVSNSNvOVW56Zkzk2-zTzE" target="_blank" rel="noopener noreferrer">
              DOCUMENTACIÓN DE APIS
            </a>
          </p>
          <p>
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
