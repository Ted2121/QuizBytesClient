const verifyQuizAnswers = (data, quizState) => {
    const verifiedAnswers = { correctAnswers: [], wrongAnswers: [] };
  
    data.questions.forEach((question, index) => {
      const submittedAnswer = quizState.submittedAnswers[index].selectedOptions;
      const correctAnswers = question.correctAnswers;
  
      if (arraysEqual(submittedAnswer, correctAnswers)) {
        verifiedAnswers.correctAnswers.push(question);
      } else {
        verifiedAnswers.wrongAnswers.push(question);
      }
    });
  
    return verifiedAnswers;
  };
  
  // Helper function to compare arrays for equality
  const arraysEqual = (array1, array2) => {
    if (array1.length !== array2.length) {
      return false;
    }
  
    const sortedArray1 = array1.sort();
    const sortedArray2 = array2.sort();
  
    for (let i = 0; i < sortedArray1.length; i++) {
      if (sortedArray1[i] !== sortedArray2[i]) {
        return false;
      }
    }
  
    return true;
  };