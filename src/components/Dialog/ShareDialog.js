import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import FilterNoneRoundedIcon from '@material-ui/icons/FilterNoneRounded';
import { database } from '../../utils/Firebase'


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;

  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function ShareDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [link, setLink] = React.useState(`https://usb-in-cloud.web.app/s/${props.metadata.id}`)


  const handleClickOpen = () => {
    const db = props.metadata.type === "file" ? database.files : database.folders
    db.doc(props.metadata.id).update({
      isPublic: true
    })
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleCopy = () => {
    var input = document.createElement('input');
    input.setAttribute('value', link);
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    setOpen(false);
  }

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen} startIcon={<ShareIcon />}>
        <Typography>
          Share
        </Typography>
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Public link
        </DialogTitle>
        <DialogContent dividers>

          <Typography gutterBottom>
            {link}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCopy} color="primary" startIcon={<FilterNoneRoundedIcon />}>
            Copy
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
