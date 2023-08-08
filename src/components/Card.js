import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AccessTime, Style } from '@mui/icons-material';
import Rating from '@mui/material/Rating';

import {createTheme,ThemeProvider} from '@mui/material'

const Theme =createTheme({
    components:{
        MuiTypography:{
            variants:[
                {
                    props:{
                        variant:"body2"
                    },
                    style:{
                        fontSize:11,
                       
                    },
                },
                {
                    props:{
                        variant:"body3"
                    },
                    style:{
                        fontSize:9,
                    },
                },
            ],
        },
    },
}

)
const Card = ({tour}) => {
    return (
        <Grid item xs={3}>
           <ThemeProvider theme={Theme}>    
           <Paper elevation={3}>
                <img src={tour.image} alt="111" className='image'  />
                <Box paddingX={2} >
                    <Typography variant='h4' component="h1">
                        {tour.name}
                    </Typography>
                    <Typography variant='subtitle1' component="h2">
                        From axin
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    >
                        <AccessTime sx={{ width: 12.5 }} />
                        <Typography variant='body2' component="h3" marginLeft={0.5}>
                            {tour.duration}
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    marginTop={1}
                    >
                       <Rating name="read-only" value={tour.rating}   precision={0.1} readOnly />
                       <Typography variant='body2' component="h3" marginLeft={0.5}>
                            {tour.rating} 
                        </Typography>
                        <Typography variant='body2' component="h3" marginLeft={3.5}>
                             ({tour.numberOfReviews}reviews)
                        </Typography>
                    </Box>
                    <Box>
                    <Typography variant='h6' component="h3" >
                     {tour.price} 
                        </Typography>
                    </Box>
                </Box>

            </Paper>
            </ThemeProvider>
        </Grid>


    );
};
export default Card;