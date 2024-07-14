import React, { useState } from 'react';
import SparklesText from './magicui/SparklesText'; // Adjust the path as per your project structure

const Questions = ({ questions }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 10;

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

  const totalPages = Math.ceil(questions.length / questionsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <SparklesText text="By Satyam" className="text-center text-4xl mb-8" />
      <ol>
        {currentQuestions.map((question, index) => (
          <li key={question.id} className="mb-4">
            <SparklesText
              text={`${indexOfFirstQuestion + index + 1}. ${question.question}`}
              className="text-2xl mb-2"
            />
            <details>
              <summary>Show Answer</summary>
              <pre><code>{question.answer}</code></pre>
            </details>
          </li>
        ))}
      </ol>
      <div className="pagination-controls flex justify-center mt-8">
        <div className="join">
          {Array.from({ length: totalPages }, (_, index) => (
            <input
              key={index + 1}
              type="radio"
              name="options"
              aria-label={index + 1}
              className={`join-item btn btn-square ${currentPage === index + 1 ? 'btn-active' : ''}`}
              onClick={() => handleClick(index + 1)}
              defaultChecked={currentPage === index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
