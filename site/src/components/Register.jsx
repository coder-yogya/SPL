import React from 'react';
import { Box, Typography, Grid, TextField, MenuItem, InputAdornment } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PublicIcon from '@mui/icons-material/Public';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function Register() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        p: 2,
        boxSizing: 'border-box'
      }}
    >
      <Box
        sx={{
          maxWidth: '100%',
          width: '100%',
          px: 2,
          mx: 'auto',
          mt: 6,
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '@media (min-width: 600px)': {
            maxWidth: 600,
            px: 0,
          },
        }}
      >
        <Typography variant="h3" fontWeight="bold" align="center" gutterBottom>
          Registration for players coming soon!
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
            sx={{
              '@media (max-width:600px)': {
                alignItems: 'center',
              },
            }}
          >

            {/* First Name */}
            <Grid item xs={6}>
              <TextField
                label="First Name"
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

            {/* Last Name */}
            <Grid item xs={6}>
              <TextField
                label="Last Name"
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

            {/* Email */}
            <Grid item xs={12}>
              <TextField
                label="Email"
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

            {/* Phone */}
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

            {/* City */}
            <Grid item xs={6}>
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

            {/* State */}
            <Grid item xs={6}>
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

            {/* Town */}
            <Grid item xs={12}>
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

            {/* Age */}
            <Grid item xs={12}>
              <TextField
                label="Age"
                fullWidth
                disabled
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarTodayIcon />
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