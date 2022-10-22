import LoginForm from '../features/auth/LoginForm';
import styles from './Login.module.css';
import { Box, Card, Stack, Typography } from '@mui/material';

export default function Login() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <div className={styles.wrapper}>
        <Box p={4} sx={{ color: 'text.secondary' }}>
          <Stack direction="row" alignItems="center" sx={{ mb: 4 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h4" gutterBottom align="center" color="white">
                Rocket App
              </Typography>
              <Typography sx={{ color: 'text.secondary' }} align="center">
                Enter your details below.
              </Typography>
            </Box>
          </Stack>
          <LoginForm />
        </Box>
      </div>
    </Box>
  );
}
