import { createTheme } from '@material-ui/core/styles';
const theme = createTheme({
    palette: {
        primary: {
            main: '#E50914', // red
            dark: '#000000', // black
            light: '#333333',
            contrastText: '#484e55',
        },
        secondary: {
            main: '#4dedff', // card bottom border color
            dark: '#0dfc00', // card bottom hover border color
            light: '#696463', // border
            contrastText: '#1BA1E2', // blue color
        },
        success: {
            main: '#01BC85',
            light: '#595E57', // border color
            contrastText: '#464646', // scroll bar color product
            dark: '#53D36A', // green
        },
        error: {
            main: '#B85655',
        },
    },
    typography: {
        h2: { color: '#fff', fontSize: '30px' },
        body1: { color: '#fff', fontSize: '13px' },
        body2: { color: '#fff', fontSize: '12px' },
        h1: { fontSize: '46px' },
        subtitle1: {
            fontSize: '10px',
        },
        subtitle2: {
            fontSize: '15px',
        },
    },
    overrides: {
        MuiInput: {
            underline: {
                '&&&:before': {
                    borderBottom: 'none',
                },
                '&&:after': {
                    borderBottom: 'none',
                },
                '&&&&:hover:before': {
                    borderBottom: 'none',
                },
            },
        },
        MuiDialog: {
            paper: {
                backgroundColor: '#252525',
                color: 'white',
            },
        },
        MuiCssBaseline: {
            '@global': {
                html: {
                    WebkitFontSmoothing: 'auto',
                },
                MuiInput: {
                    padding: '20px',
                    input: {
                        color: '#fff !important',
                    },
                },
            },
        },
        MuiTableCell: {
            root: {
                padding: '0px 10px',
                fontSize: '13px',
                borderBlockColor: 'rgba(255,255,255,0.4)',
            },
            head: {
                fontSize: '16px',
                fontWeight: 600,
                padding: '16px !important',
            },
        },
        MuiPaper: {
            rounded: {
                borderRadius: 0,
            },
        },
    },
});
export default theme;
