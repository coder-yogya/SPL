import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Divider,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ContactUs() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        p: 2,
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          maxWidth: 900,
          mx: 'auto',
          mt: 6,
          px: 2,
          mb: 6,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3" fontWeight="bold" align="center" gutterBottom>
          Contact Us 
        </Typography>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={7}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Contact Information
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PhoneIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="body1">+91 8707568153</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EmailIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="body1">sangharshpremierleague@sangharshpremierleague.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOnIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="body1">
                  Jhansi UttarPradesh , India
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}