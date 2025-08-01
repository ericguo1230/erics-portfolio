const projects: Projects[] = [
    {
        name: "Forecasting Cocoa Price",
        date: "Feb 2025 - Apr 2025",
        description: "Using time series models and machine learning models to forecast cocoa price",
        link: "https://docs.google.com/document/d/1ET9jRQvJmYWa6kNtjZoijTWou8ecyBM9-4Umm05HVXo/edit?usp=sharing",
        img:'cocoa-price.png',
        summary: [
            "Used R to perform data preparation and model creation / fitting to predict Cocoa Price",
            "Tested models like ARIMA, ARIMAX, ARIMAX + GARCH and Random Forest Machine Learning models",
            "Performed complex data preparation steps such as differencing, BoxCox transformation and aggregating data"
        ]
    },
    {
        name: "Scriptorium",
        date: "Sept 2024 - Dec 2024",
        img: 'scriptorium-logo.png',
        link: "https://github.com/ericguo1230/csc309-scriptorium-pp2",
        description: "Created Next.js Website that allowed users to execute code and create blogs using React, Typescript, Prisma",
        summary: [
            "Developed a code execution feature in Next.js and TypeScript, supporting multi-language code execution with syntax highlighting.",
            "Built and tested SQLite database & RESTful APIs with JWT authentication, integrated SwaggerUI for documentation, and used OAuth for secure user access.",
            "Designed responsive frontend features with React.js, deployed with AWS",
        ]
    },
    {
        name: "Predicting Alzheimer's Disease",
        date: "Sept 2024 - Dec 2024",
        description: "Created and tested multiple machine learning models to attempt to predict Alzheimers diagnostic given patient data",
        img: 'alzheimers-logo.png',
        link: "https://www.kaggle.com/code/ericguo1230/knn-for-alzheimers",
        summary: [
            "Conducted data cleaning on a large dataset with over 32 variables, performing exploratory analysis and visualizations using Python and Pandas. Presented findings in PowerPoint.",
            "Collaborated with three team members to evaluate multiple models trained with sklearn, including weighted K nearest neighbors and Random Forest Boosting, achieving a prediction accuracy of 95%.",
            "Applied statistical techniques such as cross-validation and backward stepwise selection for feature selection and fine-tuned model parameters to optimize performance.",
        ]
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
            "Implemented a registration feature with clean architecture and JQuery.",
            "Collaborated in a team of 8 using GitHub for version control and weekly online meetings for coordination.",
        ]
    }
]

interface Projects {
    name: string;
    date: string;
    description: string;
    link?: string;
    img?: string;
    summary: string[];
}

export default projects