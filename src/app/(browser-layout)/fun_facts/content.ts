const facts: string[] = [
    "Lebron is my favorite basketball player, we share the same birthday!",
    "I really want a Canadian NHL team to win the Stanley Cup",
    "I have been coding since I was 12 years old",
    "My favorite movie recently is F1: The Movie",
    "I love spicy food",
    "I played point guard in high school"
]

interface Courses{
    name: string;
    skills: string;
    description?: string;
}

const courses: Courses[] = [
    {
        name:"CSC369",
        skills: "Operating Systems: process and concurrency - synchronization, mutual exclusion, deadlock. Memory management, file systems, process scheduling, threads, and protection"
    },
    {
        name:"STA414",
        skills: "Machine Learning neural networks, variational autoencoders, and supervised and unsupervised learning"
    },
    {
        name: "CSC343",
        skills: "SQL, Relation Algebra, Designing Databases and Advanced Queries",
        description: "Introduction to database management systems. The relational data model. Relational algebra. Application programming with SQL. Integrity constraints, normal forms, and database design."
    },
    {
        name: "CSC309",
        skills: "Web development and Application deployment - React, Javascript, Docker, Prisma",
        description: "Full stack programming including React, Javascript, Typescript and Docker. Learned Async programming and JWT tokens for authentication and authorization."
    },
    {
        name: "STA314",
        skills: "Machine Learning Models and their applications",
        description: "Cross-validation; classification, regression, and logistic regression; principal components analysis; stochastic gradient descent; decision trees and random forests; k-means clustering and nearest neighbour methods."
    },
    {
        name: "STA457",
        skills: "Time Series Data Analysis",
        description: "Descriptive methods, filtering and smoothing time series, theory of stationary processes, identification and estimation of time series models, forecasting, seasonal adjustment, spectral estimation, bivariate time series models."
    },
    {
        name: "CSC263",
        skills: "Data Structures and Algorithms",
        description: "Learned about common data structures like Graphs, Trees, AVL Trees, Union Sets, Hash Maps and their corresponding algorithms."
    },
    {
        name: "CSC209",
        skills: "Software Tools and Systems Programming in C and some Shell",
        description: "Creating and using software tools, pipes and filters, file processing, shell programming, processes, system calls, signals, basic network programming."
    },
    {
        name: "CSC207",
        skills: "Object Oriented Programming in Java",
        description: "Version control, unit testing, refactoring, object-oriented design and development, design patterns, advanced IDE usage, regular expressions, and reflection."
    }
]

export { facts, courses };