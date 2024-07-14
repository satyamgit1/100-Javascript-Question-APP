import React from "react";
import Questions from "../components/Questions";
import fs from "fs";
import path from "path";
import SparklesText from "../components/magicui/SparklesText"; // Adjust the path as per your project structure
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";

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
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Javascript Questions <br /> by Satyam Singh
        </motion.h1>
      </LampContainer>
      <SparklesText
        text="JavaScript Coding Questions"
        className="text-center text-4xl mb-8"
      />
      <Questions questions={questions} />
    </div>
  );
};

export default Home;
