import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FolderOpenRoundedIcon from '@material-ui/icons/FolderOpenRounded';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import CreateFolderDialog from '../Dialog/CreateFolderDialog'
import UploadDialog from '../Dialog/UploadDialog'
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
  root: {
    transform: 'translateZ(0px)',
    flexGrow: 1,
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(1.4),
    right: theme.spacing(.7),
  },
  wrapper: {
    transform: 'translateZ(0px)',
    position: 'absolute',
    bottom: theme.spacing(1),
    right: theme.spacing(2),
  },
}));

const actions = [
  { icon: <FolderOpenRoundedIcon />, name: 'New' },
  { icon: <CloudUploadOutlinedIcon />, name: 'Upload' },
];

export default function SpeedDialTooltipOpen({ currentFolder }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false)
  const [hidden, setHidden] = React.useState(false)
  const [upload, setUpload] = React.useState(false)
  const [create, setCreate] = React.useState(false)
  const [loading, setLoading] = React.useState(false);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          className={classes.speedDial}
          hidden={hidden}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          <SpeedDialAction
            key={'Upload'}
            icon={<CloudUploadOutlinedIcon />}
            tooltipTitle={'Upload'}
            tooltipOpen
            onClick={() => setUpload(true)}
          >
          </SpeedDialAction>
          <SpeedDialAction
            key='New'
            icon={<FolderOpenRoundedIcon />}
            tooltipTitle='New'
            tooltipOpen
            onClick={() => setCreate(true)}
          >
          </SpeedDialAction>

        </SpeedDial>
        {loading && <CircularProgress size={68} className={classes.fabProgress} />}
      </div>

      <UploadDialog currentFolder={currentFolder} open={upload} setOpen={setUpload} />
      <CreateFolderDialog currentFolder={currentFolder} open={create} setOpen={setCreate} />
    </div>
  );
}
