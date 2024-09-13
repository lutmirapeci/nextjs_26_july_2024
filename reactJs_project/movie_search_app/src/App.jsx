import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// custom components
import Home from './components/Home';
// components
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const App = () => {
    return (
        <Router>
            <>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Movie Gallery
                        </Typography>
                        <Typography variant="button" sx={{ mx: 2 }}>
                            Home
                        </Typography>
                        <Typography variant="button" sx={{ mx: 2 }}>
                            About
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Container maxWidth="lg" sx={{ marginTop: 4 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Container>
            </>
        </Router>
    );
};

export default App;

