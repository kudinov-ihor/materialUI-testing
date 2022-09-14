import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: '#fff',
        padding: '20px'
    }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const App = () => {

    const classes = useStyles();

  return (
    <>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
                <PhotoCameraIcon/>
                <Typography variant="h6">Photo Album</Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div className={classes.container}>
                <Container maxWidth="sm" >
                    <Typography variant="h2" align='center' color='textPrimary' gutterBottom>
                        Photo Album
                    </Typography>
                    <Typography variant="h5" align='center' color='textSecondary' paragraph>
                        Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.
                     </Typography>
                     <div>
                        <Grid container spacing={2} justifyContent='center'>
                            <Grid item>
                                <Button variant='contained' color='primary'>
                                    See my photos
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' color='primary'>
                                    Secondary Action
                                </Button>
                            </Grid>
                        </Grid>
                     </div>
                </Container>
            </div>
            <Container maxWidth='md'>
                <Grid container spacing={4}>
                    {cards.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                            <CardMedia image='https://source.unsplash.com/random' sx={{paddingTop: '56.25%'}}/>
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    Heading
                                </Typography>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores vel quas porro officiis aliquam. Ducimus?
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size='small' color='primary'>View</Button>
                                <Button size='small' color='primary'>Edit</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    ))}

                </Grid>
            </Container>
        </main>
        <footer>
            <Typography variant='h6' align='center' gutterBottom>
                Footer
            </Typography>
            <Typography variant='subtitle1' align='center' color='textSecondary'>
                2022 Ihor Kudinov
            </Typography>
        </footer>
    </>
  )
}

export default App