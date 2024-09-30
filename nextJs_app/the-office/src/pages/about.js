import React from 'react';
// components
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        About This App
      </Typography>
      <Typography variant="body1">
        This application showcases hilarious expressions from "The Office." 
        Enjoy quotes and video clips from your favorite characters!
      </Typography>
    </Box>
  );
};

export default About;
