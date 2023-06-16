import { Box, Checkbox, FormControlLabel } from '@mui/material'
import {React, useState} from 'react'

function Answer({ label }) {
    const [isChecked, setIsChecked] = useState(false);
  
    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };
  
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
          control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} />}
          label={label}
        />
      </Box>
    );
  }
  
  export default Answer;