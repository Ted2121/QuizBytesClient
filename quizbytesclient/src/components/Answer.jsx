import { Box, Checkbox, FormControlLabel } from '@mui/material'
import {React, useState} from 'react'

function Answer({ id, label, isChecked, onCheckboxChange }) {
    return (
      <Box
        sx={{
          display: 'flex',
          width: '98%',
          height: 'auto',
          backgroundColor: 'white.main',
          marginTop: '12px',
          padding: '5px 12px',
          borderRadius: '12px',
        }}
      >
        <FormControlLabel
          control={<Checkbox id={id} checked={isChecked} onChange={onCheckboxChange} />}
          label={label}
        />
      </Box>
    );
  }
  
  export default Answer;