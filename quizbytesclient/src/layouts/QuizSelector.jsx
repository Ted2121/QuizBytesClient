import React from 'react'
import Box from '@mui/material/Box'
import SearchBar from '../components/SearchBar';
import Courses from '../components/Courses';
import { Card, CardContent } from '@mui/material';


function QuizSelector() {

    const handleChange = (value) => {
        console.log(value);
    };


    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', height: '100%'}}>
            <Card sx={{ overflow: 'auto', height: '100%', backgroundColor:'primary.main' }}>
                <CardContent>
                    <SearchBar
                        placeholder="Search for a course or chapter"
                        onChange={(event) => handleChange(event.target.value)}
                    />
                    <Courses />
                </CardContent>
            </Card>
        </Box>
    )
}

export default QuizSelector;