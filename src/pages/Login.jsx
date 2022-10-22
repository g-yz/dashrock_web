import LoginForm from '../features/auth/LoginForm';
import { Box, Card, Stack, Typography } from '@mui/material';

export default function Login() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" bgcolor="primary.light" minHeight="100vh">
      <Card>
        <Box p={4} >
          <Stack direction="row" alignItems="center" sx={{ mb: 4 }}>
            <Box sx={{ flexGrow: 1 }}  >
              <Typography variant="h4" gutterBottom align="center">
                Rocket App
              </Typography>
              <Typography sx={{ color: 'text.secondary' }} align="center">Enter your details below.</Typography>
            </Box>
          </Stack>
          <LoginForm />
        </Box>
      </Card>
    </Box>
  );
}
