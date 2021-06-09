import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';



function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CustomSnackbar(props) {

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        props.setMessage('')
    };

    return (
        <Snackbar open={props.message} autoHideDuration={6000} onClose={handleSnackbarClose} >
            <Alert onClose={handleSnackbarClose} severity={props.status == 0 ? "success" : "error"}>
                {props.message}
            </Alert>
        </Snackbar>
    )
}