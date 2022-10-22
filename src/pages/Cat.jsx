import CatForm from '../features/cats/CatForm';
import CatList from '../features/cats/CatList';
import { Box, Card, Divider } from '@mui/material';

export default function Cat() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box pt={2}>
        <Card>
          <CatForm />
          <Divider />
          <CatList />
        </Card>
      </Box>
    </Box>
  );
}
