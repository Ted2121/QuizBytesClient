import React, { useState, useEffect } from 'react'
import { useContext } from 'react';
import { CourseContext } from '../context/CourseContext';
import { Box, Grid, Typography } from '@mui/material';
import BuiltRoadmap from '../layouts/BuiltRoadmap';
import { getCompletedChaptersInCourseAsync } from '../service/userRequestsFacade';
import LeftSideRoadmap from '../layouts/LeftSideRoadmap';
import RightSideRoadmap from '../layouts/RightSideRoadmap';
import { useNavigate, useLocation } from 'react-router-dom';

function Roadmap() {
  const { course } = useContext(CourseContext);
  const [isLoading, setIsLoading] = useState(true);
  const [courseProgression, setCourseProgression] = useState(null);
  const [openChapter, setOpenChapter] = useState(course?.chaptersList[0])
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/select";



  useEffect(() => {
    const fetchCourseProgression = async () => {
      try {
        const progression = await getCompletedChaptersInCourseAsync(course?.courseName);
        setCourseProgression(progression);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (course) {
      fetchCourseProgression();
    }

    if (!course) {
      navigate(from, { replace: true });
    }
  }, [course, from, navigate]);

  // console.log(course);
  // TODO if course is null or undefined, get it from local storage

  function handleSetOpenChapter(index) {
    setOpenChapter(course?.chaptersList[index])
  }

  if (isLoading) {
    // Render loading indicator or blank screen
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100vh',
        }}
      >
        <Typography>Loading...</Typography>
      </Box>
    )
  }

  return (
    <Grid container columns={12} sx={{
      mt: '20px'
    }}>
      {/* Left panel */}
      <Grid item xs={0} lg={3}>
        <LeftSideRoadmap />
      </Grid>

      {/* Built Roadmap panel */}
      <Grid item xs={12} md={7} lg={6}>
        <BuiltRoadmap
          courseName={course?.courseName}
          chaptersList={course?.chaptersList}
          courseProgression={courseProgression}
          onSetOpenChapter={handleSetOpenChapter} />
      </Grid>
      {/* Right panel */}
      <Grid item xs={0} md={5} lg={3}>
        <RightSideRoadmap openChapter={openChapter} />
      </Grid>
    </Grid>
  )
}

export default Roadmap;