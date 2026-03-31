"use client";

import { useState } from "react";

export default function Curriculum() {
  const rawData = [
        {
          heading: "Course Introduction",
          Lessons: "Introduction to Web Applications"
        },   
        {
          heading: "Foundation Development",
          Lessons: "How the Internet Functions: A Comprehensive Overview"
        },
        {
          heading: "Foundation Development",
          Lessons: "Exploring the Role of Web Browsers"
        },
        {
          heading: "Foundation Development",
          Lessons: "Inside Browser Engines: How They Operate"
        },
        {
          heading: "Foundation Development",
          Lessons: "Key Features of Static Websites"
        },
        {
          heading: "Foundation Development",
          Lessons: "Key Features of Dynamic Websites"
        },
        {
          heading: "Foundation Development",
          Lessons: "Client-Server Architecture Explained"
        },
        {
          heading: "Foundation Development",
          Lessons: "Client and Server"
        },
         
        {
          heading: "Profile Development",
          Lessons: "What is UI\/UX Design?"
        },
        {
          heading: "Profile Development",
          Lessons: "The Role of a Frontend Developer Explained"
        },
        {
          heading: "Profile Development",
          Lessons: "The Role of a Backend Developer Explained"
        },
        {
          heading: "Profile Development",
          Lessons: "Why a Portfolio Matters in Development"
        },
        {
          heading: "Profile Development",
          Lessons: "Setting Up Accounts on GitHub and LinkedIn"
        },
        {
          heading: "Profile Development",
          Lessons: "The Significance of GitHub and LinkedIn for Professionals"
        },
        {
          heading: "Profile Development",
          Lessons: "Reasons to Start Blogging and Its Benefits"
        },
        {
          heading: "Profile Development",
          Lessons: "Different Blogging Platforms to Consider"
        },
         
        {
          heading: "Course Essentials",
          Lessons: "Understanding HTML (HyperText Markup Language)"
        },
        {
          heading: "Course Essentials",
          Lessons: "Exploring CSS (Cascading Style Sheets)"
        },
        {
          heading: "Course Essentials",
          Lessons: "The Rise of JavaScript: Its Necessity in Modern Web Development"
        },
        {
          heading: "Course Essentials",
          Lessons: "A Historical Overview of JavaScript"
        },
        {
          heading: "Course Essentials",
          Lessons: "The Role of the DOM (Document Object Model)"
        },
        {
          heading: "Course Essentials",
          Lessons: "Introduction to Responsive Design"
        },
        {
          heading: "Course Essentials",
          Lessons: "Overview of Web Accessibility"
        },
        {
          heading: "Course Essentials",
          Lessons: "The Impact of Web Standards on Development"
        },
         
        {
          heading: "Requirement \/ System Setup",
          Lessons: "Tools Required to get Started"
        },
         
        {
          heading: "Staring with Emmet",
          Lessons: "Introduction to Emmet"
        },
        {
          heading: "Staring with Emmet",
          Lessons: "Writting First Code on Emmet"
        },
        {
          heading: "Staring with Emmet",
          Lessons: "Emmet and Speedy Html"
        },
        {
          heading: "Staring with Emmet",
          Lessons: "Parent Child and Grouping"
        },
         
        {
          heading: "HTML",
          Lessons: "An Old Style Blog App (Heading, Paragraph, Formatting etc)"
        },
        {
          heading: "HTML",
          Lessons: "Importance of Meta tag in HTML"
        },
        {
          heading: "HTML",
          Lessons: "Inline vs Block Element"
        },
        {
          heading: "HTML",
          Lessons: "Bring in Images"
        },
        {
          heading: "HTML",
          Lessons: "Lists and Interlinking pages"
        },
        {
          heading: "HTML",
          Lessons: "Getting a video on page"
        },
        {
          heading: "HTML",
          Lessons: "Tables and it's Properties"
        },
        {
          heading: "HTML",
          Lessons: "Walkthrough of FORMS"
        },
        {
          heading: "HTML",
          Lessons: "GET and POST forms"
        },
        {
          heading: "HTML",
          Lessons: "Types of input forms"
        },
         
        {
          heading: "Semantics",
          Lessons: "A Complete walk through with HTML and HTML5"
        },
        {
          heading: "Semantics",
          Lessons: "What are Sematics tag"
        },
        {
          heading: "Semantics",
          Lessons: "Writting different Semantics tags that we have"
        },
        {
          heading: "Semantics",
          Lessons: "Showing how semantic tag are present in Real Project"
        },
         
        {
          heading: "Starting with CSS",
          Lessons: "Introducction to CSS"
        },
        {
          heading: "Starting with CSS",
          Lessons: "Different way to bring CSS into the HTML file"
        },
        {
          heading: "Starting with CSS",
          Lessons: "Inline CSS and Working"
        },
        {
          heading: "Starting with CSS",
          Lessons: "Internal CSS and Working"
        },
        {
          heading: "Starting with CSS",
          Lessons: "External CSS and wokring"
        },
        {
          heading: "Starting with CSS",
          Lessons: "Priority of CSS in the file"
        },
        {
          heading: "Starting with CSS",
          Lessons: "Explore and bring in fonts"
        },
        {
          heading: "Starting with CSS",
          Lessons: "Bring in colors and styles"
        },
        {
          heading: "Starting with CSS",
          Lessons: "Margin and padding"
        },
         
        {
          heading: "More on CSS",
          Lessons: "Box-Model"
        },
        {
          heading: "More on CSS",
          Lessons: "Text and Font"
        },
        {
          heading: "More on CSS",
          Lessons: "Dsiplay and Max-Width"
        },
        {
          heading: "More on CSS",
          Lessons: "overflow and Z-index"
        },
        {
          heading: "More on CSS",
          Lessons: "Pseudo Classes"
        },
        {
          heading: "More on CSS",
          Lessons: "Gradients, Transitions and Tooltips"
        },
        {
          heading: "More on CSS",
          Lessons: "Animation"
        },
         
        {
          heading: "Mobile responsive and Positions",
          Lessons: "What are media queries"
        },
        {
          heading: "Mobile responsive and Positions",
          Lessons: "Media query in action"
        },
        {
          heading: "Mobile responsive and Positions",
          Lessons: "Writting Media Query for Different Screens"
        },
        {
          heading: "Mobile responsive and Positions",
          Lessons: "Bring content in columns"
        },
        {
          heading: "Mobile responsive and Positions",
          Lessons: "Playing with Different Media"
        },
        {
          heading: "Mobile responsive and Positions",
          Lessons: "CSS Layout"
        },
        {
          heading: "Mobile responsive and Positions",
          Lessons: "CSS Position"
        },
        {
          heading: "Mobile responsive and Positions",
          Lessons: "Positon Property"
        },
        {
          heading: "Mobile responsive and Positions",
          Lessons: "Working with Different CSS Position Porperty"
        },
        {
          heading: "Mobile responsive and Positions",
          Lessons: "Unit in CSS (rem, em, vh, vw, percenatge)"
        },
         
        {
          heading: "Flexbox in CSS",
          Lessons: "What is flexbox ?"
        },
        {
          heading: "Flexbox in CSS",
          Lessons: "Get to know the power of flexbox"
        },
        {
          heading: "Flexbox in CSS",
          Lessons: "Different Flexbox proerties - Part 1"
        },
        {
          heading: "Flexbox in CSS",
          Lessons: "Different Flexbox proerties - Part 2"
        },
        {
          heading: "Flexbox in CSS",
          Lessons: "Different Flex Child Property"
        },
        {
          heading: "Flexbox in CSS",
          Lessons: "Flex Froggy Game"
        },
         
        {
          heading: "Grid",
          Lessons: "What is grid ?"
        },
        {
          heading: "Grid",
          Lessons: "Difference betweeb flex and grid"
        },
        {
          heading: "Grid",
          Lessons: "Gettting sarted with Grid"
        },
        {
          heading: "Grid",
          Lessons: "Row and Column in Grid"
        },
        {
          heading: "Grid",
          Lessons: "Creating Album with Grid"
        },
         
        {
          heading: "Intro to languages",
          Lessons: "Why JavaScript"
        },
        {
          heading: "Intro to languages",
          Lessons: "Intro to Nodejs"
        },
        {
          heading: "Intro to languages",
          Lessons: "Explanning Runtime"
        },
        {
          heading: "Intro to languages",
          Lessons: "Explanning V8 and Libuv lib"
        },
        {
          heading: "Intro to languages",
          Lessons: "What are Browser Function ?"
        },
         
        {
          heading: "First Prgram of JavaScript",
          Lessons: "Values and Datatypes"
        },
        {
          heading: "First Prgram of JavaScript",
          Lessons: "Varibales and typeof"
        },
        {
          heading: "First Prgram of JavaScript",
          Lessons: "Operators"
        },
         
        {
          heading: "Conditons",
          Lessons: "What is Conditions"
        },
        {
          heading: "Conditons",
          Lessons: "If"
        },
        {
          heading: "Conditons",
          Lessons: "If-else, if-else-if"
        },
        {
          heading: "Conditons",
          Lessons: "Switch Case"
        },
        {
          heading: "Conditons",
          Lessons: "Ternary Conditons"
        },
         
        {
          heading: "Loops",
          Lessons: "Why and What of Loops"
        },
        {
          heading: "Loops",
          Lessons: "While Loop"
        },
        {
          heading: "Loops",
          Lessons: "Do While Loop"
        },
        {
          heading: "Loops",
          Lessons: "For Loop"
        },
        {
          heading: "Loops",
          Lessons: "Break"
        },
        {
          heading: "Loops",
          Lessons: "Continue"
        },
        {
          heading: "Loops",
          Lessons: "for of (Introduction)"
        },
        {
          heading: "Loops",
          Lessons: "for in (Introduction)"
        },
         
        {
          heading: "Array",
          Lessons: "What are Array ?"
        },
        {
          heading: "Array",
          Lessons: "Index and Storing and Array"
        },
        {
          heading: "Array",
          Lessons: "Accesssing in Array"
        },
        {
          heading: "Array",
          Lessons: "Changing the values in Array"
        },
        {
          heading: "Array",
          Lessons: "Array methods"
        },
         
        {
          heading: "Functions",
          Lessons: "Functions"
        },
        {
          heading: "Functions",
          Lessons: "Function Declaration"
        },
        {
          heading: "Functions",
          Lessons: "Function without a parameter and return"
        },
        {
          heading: "Functions",
          Lessons: "Function returning value"
        },
        {
          heading: "Functions",
          Lessons: "Function with a parameter"
        },
        {
          heading: "Functions",
          Lessons: "Function with two parameters"
        },
        {
          heading: "Functions",
          Lessons: "Function with many parameters"
        },
        {
          heading: "Functions",
          Lessons: "Function with unlimited number of parameters"
        },
        {
          heading: "Functions",
          Lessons: "Arrow Function"
        },
        {
          heading: "Functions",
          Lessons: "Anonymous Function"
        },
        {
          heading: "Functions",
          Lessons: "Expression Function"
        },
        {
          heading: "Functions",
          Lessons: "Self Invoking Functions"
        },
         
        {
          heading: "Object",
          Lessons: "What was the need of object ?"
        },
        {
          heading: "Object",
          Lessons: "Creating object and Manupulating values in Object"
        },
        {
          heading: "Object",
          Lessons: "Object methods"
        },
         
        {
          heading: "Introduction to DOM",
          Lessons: "Visualize of DOM"
        },
        {
          heading: "Introduction to DOM",
          Lessons: "How we target DOM"
        },
        {
          heading: "Introduction to DOM",
          Lessons: "DOM and its Working"
        },
        {
          heading: "Introduction to DOM",
          Lessons: "Methods of DOM - Part 1"
        },
        {
          heading: "Introduction to DOM",
          Lessons: "Methods of DOM - Part 2"
        },
        {
          heading: "Introduction to DOM",
          Lessons: "Methods of DOM - Part 3"
        },
        {
          heading: "Introduction to DOM",
          Lessons: "Color changer in DOM"
        },
         
        {
          heading: "Higher Order Function",
          Lessons: "What is Higher Order Function (HOF)"
        },
        {
          heading: "Higher Order Function",
          Lessons: "Callback"
        },
        {
          heading: "Higher Order Function",
          Lessons: "Returing function"
        },
        {
          heading: "Higher Order Function",
          Lessons: "Setting time"
        },
        {
          heading: "Higher Order Function",
          Lessons: "Setinterval"
        },
        {
          heading: "Higher Order Function",
          Lessons: "SetTimeout"
        },
        {
          heading: "Higher Order Function",
          Lessons: "For each"
        },
        {
          heading: "Higher Order Function",
          Lessons: "map"
        },
        {
          heading: "Higher Order Function",
          Lessons: "filter"
        },
        {
          heading: "Higher Order Function",
          Lessons: "reduce"
        },
        {
          heading: "Higher Order Function",
          Lessons: "every"
        },
        {
          heading: "Higher Order Function",
          Lessons: "find"
        },
        {
          heading: "Higher Order Function",
          Lessons: "sort"
        },
         
        {
          heading: "Understanding Regex",
          Lessons: "What is regex?"
        },
        {
          heading: "Understanding Regex",
          Lessons: "Different Character in Regex and importance"
        },
        {
          heading: "Understanding Regex",
          Lessons: "Writting regex."
        },
         
        {
          heading: "Sets",
          Lessons: "Creating an empty set"
        },
        {
          heading: "Sets",
          Lessons: "Creating set from array"
        },
        {
          heading: "Sets",
          Lessons: "Adding an element to a set"
        },
        {
          heading: "Sets",
          Lessons: "Deleting an element a set"
        },
        {
          heading: "Sets",
          Lessons: "Checking an element in the set"
        },
        {
          heading: "Sets",
          Lessons: "Clearing the set"
        },
        {
          heading: "Sets",
          Lessons: "Union of sets"
        },
        {
          heading: "Sets",
          Lessons: "Intersection of sets"
        },
        {
          heading: "Sets",
          Lessons: "Difference of sets"
        },
        {
          heading: "Sets",
          Lessons: "Creating an empty Map"
        },
        {
          heading: "Sets",
          Lessons: "Creating an Map from array"
        },
        {
          heading: "Sets",
          Lessons: "Adding values to the Map"
        },
        {
          heading: "Sets",
          Lessons: "Getting a value from Map"
        },
        {
          heading: "Sets",
          Lessons: "Checking key in Map"
        },
         
        {
          heading: "Destructuring and Spreading",
          Lessons: "Destructing Arrays"
        },
        {
          heading: "Destructuring and Spreading",
          Lessons: "Destructuring during iteration"
        },
        {
          heading: "Destructuring and Spreading",
          Lessons: "Destructuring Object"
        },
        {
          heading: "Destructuring and Spreading",
          Lessons: "Renaming during structuring"
        },
        {
          heading: "Destructuring and Spreading",
          Lessons: "Object parameter without destructuring"
        },
        {
          heading: "Destructuring and Spreading",
          Lessons: "Object parameter with destructuring"
        },
        {
          heading: "Destructuring and Spreading",
          Lessons: "Destructuring object during iteration"
        },
        {
          heading: "Destructuring and Spreading",
          Lessons: "Spread or Rest Operator"
        },
        {
          heading: "Destructuring and Spreading",
          Lessons: "Spread operator to get the rest of array elements"
        },
        {
          heading: "Destructuring and Spreading",
          Lessons: "Spread operator to copy array"
        },
         
        {
          heading: "Error Handling",
          Lessons: "Try and Catch"
        },
        {
          heading: "Error Handling",
          Lessons: "Use of try catch in real world Application"
        },
         
        {
          heading: "Classes",
          Lessons: "Defining a classes"
        },
        {
          heading: "Classes",
          Lessons: "Class Instantiation"
        },
        {
          heading: "Classes",
          Lessons: "Class Constructor"
        },
        {
          heading: "Classes",
          Lessons: "Default values with constructor"
        },
        {
          heading: "Classes",
          Lessons: "Class methods"
        },
        {
          heading: "Classes",
          Lessons: "Properties with initial value"
        },
        {
          heading: "Classes",
          Lessons: "getter"
        },
        {
          heading: "Classes",
          Lessons: "setter"
        },
        {
          heading: "Classes",
          Lessons: "Inheritance"
        },
         
        {
          heading: "Prototypes",
          Lessons: "Explanning Prototypes"
        },
        {
          heading: "Prototypes",
          Lessons: "How prototypes Work"
        },
        {
          heading: "Prototypes",
          Lessons: "How we manipulate this using Prototypes"
        },
         
        {
          heading: "Closure",
          Lessons: "Explanning What is Closure ?"
        },
        {
          heading: "Closure",
          Lessons: "First Program in Closure"
        },
        {
          heading: "Closure",
          Lessons: "Understanding Clouser with Another Example"
        },
         
        {
          heading: "Priomise",
          Lessons: "Callback"
        },
        {
          heading: "Priomise",
          Lessons: "Promise Constructor"
        },
        {
          heading: "Priomise",
          Lessons: "Async and Await"
        },
        {
          heading: "Priomise",
          Lessons: "Fetch API"
        },
         
        {
          heading: "Javascript in Depth",
          Lessons: "Scope \/ Lexical Scope \/ Black Scope"
        },
        {
          heading: "Javascript in Depth",
          Lessons: "Single Thread"
        },
        {
          heading: "Javascript in Depth",
          Lessons: "Execution Context"
        },
        {
          heading: "Javascript in Depth",
          Lessons: "Call Stack"
        },
        {
          heading: "Javascript in Depth",
          Lessons: "Hoisiting"
        },
        {
          heading: "Javascript in Depth",
          Lessons: "Working of function"
        },
        {
          heading: "Javascript in Depth",
          Lessons: "Global Space and Global Scope"
        },
        {
          heading: "Javascript in Depth",
          Lessons: "Lexical Scope"
        },
        {
          heading: "Javascript in Depth",
          Lessons: "Let, var and Const"
        },
        {
          heading: "Javascript in Depth",
          Lessons: "Types of error"
        },
        {
          heading: "Javascript in Depth",
          Lessons: "Temporal Dead Zone"
        },
         
        {
          heading: "Getting Started with VCS",
          Lessons: "Introduction to Git"
        },
        {
          heading: "Getting Started with VCS",
          Lessons: "Explanning Version Control System"
        },
        {
          heading: "Getting Started with VCS",
          Lessons: "How it is Powerfull"
        },
        {
          heading: "Getting Started with VCS",
          Lessons: "What and Why of Github ?"
        },
         
        {
          heading: "Git",
          Lessons: "Git foundation and Installation"
        },
        {
          heading: "Git",
          Lessons: "Git Config"
        },
        {
          heading: "Git",
          Lessons: "Git Initilazation"
        },
        {
          heading: "Git",
          Lessons: "First Commit"
        },
        {
          heading: "Git",
          Lessons: "Importance of .gitignore"
        },
         
        {
          heading: "Git Branches",
          Lessons: "Creating Branch"
        },
        {
          heading: "Git Branches",
          Lessons: "Merging Branch"
        },
        {
          heading: "Git Branches",
          Lessons: "Having Multiple Branches"
        },
        {
          heading: "Git Branches",
          Lessons: "Checkout to main branch"
        },
         
        {
          heading: "Getting Started with Github",
          Lessons: "Walkthrough with the alternative of Github"
        },
        {
          heading: "Getting Started with Github",
          Lessons: "Creating Account on Github"
        },
        {
          heading: "Getting Started with Github",
          Lessons: "Creating a repo on GitHub"
        },
        {
          heading: "Getting Started with Github",
          Lessons: "Explanning Git Repo"
        },
        {
          heading: "Getting Started with Github",
          Lessons: "Explanning URL for that Git Repo"
        },
        {
          heading: "Getting Started with Github",
          Lessons: "Initilazation of GitHub to local system and to NeuroLab"
        },
         
        {
          heading: "Pushing Code to Github",
          Lessons: "Adding remote url to GitHub"
        },
        {
          heading: "Pushing Code to Github",
          Lessons: "Imortance of Commit Messages"
        },
        {
          heading: "Pushing Code to Github",
          Lessons: "Push the file to GitHub"
        },
        {
          heading: "Pushing Code to Github",
          Lessons: "Push to Different Branch in Github"
        },
         
        {
          heading: "Networking",
          Lessons: "Network"
        },
        {
          heading: "Networking",
          Lessons: "TCP\/IP"
        },
        {
          heading: "Networking",
          Lessons: "OSI Model"
        },
        {
          heading: "Networking",
          Lessons: "Web Socket"
        },
        {
          heading: "Networking",
          Lessons: "HTTP 1 and HTTP 2 and HTTP 3"
        },
        {
          heading: "Networking",
          Lessons: "Introduction to OS"
        },
         
        { 
          heading: "Networking",
          Lessons: "Linux Command"
        },
        {
          heading: "Walkthrough with Concept",
          Lessons: "NodeJs Architecture"
        },
        {
          heading: "Walkthrough with Concept",
          Lessons: "MVC Architecture"
        },
        {
          heading: "Walkthrough with Concept",
          Lessons: "Hashing"
        },
        {
          heading: "Walkthrough with Concept",
          Lessons: "Encryption"
        },
        {
          heading: "Walkthrough with Concept",
          Lessons: "Monolithic Architecture"
        },
        {
          heading: "Walkthrough with Concept",
          Lessons: "Microservices Architecture"
        },
         
        {
          heading: "Overview of Databases",
          Lessons: "What is Database ?"
        },
        {
          heading: "Overview of Databases",
          Lessons: "What are types of Databases ?"
        },
        {
          heading: "Overview of Databases",
          Lessons: "What is SQL Database and its Types of SQL Databases ?"
        },
        {
          heading: "Overview of Databases",
          Lessons: "What is NoSQL and Types of NoSQL Databases ?"
        },
        {
          heading: "Overview of Databases",
          Lessons: "Advantages and Disadvantages of SQL and NoSQL ?"
        },
        {
          heading: "Overview of Databases",
          Lessons: "CAP Theorem"
        },
        {
          heading: "Overview of Databases",
          Lessons: "ACID"
        },
        {
          heading: "Overview of Databases",
          Lessons: "Sharding"
        },
         
        {
          heading: "Database Design",
          Lessons: "What is Schema ?"
        },
        {
          heading: "Database Design",
          Lessons: "What is Collection ?"
        },
        {
          heading: "Database Design",
          Lessons: "Schema Design."
        },
        {
          heading: "Database Design",
          Lessons: "Walk through with Database Design."
        },
        {
          heading: "Database Design",
          Lessons: "Application Database Design"
        },
         
        {
          heading: "MySQL and MongoDB",
          Lessons: "RDBMS and all its Concept"
        },
        {
          heading: "MySQL and MongoDB",
          Lessons: "MySQL"
        },
        {
          heading: "MySQL and MongoDB",
          Lessons: "SQL Queries - Part 1"
        },
        {
          heading: "MySQL and MongoDB",
          Lessons: "SQL Queries - Part 2"
        },
        {
          heading: "MySQL and MongoDB",
          Lessons: "SQL Queries - Part 3"
        },
        {
          heading: "MySQL and MongoDB",
          Lessons: "Why and What of MongoDB"
        },
        {
          heading: "MySQL and MongoDB",
          Lessons: "MongoDB Query - Part 1"
        },
        {
          heading: "MySQL and MongoDB",
          Lessons: "MongoDB Query - Part 2"
        },
        {
          heading: "MySQL and MongoDB",
          Lessons: "MongoDB Query - Part 3"
        },
        {
          heading: "MySQL and MongoDB",
          Lessons: "Optimization"
        },
         
        {
          heading: " Getting Started with NodeJS",
          Lessons: "NPM init ?"
        },
        {
          heading: " Getting Started with NodeJS",
          Lessons: "Package.json"
        },
        {
          heading: " Getting Started with NodeJS",
          Lessons: "npm = package-lock.json & yarn = yarn.lock"
        },
        {
          heading: " Getting Started with NodeJS",
          Lessons: "Path module"
        },
        {
          heading: " Getting Started with NodeJS",
          Lessons: "FS Module"
        },
        {
          heading: " Getting Started with NodeJS",
          Lessons: "OS Module"
        },
        {
          heading: " Getting Started with NodeJS",
          Lessons: "Events Module"
        },
        {
          heading: " Getting Started with NodeJS",
          Lessons: "Http Module"
        },
        {
          heading: " Getting Started with NodeJS",
          Lessons: "How to Create Server in Nodejs"
        },
        {
          heading: " Getting Started with NodeJS",
          Lessons: "How to Handle Different URLs"
        },
        {
          heading: " Getting Started with NodeJS",
          Lessons: "How to send Proper response"
        },
        {
          heading: " Getting Started with NodeJS",
          Lessons: "How to Edit Response"
        },
         
        {
          heading: "Getting Started with ExpressJS",
          Lessons: "What is Express JS"
        },
        {
          heading: "Getting Started with ExpressJS",
          Lessons: "Why we use ExpressJs"
        },
        {
          heading: "Getting Started with ExpressJS",
          Lessons: "Different type of NodeJS Frameworks"
        },
         
        {
          heading: "Basic of Express",
          Lessons: "Express Walkthrough in NeuroLab \/ How to install it Manually"
        },
        {
          heading: "Basic of Express",
          Lessons: "Writting First Hello World using Express"
        },
        {
          heading: "Basic of Express",
          Lessons: "Basics of Routes"
        },
        {
          heading: "Basic of Express",
          Lessons: "Default WildCard Route (*)"
        },
        {
          heading: "Basic of Express",
          Lessons: "Serving Static Files"
        },
        {
          heading: "Basic of Express",
          Lessons: "PORT"
        },
         
        {
          heading: "API",
          Lessons: "Rest API (Why, What and How)"
        },
         
        {
          heading: "Express js",
          Lessons: "Creating a Basic Server"
        },
        {
          heading: "Express js",
          Lessons: "Explanning the File Structure of Backend"
        },
        {
          heading: "Express js",
          Lessons: "Creating Routes"
        },
        {
          heading: "Express js",
          Lessons: "Creating Controllers"
        },
        {
          heading: "Express js",
          Lessons: "Explanning Builtin Middleware"
        },
         
        {
          heading: "Introduction to Angular",
          Lessons: "What is Angular? Overview and Features"
        },
        {
          heading: "Introduction to Angular",
          Lessons: "Understanding Single Page Applications (SPAs)"
        },
        {
          heading: "Introduction to Angular",
          Lessons: "Setting Up the Development Environment"
        },
        {
          heading: "Introduction to Angular",
          Lessons: "Installing Node.js and npm"
        },
        {
          heading: "Introduction to Angular",
          Lessons: "Installing Angular CLI"
        },
         
        {
          heading: "Angular Basics",
          Lessons: "Creating Your First Angular Application"
        },
        {
          heading: "Angular Basics",
          Lessons: "Angular Application Structure"
        },
        {
          heading: "Angular Basics",
          Lessons: "Components: The Building Blocks of Angular"
        },
        {
          heading: "Angular Basics",
          Lessons: "Creating and Using Components"
        },
        {
          heading: "Angular Basics",
          Lessons: "Component Templates and Styles"
        },
        {
          heading: "Angular Basics",
          Lessons: "Component Interaction (Input & Output)"
        },
         
        {
          heading: "Templates and Data Binding",
          Lessons: "Understanding Angular Templates"
        },
        {
          heading: "Templates and Data Binding",
          Lessons: "Data Binding: One-Way and Two-Way Binding"
        },
        {
          heading: "Templates and Data Binding",
          Lessons: "Directives: Built-in Directives (ngIf, ngFor, ngSwitch)"
        },
        {
          heading: "Templates and Data Binding",
          Lessons: "Creating Custom Directives"
        },
         
        {
          heading: "Services and Dependency Injection",
          Lessons: "Introduction to Services"
        },
        {
          heading: "Services and Dependency Injection",
          Lessons: "Creating and Using Angular Services"
        },
        {
          heading: "Services and Dependency Injection",
          Lessons: "Understanding Dependency Injection"
        },
        {
          heading: "Services and Dependency Injection",
          Lessons: "Singleton Services vs. Multi-instance Services"
        },
         
        {
          heading: "Routing and Navigation",
          Lessons: "Introduction to Angular Router"
        },
        {
          heading: "Routing and Navigation",
          Lessons: "Configuring Routes and Navigation"
        },
        {
          heading: "Routing and Navigation",
          Lessons: "Route Parameters and Query Parameters"
        },
        {
          heading: "Routing and Navigation",
          Lessons: "Lazy Loading Modules for Better Performance"
        },
         
        {
          heading: "Forms in Angular",
          Lessons: "Introduction to Template-driven Forms"
        },
        {
          heading: "Forms in Angular",
          Lessons: "Reactive Forms: Setup and Validation"
        },
        {
          heading: "Forms in Angular",
          Lessons: "Form Controls, Form Groups, and Form Arrays"
        },
        {
          heading: "Forms in Angular",
          Lessons: "Custom Validators"
        },
         
        {
          heading: "Working with HTTP",
          Lessons: "Introduction to HttpClient Module"
        },
        {
          heading: "Working with HTTP",
          Lessons: "Making HTTP Requests (GET, POST, PUT, DELETE)"
        },
        {
          heading: "Working with HTTP",
          Lessons: "Handling Responses and Errors"
        },
        {
          heading: "Working with HTTP",
          Lessons: "Interceptors for HTTP Requests"
        },
         
        {
          heading: "Pipes and Observables",
          Lessons: "Understanding Pipes: Built-in and Custom Pipes"
        },
        {
          heading: "Pipes and Observables",
          Lessons: "Introduction to Observables"
        },
        {
          heading: "Pipes and Observables",
          Lessons: "Using RxJS for Reactive Programming"
        },
        {
          heading: "Pipes and Observables",
          Lessons: "Subjects and Behavior Subjects"
        },
         
        {
          heading: "State Management",
          Lessons: "Introduction to State Management"
        },
        {
          heading: "State Management",
          Lessons: "Using Services for State Management"
        },
        {
          heading: "State Management",
          Lessons: "Overview of NgRx (optional for beginners)"
        },
        {
          heading: "State Management",
          Lessons: "Understanding Actions, Reducers, and Effects"
        },
         
        {
          heading: "Advanced Topics (Intermediate)",
          Lessons: "Understanding Angular Lifecycle Hooks"
        },
        {
          heading: "Advanced Topics (Intermediate)",
          Lessons: "Dynamic Components and ViewContainerRef"
        },
        {
          heading: "Advanced Topics (Intermediate)",
          Lessons: "Change Detection Strategy"
        },
        {
          heading: "Advanced Topics (Intermediate)",
          Lessons: "Introduction to Angular Universal (Server-Side Rendering)"
        },
        {
          heading: "Advanced Topics (Intermediate)",
          Lessons: "Best Practices for Angular Development"
        },
         
        {
          heading: "Module 11: Testing Angular Applications",
          Lessons: "Introduction to Testing in Angular"
        },
        {
          heading: "Module 11: Testing Angular Applications",
          Lessons: "Unit Testing with Jasmine and Karma"
        },
        {
          heading: "Module 11: Testing Angular Applications",
          Lessons: "End-to-End Testing with Protractor"
        },
        {
          heading: "Module 11: Testing Angular Applications",
          Lessons: "Writing Effective Tests for Components and Services"
        },
         
        {
          heading: "Module 12: Deployment and Optimization",
          Lessons: "Building and Serving the Application"
        },
        {
          heading: "Module 12: Deployment and Optimization",
          Lessons: "Environment Configuration (Development vs. Production)"
        },
        {
          heading: "Module 12: Deployment and Optimization",
          Lessons: "Performance Optimization Techniques"
        },
        {
          heading: "Module 12: Deployment and Optimization",
          Lessons: "Deployment Strategies (Firebase, Heroku, etc.)"
        },
         
        {
          heading: "Database ",
          Lessons: "Express Connecting with Database"
        },
        {
          heading: "Database ",
          Lessons: "Importance of dotenv and how to use it."
        },
        {
          heading: "Database ",
          Lessons: "How to Create Schema"
        },
        {
          heading: "Database ",
          Lessons: "Generating Models from Schemas"
        },
        {
          heading: "Database ",
          Lessons: "Using Model in controllers"
        },
        {
          heading: "Database ",
          Lessons: "Why we use ORM"
        },
        {
          heading: "Database ",
          Lessons: "Different type of ORM"
        },
         
        {
          heading: "Security Basics ",
          Lessons: "CORS"
        },
        {
          heading: "Security Basics ",
          Lessons: "What is CORS and Need to use CORS"
        },
        {
          heading: "Security Basics ",
          Lessons: "Creating Custom Middelware"
        },
        {
          heading: "Security Basics ",
          Lessons: "What is JWT and why we use it ?"
        },
        {
          heading: "Security Basics ",
          Lessons: "Creating JWT"
        },
        {
          heading: "Security Basics ",
          Lessons: "Cookies and Cookies Option"
        },
        {
          heading: "Security Basics ",
          Lessons: "What is Hasing and Need of it."
        },
         
        {
          heading: "Intro to React",
          Lessons: "Background of React"
        },
        {
          heading: "Intro to React",
          Lessons: "Starter Project with CDN"
        },
         
        {
          heading: "Create-react-app",
          Lessons: "NPM"
        },
        {
          heading: "Create-react-app",
          Lessons: "NPM vs NPX"
        },
        {
          heading: "Create-react-app",
          Lessons: "NPM vs Yarn"
        },
        {
          heading: "Create-react-app",
          Lessons: "Babel"
        },
        {
          heading: "Create-react-app",
          Lessons: "Create react app"
        },
         
        {
          heading: "Project Configuration",
          Lessons: "VSCode plugins \/ Importance and working"
        },
        {
          heading: "Project Configuration",
          Lessons: "Prettier, ESLint, ES7 and Shortcuts"
        },
        {
          heading: "Project Configuration",
          Lessons: "Browsers list"
        },
         
        {
          heading: "JSX",
          Lessons: "Why JSX?"
        },
        {
          heading: "JSX",
          Lessons: "Embedding JS expressions in JSX"
        },
        {
          heading: "JSX",
          Lessons: "if\/else statements inside jsx component"
        },
        {
          heading: "JSX",
          Lessons: "Passing attributes to jsx"
        },
         
        {
          heading: "Components",
          Lessons: "How is an element rendered on screen?"
        },
        {
          heading: "Components",
          Lessons: "createRoot() & render() methods of react18"
        },
        {
          heading: "Components",
          Lessons: "How componenet are created ?"
        },
        {
          heading: "Components",
          Lessons: "Folding structure for your components"
        },
        {
          heading: "Components",
          Lessons: "Creating Multiple Components and Rendering it"
        },
         
        {
          heading: "PROPS",
          Lessons: "Composting components - Passing data one way"
        },
        {
          heading: "PROPS",
          Lessons: "Extracting components - Getting data from props"
        },
        {
          heading: "PROPS",
          Lessons: "Prop passing from grandparent to grandchild component?"
        },
        {
          heading: "PROPS",
          Lessons: "Props are read-only"
        },
        {
          heading: "PROPS",
          Lessons: "Prop drilling: The Problem"
        },
         
        {
          heading: "Hooks Intro",
          Lessons: "useState()"
        },
        {
          heading: "Hooks Intro",
          Lessons: "useEffect()"
        },
         
        {
          heading: "Conditional rendering",
          Lessons: "Use of if\/else conditionals with useState()"
        },
        {
          heading: "Conditional rendering",
          Lessons: "Use of if\/else conditionals with props"
        },
        {
          heading: "Conditional rendering",
          Lessons: "In-line if with logical && operator"
        },
        {
          heading: "Conditional rendering",
          Lessons: "Avoiding components re-rendering with conditional checks"
        },
         
        {
          heading: "Rendering lists",
          Lessons: "Rendering multiple components with list"
        },
        {
          heading: "Rendering lists",
          Lessons: "How to use .map() to render array"
        },
        {
          heading: "Rendering lists",
          Lessons: "Optimizing lists with key arguments"
        },
        {
          heading: "Rendering lists",
          Lessons: "Advance list handling with lazy-loading"
        },
         
        {
          heading: "Events",
          Lessons: "onClick event and their working"
        },
        {
          heading: "Events",
          Lessons: "Passing function reference v\/s direct calling"
        },
        {
          heading: "Events",
          Lessons: "() => () v\/vs () => {}"
        },
        {
          heading: "Events",
          Lessons: "Passing arguments to events"
        },
         
        {
          heading: "Router",
          Lessons: "React router v6"
        },
        {
          heading: "Router",
          Lessons: "Making routes protected"
        },
        {
          heading: "Router",
          Lessons: "Handling unknown routes (404 page)"
        },
        {
          heading: "Router",
          Lessons: "Getting current url inside component"
        },
        {
          heading: "Router",
          Lessons: "Accessing parameters from URL"
        },
        {
          heading: "Router",
          Lessons: "Routing user to a particular link"
        },
         
        {
          heading: "Forms",
          Lessons: "Form handling"
        },
        {
          heading: "Forms",
          Lessons: "Working with Formik"
        },
        {
          heading: "Forms",
          Lessons: "Saving form details to localStorage"
        },
        {
          heading: "Forms",
          Lessons: "Breif about Cookies & Session storage"
        },
        {
          heading: "Forms",
          Lessons: "Handling file upload"
        },
         
        {
          heading: "Context",
          Lessons: "Prop drilling: The Solution"
        },
        {
          heading: "Context",
          Lessons: "useContext()"
        },
         
        {
          heading: "Hook Conclusion",
          Lessons: "Component lifecycle with useEffect()"
        },
        {
          heading: "Hook Conclusion",
          Lessons: "useMemo()"
        },
        {
          heading: "Hook Conclusion",
          Lessons: "useCallback()"
        },
        {
          heading: "Hook Conclusion",
          Lessons: "useReducer()"
        },
         
        {
          heading: "State management",
          Lessons: "Redux"
        },
        {
          heading: "State management",
          Lessons: "Redux Toolkit - Part 1"
        },
        {
          heading: "State management",
          Lessons: "Redux Toolkit - Part 1"
        },
         
        {
          heading: "Styling",
          Lessons: "Tailwind - Part 1"
        },
        {
          heading: "Styling",
          Lessons: "Tailwind - Part 2"
        },
        {
          heading: "Styling",
          Lessons: "Tailwind - Part 3"
        },
        {
          heading: "Styling",
          Lessons: "Tailwind - Part 4"
        },
         
        {
          heading: "Connecting Frontend + Backend",
          Lessons: "Walkthrough with FETCH and AXIOS"
        },
        {
          heading: "Connecting Frontend + Backend",
          Lessons: "Proxy"
        },
        {
          heading: "Connecting Frontend + Backend",
          Lessons: "Talk on URL"
        },
        {
          heading: "Connecting Frontend + Backend",
          Lessons: "Crearting Frontend Page - Froms"
        },
        {
          heading: "Connecting Frontend + Backend",
          Lessons: "Creating Frontend Page - Read , Update, Delete"
        },
         
        {
          heading: "Deployment in Production",
          Lessons: "Hosting Frontend"
        },
        {
          heading: "Deployment in Production",
          Lessons: "Hosting Backend"
        },
        {
          heading: "Deployment in Production",
          Lessons: "Making Required Chnages in App"
        },
         
        {
          heading: "HTML Projects",
          Lessons: "Responsive Portfolio Website"
        },
        {
          heading: "HTML Projects",
          Lessons: "Personal Blog with HTML & CSS"
        },
        {
          heading: "HTML Projects",
          Lessons: "Interactive Photo Gallery"
        },
        {
          heading: "HTML Projects",
          Lessons: "Business Landing Page"
        },
         
        {
          heading: "JavaScript Projects",
          Lessons: "Interactive Quiz Application"
        },
        {
          heading: "JavaScript Projects",
          Lessons: "Weather App Using Fetch API"
        },
        {
          heading: "JavaScript Projects",
          Lessons: "Todo List with Local Storage"
        },
        {
          heading: "JavaScript Projects",
          Lessons: "Simple Game (e.g., Tic-Tac-Toe)"
        },
         
        {
          heading: "REST API Projects",
          Lessons: "Movie Database API Integration"
        },
        {
          heading: "REST API Projects",
          Lessons: "Weather Forecasting API"
        },
        {
          heading: "REST API Projects",
          Lessons: "News Aggregator using Public APIs"
        },
         
        {
          heading: "Mini CRUD Projects",
          Lessons: "Task Manager Application"
        },
        {
          heading: "Mini CRUD Projects",
          Lessons: "Contact Management System"
        },
        {
          heading: "Mini CRUD Projects",
          Lessons: "Notes Application"
        },
         
        {
          heading: "Authentication Projects",
          Lessons: "User Registration and Login System"
        },
        {
          heading: "Authentication Projects",
          Lessons: "Password Recovery System"
        },
        {
          heading: "Authentication Projects",
          Lessons: "Two-Factor Authentication Setup"
        },
         
        {
          heading: "Backend Development Projects",
          Lessons: ""
        },
         
        {
          heading: "Backend Introduction",
          Lessons: "Overview of the Backend Framework (e.g., Express, Flask)"
        },
        {
          heading: "Backend Introduction",
          Lessons: "Project Setup and Initial Configuration"
        },
        {
          heading: "Backend Introduction",
          Lessons: "Designing API Endpoints and Responses"
        },
         
        {
          heading: "Feature Projects",
          Lessons: "User Authentication and Role Management"
        },
        {
          heading: "Feature Projects",
          Lessons: "Course Management System"
        },
        {
          heading: "Feature Projects",
          Lessons: "Payment Processing for Courses"
        },
        {
          heading: "Feature Projects",
          Lessons: "User Feedback and Review System"
        },
         
        {
          heading: "Authentication Projects",
          Lessons: "JWT Authentication for APIs"
        },
        {
          heading: "Authentication Projects",
          Lessons: "OAuth Integration with Social Media"
        },
        {
          heading: "Authentication Projects",
          Lessons: "Session Management and Cookies"
        },
         
        {
          heading: "Course Listing Projects",
          Lessons: "Search and Filter Courses API"
        },
        {
          heading: "Course Listing Projects",
          Lessons: "Course Enrollment API"
        },
        {
          heading: "Course Listing Projects",
          Lessons: "Instructor Management API"
        },
         
        {
          heading: "Admin Panel Projects",
          Lessons: ""
        },
         
         
        {
          heading: "Admin Dashboard",
          Lessons: "Course Management Dashboard"
        },
        {
          heading: "Admin Dashboard",
          Lessons: "User Management Dashboard"
        },
        {
          heading: "Admin Dashboard",
          Lessons: "Analytics Dashboard for Courses"
        },
         
        {
          heading: "Admin CRUD Operations",
          Lessons: "Course Creation and Editing"
        },
        {
          heading: "Admin CRUD Operations",
          Lessons: "User Role Assignment and Management"
        },
        {
          heading: "Admin CRUD Operations",
          Lessons: "Report Generation for Users and Courses"
        },
         
         
        {
          heading: "Frontend Development Projects",
          Lessons: ""
        },
         
        {
          heading: "Frontend Introduction",
          Lessons: "Overview of the Frontend Framework (e.g., React, Vue)"
        },
        {
          heading: "Frontend Introduction",
          Lessons: "Project Structure and Setup"
        },
        {
          heading: "Frontend Introduction",
          Lessons: "Component-Based Development"
        },
         
        {
          heading: "User Features",
          Lessons: "User Registration and Profile Management"
        },
        {
          heading: "User Features",
          Lessons: "Course Enrollment and Progress Tracking"
        },
        {
          heading: "User Features",
          Lessons: "Interactive Learning Dashboard"
        },
         
        {
          heading: "Admin Features",
          Lessons: "Admin Dashboard for Course Management"
        },
        {
          heading: "Admin Features",
          Lessons: "User Insights and Analytics Page"
        },
        {
          heading: "Admin Features",
          Lessons: "Feedback Management System"
        },
         
        {
          heading: "Component Development",
          Lessons: "Custom Component Library"
        },
        {
          heading: "Component Development",
          Lessons: "Responsive Navigation Bar"
        },
        {
          heading: "Component Development",
          Lessons: "Modal and Popup Components"
        },
        {
          heading: "Component Development",
          Lessons: "Forms with Validation"
        },
         
        {
          heading: "Pages",
          Lessons: "FAQ Page"
        },
        {
          heading: "Pages",
          Lessons: "Contact Us Page"
        },
        {
          heading: "Pages",
          Lessons: "Blog or Resource Page"
        }
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
      {} as Record<string, { title: string; lessons: string[] }>,
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
                    }`}
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)]" />
                    <p className="mb-2 md:text-[12px] text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                      Module {i + 1}
                    </p>
                    <h6 className="text-[13px] font-semibold md:leading-7 leading-5 text-white md:text-[20px]">
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
