import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Quiz() {
  const { eventId } = useParams();
  const [quizData, setQuizData] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Fetch quiz data dynamically based on the eventId
    import(`../quizzes/${eventId}Quiz.json`)
      .then((data) => setQuizData(data))
      .catch(() => setQuizData(null));
  }, [eventId]);

  const handleAnswerSelect = (questionIndex, answer) => {
    setSelectedAnswers({ ...selectedAnswers, [questionIndex]: answer });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (!quizData) {
    return (
      <div className="text-center text-lg text-gray-600 py-16">
        Quiz data not found for this topic.
      </div>
    );
  }

  return (
    <div className="bg-base-100 p-8 sm:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-primary mb-8">
          {quizData.title}
        </h1>
        {quizData.questions.map((question, index) => (
          <div key={index} className="mb-6">
            <p className="text-lg font-semibold mb-4">{question.question}</p>
            <div className="space-y-2">
              {question.options.map((option, optIndex) => {
                const isSelected = selectedAnswers[index] === option;
                const isCorrect = submitted && option === question.answer;
                const isIncorrect =
                  submitted && isSelected && option !== question.answer;

                return (
                  <label
                    key={optIndex}
                    className={`block p-4 border rounded-lg cursor-pointer ${
                      isSelected ? "bg-primary text-white" : "bg-base-200"
                    } ${isCorrect ? "border-green-500" : ""} ${
                      isIncorrect ? "border-red-500" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      onChange={() => handleAnswerSelect(index, option)}
                      className="hidden"
                      disabled={submitted}
                    />
                    {option}
                  </label>
                );
              })}
            </div>
            {submitted && (
              <p
                className={`mt-2 text-sm font-bold ${
                  selectedAnswers[index] === question.answer
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {selectedAnswers[index] === question.answer
                  ? "Correct"
                  : `Incorrect. The correct answer is "${question.answer}".`}
              </p>
            )}
          </div>
        ))}
        {!submitted ? (
          <button
            className="mt-6 px-6 py-2 bg-accent text-white rounded-lg"
            onClick={handleSubmit}
          >
            Submit Quiz
          </button>
        ) : (
          <div className="mt-6 text-lg font-semibold">
            You scored{" "}
            {
              quizData.questions.filter(
                (q, i) => selectedAnswers[i] === q.answer
              ).length
            }{" "}
            out of {quizData.questions.length}.
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
