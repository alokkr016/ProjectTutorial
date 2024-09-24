import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Link } from '@mui/material';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate API call for password reset
    const response = await fetch('/api/forgot-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    
    if (response.ok) {
      console.log("Password reset link sent!");
    } else {
      console.error("Failed to send password reset link!");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        padding: '2rem',
      }}
    >
      <Typography variant="h4" sx={{ mb: 3 }}>
        Forgot Password
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ mb: 2, width: '300px' }}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ width: '300px' }}>
        Send Reset Link
      </Button>

      <Link href="/login" variant="body2" sx={{ mt: 2 }}>
        Back to Login
      </Link>
    </Box>
  );
}

export default ForgotPassword;
