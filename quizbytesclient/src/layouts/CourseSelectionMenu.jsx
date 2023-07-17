import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SearchBar from '../components/SearchBar';
import Courses from '../components/Courses';
import { Card, CardContent } from '@mui/material';
import courses from '../data/courses';


function CourseSelectionMenu() {
    const data = courses;
    const [filteredData, setFilteredData] = useState(data);

    const handleChange = (value) => {
        const filteredCourses = courses.filter((course) => {
            const courseMatches = course.course.toLowerCase().includes(value.toLowerCase());
            const chapterMatches = course.chapters.some((chapter) =>
                chapter.toLowerCase().includes(value.toLowerCase())
            );

            return courseMatches || chapterMatches;
        });

        setFilteredData(filteredCourses);
        // console.log(filteredCourses);
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', height: '100%' }}>
            <Card sx={{ height: '100%', backgroundColor: 'primary.main' }}>
                <CardContent>
                    <SearchBar
                        placeholder='Search for a course or chapter'
                        onChange={(event) => handleChange(event.target.value)}
                    />
                    <Box sx={{ overflow: 'auto', maxHeight: '53vh' }}>
                        <Courses data={filteredData} />
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

export default CourseSelectionMenu;