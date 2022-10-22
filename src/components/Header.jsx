import { logout } from '../features/auth/loginSlice';
import logo from '../logo.svg';
import { MenuStyles } from './MenuStyles';
import Logout from '@mui/icons-material/Logout';
import {
  Box,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  IconButton,
  Tooltip,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function LinkTab(props) {
  return <Tab component={Link} {...props} />;
}

const Header = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    void dispatch(logout());
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }} pl={2} pr={2} bgcolor="#e3f2fd">
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <img src={logo} alt="logo" width="25px" height="25px" />
          <Typography variant="h5" color="primary.dark">
            Rocket
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <Tabs value={value} onChange={handleChange}>
            <LinkTab label="Rocket App" to="/" textColor={'secondary'} />
            <LinkTab label="Pandas" to="/pandas" />
            <LinkTab label="Cats" to="/cats" />
            <LinkTab label="About" to="/about" />
          </Tabs>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={MenuStyles}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default Header;
