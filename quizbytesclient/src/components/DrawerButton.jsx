import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import React from 'react'

function DrawerButton({id, text, onClick = () => {}}) {
  return (
    <ListItem key={id} disablePadding sx={{ mt: '8px' }}>
    <ListItemButton
      sx={{ textAlign: 'center' }}
      onClick={onClick}
    >
      <ListItemText
        primaryTypographyProps={{ variant: 'h4', fontWeight: 500 }}
        primary={text}
        sx={{ color: 'white.text' }} />
    </ListItemButton>
  </ListItem>
  )
}

export default DrawerButton;