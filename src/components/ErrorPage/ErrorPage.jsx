import { useState } from 'react';
import { useAuth } from 'redux/auth/useAuth';
import { Typography, Button, Box, CircularProgress } from '@mui/material';

const ErrorPage = () => {
  const { error } = useAuth();
  const [isReloading, setIsReloading] = useState(false);

  const handleGoHome = () => {
    setIsReloading(true);
    window.location.reload();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Something went wrong!
      </Typography>
      <Typography variant="body1">
        Maybe you typed something wrong?
      </Typography>
      {isReloading ? (
        <CircularProgress />
      ) : (
        error && (
          <Button
            variant="outlined"
            color="primary"
            sx={{ marginTop: 2, minWidth: '120px', padding: 1 }}
            onClick={handleGoHome}
          >
            Try again
          </Button>
        )
      )}
    </Box>
  );
};

export default ErrorPage;