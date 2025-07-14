const experiences: Experiences = [
    {
    company: "RBC Borealis",
    role: "Machine Learning Software Engineer",
    period: "May 2025 - Present",
    summary: "Worked on ATOM Foundation model",
    timeline: "end",
    details: [
        "Developed a YAML CI/CD pipeline in GitHub to deploy WEB API and Dagster Workspace to QA OCP Environment and run image safety scans",
        "Leverage layering techniques and analysis to optimize Docker images, reducing image size by 50% and improving deployment speed.",
        "Develop middleware for web api service to serve ATOM model embeddings and implement OAuth2.0 authentication",
    ]
  },
  {
    company: "NOKIA Corporation",
    role: "Network Automation",
    period: "Apr 2024 - Aug 2024",
    summary: "Worked on building scalable product testing and deployment framework",
    timeline: "middle",
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
    period: "Aor 2023 - Aug 2023",
    summary: "Work on custom features for Network Automation Platform product",
    timeline: "start",
    details: [
        "Tested Network Automation Platform (NAP) by simulating deployments in Linux VM",
        "Programmed a custom script using Python and Excel to handle client-specific configuration uploads, resulting in more streamlined and error-free automation",
        "Utilized Postman to test RESTful API functionality for uploading and retrieving configurations, ensuring seamless communication with MongoDB",
        "Created a script with Pandas to export configurations into a custom Excel spreadsheet (.xlsx) for company reporting."
    ]
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  timeline: string;
  details: string[];
};

export type Experiences = Experience[];

export default experiences