import { FormGroup } from '@mui/material'
import {React, useState} from 'react'
import Answer from '../components/Answer'

function AnswerGroup({ question }) {
    const [checkedAnswers, setCheckedAnswers] = useState([]);
  
    const handleCheckboxChange = (event, answerId) => {
      const isChecked = event.target.checked;
  
      if (isChecked) {
        setCheckedAnswers((prevState) => [...prevState, answerId]);
      } else {
        setCheckedAnswers((prevState) => prevState.filter((id) => id !== answerId));
      }
    };
  
    return (
      <FormGroup sx={{
        width:'100%'
      }}>
        {question.possibleAnswers.map((item, index) => (
          <Answer
            key={index}
            id={`${question.id}-${index}`}
            label={item}
            isChecked={checkedAnswers.includes(`${question.id}-${index}`)}
            onCheckboxChange={(event) => handleCheckboxChange(event, `${question.id}-${index}`)}
          />
        ))}
      </FormGroup>
    );
  }

export default AnswerGroup;