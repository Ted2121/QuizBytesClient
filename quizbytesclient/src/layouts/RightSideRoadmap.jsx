import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Box, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import RoadmapChapterDescription from '../components/RoadmapChapterDescription';

function RightSideRoadmap({ selectedDifficulty, onDifficultyChange, onStartQuizClick, paddingTop, cardElevation, fontColor, openChapter }) {
  const pt = paddingTop ? paddingTop : '0px';

  function handleOnDifficultyChange(event) {
    onDifficultyChange(Number(event.target.value));
  }

  const CustomRadioIcon = (props) => (
    <Radio
      {...props}
      sx={{
        color: props.checked ? 'primary.main' : 'white.main', 
      }}
    />
  );

  const difficultySetter = (
    <>
    <Divider sx={{
      backgroundColor:'white.main',
      width:'60%',
      mt: '20px'
    }}/>
      <FormControl sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: '20px'
      }}>
        <FormLabel id="difficultyLevel" sx={{
          color: 'white.main',
          '&:not(:focus)': {
            color: 'white.main',
          },
          '&:focus': {
            color: 'white.main',
          },
        }}>
          Difficulty
        </FormLabel>
        <RadioGroup
          aria-labelledby="difficulty-level"
          defaultValue="easy"
          name="difficulty-radio-group"
          value={selectedDifficulty}
          onChange={handleOnDifficultyChange}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            color: 'white.main'
          }}
        >
          <FormControlLabel value={1} control={<CustomRadioIcon />} label="easy" />
          <FormControlLabel value={2} control={<CustomRadioIcon />} label="medium" />
          <FormControlLabel value={3} control={<CustomRadioIcon />} label="hard" />
        </RadioGroup>
      </FormControl>
    </>
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: '0px 20px',
        pt: pt
      }}>
      <SectionTitle fontColor={fontColor} text={openChapter?.title} />
      <RoadmapChapterDescription difficultySetter={difficultySetter} onStartQuizClick={onStartQuizClick} cardElevation={cardElevation} description={openChapter?.description} />
    </Box>
  )
}

export default RightSideRoadmap;