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
              <Box sx={{ display: 'flex', justifyContent: 'center' }} pt={4}>
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
          <div className={[styles.circle, styles.ca].join(' ')}></div>
          <div className={styles.space}></div>
        </div>
        <div>
          <div className={styles.space}></div>
          <div className={[styles.circle, styles.cb].join(' ')}></div>
        </div>
      </div>
      <div>
        <div className={styles.circlec}></div>
        <div className={styles.circled}></div>
        <div className={styles.circlee}></div>
        <div className={styles.circlef}></div>
        <div className={styles.circleg}></div>
        <div className={styles.circleh}></div>
        <div className={styles.circlei}></div>
        <div className={styles.circlej}></div>
      </div>
    </Box>
  );
}
