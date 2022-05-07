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
          padding: 2,
          fontSize: '20px'
        }}>
          ¿Eres Desarrollador?, revisa nuestra documentación de APIs en el siguiente enlace:&nbsp;&nbsp; 
            <a style={{fontWeight: 'bold'}} href="https://www.newadss.com/" target="_blank" rel="noopener noreferrer">
              APIS DOCUMENTADAS
            </a>
        </Typography>
      </Grid>
    </div>
  );
};

export default Footer;
