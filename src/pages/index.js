import Head from 'next/head'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Image from 'next/image';
import Text from '@mui/material/Typography';

//Card import from mui
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid, List, ListItem } from '@mui/material';

export default function Home() {
  return (
    <>
      <Head>
        <title>Salmonella Cookies</title>
        <meta name="description" content="Salmonella Cookies - IMPROVED!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section id="store">
          <section id='family'>
            <Box width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
              <Typography variant="h4">Family Owned and Operated!</Typography>
            </Box>
            <Box width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
              <Image
                src="/family.jpg"
                alt="Picture of a family"
                width={852}
                height={480}
              />
            </Box>
            <Box width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
              <Text className='family-pitch'>You always want the best for your family, and thats why you should buy from <b>Salmonella Cookies</b>. We have been a family run business since 1901. Providing Salmonella for over 120 years across the globe!</Text>
            </Box>
          </section>
          <div className='front-section'>
            <Box width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
            <h3>Check out all our sweet merchandise!</h3>
            </Box>
            <Box width="100%" height="100%" display="flex" alignItems="center" justifyContent="space-around">
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        width={220}
                        height={220}
                        image="/cutter.jpeg"
                        alt="Picture of a salmon cookie cutter"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Salmon Cookie Cutters!
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Hand made Salmonella Cookie Cutters. Made from the finest materials. Crafted by the finest craftsmen. Made to last a lifetime!
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>

                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        width={220}
                        height={220}
                        image="/frosted-cookie.jpg"
                        alt="Picture of a Frosted Salmon Cookie"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Salmon Cookies!
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          The incomparable taste of Salmonella Cookies. Made with the finest Salmonella. Frosted with the finest frosting. Made to be the taste of a lifetime!
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
            
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        width={220}
                        height={220}
                        image="/shirt.jpg"
                        alt="Picture of a Salmon T-Shirt"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Salmon Shirts!
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Our Salmonella Shirts are hand crafted from hand picked material and finely crafted by artisan tailors.  These shirts are made to form fit to your body and feel like the finest silk! Because its made of the finest silk!
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
           
            </Box>


          </div>
        </section>

        <Box width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
          <section id='store-locations'>
            <h2>Locations World Wide: Hours of Operation are 0600 to 2000 local time</h2>
            <Box width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
              <List alignItems='center'>
                <ListItem>Seattle @ 1234 Queen Anne Ave.</ListItem>
                <ListItem>Tokyo @ 5678 Cherry Blossom St.</ListItem>
                <ListItem>Dubai @ 1234 Dubai Creek Rd.</ListItem>
                <ListItem>Paris @ 5678 Eiffel Tower Ln.</ListItem>
                <ListItem>Lima @ 1234 Peru Ave. </ListItem>
              </List>
            </Box>
          </section>
        </Box>

      </main>
      <Footer />
    </>
  )
}
