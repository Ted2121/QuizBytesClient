import React, { useState, useEffect } from 'react'
import { useContext } from 'react';
import { CourseContext } from '../context/CourseContext';
import { Box, Grid, Typography } from '@mui/material';
import BuiltRoadmap from '../layouts/BuiltRoadmap';
import { getCompletedChaptersInCourseAsync } from '../service/userRequestsFacade';
import LeftSideRoadmap from '../layouts/LeftSideRoadmap';
import RightSideRoadmap from '../layouts/RightSideRoadmap';
import { useNavigate, useLocation } from 'react-router-dom';
import RoadmapBottomBar from '../components/RoadmapBottomBar';
import { useMediaQuery } from 'react-responsive';
import MobileDrawer from '../components/MobileDrawer';
import RoadmapPlayerStats from '../components/RoadmapPlayerStats';
import RoadmapQuests from '../components/RoadmapQuests';
import RoadmapLeaderboard from '../components/RoadmapLeaderboard';

function Roadmap() {
  const { course } = useContext(CourseContext);
  const [isLoading, setIsLoading] = useState(true);
  const [courseProgression, setCourseProgression] = useState(null);
  const [openChapter, setOpenChapter] = useState(course?.chaptersList[0]);

  // mobile drawer states
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isQuestsOpen, setIsQuestsOpen] = useState(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/select";

  const isMobileDevice = useMediaQuery({ maxWidth: 899 });

  function handleStatsToggleClick() {
    setIsStatsOpen((prevState) => !prevState);
  }

  function handleQuestsToggleClick() {
    setIsQuestsOpen((prevState) => !prevState);
  }

  function handleLeaderboardToggleClick() {
    setIsLeaderboardOpen((prevState) => !prevState);
  }

  function handleDescriptionToggleClick() {
    setIsDescriptionOpen((prevState) => !prevState);
  }

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
    setOpenChapter(course?.chaptersList[index]);

    if(isMobileDevice) {
      handleDescriptionToggleClick();
    }
  }

  if (isLoading) {
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

  // console.log(isDescriptionOpen);

  return (
    <>
      <Grid container columns={12} sx={{
        mt: '20px'
      }}>
        {/* Left panel */}
        <Grid item xxs={0} lg={3} sx={{
          display: { xxs: 'none', lg: 'block' }
        }}>
          <LeftSideRoadmap />
        </Grid>
        {/* Built Roadmap panel */}
        <Grid item xxs={12} md={7} lg={6}>
          <BuiltRoadmap
            courseName={course?.courseName}
            chaptersList={course?.chaptersList}
            courseProgression={courseProgression}
            onSetOpenChapter={handleSetOpenChapter} />
        </Grid>
        {/* Right panel */}
        <Grid item xxs={0} md={5} lg={3} sx={{
          display: { xxs: 'none', md: 'block' }
        }}>
          <RightSideRoadmap fontColor='black.main' openChapter={openChapter} />
        </Grid>
      </Grid>
      <Box sx={{
        display: { xxs: 'block', lg: 'none' },
        position: 'fixed',
        bottom: 0,
      }}>
        <RoadmapBottomBar
          onStatsToggleClick={handleStatsToggleClick}
          onQuestsToggleClick={handleQuestsToggleClick}
          onLeaderboardToggleClick={handleLeaderboardToggleClick} />
      </Box>
      {/* Description drawer */}
      <MobileDrawer 
      isOpen={isDescriptionOpen}
      onToggleClick={handleDescriptionToggleClick}
      content={<RightSideRoadmap paddingTop='10px' cardElevation={0} fontColor='white.main' openChapter={openChapter} />}/>
      {/* Stats drawer */}
      <MobileDrawer 
      isOpen={isStatsOpen}
      onToggleClick={handleStatsToggleClick}
      // TODO userStats
      content={<RoadmapPlayerStats cardElevation={0} userStats={null}/>}/> 
      {/* Quests drawer */}
      <MobileDrawer 
      isOpen={isQuestsOpen}
      onToggleClick={handleQuestsToggleClick}
      content={<RoadmapQuests cardElevation={0} />}/>
      {/* Leaderboard drawer */}
      <MobileDrawer 
      isOpen={isLeaderboardOpen}
      onToggleClick={handleLeaderboardToggleClick}
      content={<RoadmapLeaderboard cardElevation={0} />}/>
    </>
  )
}

export default Roadmap;