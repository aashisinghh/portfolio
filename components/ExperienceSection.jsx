"use client";
import React from "react";

const timelineData = [
  {
    label: "UCI Molloi Imaging Physics Lab",
    date: "September 2024 – Present",
    title: "Machine Learning Researcher | UCI Molloi Imaging Physics Lab",
    content:
      "Contributing to deep learning-based cardiovascular disease diagnosis through heart chamber segmentation and non-invasive medical imaging techniques. Evaluating and improving CyTran, a GAN-based model, for translating contrast and non-contrast CT scans.",
    techStack: ["Python", "PyTorch", "Deep Learning", "Machine Learning"],
  },
  {
    label: "UCI HERO Lab",
    date: "September 2024 – Present",
    title: "Software Development Researcher | UCI HERO Lab",
    content:
      "Developing a deep learning system to reconstruct ECG signals from real-time facial video using cWGANs. Leveraging AWS SageMaker for model training, deployment, and experimentation.",
    techStack: ["Python", "Deep Learning", "AWS SageMaker", " AWS S3", "Machine Learning", "OpenCV"]    ,
  },
  {
    label: "UCI Design and Partnership Lab",
    date: "January 2024 – Present",
    title: "Software Developer | UCI Design and Partnership Lab",
    content:
      "Collaborating with Chan Zuckerberg Initiative to develop an AI dashboard for evaluating student performance using LLMs. Employing advanced prompt engineering techniques, such as few-shot learning, chain-of-thought prompting, to assess ~500 student responses on the AUHSD 5 C's performance rubric with 75% accuracy. Creating and refining ~130 domains/subdomains to evaluate diverse student skills based on AUHSD performance criteria.",
    techStack: ["Python", "OpenAI API", "Prompt Engineering", "LLMs'"]    ,
  },
  {
    label: "UnitedHealth Group",
    date: "June 2024 – August 2024",
    title: "Software Engineering Intern | UnitedHealth Group – Optum",
    content:
      "Engineered a next best activity recommendation ML model for UnitedHealthcare Rewards App users using Amazon Personalize, resulting in a 30% increase in user engagement based on preliminary testing. Utilized AWS Glue to process and transform over 5 million user data records into clean datasets for model training. Built and deployed a GraphQL API using AWS Lambda and AWS AppSync that exposed interaction with the ML model, integrating recommendation data within a frontend proof of concept. Implemented a Cloud Development Kit (CDK) to automate infrastructure as code (IaC) creating reusable modules for AWS services, and integrated a CI/CD pipeline with GitHub Actions, which led to a 35% faster deployment cycle.",
    techStack: ["AWS Lambda", "AWS AppSync", "AWS Personalize", "AWS Glue", "AWS S3", "AWS DynamoDB", "AWS CDK", "Python", "React Native", "GitHub Actions", "CI/CD", "ML"],
  },
  {
    label: "IMD Solutions",
    date: "January 2024 – May 2024",
    title: "Software Engineering Intern | IMD Solutions",
    content:
      "Developed a mobile application for the Automated Glucose Delivery Device (GlucoGuard), providing a flexible user interface for monitoring nocturnal hypoglycemic episodes and receiving alerts to enhance patient safety. Engineered a logistic regression ML model with an average precision score of 93.1% to predict optimal glucose administration times as a preventative measure, leveraging sandbox data from the Dexcom API and Firebase. Implemented a Flask server to simulate bluetooth communication on a Raspberry Pi, facilitating device interactions.",
    techStack: ["React Native", "TypeScript", "Python", "Flask", "Figma", "HTML/CSS", "ML", "Dexcom API", "Firebase", "Raspberry Pi"],
  },
  
];

const Timeline = () => {
  return (
    <main className="relative font-inter antialiased min-h-screen flex flex-col justify-center overflow-hidden" id="experience">
      <div className="relative max-w-4xl mx-auto p-8">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
         Experience
        </h2>
        <ol className="relative border-s-2 border-gray-200 dark:border-gray-700">
          {timelineData.map((item, index) => (
            <li key={index} className={`mb-10 ms-12`}>
              <span className="absolute flex items-center justify-center w-10 h-10 bg-gradient-to-br from-[#feac5e] via-[#c779d0] to-[#4bc0c8] rounded-full -start-5">
                <svg
                  className="w-4 h-4 white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.date}
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                {item.content}
              </p>
              <div className="flex flex-wrap mt-4 justify-start">
                {item.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
};

export default Timeline;
