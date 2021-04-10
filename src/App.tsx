import { Button, createMuiTheme, Grid, ThemeProvider, Typography, Box } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [uuid, setUuid] = useState('00000000-0000-0000-0000-000000000000');

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
        typography: {
          h1: {
            fontSize: 16,
            fontWeight: 400,
          },
          body1: {
            fontFamily: 'monospace',
            fontSize: 18,
          },
        },
      }),
    [prefersDarkMode]
  );

  const generateUuid = () => {
    setUuid(uuidv4());
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box component='main' padding={2} display='flex'>
        <Grid container direction='column' justify='center' alignItems='center' spacing={2}>
          <Grid item>
            <Typography variant='h1'>UUID Generator</Typography>
          </Grid>

          <Grid item>
            <Typography variant='body1' style={{ userSelect: 'all' }}>
              {uuid}
            </Typography>
          </Grid>

          <Grid item>
            <Button onClick={generateUuid} variant='contained' color='primary'>
              Generate new UUID
            </Button>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
