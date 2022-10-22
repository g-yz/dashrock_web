import styles from './Cat.module.css';
import { postCatsAsync } from './catSlice';
import { TextField, Button, Box } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import PetsIcon from '@mui/icons-material/Pets';

const loginSchema = Yup.object().shape({
  name: Yup.string().min(1, 'Too Short!').max(20, 'Too Long!').required('Required'),
  age: Yup.number().min(0).max(25, 'Cat too old, must be immortal').required('Required'),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { name: '', age: '' },
    validationSchema: loginSchema,
    onSubmit: async values => {
      await dispatch(postCatsAsync(values))
        .unwrap()
        .then(() => toast.success('Cat was added!', { theme: 'colored' }))
        .catch(() => toast.error('An error has happened! :(', { theme: 'colored' }));
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
          startIcon={<PetsIcon />}
          style={{ minWidth: '100px', maxHeight: '54px' }}
        >
          Add cat
        </Button>
      </form>
    </Box>
  );
}
