import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      await dispatch(logIn({ email, password }));

      setEmail('');
      setPassword('');
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '5rem',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>

        {error && (
          <Typography variant="body2" color="error" gutterBottom>
            {error}
          </Typography>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit}
          autoComplete="on"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: '400px',
            '& .MuiTextField-root': {
              marginBottom: '1rem',
            },
          }}
        >
          <TextField
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            label="Email"
            placeholder="Enter email"
            required
          />

          <TextField
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            label="Password"
            placeholder="Enter password"
            required
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Button type="submit" variant="contained" sx={{ width: '40%' }}>
              Login
            </Button>
            <Link to="/register">Don't have an account? Sign Up</Link>
          </div>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;