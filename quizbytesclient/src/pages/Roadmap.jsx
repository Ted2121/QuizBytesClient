import React, { useState, useEffect, useCallback, useContext } from 'react'
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
import { getQuizAsync } from '../service/quizRequestsFacade';
import useAuth from '../hooks/useAuth';

function Roadmap() {
  const { course } = useContext(CourseContext);
  const [isLoading, setIsLoading] = useState(true);
  const [courseProgression, setCourseProgression] = useState(null);
  const [openChapter, setOpenChapter] = useState(course?.chaptersList[0]);
  const [difficultyLevel, setDifficultyLevel] = useState(1);

  // mobile drawer states
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isQuestsOpen, setIsQuestsOpen] = useState(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/select";

  const isMobileDevice = useMediaQuery({ maxWidth: 899 });

  const { auth } = useAuth();

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
        console.log(progression);
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


  function handleSetOpenChapter(index) {
    setOpenChapter(course?.chaptersList[index]);

    if (isMobileDevice) {
      handleDescriptionToggleClick();
    }
  }

  function handleDifficultyChange(difficulty) {
    setDifficultyLevel(difficulty);
  }

  async function handleStartQuizClick(fromRoadmap) {
    if (!auth?.user) {
      // If the user is not authenticated, navigate to the login page
      navigate('/login');
    } else {
      // The user is authenticated, proceed to start the quiz
      try {
        const data = await getQuizAsync(
          openChapter?.title,
          difficultyLevel,
          20,
          auth?.token
        );
        // Show the Quiz component
        // return <Quiz data={data} />;
        navigate('/quiz', { state: { quizData: data, fromRoadmap } });
      } catch (error) {
        console.error(error);
        navigate('/server-error');
      }
    }
  }

  const handleStartQuizClickCallback = useCallback(() => {
    handleStartQuizClick(true); // Set to true since the request is from the Roadmap component
  }, [auth, openChapter, difficultyLevel]);

  useEffect(() => {
    // Check if the user has successfully authenticated and the request was from Roadmap.
    // If yes, navigate back to the Roadmap component.
    if (location.state?.authenticated && location.state?.fromRoadmap) {
      // Replace the '/login' path with the appropriate path to the Roadmap component
      navigate('/roadmap', { replace: true });
    }
  }, [location.state, navigate]);

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
          <RightSideRoadmap
            onStartQuizClick={handleStartQuizClick}
            fontColor='black.main'
            openChapter={openChapter}
            onDifficultyChange={handleDifficultyChange}
            selectedDifficulty={difficultyLevel} />
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
        content={<RightSideRoadmap
          onDifficultyChange={handleDifficultyChange}
          selectedDifficulty={difficultyLevel}
          onStartQuizClick={() => handleStartQuizClickCallback(true)}
          paddingTop='10px' cardElevation={0}
          fontColor='white.main'
          openChapter={openChapter} />} />
      {/* Stats drawer */}
      <MobileDrawer
        isOpen={isStatsOpen}
        onToggleClick={handleStatsToggleClick}
        // TODO userStats
        content={<RoadmapPlayerStats cardElevation={0} userStats={null} />} />
      {/* Quests drawer */}
      <MobileDrawer
        isOpen={isQuestsOpen}
        onToggleClick={handleQuestsToggleClick}
        content={<RoadmapQuests cardElevation={0} />} />
      {/* Leaderboard drawer */}
      <MobileDrawer
        isOpen={isLeaderboardOpen}
        onToggleClick={handleLeaderboardToggleClick}
        content={<RoadmapLeaderboard cardElevation={0} />} />
    </>
  )
}

export default Roadmap;