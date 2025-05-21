

import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';

export default function Schedules() {
  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', mt: 6 }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Coming Soon
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="disabled schedule table">
          <TableHead>
            <TableRow>
              <TableCell>Team Name</TableCell>
              <TableCell>VS</TableCell>
              <TableCell>Stadium</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[1, 2, 3].map((row) => (
              <TableRow key={row}>
                <TableCell>—</TableCell>
                <TableCell>—</TableCell>
                <TableCell>—</TableCell>
                <TableCell>—</TableCell>
                <TableCell>—</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}