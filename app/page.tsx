import Image from "next/image";
import Headder from "./components/Headder";
import Hero from "./components/Hero";
import HeroVideo from "./components/HeroVideo";
import Companies from "./components/Companies";
import Professional from "./components/Professional";
import StartSection from "./components/StartSection";
import Community from "./components/Community";
import Mentors from "./components/Mentors";
import Roadmap from "./components/RoadMap";
import Confused from "./components/Confused";
import Learning from "./components/Learning";
import SuccessStories from "./components/SuccessStories";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { Metadata } from "next";
import { MoveRight, ShoppingCart } from "lucide-react";
import BuyNowButton from "./components/BuyNowButton";

const faqData = [
  {
    name: "What is iSkills?",
    submenu: [
      {
        answer:
          "iSkills, an initiative by iQuanta, a leader in exam preparation, is redefining tech upskilling with innovative learning methodologies. Our tailored programs make mastering new technologies effortless, supported by top-notch service and support to help you excel.",
        subanswers: [],
      },
    ],
  },
  {
    name: "Do I need any prerequisites to learn?",
    submenu: [
      {
        answer:
          "No, our expert-led programs start from the fundamentals, so no prior knowledge is required unless the course specifically mentions any prerequisites.",
        subanswers: [],
      },
    ],
  },
  {
    name: "What is meant by placement assistance?",
    submenu: [
      {
        answer:
          "Placement assistance includes mock interview preparation, resume support and job referrals.",
        subanswers: [],
      },
    ],
  },
  {
    name: " What is the terms and conditions of job guarantee program?",
    submenu: [
      {
        answer:
          "Please check the specific program and the terms and conditions for the job guarantee, we pride our self on maintaining complete transparency on the services promised.Incase you have any doubts feel free to reach out to us. ",
        subanswers: [],
      },
    ],
  },
  {
    name: "How do i contact the support team for my doubts?",
    submenu: [
      {
        answer:
          "Our support team is available on Skype 12 hrs daily from 9 am to 9 pm. ",
      },
    ],
  },
  {
    name: "How do online coding classes work?",
    submenu: [
      {
        answer:
          "Each online coding course has a specific start date and live class timing. The candidates can join the session as per the fixed schedule mentioned and can interact with the mentors to solve their doubts in the live class. ",
      },
    ],
  },
  {
    name: "What are the multiple ways in which I can learn the courses?",
    submenu: [
      {
        answer:
          "Our online coding programs are built to suit the likes of both students and working professionals alike. We conduct live classes on the weekends, considering the busy schedules one may have. We also provide the recordings of the live classes if someone happens to miss the live classes. Additionally, we also have two means of doubt-solving based on the subscription the candidates opt for. ",
      },
    ],
  },
  {
    name: "Does iskills provide demo classes?",
    submenu: [
      {
        answer:
          "If you would like to have a demo class you can certainly reach out to our team and they will assist you in the best means possible. ",
      },
    ],
  },
  {
    name: "What is the schedule of the online classes?",
    submenu: [
      {
        answer:
          "Every online program has its own pre-defined schedule, which is mentioned on the course page. Kindly refer to the specific online coding course for which you would like to know the schedule.In case your doubt continues to persist, please contact our support team. ",
      },
    ],
  },
  {
    name: "Which programming language is best to learn as a beginner?",
    submenu: [
      {
        answer:
          "There is no straightforward answer to this question as every programming language has its purpose and use-cases.However, if you are not sure which technology or online coding course to choose and you wish to get assistance, feel free to reach out to our team of career counsellors, who would suggest a detailed career plan that would be tailored to you. ",
      },
    ],
  },
  {
    name: "How do I enrol or purchase online coding courses?",
    submenu: [
      {
        answer:
          "You can directly purchase the course you’d like to learn from our website and access it right away.However, if you are unsure of which coding course to choose and would like to speak to an expert before you decide feel free to reach out to our team on call or drop a query and we will get back to you. ",
      },
    ],
  },
  {
    name: "How do I choose the right coding career path when learning online?",
    submenu: [
      {
        answer:
          "Since every technology has its own career path and outcomes, it all boils down to what you would like to make your career in. Therefore if you are unsure as to which career path to follow and which online coding course to choose, it would be advisable to reach out to our career counsellors and they will suggest a path based on your previous experience and career goals. ",
      },
    ],
  },
  {
    name: "Can I complete coding classes entirely online and still get quality instruction?",
    submenu: [
      {
        answer:
          "Indeed you can. Regardless of the medium of courses you choose live or recorded the quality of the lectures and content of all online coding courses are the same. ",
      },
    ],
  },
];

export const metadata: Metadata = {
  title: "Best Online Coding and Programming Courses [2025] I iskills",
  description:
    "2X your career growth with iskills online coding & tech courses. Get job-ready skills & certificates learn from industry experts|Get 1 to 1 doubt support & Job assistance",
  keywords: [
    "Coding and Programming Courses",
    "Computer Programming",
    "Web Development course",
    "Programming Languages",
    "Coding Bootcamp",
    "Full Stack Development course",
    "Coding classes online",
  ],

  alternates: {
    canonical: "https://www.iquanta.in/iskills",
  },

  openGraph: {
    type: "website",
    url: "https://www.iquanta.in/iskills",
    title: "Best Online Coding and Programming Courses [2025] I iskills",
    description:
      "2X your career growth with iskills online coding & tech courses. Get job-ready skills & certificates learn from industry experts|Get 1 to 1 doubt support & Job assistance",
    images: [
      {
        url: "https://www.iquanta.in/blog/wp-content/uploads/2024/10/ISKILL-FEATURED-IMAGE.jpg",
        width: 1600,
        height: 758,
        type: "image/jpg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Online Coding and Programming Courses [2025] I iskills",
    description:
      "2X your career growth with iskills online coding & tech courses. Get job-ready skills & certificates learn from industry experts|Get 1 to 1 doubt support & Job assistance",
    images: [
      "https://www.iquanta.in/blog/wp-content/uploads/2024/10/ISKILL-FEATURED-IMAGE.jpg",
    ],
  },

  other: {
    "og:image:height": "758",
    "og:image:width": "1600",
    "og:image:type": "image/jpg",
    "article:publisher": "https://facebook.com/iquanta.in",
    "article:published_time": "2024-10-24T11:10:42+00:00",
    "article:modified_time": "2024-10-24T12:10:42+00:00",
    "twitter:label2": "Est. reading time",
    "twitter:data2": "7 Minutes",
    "twitter:image:height": "758",
    "twitter:image:width": "1600",
    "twitter:image:type": "image/jpg",
  },
};

export default function Home() {
  return (
    <>
      <div className="bg-black">
        <Headder />
        <Hero />
        <HeroVideo />
        <Companies />
        <Professional />
        <StartSection />
        <Community />
        <Mentors />
        <Roadmap />
        {/* <Confused /> */}
        <div id="Learning">
          <Learning />
        </div>
        <SuccessStories />
        <FAQ data={faqData} />
        <Footer />
        <BuyNowButton targetId="Learning" />
      </div>
    </>
  );
}
