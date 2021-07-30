import {
    makeStyles
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    cnt: {
        paddingTop: '10px',
        width: '90%',
        margin: 'auto',
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