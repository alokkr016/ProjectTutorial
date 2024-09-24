import React, { useState } from "react";
import { TextField, Button, Box, Typography, Link, Grid } from "@mui/material";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      console.log("Login successful!");
      navigate("/welcome");
    } else {
      console.error("Login failed!");
    }
  };

  const handleGoogleLogin = (credentialResponse) => {
    console.log(credentialResponse);
    // Send token to the backend for validation or login
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#f5f5f5",
          padding: "2rem",
        }}
      >
        <Typography variant="h4" sx={{ mb: 3 }}>
          Login
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ mb: 2, width: "300px" }}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 2, width: "300px" }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ width: "300px" }}
        >
          Login
        </Button>

        <Typography variant="body1" sx={{ mt: 3 }}>
          Or login with Google
        </Typography>
        <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={() => {
            console.log("Login Failed");
          }}
        />

        {/* Forgot Password and Register links */}
        {/* Forgot Password and Register links */}
        <Grid container direction="column" alignItems="center" sx={{ mt: 2 }}>
          <Grid item>
            <Link href="/forgot-password" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item sx={{ mt: 1 }}>
            <Link href="/register" variant="body2">
              Don't have an account? Register
            </Link>
          </Grid>
        </Grid>
      </Box>
    </GoogleOAuthProvider>
  );
}

export default Login;
