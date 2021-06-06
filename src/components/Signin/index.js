import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import { blue } from '@material-ui/core/colors';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useAuth } from '../../utils/AuthContext'
import { useHistory } from 'react-router-dom'
import Copyright from '../Copyright'
import Divider from '@material-ui/core/Divider';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';


var rsd = require("random-string-detection");




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
    margin: theme.spacing(3, 0, 1),
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    color: blue[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -4,
    marginLeft: -12,
  },
  margin: {
    margin: theme.spacing(0),
  },
}));

export default function SignUp() {
  const classes = useStyles()
  const emailRef = useRef()
  const passRef = useRef()
  const { signin } = useAuth()
  const history = useHistory()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  async function handleSignin(e) {
    e.preventDefault()
    var score = rsd.detector(emailRef.current.value);
    console.log(score);
    try {
      setError('')
      setLoading(true)
      await signin(emailRef.current.value, passRef.current.value)
      history.push('/dashboard')
    } catch (error) {
      console.log(error)
      setError(error.message)
      setOpen(true)
    }
    setLoading(false)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        {error &&
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
              {error}
            </Alert>
          </Snackbar>

        }
        <form className={classes.form} noValidate onSubmit={handleSignin}>
          <Grid container spacing={2}>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                inputRef={emailRef}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth>

                <InputLabel className={clsx(classes.margin)} htmlFor="outlined-adornment-password">Password *</InputLabel>

                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  label="Password *"
                  required
                  value={values.password}
                  onChange={handleChange('password')}
                  inputRef={passRef}
                  fullWidth
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

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
              Log in
          </Button>
            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
          </div>
          <div className={classes.wrapper}>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              href="/signup"
            >
              Sign up
            </Button>
          </div>
          <div className={classes.submit}>
            <Divider variant="middle" />
          </div>

          <div className={classes.wrapper}>
          <Button
            variant="contained"
            size="large"
            fullWidth
            className={classes.button}
            startIcon={<FacebookIcon />}
          >
            Continue with Facebook
          </Button>
          </div>

          <div className={classes.wrapper}>

          <Button
            variant="contained"
            size="large"
            fullWidth
            className={classes.button}
            startIcon={<TwitterIcon />}
          >
            Continue with Twitter
          </Button>
          </div>

          <Grid container justify="center">
            <Grid item>
              <Link href="/forgot-password" variant="body2">
                <br />My mind got 404 while looking for password
              </Link>
            </Grid>


          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
