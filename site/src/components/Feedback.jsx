import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  InputAdornment,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';

export default function Feedback() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 6, px: 2 }}>
      <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
        Feedback Form
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" paragraph>
        We value your thoughts and suggestions. Please share your feedback below.
      </Typography>
      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              name="name"
              label="Name"
              fullWidth
              required
              value={form.name}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email"
              type="email"
              fullWidth
              required
              value={form.email}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="message"
              label="Message"
              multiline
              rows={4}
              fullWidth
              required
              value={form.message}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MessageIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Button type="submit" variant="contained" color="primary">
              Submit Feedback
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}