import {
    makeStyles
} from '@material-ui/core';
import Image from '../../img/backgrmovies.jpg';

const useStyles = makeStyles((theme) => ({
    cnt: {
        paddingTop: '10px',
        width: '90%',
        margin: 'auto',
    },
    paperContainer: {
        backgroundImage: `url(${Image})`,
        height: '45vw',
        WebkitBackgroundSize: 'cover',
        width: '100%',
    },
    formContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
        },
    Button: {
            marginL: '20px',
        },
    label: {
            paddingRight: '10px',
        },
    moviesGrid: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    moviesCarousel: {
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    }
}));

export default useStyles;