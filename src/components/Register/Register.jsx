import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/auth/operations';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      await dispatch(signUp({ name, email, password }));

      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      setError('An error occurred. Please try again later.');
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
          Register
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
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            label="Name"
            placeholder="Enter name"
            required
          />

          <TextField
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            label="Email"
            placeholder="Enter email"
            required
          />

          <TextField
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            label="Password"
            placeholder="Enter password"
            required
          />

          <Button type="submit" variant="contained" fullWidth>
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;