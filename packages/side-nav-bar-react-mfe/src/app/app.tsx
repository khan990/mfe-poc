import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { ThemeProvider, createTheme } from '@material-ui/core';

const theme = createTheme();

export function App() {
  return (
    <ThemeProvider theme={theme}>
    <Paper sx={{ width: '100%' }}>
      <MenuList>
        <MenuItem>
          <ListItemText>Welcome Page</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>React Plugin Example</ListItemText>
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
