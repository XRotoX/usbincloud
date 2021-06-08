import React, { useState } from 'react';
import './style.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import CardActionArea from '@material-ui/core/CardActionArea';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Skeleton from '@material-ui/lab/Skeleton';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile'
import ShareDialog from '../Dialog/ShareDialog'


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    title: {
        maxWidth: "160px",
        overflow: 'hidden',
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
    }
});

export default function File({ metadata }) {
    const classes = useStyles();

    //const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [loading, setLoading] = useState(true);
    const open = Boolean(anchorEl);

    React.useEffect(() => {
          let timer1 = setTimeout(() => setLoading(false), 1500);
          return () => {
            clearTimeout(timer1);
          };
        },[]);


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
                    avatar={
                        <Avatar >
                            {metadata.type === "file" ? <InsertDriveFileIcon /> : <FolderIcon />}
                        </Avatar>
                    }
                    action={
                        <IconButton
                            aria-label="settings"
                            onClick={handleMenu}
                        >
                            <MoreVertIcon />
                        </IconButton>

                    }
                    title={<Typography className={classes.title}>{metadata.name}</Typography>}
                    subheader="Now"
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
                    <MenuItem onClick={handleClose}>Rename</MenuItem>
                </Menu>

                <CardActionArea
                    href={metadata.type === "file" ? metadata.url : "/dashboard/i/" + metadata.id}
                    target={metadata.type === "file" ? "_blank" : ""}>
                    {loading ?
                        (
                            <Skeleton animation="wave" variant="rect" height={140} />
                        ) : (
                            <CardMedia
                                component="img"
                                alt="File"
                                height="140"
                                image={metadata.url ? metadata.url : "https://conceptdraw.com/a1717c3/p2/preview/640/pict--file-folder-office-vector-stencils-library"}
                                title="Contemplative Reptile"
                            />
                        )
                    }
                </CardActionArea>
                <CardActions>
                    {metadata.url && (
                        <Button
                            size="small"
                            color="primary"
                            href={metadata.url}
                            target="_blank"
                            startIcon={<GetAppRoundedIcon />}>
                            <Typography>
                                Download
                            </Typography>
                        </Button>
                    )
                    }
                    
                    <ShareDialog name="Hiprops" id={metadata.id}/>
                </CardActions>
            </Card>

        </Grid>
    );
}
