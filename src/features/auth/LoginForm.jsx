import styles from './Login.module.css';
import { loginAsync } from './loginSlice';
import { TextField, Button, Box } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  password: Yup.string().min(4, 'Too Short!').max(50, 'Too Long!').required('Required'),
  username: Yup.string().email('Invalid email').required('Required'),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { username: '', password: '' },
    validationSchema: loginSchema,
    onSubmit: async values => {
      await dispatch(loginAsync(values))
        .unwrap()
        .then(() => toast.success('Welcome!', { theme: 'colored' }))
        .catch(() => toast.error('An error has happenned!', { theme: 'colored' }));
    },
  });

  return (
    <Box p={1}>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <TextField
          fullWidth
          id="username"
          name="username"
          label="Username"
          size="small"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          size="small"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" type="submit">
          Login
        </Button>
      </form>
    </Box>
  );
}
