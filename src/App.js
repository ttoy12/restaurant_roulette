import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import Selection from './pages/Selection';
import Spinner from './pages/Spinner';
import Destination from './pages/Destination';

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Restaurant Roulette
          </Typography>
          <Button color="inherit" component={Link} to="/">Selection</Button>
          <Button color="inherit" component={Link} to="/Spinner">Spinner</Button>
          <Button color="inherit" component={Link} to="/Destination">Destination</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<Selection />} />
          <Route path="/Spinner" element={<Spinner />} />
          <Route path="/Destination" element={<Destination />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
