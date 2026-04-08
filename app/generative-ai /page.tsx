import React from 'react'
import Headder from '../components/Headder'
import Banner from './components/Banner'
import PmpSection from './components/PmpSection'
import Footer from '../components/Footer'
import Benefits from './components/Benefits'
import Contact from './components/Contact'
import ComparisonTable from './components/ComparisonTable'
import Features from './components/Features'
import Skills from './components/Skills'
import CourseCommunity from './components/CourseCommunity'
import Mentors from '../components/Mentors'
import CourseRoadmap from './components/CourseRoadmap'
import Curriculum from './components/Curriculum'
import Courses from './components/Courses'
import SuccessStories from '../components/SuccessStories'
import FAQ from '../components/FAQ'
import Certification from './components/Certification'
import JobRoles from './components/JobRoles'
import BuyNowButton from '../components/BuyNowButton'

const faqData = [
  {
    name: "What is Data Analytics? ",
    submenu: [
      {
        answer:
          "Data Analytics is the process of analyzing raw data to find meaningful insights which aim to solve a certain problem statement of a business using the current and historical data of the business. Data analytics training is crucial as organizations need trained analysts to solve complex business problems like demand and revenue estimation. Additionally, data analytics training does not only pertain to skills such as powerBI, Tableau, Excel, SQL, Statistics and Python but rather domain knowledge is also an equally essential part of data analytics training as without adequate knowledge of the domain analysing the data becomes challenging and can lead to inconsistent results. ",
        subanswers: [],
      },
    ],
  },
  {
    name: "Who should take a Data Analytics course? ",
    submenu: [
      {
        answer:
          "Anyone can take data analytics training, regardless of their background, to advance their career. Those seeking a data analytics certification can easily learn data analytics online, while candidates aiming for management roles should also learn data analytics course online to develop essential skills.",
        subanswers: [],
      },
    ],
  },
  {
    name: "What are the prerequisites for enrolling in a Data Analyst course? ",
    submenu: [
      {
        answer:
          "There are no prerequisites for the data analytics training course, which covers everything from basics to advanced concepts in the data analytics syllabus. You can learn data analytics course online, with topics like SQL, Python, and Data Visualization. Recorded sessions and 1-on-1 doubt-solving ensure flexibility. This program helps you gain practical knowledge through live projects. ",
        subanswers: [],
      },
    ],
  },
  {
    name: " What topics are covered in a Data Analyst course? ",
    submenu: [
      {
        answer:
          "This program covers all the fundamental concepts which make a detailed data analytics syllabus such as Python for data analytics, Statistics, SQL, Advanced excel, PowerBI and Tableau. Post the completion of this program candidates will also be given a data analytics certification which makes them eligible to apply for relevant roles in organizations with similar openings. These concepts are pivotal to making a career in the analytics field, additionally, this data analytics course also emphasizes live projects and covers complete data analytics syllabus which are of utmost importance to apply these skills practically in the real world. When these offerings are compared this makes our program the most competitive in terms of the data analytics course fee which makes this course the perfect value for money. ",
        subanswers: [],
      },
    ],
  },
  {
    name: "What is the duration of a Data Analyst course? ",
    submenu: [
      {
        answer:
          "The duration of this data analyst course is 120+ hours which spans roughly 6 months of learning and practical implementation of projects with complete data analytics syllabus. The course is meticulously crafted in a manner which makes it very different from traditional courses which only emphasize learning. The key differentiator of this program is its data analytics syllabus which focuses on practically applying the core concepts learned via live projects.  ",
      },
    ],
  },
  {
    name: "What is the Data Analytics course fee? ",
    submenu: [
      {
        answer:
          "This course is offered in 2 packages based on the candidates preferences and requirements, the following are the options available with the respective data analytics course fee. 1- Job Guarantee Program:- 1,25,0002- Placement Assistance- 12,000",
          subanswers: [
            
          ],
      },
    ],
  },
  {
    name: "What career opportunities are available after completing a Data Analyst course? ",
    submenu: [
      {
        answer:
          "Our online coding programs are built to suit the likes of both students and working professionals alike. We conduct live classes on the weekends, considering the busy schedules one may have. We also provide the recordings of the live classes if someone happens to miss the live classes. Additionally, we also have two means of doubt-solving based on the subscription the candidates opt for. ",
      },
    ],
  },
  {
    name: "What is the average salary of a Data Analyst? ",
    submenu: [
      {
        answer:
          "The average salary of a data analyst ranges from 5 LPA to 25 LPA, depending on factors like experience, knowledge, live project work, additional certifications, and choosing to learn a data analytics course online.",
      },
    ],
  },
  {
    name: "Can I take a Data Analyst course without coding knowledge? ",
    submenu: [
      {
        answer:
          "Data Analytics is one of the most popular choices for individuals who seek a career in IT with the least amount of coding. Our practical learning approach makes it very easy and convenient to learn data analytics course online as there is no prerequisite knowledge needed to get started. Additionally, our training pedagogy makes this the most in-depth data analytics syllabus ensuring that the candidate makes the most of the course while getting a reputable data analytics certification. Thus if you are someone who wants a career with the least amount of coding and wants to learn data analytics course online this is a suitable program for you.",
      },
    ],
  },
  {
    name: "Why learn data analytics? ",
    submenu: [
      {
        answer:
          "Data Analytics have been one of the most in-demand resources for the last 5 years, and the demand for data analytics training and data analytics courses has skyrocketed ever since. The growing demand for data analytics training is driven by the versatility of data analysts, who can excel in fields like sales, e-commerce, and healthcare. With a comprehensive data analytics syllabus, you can learn data analytics course online to thrive in these domains. This versatility has contributed to the ever-increasing popularity of data analytics training and data analytics certification globally.",
      },
    ],
  },

];

