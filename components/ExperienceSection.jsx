import React from "react";

const timelineData = [
  {
    label: "UCI Molloi Imaging Physics Lab",
    date: "September 2024 – Present",
    title: "Machine Learning Researcher",
    location: "Irvine, CA",
    company: "Molloi Imaging Physics Lab @ UCI School of Medicine",
    content:
      "Contributing to deep learning-based cardiovascular disease diagnosis through heart chamber segmentation and non-invasive medical imaging techniques. Evaluating and improving CyTran, a GAN-based model, for translating contrast and non-contrast CT scans.",
    techStack: ["Python", "PyTorch", "Deep Learning", "Machine Learning"],
    logo: "/molloi-logo.jpg",
  },
  {
    label: "UCI HERO Lab",
    date: "September 2024 – Present",
    title: "Software Development Researcher",
    location: "Irvine, CA",
    company: "HERO Lab @ UCI School of Engineering",
    content:
      "Developing a deep learning system to reconstruct ECG signals from real-time facial video using cWGANs. Leveraging AWS SageMaker for model training, deployment, and experimentation.",
    techStack: ["Python", "Deep Learning", "AWS SageMaker", "AWS S3", "Machine Learning", "OpenCV"],
    logo: "/hero-logo.png",
  },
  {
    label: "UCI Design and Partnership Lab",
    date: "January 2024 – Present",
    title: "Software Developer",
    location: "Irvine, CA",
    company: "Design and Partnership Lab",
    content:
      "Collaborating with Chan Zuckerberg Initiative to develop an AI dashboard for evaluating student performance using LLMs. Employing advanced prompt engineering techniques, such as few-shot learning, chain-of-thought prompting, to assess ~500 student responses on the AUHSD 5 C's performance rubric with 75% accuracy. Creating and refining ~130 domains/subdomains to evaluate diverse student skills based on AUHSD performance criteria.",
    techStack: ["Python", "OpenAI API", "Prompt Engineering", "LLMs"],
    logo: "/daplab-logo.jpg",
  },
  {
    label: "UnitedHealth Group",
    date: "June 2024 – August 2024",
    title: "Software Engineering Intern",
    location: "Boston, MA",
    company: "UnitedHealth Group – Optum",
    content:
      "Engineered a next best activity recommendation ML model for UnitedHealthcare Rewards App users using Amazon Personalize, resulting in a 30% increase in user engagement based on preliminary testing. Utilized AWS Glue to process and transform over 5 million user data records into clean datasets for model training. Built and deployed a GraphQL API using AWS Lambda and AWS AppSync that exposed interaction with the ML model, integrating recommendation data within a frontend proof of concept. Implemented a Cloud Development Kit (CDK) to automate infrastructure as code (IaC) creating reusable modules for AWS services, and integrated a CI/CD pipeline with GitHub Actions, which led to a 35% faster deployment cycle.",
    techStack: ["AWS Lambda", "AWS AppSync", "AWS Personalize", "AWS Glue", "AWS S3", "AWS DynamoDB", "AWS CDK", "Python", "React Native", "GitHub Actions", "CI/CD", "ML"],
    logo: "/unitedhealthgroup-logo.jpg",
  },
  {
    label: "IMD Solutions",
    date: "January 2024 – May 2024",
    title: "Software Engineering Intern",
    location: "Newport Beach, CA",
    company: "IMD Solutions",
    content:
      "Developed a mobile application for the Automated Glucose Delivery Device (GlucoGuard), providing a flexible user interface for monitoring nocturnal hypoglycemic episodes and receiving alerts to enhance patient safety. Engineered a logistic regression ML model with an average precision score of 93.1% to predict optimal glucose administration times as a preventative measure, leveraging sandbox data from the Dexcom API and Firebase. Implemented a Flask server to simulate bluetooth communication on a Raspberry Pi, facilitating device interactions.",
    techStack: ["React Native", "TypeScript", "Python", "Flask", "Figma", "HTML/CSS", "ML", "Dexcom API", "Firebase", "Raspberry Pi"],
    // logo: "/path/to/uci-logo.png",
  },
];

const Timeline = () => {
  return (
    <main className="relative font-inter antialiased min-h-screen flex flex-col justify-center overflow-hidden" id="experience">
      <div className="relative max-w-4xl mx-auto p-8">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">Experience</h2>
        <ol className="relative border-s-2 border-gray-200 dark:border-gray-700">
          {timelineData.map((item, index) => (
            <li key={index} className="mb-10 ms-16">
              <div className="bg-[#121212] p-6 rounded-lg shadow-md">
                <div className="flex flex-wrap justify-between items-center mb-4">
                  <span className="absolute flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full -start-8">
                    {/* Check if the logo exists, otherwise fallback to default logo */}
                    <img
                      src={item.logo || "/briefcase-icon.svg"} // Use custom logo or fallback
                      alt="Logo"
                      className={`${
                        item.logo ? "w-16 h-16 object-cover rounded-full" : "w-8 h-8"
                      }`}
                    />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</span>
                    <span className="text-md text-gray-400 dark:text-gray-500">{item.company}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-sm text-gray-400 dark:text-gray-500">{item.date}</span>
                    <span className="text-sm text-gray-400 dark:text-gray-500">{item.location}</span>
                  </div>
                </div>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400 mb-4">
                  {item.content}
                </p>
                <div className="flex flex-wrap mt-4 justify-start">
                  {item.techStack.map((tech, idx) => (
                    <span key={idx} className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full mr-2 mb-2">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
};

export default Timeline;
