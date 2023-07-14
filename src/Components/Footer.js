import { Box, Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
<<<<<<< HEAD
      <p>
        Questions or Comments? Contact Us!
      </p>

      <p>
        Email: <b>Pat@SalmonCookies.fake-email-place</b>
      </p>
      
      <p>Complaints? Never had any so no worries!</p>
      <p>
        or phone: <b>555-555-5555</b>
      </p>
      <section className="row">
=======
      <footer>
        <Box textAlign="center">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <p>
                Questions or Comments? Contact Us!
              </p>
            </Grid>
            <Grid item xs={6}>
              <p>Complaints? Never had any so no worries!</p>
            </Grid>
          </Grid>
        </Box>
        <Box textAlign="center">
          <p>
            Phone: <b>555-555-5555</b>
          </p>
          <Button
            variant="contained"
            size="large"
            color="primary"
            target="_top"
            rel="noopener noreferrer"
            href={`mailto:Pat@SalmonCookies.fake-email-place`}
          >
            <Typography variant="button" style={{ fontSize: '0.69rem' }}>
              Email US @ <b>Pat@SalmonCookies.fake-email-place</b>
            </Typography>
          </Button>
          <section className="row">
>>>>>>> d2f8dff6f3b2087f1ca6e1bdacf81991ae0853e4

            <Image
              src="/fish.jpg"
              width={250}
              height={250}

              alt="fish"
            />
          </section>
        </Box>
      </footer>
    </>
  );
}

export default Footer;