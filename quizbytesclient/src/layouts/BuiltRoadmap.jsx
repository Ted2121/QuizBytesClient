import { Box, Button, Divider, Grid, Typography, IconButton, Card } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react'
import ChapterCompletedIcon from '../components/ChapterCompletedIcon';
import ChapterInProgressIcon from '../components/ChapterInProgressIcon';
import ChapterIncompleteIcon from '../components/ChapterIncompleteIcon';
import RoadmapSectionTitle from '../components/RoadmapSectionTitle';



function BuiltRoadmap({ courseName, chaptersList, courseProgression, onSetOpenChapter }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const timerRef = useRef(null);
    const chaptersWithIcons = [];

    function handleTouchStart(index) {
        timerRef.current = setTimeout(() => {
            setHoveredIndex(index);
        }, 600); // Set the duration for a long press here
    }

    function handleTouchEnd() {
        clearTimeout(timerRef.current);
        setHoveredIndex(null);
    }

    function handleMouseEnter(index) {
        setHoveredIndex(index);
    }

    function handleMouseLeave() {
        setHoveredIndex(null);
    }

    function handleOnSetOpenChapter(index) {
        return () => {
            onSetOpenChapter(index);
        };
    }

    function assignIcons() {
        let foundNonMatching = false;
        for (let i = 0; i < chaptersList?.length; i++) {
            const chapter = chaptersList[i];
            const isCompleted = courseProgression?.chapters.some(progressChapter =>
                progressChapter.toLowerCase() === chapter.title.toLowerCase()
              );
            let transformedChapter = {};

            if (isCompleted) {
                transformedChapter = {
                    chapter: chapter.title,
                    icon: <ChapterCompletedIcon />
                }

            } else if (!isCompleted && !foundNonMatching) {
                foundNonMatching = true;
                transformedChapter = {
                    chapter: chapter.title,
                    icon: <ChapterInProgressIcon />
                }
            } else if (!isCompleted && foundNonMatching) {
                transformedChapter = {
                    chapter: chapter.title,
                    icon: <ChapterIncompleteIcon />
                }
                // console.log('here');
            }
            chaptersWithIcons.push(transformedChapter);
        };

        // console.log(chaptersWithIcons);

    }

    if (chaptersWithIcons.length === 0) { assignIcons(); }

    const chaptersContainer = (
        <Card
            display="flex"
            sx={{
                mt: '20px',
                backgroundColor: 'grey.dark',
                p: '30px',
                maxHeight: {xxs:'69vh', sm:'75vh', md:'78vh', lg:'79vh'},
                overflow: 'auto',
                borderRadius:'8px',
                flexDirection:'column'
            }}>
            {chaptersWithIcons?.map((chapter, index) => (
                <Box
                    key={index}
                    sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent:
                            index % 2 === 0
                                ? Math.floor(index / 2) % 2 === 0
                                    ? 'flex-start'
                                    : 'flex-end'
                                : 'center'
                    }}>
                        {/* {console.log(index)} */}
                    <IconButton
                        variant="contained"
                        onTouchStart={() => handleTouchStart(index)}
                        onTouchEnd={handleTouchEnd}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleOnSetOpenChapter(index)}
                        sx={{
                            width: 'fit-content',
                            mt: '20px',
                            color: 'black',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: hoveredIndex === index ? '5rem' : '50%',
                            border: '2px solid white',
                            p: '0',
                            position: 'relative',

                            '& > span': {
                                position: 'absolute',
                                top: '50%',
                                left: 'calc(100% + 8px)',
                                transform: 
                                index % 2 === 0
                                ? Math.floor(index / 2) % 2 === 0
                                    ? 'translateY(-50%)'
                                    : 'translate(-210%, -50%)'
                                : 'translateY(-50%)',
                                whiteSpace: index % 2 === 0
                                ? Math.floor(index / 2) % 2 === 0
                                    ? 'nowrap'
                                    : ''
                                : '',
                                ml:
                                index % 2 === 0
                                ? Math.floor(index / 2) % 2 === 0
                                    ? '10px'
                                    : '0px'
                                : '10px',
                            },
                        }}
                    >
                        {chapter.icon}
                        {hoveredIndex === index && (
                            <span>
                                <Typography
                                    sx={{
                                        color: 'white.main',
                                        fontSize: { xxs: '1.2rem', lg:'1.3rem' },
                                    }}>
                                    {chapter.chapter}
                                </Typography>
                            </span>
                        )}
                    </IconButton>
                </Box>
            ))}
        </Card>
    );

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <RoadmapSectionTitle text={courseName} />
            
            <Grid container columns={16}>
                <Grid item xxs={1} />
                <Grid item xxs={14}>
                    {chaptersContainer}
                </Grid>
                <Grid item xxs={1} />
            </Grid>
        </Box>
    )
}

export default BuiltRoadmap;