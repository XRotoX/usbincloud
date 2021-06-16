import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import LayersIcon from '@material-ui/icons/Layers';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';


const handleGithubLink = () => {
  window.open('https://github.com/XRotoX/usbincloud', '_blank');
}

const handleHomeLink = () => {
  window.open('/dashboard', '_self');
}

const handleProfileLink = () => {
  window.open('/profile', '_self');
}



export const mainListItems = (
  <div>
    <ListItem
      button
      onClick={handleHomeLink}
    >
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem
      button
      onClick={handleProfileLink}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
    <ListItem button disabled>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Buy storage" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>More</ListSubheader>
    <ListItem
      button
      onClick={handleGithubLink}
    >
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Project on Github " />
      <ListItemIcon >
        <OpenInNewIcon style={{ fontSize: 15, marginLeft: "10px" }} />
      </ListItemIcon>
    </ListItem>
  </div>
);