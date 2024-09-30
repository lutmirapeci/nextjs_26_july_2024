// components
import { Box, Typography, AppBar } from '@mui/material';


export default function Footer() {
  return (
    <AppBar position="static">
        <Box sx={{ mt: 'auto', py: 2, bgcolor: '#f8f9fa', textAlign: 'center' }}>
            <Typography variant="body2" color="textSecondary">
                © {new Date().getFullYear()} The Office Quotes. All rights reserved.
            </Typography>
        </Box>
    </AppBar>
  );
}
