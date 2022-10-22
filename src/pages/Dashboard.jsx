import { Box } from '@mui/material';

export default function Dashboard({ path }) {
  return (
    <Box height="93vh" width="100vw">
      <iframe id="dashboard" title="Dashboard" width="99.5%" height="97%" src={path}></iframe>
    </Box>
  );
}
