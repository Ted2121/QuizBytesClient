import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import React from 'react'

function BuiltRoadmap({ courseName, chaptersList }) {

    const chaptersContainer = (
        <Box
            display="flex"
            flexDirection="column"
            gap={1}
        >
            {chaptersList?.map((chapter, index) => (
                <Box
                    key={index}
                    sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: (index % 2 === 0) ? ((Math.floor(index / 2) % 2 === 0) ? 'flex-start' : 'flex-end') : 'center',
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            width: 'fit-content',
                            mt: '10px'
                        }}
                    >
                        {chapter}
                    </Button>
                </Box>
            ))}
        </Box>
    );


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant='h2' sx={{ margin: '20px 0 10px 0' }}>
                {courseName}
            </Typography>
            <Divider sx={{ width: '80%', backgroundColor: 'black.main' }} />
            <Grid container columns={10}>
                <Grid item xs={1} />
                <Grid item xs={8}>
                    {chaptersContainer}
                </Grid>
                <Grid item xs={1} />
            </Grid>
        </Box>
    )
}

export default BuiltRoadmap;