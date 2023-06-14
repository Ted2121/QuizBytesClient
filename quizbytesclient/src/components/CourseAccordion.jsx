import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chapter from './Chapter';

function CourseAccordion({id, course, chapters}) {
  return (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${course}-content`}
          id={id}
        >
          <Typography>{course}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {chapters.map((item, index) => (
            <Chapter key={index} id={index} chapter={item} />
          ))}
        </AccordionDetails>
      </Accordion>
  );
}

export default CourseAccordion;