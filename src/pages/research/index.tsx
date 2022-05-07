import React, { FC } from "react";
import {
  AppBar,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography
} from "@mui/material";
// import { Menu as MenuIcon } from "@mui/icons-material";
import { Link, Outlet } from "react-router-dom";

import AsideMetrics from "./AsideMetrics";
import AsideMetrics2 from "./AsideMetrics2";
import Form from "./Formulario";
import Footer from "./Footer";

const HomePage: FC = () => {
  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "primary" }}>
        <Toolbar sx={{
          '& > a': {
            textDecoration: 'none',
          }
        }}>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Link to="/">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textDecoration: 'none', color: 'white', fontSize: 24 }}>
              Anacoes Peru · <span style={{ fontWeight: 300, fontSize: 12 }}> Análisis de contrataciones del estado peruano</span>
            </Typography>
          </Link>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Outlet />
          </Grid>
          {/* <Grid item xs={4}>
            <AsideMetrics/>
          </Grid> */}
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <AsideMetrics />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <AsideMetrics2 />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Form />
          </Grid>
        </Grid>
      </Container>
      <footer >
        <Footer />
      </footer>
      
    </div>
  );
};

export default HomePage;
