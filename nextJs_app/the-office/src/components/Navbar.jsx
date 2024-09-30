import Link from 'next/link';
// custom components
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          The Office Quotes
        </Typography>
        <Button color="inherit">
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
            Home
          </Link>
        </Button>
        <Button color="inherit">
          <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>
            About
          </Link>
        </Button>
        <Button color="inherit">
          <Link href="/contact" style={{ color: 'white', textDecoration: 'none' }}>
            Contact
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
