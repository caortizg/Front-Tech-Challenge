import React from 'react';
import './App.css';
import ThemeProvider from './appLayers/ThemeProvider';
import { Container } from '@mui/material';
import SpotsContainer from './components/modules/spots/SpotsContainer';

function App() {
  return (
    <ThemeProvider>
      <Container maxWidth="none" sx={{ padding: "0!important" }}>
        <SpotsContainer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
