import React, { useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { database } from '../../utils/Firebase'
import { useAuth } from "../../utils/AuthContext"
import { useHistory } from 'react-router-dom'



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -8,
    marginLeft: -8,
  },
}));

export default function Profile() {
  const classes = useStyles()
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [open, setOpen] = useState(false)
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const { currentUser } = useAuth()

  database.users.where("id", "==", currentUser.uid).onSnapshot((snapshot) => {
    database.users.doc(snapshot.docs[0].id).get().then((doc) => {
      setFname(doc.data().firstName)
      setLname(doc.data().lastName)
    })

  })

  const handleCancel = () => {
    history.push("/dashboard")
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false)
    setMessage("")
  };

  async function handleUpdate(e) {
    e.preventDefault()
    setOpen(true)
    try {
      database.users.where("id", "==", currentUser.uid).onSnapshot((snapshot) => {
        database.users.doc(snapshot.docs[0].id).update({
          firstName: fname,
          lastName: lname
        })
      })
      history.push('/dashboard')
    } catch(error) {
      setError(error.message)
    }
    setLoading(false)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Update profile
          </Typography>
          {error &&
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
              {error}
            </Alert>
          </Snackbar>

        }
        
        {message &&
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              {message}
            </Alert>
          </Snackbar>

        }
        
        <form className={classes.form} noValidate onSubmit={handleUpdate}>
          <Grid container spacing={2}>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="First name"
                label="First name"
                placeholder={fname}
                name="fname"
                autoComplete="fname"
                autoFocus
                onChange={e => setFname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Last name"
                label="Last name"
                placeholder={lname}
                name="lname"
                autoComplete="lname"
                onChange={e => setLname(e.target.value)}
              />
            </Grid>
          </Grid>
          <div className={classes.wrapper}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={loading}
            >
               Update
            </Button>
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              className={classes.submit}
              onClick={handleCancel}
            >
               Cancel
          </Button>
            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
          </div>
        </form>
       
      </div>
    </Container>
  );
}
