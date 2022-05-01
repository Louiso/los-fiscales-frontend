import React, { FC } from "react";
import {
  AppBar,
  Button,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  TextField,
  Toolbar,
  Typography
} from "@mui/material";
import { Announcement, Menu as MenuIcon } from "@mui/icons-material";
import Announcements from "./Convocatorias";

const HomePage: FC = () => {
  return (
    <div>
      <CssBaseline />
      <AppBar position="static">
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
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container>
          <Grid item xs={8}>
            <Announcements />
          </Grid>
          <Grid item xs={4}>
            Ranking
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
