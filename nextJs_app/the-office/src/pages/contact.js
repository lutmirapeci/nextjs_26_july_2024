import React from 'react';
// components
import { Box, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1">
        If you have any questions, feel free to reach out!
      </Typography>
    </Box>
  );
};

export default Contact;
