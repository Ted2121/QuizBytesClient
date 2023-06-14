import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import courses from '../data/courses'
import { Accordion } from '@mui/material';
import CourseAccordion from './CourseAccordion';

const data = courses;

function Courses() {
    return (
        <Box sx={{mt:'5px'}}>
            {data.map((item) => (
                <CourseAccordion
                    key={item.id}
                    id={item.id}
                    course={item.course}
                    chapters={item.chapters}
                />
            ))}
        </Box>
    )
}

export default Courses