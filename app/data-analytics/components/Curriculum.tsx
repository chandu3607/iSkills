"use client";

import { useState } from "react";

export default function Curriculum() {
  const rawData = [
    {
      heading: "Introduction to the Course",
      Lessons: "Course induction",
    },
    {
      heading: "Introduction to the Course",
      Lessons: "course overview and dashboard description",
    },
    {
      heading: "Introduction to the Course",
      Lessons: "Introduction of data industry",
    },
    {
      heading: "Introduction to Data Analytics",
      Lessons: "What is Data Analytics?",
    },
    {
      heading: "Introduction to Data Analytics",
      Lessons: "What is the importance of Data Analytics?",
    },
    {
      heading: "Introduction to Data Analytics",
      Lessons: "How Data Analytics is helping businesses?",
    },
    {
      heading: "Introduction to Data Analytics",
      Lessons: "Data Analytics Life Cycle",
    },
    {
      heading: "Introduction to transactional Databases ",
      Lessons: "What is Database?",
    },
    {
      heading: "Introduction to transactional Databases ",
      Lessons: "Why to use Databases?",
    },
    {
      heading: "Introduction to transactional Databases ",
      Lessons: "What is RDBMS?",
    },
    {
      heading: "Introduction to transactional Databases ",
      Lessons: "Operations in Databases",
    },
    {
      heading: "Introduction to transactional Databases ",
      Lessons: "ER Diagrams",
    },
    {
      heading: "Introduction to transactional Databases ",
      Lessons:
        "Concepts of Keys - Primary Key, Foriegn Keys, Composite Keys, Candidate Keys",
    },
    {
      heading: "Introduction to transactional Databases ",
      Lessons: "Joining Datasets in Databases - Inner, Left, Right, full outer",
    },
    {
      heading: "Introduction to transactional Databases ",
      Lessons: "ACID Properties",
    },
    {
      heading: "Introduction to transactional Databases ",
      Lessons: "Transactions and Transaction control",
    },
    {
      heading: "Introduction to transactional Databases ",
      Lessons: "Indexing",
    },
    {
      heading: "Introduction to SQL",
      Lessons: "Why SQL?",
    },
    {
      heading: "Introduction to SQL",
      Lessons: "Applications of SQL",
    },
    {
      heading: "Introduction to SQL",
      Lessons: "Characteristics of SQL",
    },
    {
      heading: "Introduction to SQL",
      Lessons: "MySQL Installation guide",
    },
    {
      heading: "Introduction to SQL",
      Lessons: "Connection & setup",
    },
    {
      heading: "Introduction to SQL",
      Lessons: "DDL, DML, DCL in SQL",
    },
    {
      heading: "Introduction to SQL",
      Lessons: "Data types of SQL",
    },
    {
      heading: "Introduction to SQL",
      Lessons: "Binary data types",
    },
    {
      heading: "Introduction to SQL",
      Lessons: "Approximate numeric data type",
    },
    {
      heading: "Introduction to SQL",
      Lessons: "Exact numeric data type",
    },
    {
      heading: "Introduction to SQL",
      Lessons: "Character string data type",
    },
    {
      heading: "Introduction to SQL",
      Lessons: "Date and time datatype",
    },
    {
      heading: "SQL Operations",
      Lessons: "CREATE DATABASE",
    },
    {
      heading: "SQL Operations",
      Lessons: "DROP DATABASE",
    },
    {
      heading: "SQL Operations",
      Lessons: "CREATE table",
    },
    {
      heading: "SQL Operations",
      Lessons: "CREATE table with PRIMARY KEY",
    },
    {
      heading: "SQL Operations",
      Lessons: "CREATE table with FOREIGN KEY",
    },
    {
      heading: "SQL Operations",
      Lessons: "DELETE table",
    },
    {
      heading: "SQL Operations",
      Lessons: "TRUNCATE table",
    },
    {
      heading: "SQL Operations",
      Lessons: "TEMP table",
    },
    {
      heading: "SQL Operations",
      Lessons: "RENAME table",
    },
    {
      heading: "SQL Operations",
      Lessons: "DROP table",
    },
    {
      heading: "SQL Operations",
      Lessons: "COPY table",
    },
    {
      heading: "SQL Operations",
      Lessons: "ALTER table",
    },
    {
      heading: "SQL Operations",
      Lessons: "INSERT query",
    },
    {
      heading: "SQL Operations",
      Lessons: "UPDATE query",
    },
    {
      heading: "SQL Operations",
      Lessons: "DELETE query",
    },
    {
      heading: "SQL Operations",
      Lessons: "SELECT statement",
    },
    {
      heading: "SQL Operations",
      Lessons: "SELECT DISTINCT",
    },
    {
      heading: "SQL Operations",
      Lessons: "SELECT COUNT",
    },
    {
      heading: "SQL Operations",
      Lessons: "SELECT TOP",
    },
    {
      heading: "SQL Operations",
      Lessons: "SELECT LAST",
    },
    {
      heading: "SQL Operations",
      Lessons: "SQL WHERE clause",
    },
    {
      heading: "SQL Operations",
      Lessons: "SQL ORDER BY clause",
    },
    {
      heading: "SQL Operations",
      Lessons: "SQL DESC statement",
    },
    {
      heading: "SQL Operations",
      Lessons: "SQL USE statement",
    },
    {
      heading: "SQL Operations",
      Lessons: "SQL COMMIT statement",
    },
    {
      heading: "SQL Operations",
      Lessons: "SQL ROLLBACK statement",
    },
    {
      heading: "SQL Operations",
      Lessons: "Addition",
    },
    {
      heading: "SQL Operations",
      Lessons: " (Multiplication)",
    },
    {
      heading: "SQL Operations",
      Lessons: "\/ (Division)",
    },
    {
      heading: "SQL Operations",
      Lessons: "% (Modulus)",
    },
    {
      heading: "SQL Operations",
      Lessons: "EXISTS",
    },
    {
      heading: "SQL Operations",
      Lessons: "IN, NOT IN",
    },
    {
      heading: "SQL Operations",
      Lessons: "ANY, ALL",
    },
    {
      heading: "SQL Operations",
      Lessons: "NULL, NOT NULL",
    },
    {
      heading: "SQL Operations",
      Lessons: "LIKE",
    },
    {
      heading: "SQL Operations",
      Lessons: "BETWEEN",
    },
    {
      heading: "SQL Operations",
      Lessons: "Equal to (=)",
    },
    {
      heading: "SQL Operations",
      Lessons: "Greater than(>)",
    },
    {
      heading: "SQL Operations",
      Lessons: "Less than(<)",
    },
    {
      heading: "SQL Operations",
      Lessons: "Not equal to(!=)",
    },
    {
      heading: "Conditional Expressions",
      Lessons: "Coalesce Clause",
    },
    {
      heading: "Conditional Expressions",
      Lessons: "If Clause",
    },
    {
      heading: "Conditional Expressions",
      Lessons: "SQL CASE-WHEN clause",
    },
    {
      heading: "Joins in SQL",
      Lessons: "INNER JOIN",
    },
    {
      heading: "Joins in SQL",
      Lessons: "LEFT JOIN",
    },
    {
      heading: "Joins in SQL",
      Lessons: "RIGHT JOIN",
    },
    {
      heading: "Joins in SQL",
      Lessons: "FULL JOIN",
    },
    {
      heading: "Joins in SQL",
      Lessons: "SELF JOIN",
    },
    {
      heading: "Joins in SQL",
      Lessons: "CARTESIAN JOIN",
    },
    {
      heading: "Nested Subqueries in SQL",
      Lessons: "Subquery in FROM clause",
    },
    {
      heading: "Nested Subqueries in SQL",
      Lessons: "Subquery in SELECT clause",
    },
    {
      heading: "Nested Subqueries in SQL",
      Lessons: "Subquery in WHERE clause",
    },
    {
      heading: "Nested Subqueries in SQL",
      Lessons: "Correlated subqueries",
    },
    {
      heading: "Nested Subqueries in SQL",
      Lessons: "Filter query results using query on different table",
    },
    {
      heading: "Built - in Functions",
      Lessons: "Conditional aggregation",
    },
    {
      heading: "Built - in Functions",
      Lessons: "SUM(), MIN(), MAX(),AVG(),COUNT()",
    },
    {
      heading: "Built - in Functions",
      Lessons: "SQL GROUP BY clause",
    },
    {
      heading: "Built - in Functions",
      Lessons: "SQL HAVING clause",
    },
    {
      heading: "Built - in Functions",
      Lessons: "Window Function Syntax",
    },
    {
      heading: "Built - in Functions",
      Lessons: "OVER Clause",
    },
    {
      heading: "Built - in Functions",
      Lessons: "Partition By",
    },
    {
      heading: "Built - in Functions",
      Lessons: "Order By",
    },
    {
      heading: "Built - in Functions",
      Lessons: "Row_Number()",
    },
    {
      heading: "Built - in Functions",
      Lessons: "Rank()",
    },
    {
      heading: "Built - in Functions",
      Lessons: "Dense_Rank()",
    },
    {
      heading: "Built - in Functions",
      Lessons: "Lead()",
    },
    {
      heading: "Built - in Functions",
      Lessons: "Lag()",
    },
    {
      heading: "Built - in Functions",
      Lessons: "First_Value()",
    },
    {
      heading: "Built - in Functions",
      Lessons: "Last_Value()",
    },
    {
      heading: "Built - in Functions",
      Lessons: "NTILE()",
    },
    {
      heading: "Built - in Functions",
      Lessons: "RANGE BETWEEN",
    },
    {
      heading: "Built - in Functions",
      Lessons: "ROWS BETWEEN",
    },
    {
      heading: "CTE (Common Table Expression) in SQL",
      Lessons: "Non-Recursive CTE",
    },
    {
      heading: "CTE (Common Table Expression) in SQL",
      Lessons: "Recursive CTE",
    },
    {
      heading: "Database Objects",
      Lessons: "View ",
    },
    {
      heading: "Database Objects",
      Lessons: "Stored Procedures",
    },
    {
      heading: "Database Objects",
      Lessons: "Functions",
    },
    {
      heading: "Database Objects",
      Lessons: "Normalization - 1NF,2NF,3NF etc",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "What is Power BI? Overview and Use Cases",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Components of Power BI (Desktop, Service, Mobile)",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Power BI Architecture",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Installing Power BI Desktop",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Exploring the Power BI Interface",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Overview of Data Sources Supported by Power BI",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons:
        "Connecting to Different Data Sources (Excel, SQL Server, Web, etc.)",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Importing Data vs. Direct Query",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Best Practices for Data Connectivity",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Introduction to Power Query Editor",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons:
        "Data Cleaning and Shaping: Removing Duplicates, Filtering, Sorting, and Merging",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons:
        "Advanced Data Transformation: Unpivoting Columns, Grouping, and Aggregating Data",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Creating Custom Columns and Measures",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Understanding the M Language for Data Manipulation",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Understanding the Importance of Data Modeling",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Creating Relationships between Tables",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Using Primary Keys and Foreign Keys",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Normalizing Data",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Introduction to Star and Snowflake Schemas",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "What is DAX (Data Analysis Expressions)?",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Basic DAX Functions: SUM, AVERAGE, COUNT, DISTINCT, etc.",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Calculated Columns vs. Measures",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Understanding Row Context and Filter Context",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Using DAX to Create Calculated Fields",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons:
        "Time Intelligence Functions: DATEADD, DATESYTD, SAMEPERIODLASTYEAR, etc.",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Advanced DAX Functions: CALCULATE, ALL, FILTER, etc.",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Working with Variables in DAX",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Troubleshooting and Optimizing DAX Queries",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons:
        "Types of Visualizations in Power BI (Bar, Line, Pie, Map, etc.)",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Customizing Visuals: Formatting, Colors, Labels, Tooltips",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Using Filters, Slicers, and Drill-through",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Creating Interactive Dashboards",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Custom Visuals: What They Are and How to Use Them",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Working with Bookmarks and Selections",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Using Conditional Formatting and Data Bars",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Advanced Mapping Techniques (ArcGIS, Filled Maps, Shape Maps)",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Introduction to Power BI Report Themes",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Publishing Reports to Power BI Service",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Creating and Sharing Dashboards",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Managing Data Refresh in Power BI Service",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Understanding Workspaces, Apps, and Datasets",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Setting Up Row-Level Security (RLS)",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Introduction to Power BI Mobile: Features and Navigation",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Designing Reports for Mobile View",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Introduction to Power BI Embedded",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Embedding Power BI Reports in Websites and Apps",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Security and Licensing Considerations",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Introduction to R and Python Integration in Power BI",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Using R Scripts for Data Manipulation and Visualization",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Advanced Analytics with Python in Power BI",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Incorporating AI Visuals (Key Influencers, Decomposition Tree)",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Predictive Analysis and What-If Scenarios",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Optimizing Data Models for Performance",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Reducing File Size and Improving Load Times",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Best Practices for Report Design and Development",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Monitoring and Auditing Power BI Usage",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Troubleshooting Common Issues",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Understanding Power BI Admin Roles",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Managing Permissions and Security",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Data Governance and Compliance in Power BI",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Setting Up Data Gateways",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Power BI Tenant Settings and Configuration",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Project Overview: Business Case and Data Source",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Planning and Designing the Dashboard",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Implementing the Dashboard with Visualizations",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Applying Advanced DAX and Data Modeling Techniques",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Publishing and Sharing the Final Dashboard",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Recap of Key Concepts and Techniques Covered",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Real-World Use Cases and Success Stories",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Open Q&A Session",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Additional Resources and Next Steps",
    },
    {
      heading: "Power BI Fundamentals",
      Lessons: "Course Feedback and Evaluation",
    },
    {
      heading: "Tableau Introduction",
      Lessons: "What is Tableau? Overview and Use Cases",
    },
    {
      heading: "Tableau Introduction",
      Lessons: "Tableau Product Suite (Desktop, Online, Server, Public, Prep)",
    },
    {
      heading: "Tableau Introduction",
      Lessons: "Installing and Setting Up Tableau Desktop",
    },
    {
      heading: "Tableau Introduction",
      Lessons: "Exploring the Tableau Interface (Menus, Shelves, and Cards)",
    },
    {
      heading: "Tableau Introduction",
      Lessons:
        "Understanding Tableau Terminology (Dimensions, Measures, Discrete, Continuous)",
    },
    {
      heading: "Tableau Introduction",
      Lessons: "Overview of Data Sources Supported by Tableau",
    },
    {
      heading: "Tableau Introduction",
      Lessons:
        "Connecting to Different Data Sources (Excel, CSV, SQL Server, etc.)",
    },
    {
      heading: "Tableau Introduction",
      Lessons: "Managing Data Extracts and Live Connections",
    },
    {
      heading: "Tableau Introduction",
      Lessons: "Creating Data Extracts for Performance Optimization",
    },
    {
      heading: "Tableau Introduction",
      Lessons: "Joining and Blending Data from Multiple Sources",
    },
    {
      heading: "Working in Tableau",
      Lessons: "Introduction to Data Preparation in Tableau",
    },
    {
      heading: "Working in Tableau",
      Lessons: "Using Tableau Prep for Data Cleaning and Shaping",
    },
    {
      heading: "Working in Tableau",
      Lessons: "Filtering, Sorting, and Grouping Data",
    },
    {
      heading: "Working in Tableau",
      Lessons: "Using Calculated Fields and Table Calculations",
    },
    {
      heading: "Working in Tableau",
      Lessons:
        "Understanding Aggregation, Granularity, and Level of Detail (LOD) Expressions",
    },
    {
      heading: "Working in Tableau",
      Lessons: "Creating Basic Charts: Bar, Line, Pie, Scatter Plot, Heat Map",
    },
    {
      heading: "Working in Tableau",
      Lessons:
        "Formatting Visualizations: Colors, Labels, Tooltips, and Annotations",
    },
    {
      heading: "Working in Tableau",
      Lessons: "Using Filters, Parameters, and Sets",
    },
    {
      heading: "Working in Tableau",
      Lessons: "Creating Interactive Dashboards",
    },
    {
      heading: "Working in Tableau",
      Lessons: "Introduction to Geographical Mapping and Maps in Tableau",
    },
    {
      heading: "Working in Tableau",
      Lessons:
        "Creating Advanced Chart Types: Gantt, Bullet, Waterfall, Histogram, etc.",
    },
    {
      heading: "Working in Tableau",
      Lessons: "Using Dual-Axis and Combined Charts",
    },
    {
      heading: "Working in Tableau",
      Lessons: "Working with Advanced Mapping Techniques",
    },
    {
      heading: "Working in Tableau",
      Lessons:
        "Using Advanced Table Calculations (Window Functions, Running Total, etc.)",
    },
    {
      heading: "Working in Tableau",
      Lessons: "Creating Custom Territories and Geocoding",
    },
    {
      heading: "Charts in Tableau",
      Lessons: "Principles of Effective Dashboard Design",
    },
    {
      heading: "Charts in Tableau",
      Lessons: "Using Layout Containers and Floating Objects",
    },
    {
      heading: "Charts in Tableau",
      Lessons:
        "Optimizing Dashboards for Different Devices (Desktop, Mobile, Tablet)",
    },
    {
      heading: "Charts in Tableau",
      Lessons:
        "Adding Interactivity: Filters, Actions, Parameters, and Highlighters",
    },
    {
      heading: "Charts in Tableau",
      Lessons: "Using Dashboard Extensions",
    },
    {
      heading: "Charts in Tableau",
      Lessons: "Introduction to Data Storytelling",
    },
    {
      heading: "Charts in Tableau",
      Lessons: "Creating Stories in Tableau",
    },
    {
      heading: "Charts in Tableau",
      Lessons: "Using Visual Elements to Enhance Stories",
    },
    {
      heading: "Charts in Tableau",
      Lessons: "Case Studies and Best Practices in Data Storytelling",
    },
    {
      heading: "Advanced Tableau Products",
      Lessons: "Introduction to Tableau Server and Tableau Online",
    },
    {
      heading: "Advanced Tableau Products",
      Lessons: "Publishing Workbooks and Dashboards",
    },
    {
      heading: "Advanced Tableau Products",
      Lessons: "Creating and Managing Data Sources on Tableau Server",
    },
    {
      heading: "Advanced Tableau Products",
      Lessons: "Setting Permissions and Access Controls",
    },
    {
      heading: "Advanced Tableau Products",
      Lessons: "Scheduling Refreshes and Subscriptions",
    },
    {
      heading: "Advanced Tableau Products",
      Lessons: "Overview of Tableau Prep Builder",
    },
    {
      heading: "Advanced Tableau Products",
      Lessons: "Connecting to and Preparing Data with Tableau Prep",
    },
    {
      heading: "Advanced Tableau Products",
      Lessons:
        "Cleaning and Shaping Data (Filtering, Pivoting, Splitting, Merging)",
    },
    {
      heading: "Advanced Tableau Products",
      Lessons: "Creating Data Flows and Outputting Clean Data",
    },
    {
      heading: "Advanced Tableau Products",
      Lessons: "Automating Data Preparation with Tableau Prep",
    },
    {
      heading: "Advanced Analytics with Tableau",
      Lessons: "Using R and Python Integration in Tableau",
    },
    {
      heading: "Advanced Analytics with Tableau",
      Lessons:
        "Creating Advanced Statistical Visualizations (Regression, Forecasting)",
    },
    {
      heading: "Advanced Analytics with Tableau",
      Lessons: "Using Clustering and Trend Lines",
    },
    {
      heading: "Advanced Analytics with Tableau",
      Lessons:
        "Leveraging Tableau's Built-In AI Features (Explain Data, Ask Data)",
    },
    {
      heading: "Advanced Analytics with Tableau",
      Lessons: "Visualizing Predictive Models in Tableau",
    },
    {
      heading: "Advanced Analytics with Tableau",
      Lessons: "Optimizing Workbook Performance",
    },
    {
      heading: "Advanced Analytics with Tableau",
      Lessons:
        "Understanding Performance Recorder and Analyzing Slow Dashboards",
    },
    {
      heading: "Advanced Analytics with Tableau",
      Lessons: "Reducing Load Time with Extracts and Aggregations",
    },
    {
      heading: "Advanced Analytics with Tableau",
      Lessons: "Best Practices for Workbook and Dashboard Performance",
    },
    {
      heading: "Advanced Analytics with Tableau",
      Lessons: "Troubleshooting Common Performance Issues",
    },
    {
      heading: "Advanced Analytics with Tableau",
      Lessons: "Understanding Tableau Site Roles and User Management",
    },
    {
      heading: "Advanced Analytics with Tableau",
      Lessons: "Managing Content: Projects, Workbooks, Data Sources",
    },
    {
      heading: "Advanced Analytics with Tableau",
      Lessons: "Monitoring Tableau Server Usage and Performance",
    },
    {
      heading: "Advanced Analytics with Tableau",
      Lessons: "Ensuring Data Security and Compliance",
    },
    {
      heading: "Advanced Analytics with Tableau",
      Lessons: "Backup, Restore, and Upgrading Tableau Server",
    },
    {
      heading: "Tableau Projects",
      Lessons: "Project Overview and Requirements Gathering",
    },
    {
      heading: "Tableau Projects",
      Lessons: "Data Preparation and Transformation",
    },
    {
      heading: "Tableau Projects",
      Lessons: "Designing and Implementing the Dashboard",
    },
    {
      heading: "Tableau Projects",
      Lessons: "Applying Advanced Analytics and Visual Techniques",
    },
    {
      heading: "Tableau Projects",
      Lessons: "Publishing, Sharing, and Collaborating on the Dashboard",
    },
    {
      heading: "Tableau Projects",
      Lessons: "Analyzing Real-World Use Cases and Best Practices in Tableau",
    },
    {
      heading: "Tableau Projects",
      Lessons:
        "Exploring Industry-Specific Dashboards (Finance, Healthcare, Marketing, etc.)",
    },
    {
      heading: "Tableau Projects",
      Lessons:
        "Discussing Tableau Community and Resources for Continuous Learning",
    },
    {
      heading: "Tableau Projects",
      Lessons: "Future Trends in Data Visualization with Tableau",
    },
    {
      heading: "Tableau Projects",
      Lessons: "Recap of Key Concepts and Techniques Covered",
    },
    {
      heading: "Tableau Projects",
      Lessons: "Real-World Use Cases and Success Stories",
    },
    {
      heading: "Tableau Projects",
      Lessons: "Open Q&A Session",
    },
    {
      heading: "Tableau Projects",
      Lessons: "Additional Resources and Next Steps",
    },
    {
      heading: "Tableau Projects",
      Lessons: "Course Feedback and Evaluation",
    },
    {
      heading: "Python Programming",
      Lessons: "Python Installation",
    },
    {
      heading: "Python Programming",
      Lessons: "Python Basics",
    },
    {
      heading: "Python Programming",
      Lessons: "Input\/Output",
    },
    {
      heading: "Python Programming",
      Lessons: "Data Types",
    },
    {
      heading: "Python Programming",
      Lessons: "Variables",
    },
    {
      heading: "Python Programming",
      Lessons: "Operators",
    },
    {
      heading: "Python Programming",
      Lessons: "List, Tuple, Dictionary, Set",
    },
    {
      heading: "Python Programming",
      Lessons: "List Comprehension",
    },
    {
      heading: "Python Programming",
      Lessons: "Dictionary Comprehension",
    },
    {
      heading: "Python Programming",
      Lessons: "For Loop; While loop, Nested Loops",
    },
    {
      heading: "Python Programming",
      Lessons: "Control Flow",
    },
    {
      heading: "Python Programming",
      Lessons: "Functions",
    },
    {
      heading: "Python Programming",
      Lessons: "Lambda Functions",
    },
    {
      heading: "Python Programming",
      Lessons: "Map(), Filter(), Reduce()",
    },
    {
      heading: "Python Programming",
      Lessons: "Regex",
    },
    {
      heading: "Python Programming",
      Lessons: "Object Oriented Concepts",
    },
    {
      heading: "Python Programming",
      Lessons: "Exception Handling",
    },
    {
      heading: "Statistics",
      Lessons: "Introduction",
    },
    {
      heading: "Statistics",
      Lessons: "Different types of Statistics",
    },
    {
      heading: "Statistics",
      Lessons: "Population vs Sample",
    },
    {
      heading: "Descriptive Statistics",
      Lessons: "Mean, Median and Mode",
    },
    {
      heading: "Descriptive Statistics",
      Lessons: "Variance, Standard Deviation",
    },
    {
      heading: "Descriptive Statistics",
      Lessons: "Sample Variance why n-1",
    },
    {
      heading: "Descriptive Statistics",
      Lessons: "Standard Deviation",
    },
    {
      heading: "Descriptive Statistics",
      Lessons: "Variables",
    },
    {
      heading: "Descriptive Statistics",
      Lessons: "Random Variables",
    },
    {
      heading: "Descriptive Statistics",
      Lessons: "Percentiles & quartiles",
    },
    {
      heading: "Inferential Statistics",
      Lessons: "5 number summary",
    },
    {
      heading: "Inferential Statistics",
      Lessons: "Histograms",
    },
    {
      heading: "Inferential Statistics",
      Lessons: "Gaussian - Normal distribution",
    },
    {
      heading: "Inferential Statistics",
      Lessons: "Standard Normal distribution",
    },
    {
      heading: "Inferential Statistics",
      Lessons: "Application Of Z-score",
    },
    {
      heading: "Inferential Statistics",
      Lessons: "Permutation",
    },
    {
      heading: "Inferential Statistics",
      Lessons: "Combination",
    },
    {
      heading: "Inferential Statistics",
      Lessons: "Basics Of Probability",
    },
    {
      heading: "Inferential Statistics",
      Lessons: "Addition Rule In Probability",
    },
    {
      heading: "Inferential Statistics",
      Lessons: "Multiplication rule in probability",
    },
    {
      heading: "Inferential Statistics",
      Lessons: "Log Normal Distribution",
    },
    {
      heading: "Inferential Statistics",
      Lessons: "Central Limit theorem",
    },
    {
      heading: "Inferential Statistics",
      Lessons:
        "Statistics - Left Skewed And Right Skewed Distribution And Relation With Mean, Median And Mode",
    },
    {
      heading: "Inferential Statistics",
      Lessons: "Covariance",
    },
    {
      heading: "Inferential Statistics",
      Lessons: "Pearson And Spearman Rank Correlation",
    },
    {
      heading: "Inferential Statistics",
      Lessons: "What is P Value",
    },
    {
      heading: "Inferential Statistics",
      Lessons: "What is Confidence Intervals",
    },
    {
      heading: "Inferential Statistics",
      Lessons:
        "How To Perform Hypothesis Testing - Confidence IntervalZ Test Statistics Derive Conclusion",
    },
    {
      heading: "Inferential Statistics",
      Lessons: "Hypothesis testing part 2",
    },
    {
      heading: "Inferential Statistics",
      Lessons: "Hypothesis testing part 3",
    },
    {
      heading: "Inferential Statistics",
      Lessons: "Finalizing statistics",
    },
    {
      heading: "Microsoft Excel Fundamentals",
      Lessons: "Launching Excel",
    },
    {
      heading: "Microsoft Excel Fundamentals",
      Lessons: "Microsoft Excel Startup Screen",
    },
    {
      heading: "Microsoft Excel Fundamentals",
      Lessons: "Introduction to the Excel Interface",
    },
    {
      heading: "Microsoft Excel Fundamentals",
      Lessons: "Customizing the Excel Quick Access Toolbar",
    },
    {
      heading: "Microsoft Excel Fundamentals",
      Lessons: "More on the Excel Interface",
    },
    {
      heading: "Microsoft Excel Fundamentals",
      Lessons: "Understanding the Structure of an Excel Workbook",
    },
    {
      heading: "Microsoft Excel Fundamentals",
      Lessons: "Saving an Excel Document",
    },
    {
      heading: "Microsoft Excel Fundamentals",
      Lessons: "Opening an Existing Excel Document",
    },
    {
      heading: "Microsoft Excel Fundamentals",
      Lessons: "Common Excel Shortcut Keys",
    },
    {
      heading: "Entering and editing text and formulas",
      Lessons: "Entering Text to Create Spreadsheet Titles",
    },
    {
      heading: "Entering and editing text and formulas",
      Lessons: "Working with Numeric Data in Excel",
    },
    {
      heading: "Entering and editing text and formulas",
      Lessons: "Entering Date Values in Excel",
    },
    {
      heading: "Entering and editing text and formulas",
      Lessons: "Working with Cell References",
    },
    {
      heading: "Entering and editing text and formulas",
      Lessons: "Creating Basic Formulas in Excel",
    },
    {
      heading: "Entering and editing text and formulas",
      Lessons: "Relative Versus Absolute Cell References in Formulas",
    },
    {
      heading: "Entering and editing text and formulas",
      Lessons: "Understanding the Order of Operation",
    },
    {
      heading: "Working with basic excel functions",
      Lessons: "The structure of an Excel Function",
    },
    {
      heading: "Working with basic excel functions",
      Lessons: "Working with the SUM() Function",
    },
    {
      heading: "Working with basic excel functions",
      Lessons: "Working with the MIN() and MAX() Functions",
    },
    {
      heading: "Working with basic excel functions",
      Lessons: "Working with the AVERAGE() Function",
    },
    {
      heading: "Working with basic excel functions",
      Lessons: "Working with the COUNT() Function",
    },
    {
      heading: "Working with basic excel functions",
      Lessons: "Adjacent Cells Error in Excel Calculations",
    },
    {
      heading: "Working with basic excel functions",
      Lessons: "Using the AutoSum Command",
    },
    {
      heading: "Working with basic excel functions",
      Lessons: "Excel's AutoSum Shortcut Key",
    },
    {
      heading: "Working with basic excel functions",
      Lessons: "Using the AutoFill Command to Copy Formulas",
    },
    {
      heading: "Modifying an excel worksheet",
      Lessons: "Moving and Copying Data in an Excel Worksheet",
    },
    {
      heading: "Modifying an excel worksheet",
      Lessons: "Inserting and Deleting Rows and Columns",
    },
    {
      heading: "Modifying an excel worksheet",
      Lessons: "Changing the Width and Height of Cells",
    },
    {
      heading: "Modifying an excel worksheet",
      Lessons: "Hiding and Unhiding Excel Rows and Columns",
    },
    {
      heading: "Modifying an excel worksheet",
      Lessons: "Renaming an Excel Worksheet",
    },
    {
      heading: "Modifying an excel worksheet",
      Lessons: "Deleting an Excel Worksheet",
    },
    {
      heading: "Modifying an excel worksheet",
      Lessons: "Moving and Copying an Excel Worksheet",
    },
    {
      heading: "Formatting data in an excel worksheet",
      Lessons: "Working with Font Formatting Commands",
    },
    {
      heading: "Formatting data in an excel worksheet",
      Lessons: "Changing the Background Color of a Cell",
    },
    {
      heading: "Formatting data in an excel worksheet",
      Lessons: "Adding Borders to Cells",
    },
    {
      heading: "Formatting data in an excel worksheet",
      Lessons: "Excel Cell Borders Continued",
    },
    {
      heading: "Formatting data in an excel worksheet",
      Lessons: "Formatting Data as Currency Values",
    },
    {
      heading: "Formatting data in an excel worksheet",
      Lessons: "Formatting Percentages",
    },
    {
      heading: "Formatting data in an excel worksheet",
      Lessons: "Using Excel's Format Painter",
    },
    {
      heading: "Formatting data in an excel worksheet",
      Lessons: "Creating Styles to Format Data",
    },
    {
      heading: "Formatting data in an excel worksheet",
      Lessons: "Merging and Centering Cells",
    },
    {
      heading: "Formatting data in an excel worksheet",
      Lessons: "Using Conditional Formatting",
    },
    {
      heading: "Formatting data in an excel worksheet",
      Lessons: "Editing Excel Conditional Formatting",
    },
    {
      heading: "Data Analytics Project 1",
      Lessons: "Salary Data Analysis using Advanced Statistics",
    },
    {
      heading: "Data Analytics Project 1",
      Lessons: "Dataset",
    },
    {
      heading: "Data Analytics Project 1",
      Lessons: "Problem Statement",
    },
    {
      heading: "Data Analytics Project 1",
      Lessons: "Solution Building",
    },
    {
      heading: "Data Analytics Project 1",
      Lessons: "Conclusion",
    },
    {
      heading: "Data Analytics Project 2",
      Lessons: "Salary Data Dashboard Creation and Analysis using Excel",
    },
    {
      heading: "Data Analytics Project 2",
      Lessons: "Dataset",
    },
    {
      heading: "Data Analytics Project 2",
      Lessons: "Problem Statement",
    },
    {
      heading: "Data Analytics Project 2",
      Lessons: "Solution Building",
    },
    {
      heading: "Data Analytics Project 2",
      Lessons: "Conclusion",
    },
    {
      heading: "Data Analytics Project 3",
      Lessons: "Retail Data Analysis using Orders Schema in SQL",
    },
    {
      heading: "Data Analytics Project 3",
      Lessons: "Dataset",
    },
    {
      heading: "Data Analytics Project 3",
      Lessons: "Problem Statement",
    },
    {
      heading: "Data Analytics Project 3",
      Lessons: "Solution Building",
    },
    {
      heading: "Data Analytics Project 3",
      Lessons: "Conclusion",
    },
    {
      heading: "Data Analytics Project 4",
      Lessons: "FIFA Dashboard Creation using Power BI",
    },
    {
      heading: "Data Analytics Project 4",
      Lessons: "Dataset",
    },
    {
      heading: "Data Analytics Project 4",
      Lessons: "Problem Statement",
    },
    {
      heading: "Data Analytics Project 4",
      Lessons: "Solution Building",
    },
    {
      heading: "Data Analytics Project 4",
      Lessons: "Conclusion",
    },
    {
      heading: "Data Analytics Project 5",
      Lessons: "CAR Insurance Dashboard Creation using Tableau",
    },
    {
      heading: "Data Analytics Project 5",
      Lessons: "Dataset",
    },
    {
      heading: "Data Analytics Project 5",
      Lessons: "Problem Statement",
    },
    {
      heading: "Data Analytics Project 5",
      Lessons: "Solution Building",
    },
    {
      heading: "Data Analytics Project 5",
      Lessons: "Conclusion",
    },
  ];
  const grouped = Object.values(
    rawData.reduce(
      (acc, item) => {
        if (!acc[item.heading]) {
          acc[item.heading] = {
            title: item.heading,
            lessons: [],
          };
        }
        acc[item.heading].lessons.push(item.Lessons);
        return acc;
      },
      {} as Record<string,{title: string; lessons: string[]}>,
    ),
  );

  const [active, setActive] = useState(grouped[0] || null);
  return (
    <section className="relative overflow-hidden bg-black py-6 md:py-10">
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 className="bg-[linear-gradient(99deg,#61E6C6_6.97%,#127EF1_34.37%,#EF7D6E_88.36%)] bg-clip-text text-[26px] font-black leading-9.5 text-transparent md:text-[54px] md:leading-18.5">
            Industry Oriented Curriculum
          </h2>
        </div>
        <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,18,24,0.96)_0%,rgba(8,8,10,0.98)_100%)] p-4 sm:p-5 md:p-6">
          <div className="grid md:gap-5 gap-3 md:grid-cols-2 items-stretch">
            <div className="h-full md:overflow-hidden overflow-x-scroll">
              <div className="md:h-95 space-y-3 overflow-y-auto pr-2 flex gap-2 md:flex-wrap h-auto"
                style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "#EFD4CB #1a1a1a",
                }}>
                {grouped.map((module, i) => (
                  <button
                    key={module.title}
                    onClick={() => setActive(module)}
                    className={`relative md:w-full h-fit  overflow-hidden rounded-[22px] border p-4 text-left transition-all duration-200 min-w-fit cursor-pointer
                    ${
                        active?.title === module.title
                        ? "border-[#61E6C6]/35 bg-[linear-gradient(135deg,rgba(97,230,198,0.18)_0%,rgba(18,126,241,0.12)_48%,rgba(239,125,110,0.14)_100%)] shadow-[0_18px_40px_rgba(0,0,0,0.28)]"
                        : "border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.03)_100%)] hover:border-white/15 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.04)_100%)]"
                    }`}>
                    <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)]" />
                    <p className="mb-2 md:text-[12px] text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                      Module {i + 1}
                    </p>
                    <h6 className="text-[13px] font-semibold md:leading-6 leading-5 text-white md:text-[16px]">
                      {module.title}
                    </h6>
                  </button>
                ))}
              </div>
            </div>
            <div className="h-95 rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(10,10,14,0.96)_0%,rgba(6,6,8,0.98)_100%)] p-4 sm:p-5"
             style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#EFD4CB #1a1a1a",
                }}>
              <div className="h-full overflow-y-auto pr-2">
                <ul className="grid gap-3">
                  {active?.lessons?.map((lesson, i) => (
                    <li
                      key={`${lesson}-${i}`}
                      className="relative overflow-hidden rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.03)_100%)] px-4 py-3.5 md:text-[15px] text-[13px] leading-5 md:leading-6 text-white sm:px-5"
                    >
                      <div className="absolute inset-y-3 left-0 w-1 rounded-full bg-[linear-gradient(180deg,#61E6C6_0%,#127EF1_55%,#EF7D6E_100%)]" />
                      <span className="block pl-3 capitalize">{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
