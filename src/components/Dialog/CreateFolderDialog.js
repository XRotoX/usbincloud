import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import FolderOpenRoundedIcon from '@material-ui/icons/FolderOpenRounded';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import { blue } from '@material-ui/core/colors';
import { database } from '../../utils/Firebase'
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useAuth } from "../../utils/AuthContext"
import { ROOT_FOLDER } from "../../utils/useFolder"




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

export default function FormDialog({ currentFolder, open, setOpen }) {
    const classes = useStyles()
    const [name, setName] = React.useState("")
    const [message, setMessage] = React.useState("")
    const [error, setError] = React.useState("")
    const [snackbar, setSnackbar] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const { currentUser } = useAuth()


    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbar(false)
    };

    const handleClose = () => {
        setLoading(false)
        setOpen(false)
    };

    const handleCreate = async () => {

        try {
            setError('')
            setMessage('')
            setLoading(true)

            //TODO restrict folder name: regex
            if (currentFolder == null) return

            const path = [...currentFolder.path]
            if (currentFolder !== ROOT_FOLDER) {
                path.push({id: currentFolder.id })
            }

            
            await database.folders.add({
                name: name,
                parentId: currentFolder.id,
                userId: currentUser.uid,
                path: path,
                createdAt: database.getCurrentTimestamp(),
                isPublic: false
            })
            setName("")
            setMessage("Folder created successfully.")
            setOpen(false)
        } catch (error) {
            console.log(error)
            setError("Error: couldn\'t create a new folder")
        }
        setSnackbar(true)
        setLoading(false)

    }

    const action = { icon: <FolderOpenRoundedIcon />, name: 'New' }

    return (
        <>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New folder</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To create a new folder, please enter your folder name here.
                                </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Folder name"
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
                        <Button type="submit" onClick={handleCreate} color="primary" disabled={loading}>
                            Create
                        </Button>
                        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                    </div>

                </DialogActions>
            </Dialog>
            {error &&
                <Snackbar open={snackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
                    <Alert onClose={handleSnackbarClose} severity="error">
                        {error}
                    </Alert>
                </Snackbar>
            }
            {message &&
                <Snackbar open={snackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
                    <Alert onClose={handleSnackbarClose} severity="success">
                        {message}
                    </Alert>
                </Snackbar>
            }
        </>
    );
}
