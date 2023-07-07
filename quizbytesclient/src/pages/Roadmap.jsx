import React from 'react'
import { useContext } from 'react';
import { CourseContext } from '../context/CourseContext';

function Roadmap() {
  const { course } = useContext(CourseContext);
  console.log(course);
  return (
    <div>Roadmap</div>
  )
}

export default Roadmap;