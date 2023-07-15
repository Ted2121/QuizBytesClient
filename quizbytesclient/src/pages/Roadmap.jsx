import React, { useState, useEffect } from 'react'
import { useContext } from 'react';
import { CourseContext } from '../context/CourseContext';
import { Grid } from '@mui/material';
import BuiltRoadmap from '../layouts/BuiltRoadmap';
import {getCompletedChaptersInCourseAsync} from '../service/userRequestsFacade';

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
    <Grid container columns={12}>
      {/* Left panel */}
      <Grid item xs={0} lg={3}>

      </Grid>
      {/* Overview panel */}
      <Grid item xs={0} md={1} >

      </Grid>
      {/* Built Roadmap panel */}
      <Grid item xs={12} md={6} lg={4}>
        <BuiltRoadmap 
        courseName={course?.courseName} 
        chaptersList={course?.chaptersList}
        courseProgression={courseProgression}/>
      </Grid>
      {/* Right panel */}
      <Grid item xs={0} md={5} lg={4}>

      </Grid>
    </Grid>
  )
}

export default Roadmap;