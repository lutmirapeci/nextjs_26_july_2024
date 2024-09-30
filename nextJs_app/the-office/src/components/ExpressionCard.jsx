import React from 'react';
// components
import { Card, CardContent, Typography, Box } from '@mui/material';

export default function ExpressionCard({ expression }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', margin: '20px auto' }}>
      <CardContent sx={{ flexGrow: 1, minHeight: '150px' }}>
        <Typography variant="h6" component="div" gutterBottom>
          {expression.quote}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          - {expression.character}
        </Typography>
      </CardContent>

      <Box sx={{ position: 'relative', paddingBottom: '56.25%', height: 0, marginBottom: 5 }}>
        <iframe
          width="80%"
          height="100%"
          src={expression.videoUrl}
          title={expression.character}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          style={{ position: 'absolute', top: 0, left: "%" }}
        ></iframe>
      </Box>
    </Card>
  );
}
