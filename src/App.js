import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { AuthProvider } from './utils/AuthContext'
import CssBaseline from '@material-ui/core/CssBaseline';
import Dashboard from './pages/dashboard';
import SigninPage from './pages/signin'
import SignupPage from './pages/signup'
import Profile from './components/Profile'
import resetPassword from './pages/resetPassowrd'
import PrivateRoute from './utils/PrivateRoute';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Index from './pages';
// import Pricing from './components/Pricing'
// import Checkout from './components/Checkout/Checkout'
//import Drawer from './components/Drawer'


// TODO: Problems to solve
// Speed dial icons doesn't appear
// Speed dial not sticky




function App() {
  const [dark, setDark] = React.useState(localStorage.getItem("dark"));
  const Theme = createMuiTheme({
    palette: {
      type: dark === "true" ? 'dark' : 'light',
    },
  });
  return (
    <React.Fragment>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard}/>
              <PrivateRoute exact path="/profile" component={Profile}/>
              <Route exact path="/s/:itemId" component={Dashboard} />
              <PrivateRoute exact path="/dashboard/i/:itemId" component={Dashboard} />
              <Route path="/signup" component={SignupPage} />
              <Route path="/signin" component={SigninPage} />
              <Route path="/forgot-password" component={resetPassword} />
              <Route path="/" component={Index} />
              <Redirect to="/" />
            </Switch>
          </AuthProvider>
        </Router>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
