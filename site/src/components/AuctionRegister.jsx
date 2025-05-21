import React from 'react';
import {
  Box,
  Typography,
  Grid,
  TextField,
  InputAdornment
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PublicIcon from '@mui/icons-material/Public';
import HomeIcon from '@mui/icons-material/Home';

export default function AuctionRegister() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', p: 2, boxSizing: 'border-box' }}>
      <Box sx={{ maxWidth: 600, mx: 'auto', mt: 6, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          Registration for Auctioneers Coming Soon
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <Grid container spacing={3} justifyContent="center" alignItems="center">
            <Grid item xs={12}>
              <TextField
                label="Name"
                fullWidth
                disabled
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                disabled
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone"
                fullWidth
                disabled
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="City"
                fullWidth
                disabled
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationCityIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Town"
                fullWidth
                disabled
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HomeIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="State"
                fullWidth
                disabled
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PublicIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}