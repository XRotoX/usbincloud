import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { AuthProvider } from './utils/AuthContext'
import CssBaseline from '@material-ui/core/CssBaseline';
import Dashboard from './pages/dashboard';
import SigninPage from './pages/signin'
import SignupPage from './pages/signup'
import resetPassword from './pages/resetPassowrd'
import PrivateRoute from './utils/PrivateRoute';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
// import Pricing from './components/Pricing'
// import Checkout from './components/Checkout/Checkout'
//import Drawer from './components/Drawer'


// TODO: Problems to solve
// Speed dial icons doen't appear
// Speed dial not sticky
const darkTheme = createMuiTheme({
  palette: {
    type: 'light',

  },
});


function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}> 
      <CssBaseline />
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/signin" component={SigninPage} />
            <Route path="/forgot-password" component={resetPassword} />
            </Switch>
        </AuthProvider>
      </Router>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
