import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chapter from './Chapter';
import { Box, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function CourseAccordion({ id, course, chapters }) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${course}-content`}
        id={id}
      >
        <Typography variant='h4'>{course}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', mb:'15px' }}>
          <Typography variant='h5'>
            Syllabus:
          </Typography>
          <Button
            variant='outlined'
            color='black'
            endIcon={<ArrowForwardIosIcon style={{ fontSize: '0.7rem' }} />}
            sx={{
              fontSize: '0.8rem',
              '&:hover': {
                backgroundColor: 'secondary.light'
              },
            }}
          >
            Roadmap
          </Button>
        </Box>
        {chapters.map((item, index) => (
          <Chapter key={index} id={index} chapter={item} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
}

export default CourseAccordion;