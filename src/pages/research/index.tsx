import React, { FC } from "react";
import {
  AppBar,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Outlet } from "react-router-dom";

import AsideMetrics from './AsideMetrics'

const HomePage: FC = () => {
  return (
    <div>
      <AppBar position="static" sx={{backgroundColor: 'primary'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Los Fiscales
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <Outlet/>
          </Grid>
          <Grid item xs={4}>
            <AsideMetrics/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
