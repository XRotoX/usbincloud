import React, { useReducer, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import clsx from 'clsx';
import Drawer from '../Drawer'
import { useAuth } from '../../utils/AuthContext'
import { useHistory } from 'react-router-dom'
import { createMuiTheme } from '@material-ui/core/styles'

import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';
import Brightness7RoundedIcon from '@material-ui/icons/Brightness7Rounded';


import navigationReducer from '../../reducers/navigationReducer'
import navigationActions from '../../actions/navigationActions'

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButtonHidden: {
    display: 'none',
  },
  appBarSpacer: theme.mixins.toolbar,
}));

const theme = createMuiTheme()

export default function Navigation(props) {
  const classes = useStyles();
  const { logout } = useAuth()
  const history = useHistory()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [state, dispatch] = useReducer(navigationReducer, { open: false });

  const menuOpen = Boolean(anchorEl);


  const handleTheme = () => {
    theme.palette.type === "light" ? theme.palette.type = "dark" : theme.palette.type = "light"
    //TO Revise: why not toggling IconButton
    console.log(theme.palette.type === "dark");
  }

  const handleDrawerOpen = () => {
    dispatch({ type: navigationActions.DRAWER_OPENED })
  };

  const handleDrawerClose = () => {
    dispatch({ type: navigationActions.DRAWER_CLOSED })
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  async function handleLogout(e) {
    e.preventDefault()
    try {
      setError('')
      setLoading(true)
      await logout()
      history.push('/signin')
    } catch (error) {
      console.log(error)
      setError('Error: Couldn\'t logout')
    }
    setLoading(false)
  }

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={clsx(classes.appBar, state.open && classes.appBarShift)}>
        <Toolbar>
          <IconButton
            edge="start"
            className={clsx(classes.menuButton, state.open && classes.menuButtonHidden)}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Photos
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-controls="menu-appbar"
                onClick={handleTheme}
                color="inherit"
              >
                {theme.palette.type === "dark" ? (<Brightness7RoundedIcon />) : (<Brightness4RoundedIcon />) }
              </IconButton>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={menuOpen}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleLogout} disabled={loading}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <div style={{ display: 'flex' }}>
        <Drawer
          handleDrawerClose={handleDrawerClose}
          open={state.open}
        />
        {props.children}
      </div>



    </div>
  );
}
