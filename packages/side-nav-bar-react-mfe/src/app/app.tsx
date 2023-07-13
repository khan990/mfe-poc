import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { ThemeProvider, createTheme } from '@material-ui/core';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const theme = createTheme();

export function App({navigate}: {navigate?: (path: string) => void}) {
  const location = useLocation();
  const pathnameRef = useRef(location.pathname);

  useEffect(() => {
    console.log('side-nav-bar-react-mfe: location changed', location);
    if (navigate && pathnameRef.current !== location.pathname) {
      pathnameRef.current = location.pathname;
      navigate(location.pathname);
    }
  }, [location, navigate]);

  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ width: '100%' }}>
        <MenuList>
          <MenuItem>
            <NavLink to="/">
              <ListItemText>Welcome Page</ListItemText>
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/feature-1-react">
              <ListItemText>React Plugin Example</ListItemText>
            </NavLink>
          </MenuItem>
          <MenuItem>
            <ListItemText>Angular Plugin Example</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText>React And Angular Plugins Example</ListItemText>
          </MenuItem>
        </MenuList>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
