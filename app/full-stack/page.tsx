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
    name: " Will i get job guarantee in placement assistance?  ",
    submenu: [
      {
        answer:
          "No as part of placement assistance you will only get resume support and mock interviews, however rest be assured there is no change in teaching pattern or content when compared to job guarantee program ",
        subanswers: [],
      },
    ],
  },
  {
    name: "What is meant by community doubt support?  ",
    submenu: [
      {
        answer:
          "You will be part of our community on whatsapp where you can find assistance to your doubts from your peers and moderators.",
        subanswers: [],
      },
    ],
  },
  {
    name: "What is the main difference in job guarantee and placement assistance?  ",
    submenu: [
      {
        answer:
          "There is no difference in the curriculum and mentoring in both of these programs apart from a few features which are, ",
        subanswers: [],
      },
    ],
  },
  {
    name: "What are the terms and conditions for job guarantee?  ",
    submenu: [
      {
        answer:
          "Please go through the detailed terms and conditions document ",
        subanswers: [],
      },
    ],
  },
  {
    name: "I have some doubts about how to connect to a counselor. ",
    submenu: [
      {
        answer:
          "You can reach out to us on the following number <> additionally you drop a mail to <mail>",
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
        {/* <CourseCommunity /> */}
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
