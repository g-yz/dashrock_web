import LoginForm from '../features/auth/LoginForm';
import styles from './Login.module.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Box, Stack, Typography } from '@mui/material';

export default function Login() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <div className={styles.wrapper}>
        <Box p={4} sx={{ color: 'text.secondary' }}>
          <Stack direction="row" alignItems="center" sx={{ mb: 4 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <DashboardIcon fontSize="large" style={{ color: 'white' }} />
                <Typography variant="h4" gutterBottom align="center" color="white">
                  DashRock
                </Typography>
              </Box>
              <Typography align="center" color="white">
                Enter your details below.
              </Typography>
            </Box>
          </Stack>
          <LoginForm />
        </Box>
      </div>
      <div className={styles.back}>
        <div>
          <div className={styles.circle}></div>
          <div className={styles.space}></div>
        </div>
        <div>
          <div className={styles.space}></div>
          <div className={styles.circle}></div>
        </div>
      </div>
    </Box>
  );
}