export const metadata = {
  title: "Learn Data Analysis & Business Analytics - Online Course",
  description: "Learn business analytics and data analytics from basics to advance, work on live projects to become job-ready, get 1 to 1 support to enhance your learning.",
  keywords: [
    "data analytics certification",
    "data science certification",
    "data analytics course fee",
    "data analyst course free",
    "online data science course",
    "business analyst course online",
    "best data analytics courses"
  ],
  alternates: {
    canonical: "https://www.iquanta.in/iskills/data-analytics-course",
  },
  openGraph: {
    type: "website",
    title: "Learn Data Analysis & Business Analytics - Online Course",
    url: "https://www.iquanta.in/iskills/data-analytics-course",
    description: "Learn business analytics and data analytics from basics to advance, work on live projects to become job-ready, get 1 to 1 support to enhance your learning.",
    images: [
      {
        url: "https://www.iquanta.in/blog/wp-content/uploads/2024/10/DAFI.jpg",
        width: 1600,
        height: 758,
        type: "image/jpg",
      },
    ],
  },
  twitter: {
    title: "Learn Data Analysis & Business Analytics - Online Course",
    description: "Learn business analytics and data analytics from basics to advance, work on live projects to become job-ready, get 1 to 1 support to enhance your learning.",
    images: [
      "https://www.iquanta.in/blog/wp-content/uploads/2024/10/DAFI.jpg",
    ],
  },
  other: {
    "article:publisher": "https://facebook.com/iquanta.in",
    "article:published_time": "2024-10-24T11:10:42+00:00",
    "article:modified_time": "2024-10-24T12:10:42+00:00",
    "twitter:label2": "Est. reading time",
    "twitter:data2": "7 Minutes",
    "twitter:image:height": "758",
    "twitter:image:width": "1600",
    "twitter:image:type": "image/jpg",
    "og:image:height": "758",
    "og:image:width": "1600",
    "og:image:type": "image/jpg",
  },
};
export default function page() {
  return (
    <div>
        <Headder />
        <Banner />
        <PmpSection />
        <Benefits />
        <Contact />
        <ComparisonTable />
        <Features />
        <Skills />
        <CourseCommunity />
        <Mentors />
        <CourseRoadmap />
        <Curriculum />
       <div id='Courses'>
         <Courses />
       </div>
        <JobRoles />
        <SuccessStories />
        <Certification />
        <FAQ data={faqData} />
        <Footer />
        <BuyNowButton targetId="Courses" />
    </div>
  )
}
