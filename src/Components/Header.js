import Link from 'next/link';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>

            <Typography variant="h4" component="div" sx={{ flexGrow: 20 }}>
              <Link href="/">Salmonella Cookies Store</Link>
            </Typography>
            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link href="/">Home</Link>
            </Typography> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link href="/SalesData">Sales Data</Link>
            </Typography>

          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;