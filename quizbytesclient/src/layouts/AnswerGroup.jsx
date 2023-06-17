import { FormGroup } from '@mui/material'
import {React} from 'react'
import Answer from '../components/Answer'

function AnswerGroup({ question, submittedAnswers, setSubmittedAnswers }) {

  const handleCheckboxChange = (event, label) => {
    const isChecked = event.target.checked;

    setSubmittedAnswers((prevSubmittedAnswers) => {
      const updatedAnswers = prevSubmittedAnswers.map((answer) => {
        if (answer.questionId === question.id) {
          const selectedOptions = answer.selectedOptions;
          if (isChecked) {
            // Add the selected option to the selectedOptions array
            selectedOptions.push(label);
          } else {
            // Remove the deselected option from the selectedOptions array
            const index = selectedOptions.indexOf(label);
            if (index !== -1) {
              selectedOptions.splice(index, 1);
            }
          }
        }
        return answer;
      });
      return updatedAnswers;
    });

    console.log(submittedAnswers)
  };

  return (
    <FormGroup sx={{ width: '100%', alignItems:'center' }}>
      {question.possibleAnswers.map((item, index) => (
        <Answer
          key={index}
          id={`${question.id}-${index}`}
          label={item}
          isChecked={submittedAnswers.some(
            (answer) =>
              answer.questionId === question.id &&
              answer.selectedOptions.includes(item)
          )}
          onCheckboxChange={(event) => handleCheckboxChange(event, item)}
        />
      ))}
    </FormGroup>
  );
}

export default AnswerGroup;