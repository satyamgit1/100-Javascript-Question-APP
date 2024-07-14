import React from "react";
import Questions from "../components/Questions";
import fs from "fs";
import path from "path";
import SparklesText from "../components/magicui/SparklesText"; // Adjust the path as per your project structure

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "questions.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const questions = JSON.parse(jsonData);

  return {
    props: {
      questions,
    },
  };
}

const Home = ({ questions }) => {
  return (
    <div>
      <SparklesText
        text="JavaScript Coding Questions
"
        className="text-center text-4xl mb-8"
      />
      <Questions questions={questions} />
    </div>
  );
};

export default Home;
