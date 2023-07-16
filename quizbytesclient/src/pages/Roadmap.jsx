import React, { useState, useEffect } from 'react'
import { useContext } from 'react';
import { CourseContext } from '../context/CourseContext';
import { Grid } from '@mui/material';
import BuiltRoadmap from '../layouts/BuiltRoadmap';
import {getCompletedChaptersInCourseAsync} from '../service/userRequestsFacade';
import LeftSideRoadmap from '../layouts/LeftSideRoadmap';

function Roadmap() {
  const { course } = useContext(CourseContext);
  const [courseProgression, setCourseProgression] = useState(null);

  useEffect(() => {
    const fetchCourseProgression = async () => {
      try {
        const progression = await getCompletedChaptersInCourseAsync(course?.courseName);
        setCourseProgression(progression);
      } catch (error) {
        console.error(error);
      }
    };

    if (course) {
      fetchCourseProgression();
    }
  }, [course]);

  // console.log(course);
  // TODO if course is null or undefined, get it from local storage
  return (
    <Grid container columns={12} sx={{
      mt:'20px'
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
        courseProgression={courseProgression}/>
      </Grid>
      {/* Right panel */}
      <Grid item xs={0} md={5} lg={3}>

      </Grid>
    </Grid>
  )
}

export default Roadmap;