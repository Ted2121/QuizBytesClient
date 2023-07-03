import { Box, Checkbox, FormControlLabel } from '@mui/material'
import {React, useState} from 'react'

function Answer({ id, label, isChecked, onCheckboxChange }) {
    return (
      <label htmlFor={id} style={{
        display: 'flex',
        width: '98%',
        height: 'auto',
        backgroundColor: isChecked ? '#FEEB75' : '#FFFFFF',
        marginTop: '12px',
        padding: '5px 12px',
        borderRadius: '12px',
        cursor: 'pointer',
      }}>
        <Box sx={{ flexGrow: 1 }}>
        <FormControlLabel
      control={
        <Checkbox 
          id={id} 
          checked={isChecked} 
          onChange={onCheckboxChange}
          sx={{
            color: 'black',
            '&.Mui-checked': {
              color: 'white',
              backgroundColor: 'white',
              '& .MuiSvgIcon-root': {
                fill: 'black',
              },
            },
          }}
        />
      }
      label={label}
      sx={{
        '& .MuiFormControlLabel-label': {
          fontWeight: 500,
          fontSize:'.9rem',
        },
      }}
    />
        </Box>
      </label>
    );
  }
  
  export default Answer;