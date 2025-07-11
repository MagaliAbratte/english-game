import { useState } from 'react';
import './IrregularVerbs.css';

const questions = [
  {
    sentence: "If I ____ my birth chart earlier, I would have understood my emotions better.",
    options: ["study", "studied", "had studied"],
    answer: "had studied",
  },
  {
    sentence: "She ____ her tarot cards every morning before work.",
    options: ["reads", "read", "is reading"],
    answer: "reads",
  },
  {
    sentence: "They have ____ a lot about their moon sign lately.",
    options: ["learn", "learned", "learning"],
    answer: "learned",
  },
  {
    sentence: "While Mercury was in retrograde, I was ____ very anxious.",
    options: ["feel", "felt", "feeling"],
    answer: "feeling",
  },
  {
    sentence: "If Mercury ____ retrograde, I wouldn’t have signed that contract.",
    options: ["was", "were", "is"],
    answer: "were",
  },
  {
    sentence: "Right now, she is ____ a ritual for the full moon.",
    options: ["do", "doing", "did"],
    answer: "doing",
  },
];

export const IrregularVerbsGame = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleOptionClick = (option) => {
    setSelected(option);
    const correct = option === questions[current].answer;
    setIsCorrect(correct);
    if (correct) setScore((prev) => prev + 1);
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setSelected(null);
      setIsCorrect(null);
      setCurrent((prev) => prev + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="game-container">
      <div className="quiz-box">
        {!finished ? (
          <>
            <div className="question-block">
              <h2 className="question-title">Complete the sentence:</h2>
              <p className="sentence">{questions[current].sentence}</p>

              <div className="options">
                {questions[current].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionClick(option)}
                    className={`option-button ${
                      selected === option
                        ? isCorrect
                          ? 'correct'
                          : 'incorrect'
                        : ''
                    }`}
                    disabled={!!selected}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div
              className={`feedback ${
                !selected ? 'hidden' : isCorrect ? 'text-green' : 'text-red'
              }`}
            >
              {selected &&
                (isCorrect
                  ? 'Correct! 🌟'
                  : `Incorrect. The correct answer is "${questions[current].answer}".`)}
            </div>

            <button
              className="next-button"
              onClick={handleNext}
              disabled={!selected}
            >
              Next
            </button>

            <div className="score">
              Score: {score} / {questions.length}
            </div>
          </>
        ) : (
          <div className="result">
            <h2>✨ Quiz Finished! ✨</h2>
            <p>You got {score} out of {questions.length} right.</p>
            <p className="astro-message">“The stars may guide you, but your effort makes the real difference.”</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IrregularVerbsGame;
