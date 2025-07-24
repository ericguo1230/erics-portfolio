const experiences: Experiences = [
    {
    company: "RBC Borealis",
    role: "Machine Learning Software Engineer",
    period: "May 2025 - Present",
    summary: "Working on ATOM Foundation model!",
    timeline: "end",
    logo: "/rbcborealis-logo.png",
    details: [
        "Developed a YAML CI/CD pipeline in GitHub to deploy WEB API and Dagster Workspace to QA OCP Environment and run image safety scans",
        "Leverage layering techniques and analysis to optimize Docker images, reducing image size by 50% and improving deployment speed.",
        "Develop middleware for Web API service to serve ATOM model embeddings and implement OAuth2.0 authentication in under 100ms and performed unit and load testing with Pytest and Postman",
        "Building Dagster pipelines to move client data to Amazon S3 & Node in a PyArrow and Parquet format to allow for efficient reading and querying with DuckDB in downstream applications",
    ]
  },
  {
    company: "NOKIA Corporation",
    role: "Network Automation",
    period: "Apr 2024 - Aug 2024",
    summary: "Worked on building scalable product testing and deployment framework!",
    timeline: "middle",
    logo: "/NOKIA-logo.png",
    details: [
        "Developed a YAML CI/CD pipeline in GitLab to run unit tests for template naming convention across three international repositories",
        "Achieved a 97% test coverage by employing a test-driven development (TDD) approach using the PyTest framework and Regex",
        "Migrated Docker deployment of a company product to Kubernetes via Rancher using HELM charts running on Ubuntu, saving the company significant time by optimizing container orchestration.",
        "Built and demonstrated CI/CD deployment scripts to an international team of 12, showcasing Rancher’s deployment and container management capabilities.",
    ]
  },
  {
    company: "NOKIA Corporation",
    role: "Network Automation",
    period: "Apr 2023 - Aug 2023",
    summary: "Worked on custom features for Network Automation Platform product",
    timeline: "start",
    logo: "/NOKIA-logo.png",
    details: [
        "Tested Network Automation Platform (NAP) by simulating deployments in Linux VM",
        "Programmed a custom script using Python and Excel to handle client-specific configuration uploads, resulting in more streamlined and error-free automation",
        "Utilized Postman to test RESTful API functionality for uploading and retrieving configurations, ensuring seamless communication with MongoDB",
        "Created a script with Pandas to export configurations into a custom Excel spreadsheet (.xlsx) for company reporting."
    ]
  },
  {
    company: "LUCI.AI Inc.",
    role: "Software Engineer",
    period: "Apr 2022 - Aug 2022",
    summary: "Database Migration from MongoDB to PostgreSQL",
    timeline: "start",
    logo: "luci_ai_logo.png",
    details: [
        "Migrated IoT data from MongoDB to PostgreSQL using Node.js and Prisma, improving database efficiency by 30%",
        "Developed & tested RESTful APIs with JavaScript and Postman, ensuring system reliability and scalability.",
        "Streamlined data storage across multiple regions using SQL, reducing retrieval times by 15%.",
        "Collaborated in daily standups to review project goals and track progress effectively"
    ]
  },
  {
    company: "Joined University College Dragon Boat Club!",
    role: "Paddler",
    period: "Feb 2022",
    summary: "Joined Competitive Dragon Boat Club at UofT!",
    timeline: "start",
    logo: "/UC.png",
    details: [
        "Competed in several regattas and finished top in many",
        "Traveled to Montreal to compete in National Championship",
        "Developed love of working out! Started training beginners"
    ]
  },
  {
    company: "Enrolled at University of Toronto!",
    role: "Undergraduate Student",
    period: "Sept 2021",
    summary: "Studying Statistics and Computer Science",
    timeline: "start",
    logo: "/uoft-logo.png",
    details: [
        "Dean's List for 2021-2022 and 2024-2025 academic years",
        "Worked on various projects in Python, Java, Javascript/Typescript, R, YAML and C",
        "Completed courses in Data Structures, Algorithms, Databases, and Machine Learning",
        "Worked part-time for the Facualty of Kinesiology as a Physical Activity Facilitator ensuring gym members were safe and following proper gym etiquette",
    ]
  },
  {
    company: "Started Playing Competitive Basketball",
    role: "Ottawa Next Level",
    period: "Sept 2014",
    summary: "Played AAA Basketball in Ottawa",
    timeline: "start",
    logo: "/ONL.jpg",
    details: [
        "Played competitive basketball for 4 years until Grade 10",
        "Joined school varsity team until Grade 10 including Junior Varisty and Middle School",
        "Eventually started coaching kids how to play teaching up to a class size of 24"
    ]
  }
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  timeline: string;
  logo?: string;
  details: string[];
};

export type Experiences = Experience[];

export default experiences