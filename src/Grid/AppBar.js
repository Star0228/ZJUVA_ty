import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function WebBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            // href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Helvetica Neue',
              //           '-apple-system',
              //   'BlinkMacSystemFont',
              //   '"Segoe UI"',
              //   'Roboto',
              //   '"Helvetica Neue"',
              //   'Arial',
              //   'sans-serif',
              //   '"Apple Color Emoji"',
              //   '"Segoe UI Emoji"',
              //   '"Segoe UI Symbol"',
              fontWeight: 500,
              letterSpacing: '0.5px',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Google Play Store App's Analysis
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default WebBar;