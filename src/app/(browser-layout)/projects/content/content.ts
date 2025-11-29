const projects: Projects[] = [
    {
        name: "Columns Game",
        date: "Oct 2025 - Dec 2025",
        description: "Designed Amazon-like marketplace application using Java and SOLID Principles",
        img: "columns_gameplay.png",
        link: "https://github.com/ericguo1230/Columns-in-Assembly",
        summary: [
            "Creating a Columns game using Assembly with features like piece rotation, line clearing, and gravity",
            "Used memory-mapped I/O to interface with Bitmap Display and keyboard input for real-time gameplay",
        ],
        languages: ["Assembly"],
        frameworks: ["Git", "Saturn"]
    },
    {
        name: "Forecasting Cocoa Price",
        date: "Feb 2025 - Apr 2025",
        description: "Using time series models and machine learning models to forecast cocoa price",
        link: "https://docs.google.com/document/d/1ET9jRQvJmYWa6kNtjZoijTWou8ecyBM9-4Umm05HVXo/edit?usp=sharing",
        img:'cocoa-price.png',
        summary: [
            "Used R to perform data preparation and model creation / fitting to predict Cocoa Price",
            "Tested models like ARIMA, ARIMAX, ARIMAX + GARCH and Random Forest Machine Learning models",
        ],
        languages: ["R", "Python"],
        frameworks: ["Scikit-learn", "Pandas"]
    },
    {
        name: "Scriptorium",
        date: "Sept 2024 - Dec 2024",
        img: 'scriptorium-logo.png',
        link: "https://github.com/ericguo1230/project_scriptorium",
        description: "Created Next.js Website that allowed users to execute code and create blogs using React, Typescript, Prisma",
        summary: [
            "Developed a code execution feature in Next.js and TypeScript, supporting multi-language code execution with syntax highlighting.",
            "Built and tested SQLite database & RESTful APIs with JWT authentication, integrated SwaggerUI for documentation, and used OAuth for secure user access.",
        ],
        languages: ["SH", "TypeScript", "SQL"],
        frameworks: ["Next.js", "React", "Docker", "AWS", "Prisma"]
    },
    {
        name: "Predicting Alzheimer's Disease",
        date: "Sept 2024 - Dec 2024",
        description: "Created and tested multiple machine learning models to attempt to predict Alzheimers diagnostic given patient data",
        img: 'alzheimers-logo.png',
        link: "https://www.kaggle.com/code/ericguo1230/knn-for-alzheimers",
        summary: [
            "Collaborated with 3 team members to create ML models including weighted KNN and Random Forest. Achieving an accuracy of 97%",
            "Applied statistical techniques like cross-validation, stepwise feature selection, and fine-tuned model parameters.",
        ],
        languages: ["Python"],
        frameworks: ["Pandas", "Scikit-learn", "Matplotlib"]
    },
    {
        name: "Scamazon Marketplace",
        date: "Sept 2022 - Dec 2022",
        description: "Designed Amazon-like marketplace application using Java and SOLID Principles",
        img: "scamazonLogo.png",
        link: "https://github.com/ericguo1230/course-project-scamazon-ca-group-118/tree/main",
        summary: [
            "Developed an online buy-sell marketplace app in Java, adhering to SOLID principles.",
            "Achieved 90% unit test coverage using JUnit for comprehensive application testing.",
            "Collaborated in a team of 8 using GitHub for version control and weekly online meetings for coordination.",
        ],
        languages: ["Java"],
        frameworks: ["JUnit", "JQuery"]
    }
]

interface Projects {
    name: string;
    date: string;
    description: string;
    link?: string;
    img?: string;
    summary: string[];
    languages: string[];
    frameworks: string[];
}

export default projects

export const language_to_color: {[key:string]: string} = {
      "python": "badge-success",
      "r": "badge-neutral",
      "java": "badge-warning",
      "typescript": "badge-info",
      "sql": "badge-accent",
      "sh": "badge-secondary",
      "assembly": "badge-error",
}
