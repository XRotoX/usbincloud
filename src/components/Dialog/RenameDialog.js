import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import { blue } from '@material-ui/core/colors';
import { database } from '../../utils/Firebase'
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';




function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    buttonProgress: {
        color: blue[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}));


export default function RenameDialog({ metadata, open, setOpen }) {
    const classes = useStyles()
    const [name, setName] = React.useState("")
    const [message, setMessage] = React.useState("")
    const [error, setError] = React.useState("")
    const [loading, setLoading] = React.useState(false)

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setMessage("")
        setError("")
        setLoading(false)
        setOpen(false)
    };

    const handleClose = () => {
        setLoading(false)
        setOpen(false)
    };

    const handleRename = async () => {
        setError('')
        setMessage('')
        setLoading(true)
        try {
            const db = metadata.type === "file" ? database.files : database.folders
            await db.doc(metadata.id).update({ name })
            setMessage("Renamed successfully")
            setOpen(false)
            setLoading(false)
        } catch (error) {
            setError("Error: Couldn\'t rename item")
        }

    }

    return (
        <>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Rename</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To rename this item, please enter your new name here.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="New name"
                        type="string"
                        onChange={e => setName(e.target.value)}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <div className={classes.wrapper}>
                        <Button type="submit" onClick={handleRename} color="primary" disabled={loading}>
                            Save
                        </Button>
                        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                    </div>

                </DialogActions>
            </Dialog>
            {error &&
                <Snackbar open={error} autoHideDuration={6000} onClose={handleSnackbarClose}>
                    <Alert onClose={handleSnackbarClose} severity="error">
                        {error}
                    </Alert>
                </Snackbar>
            }
            {message &&
                <Snackbar open={message} autoHideDuration={6000} onClose={handleSnackbarClose}>
                    <Alert onClose={handleSnackbarClose} severity="success">
                        {message}
                    </Alert>
                </Snackbar>
            }
        </>
    );
}
