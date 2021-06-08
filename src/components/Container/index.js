import React from 'react'
import Container from '@material-ui/core/Container'
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        height: '100%',
        minHeight: '100vh',
    },
}))

const DisplayContainer = (props) => {
    const classes = useStyles();

    return (
        <Container maxWidth="lg" className={classes.container}>      
            {props.children}   
        </Container>
    )
}


export default DisplayContainer