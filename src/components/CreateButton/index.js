import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FolderOpenRoundedIcon from '@material-ui/icons/FolderOpenRounded';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import CreateFolderDialog from '../Dialog/CreateFolderDialog'

const useStyles = makeStyles((theme) => ({
  root: {
    transform: 'translateZ(0px)',
    flexGrow: 1,
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const actions = [
  { icon: <FolderOpenRoundedIcon />, name: 'New' },
  { icon: <CloudUploadOutlinedIcon />, name: 'Upload' },
];

export default function SpeedDialTooltipOpen() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (e, operation) => {
    if (operation === "New") {
      return <CreateFolderDialog />
    } else if (operation === "Upload") {
      return <CreateFolderDialog />
    }
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        className={classes.speedDial}
        hidden={hidden}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        
        <CreateFolderDialog />

      </SpeedDial>
    </div>
  );
}
