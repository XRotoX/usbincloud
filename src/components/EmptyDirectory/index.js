import { Typography } from '@material-ui/core'
import { Container } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import React from 'react'

export default function EmptyDirectory() {
    return (
        <Container maxWidth="sm">
            <Grid container spacing={3} justify="center" alignItems="center">
                <Grid item xs={4} >
                    <img src="/empty.png" atl="Empty Directory" height='150px'/>
                </Grid>
                <Grid item xs={12}  justify="center" alignItems="center" >
                    <Typography variant="h5" align='center'>
                        Nothing to show in this directory, use the floating button (+) to add files and folders.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}