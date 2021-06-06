import React, { useState } from 'react';
import './style.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
//import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Skeleton from '@material-ui/lab/Skeleton';
import ShareDialog from '../Dialog/ShareDialog'
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function ImgMediaCard(props) {
    const classes = useStyles();

    //const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [loading, setLoading] = useState(false);
    const open = Boolean(anchorEl);


    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={1}>
            <Card className={classes.root}>
                <CardHeader
                    action={
                        <IconButton
                            aria-label="settings"
                            onClick={handleMenu}
                        >
                            <MoreVertIcon />
                        </IconButton>

                    }
                    title="MyFirstFile.txt"
                    subheader="May 26, 2021"
                    className={classes.CardHeader}
                />
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
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Delete</MenuItem>
                </Menu>
                {!loading ?
                    (
                    <Skeleton animation="wave" variant="rect" height={140} />
                    ) : (
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image="https://cdna.artstation.com/p/marketplace/printed_product_covers/000/016/936/white_wrap_big/file.jpg?1564600567"
                            title="Contemplative Reptile"
                        />
                    )
                }

                <CardActions>
                    <Button
                        size="small"
                        color="primary"
                        startIcon={<GetAppRoundedIcon />}>
                        <Typography>
                            Download
                        </Typography>
                    </Button>
                    <ShareDialog name="Hiprops" />
                </CardActions>
            </Card>

        </Grid>
    );
}
