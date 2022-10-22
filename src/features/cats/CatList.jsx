import { selectCats, getCatsAsync } from './catSlice';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Cat() {
  const dispatch = useDispatch();
  const listCats = useSelector(selectCats);

  useEffect(() => {
    void dispatch(getCatsAsync());
  }, [dispatch]);

  return (
    <Box p={3}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead bgcolor="lightgray">
            <TableRow>
              <TableCell align="left">
                <b>Id</b>
              </TableCell>
              <TableCell align="left">
                <b>Name</b>
              </TableCell>
              <TableCell align="left">
                <b>Age</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listCats.map(row => (
              <TableRow key={row.id}>
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
