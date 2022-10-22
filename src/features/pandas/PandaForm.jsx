import styles from './Panda.module.css';
import { postPandasAsync } from './pandaSlice';
import AddIcon from '@mui/icons-material/Add';
import { TextField, Button, Box } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  name: Yup.string().min(4, 'Too Short!').max(50, 'Too Long!').required('Required'),
  age: Yup.number().min(0).max(100).required('Required'),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { name: '', age: '' },
    validationSchema: loginSchema,
    onSubmit: async values => {
      await dispatch(postPandasAsync(values))
        .unwrap()
        .then(() => toast.success('Panda was added!', { theme: 'colored' }))
        .catch(() => toast.error('An error has happenned!', { theme: 'colored' }));
    },
  });

  return (
    <Box p={1}>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          size="small"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          id="age"
          name="age"
          label="Age"
          type="number"
          size="small"
          inputProps={{ min: 0, max: 100 }}
          value={formik.values.age}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.age && Boolean(formik.errors.age)}
          helperText={formik.touched.age && formik.errors.age}
        />
        <Button
          color="primary"
          variant="contained"
          type="submit"
          startIcon={<AddIcon />}
          style={{ minWidth: '100px', maxHeight: '2.4rem' }}
        >
          Panda
        </Button>
      </form>
    </Box>
  );
}
