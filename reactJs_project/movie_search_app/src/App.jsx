import { useState } from 'react';
// custom components
import Home from './components/Home';
// components
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Movie Gallery
          </Typography>
          <TextField
            label="Search Movies"
            variant="outlined"
            size="small"
            sx={{ backgroundColor: 'white', borderRadius: 1 }}
            onChange={handleSearchChange}
          />
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <Home searchQuery={searchQuery} />
      </Container>
    </div>
  );
};

export default App;
