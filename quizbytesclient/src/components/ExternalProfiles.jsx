import React from 'react'
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FeedIcon from '@mui/icons-material/Feed';
import Stack from '@mui/material/Stack';

function ExternalProfiles({sx}) {
  return (
<Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
          <a href="https://www.linkedin.com/in/teodor-andrei-1b91371ba/" target="_blank" rel="noopener noreferrer">
            <IconButton aria-label="linkedin" size="large" sx={sx}>
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </a>
          <a href="https://github.com/Ted2121" target="_blank" rel="noopener noreferrer">
            <IconButton aria-label="github" size="large" sx={sx}>
              <GitHubIcon fontSize="large" />
            </IconButton>
          </a>
          <a href="https://drive.google.com/file/d/1N6f3wBg4OMLF4_aL1n7IiLwDydOQ8ndH/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <IconButton aria-label="cv" size="large" sx={sx}>
              <FeedIcon fontSize="large" />
            </IconButton>
          </a>
        </Stack>
  )
}

export default ExternalProfiles;