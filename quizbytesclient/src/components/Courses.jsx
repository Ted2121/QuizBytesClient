import * as React from 'react';
import Box from '@mui/material/Box';
import CourseAccordion from './CourseAccordion';

function Courses({data}) {
    return (
        <Box>
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