import PandaForm from '../features/pandas/PandaForm';
import PandaList from '../features/pandas/PandaList';
import { Box, Card, Divider } from '@mui/material';

export default function Panda() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box pt={2}>
        <Card>
          <PandaForm />
          <Divider />
          <PandaList />
        </Card>
      </Box>
    </Box>
  );
}
