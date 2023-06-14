import { Divider, Typography } from '@mui/material';
import React from 'react'

function Chapter({id, chapter}) {
  return (
    <>
    <Divider sx={{mt:'5px'}}/>
    <Typography sx={{mt: '5px'}}>
        {id + 1}. {chapter}
    </Typography>
    </>
  )
}

export default Chapter;