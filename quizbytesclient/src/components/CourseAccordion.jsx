import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chapter from './Chapter';
import { Box, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CourseContext } from '../context/CourseContext';

function CourseAccordion({ id, courseName, chaptersList }) {
  const { setCourse } = useContext(CourseContext);

  const handleRoadmapClick = () => {
    const courseObject = {
      courseName, chaptersList
    };

    setCourse(courseObject);
  };

  return (
    <Accordion square={true}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${courseName}-content`}
        id={id}
      >
        <Typography variant='h4'>{courseName}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', mb: '15px' }}>
          <Typography variant='h5'>
            Syllabus:
          </Typography>
          <Link to='/roadmap' style={{ textDecoration: 'none' }}>
            <Button
              variant='outlined'
              color='black'
              // endIcon={<ArrowForwardIosIcon style={{ fontSize: '0.7rem' }} />}
              onClick={handleRoadmapClick}
              sx={{
                fontSize: '0.8rem',
                '&:hover': {
                  backgroundColor: 'secondary.light'
                },
              }}
            >
              Quiz
            </Button>
          </Link>
          <Link to='/learn' style={{ textDecoration: 'none' }}>
            <Button
              variant='outlined'
              color='black'
              onClick={handleRoadmapClick}
              sx={{
                fontSize: '0.8rem',
                '&:hover': {
                  backgroundColor: 'secondary.light'
                },
              }}
            >
              Learn
            </Button>
          </Link>
        </Box>
        {chaptersList.map((item, index) => (
          <Chapter key={index} id={index} chapter={item.title} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
}

export default CourseAccordion;