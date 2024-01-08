import Navbar from "./Navbar";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faClipboardList,
  faDesktop,
  faUsers,
  faGem,
  faHourglassHalf,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import Microsoft from "../assets/partners/1.png";
import FAQ from "../assets/icons/faq.png";
import Google from "../assets/partners/2.png";
import Ingnite from "../assets/partners/3.png";
import Eshwar from "../assets/partners/4.png";
import Footer from "./Footer";

export default () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const features = [
    {
      icon: <FontAwesomeIcon icon={faMapMarkerAlt} />,
      title: "For Identifying and Exploring",
      desc: "Street food vendors can update their live locations, ensuring customers can find them effortlessly.",
    },
    {
      icon: <FontAwesomeIcon icon={faClipboardList} />,
      title: "Menu Availability",
      desc: "Vendors can showcase their current offerings, allowing customers to know the available recipes in advance.",
    },
    {
      icon: <FontAwesomeIcon icon={faDesktop} />,
      title: "User Interface",
      desc: "The user-friendly app design ensures a seamless experience for both sellers and buyers.",
    },
    {
      icon: <FontAwesomeIcon icon={faUsers} />,
      title: "Community Building",
      desc: "Near Treat aims to create a vibrant community of street food enthusiasts, fostering connections and culinary adventures.",
    },
  ];

  const faq = [
    {
      question: "What is NearTreat?",
      answer:
        "NearTreat is a web application designed to help users easily locate street food vendors and discover their available menu items in real-time through their web browsers.",
    },
    {
      question: "How does NearTreat work for vendors?",
      answer:
        "Vendors can create an account on NearTreat, add their current location, and list their menu items. This information is then accessible to users searching for nearby street food options.",
    },
    {
      question: "How do customers use NearTreat?",
      answer:
        "Customers can access the NearTreat web app through their browsers, search for nearby street vendors, view their menus, and get directions to their locations.",
    },
    {
      question: "Is NearTreat available in all cities?",
      answer:
        "NearTreat is gradually expanding its coverage to different cities. Currently, it might be available in select cities, with plans to grow to more locations in the future.",
    },
    {
      question: "Is NearTreat free to use?",
      answer:
        "Yes, NearTreat is free for both vendors and customers to use. There might be premium features in the future, but basic access will remain free.",
    },
    {
      question: "How accurate is the location tracking on NearTreat?",
      answer:
        "The location tracking on NearTreat relies on real-time GPS data and is designed to be highly accurate, guiding users directly to the vendor's location.",
    },
    {
      question: "Can vendors update their menus and locations in real-time?",
      answer:
        "Yes, vendors can log in to their NearTreat accounts and update their menus and locations in real-time to reflect changes.",
    },
    {
      question: "What if my favorite vendor is not listed on NearTreat?",
      answer:
        "If your favorite vendor is not listed, you can encourage them to join NearTreat. The more vendors that join, the better the app's coverage will become.",
    },
    {
      question: "Can I leave reviews and ratings for vendors?",
      answer:
        "Yes, users can leave reviews and ratings for both vendors and their menu items. This feedback helps other users make informed decisions.",
    },
    // ... Add more FAQ entries here ...
  ];

  return (
    <>
      <Navbar />
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              How are we trying to solve
            </h3>
            <p className="mt-3">
              Our unique solution bridges the gap between street food vendors
              and customers
            </p>
          </div>
          <div className="mt-12">
            <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((item, idx) => (
                <li key={idx} className="space-y-3">
                  <div className="w-12 h-12 mx-auto bg-red-50 text-red-600 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h4 className="text-lg text-gray-800 font-semibold">
                    {item.title}
                  </h4>
                  <p>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <></>
      <>
        {/* Icon Blocks */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="lg:w-3/4">
              <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
                Why Choose NearTreat?
              </h2>
              <p className="mt-3 text-gray-800 dark:text-gray-400">
                At NearTreat, we're passionate about bringing the joy of street
                food to your fingertips. Our unique platform is designed to
                connect street food vendors and food enthusiasts like never
                before. Here's why you should choose NearTreat for all your
                street food cravings:
              </p>
              <a
                href="/login"
                className="mt-5 inline-flex items-center gap-x-2 font-medium text-red-600 dark:text-red-500"
              >
                Get Start, Now
                <svg
                  className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.975821 6.92249C0.43689 6.92249 0 7.34222 0 7.85999C0 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
            {/* End Col */}
            <div className="space-y-6 lg:space-y-10">
              {/* Icon Block */}
              <div className="flex ">
                {/* Icon */}
                <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200 bg-red-50 text-red-600">
                  <svg
                    className="w-5 h-5 "
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <FontAwesomeIcon icon={faGem} />
                  </svg>
                </span>
                <div className="ml-5 sm:ml-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Discover Hidden Gems:
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    Tired of missing out on your favorite street food vendors?
                    NearTreat's live location tracking ensures you never miss a
                    beat. Discover hidden culinary gems tucked away in the
                    streets of your city.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                {/* Icon */}
                <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200 bg-red-50 text-red-600">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <FontAwesomeIcon icon={faHourglassHalf} />{" "}
                  </svg>
                </span>
                <div className="ml-5 sm:ml-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Real-Time Updates:
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    Our solution provides real-time updates on vendor locations
                    and available recipes. No more disappointment due to
                    outdated information. With NearTreat, you'll always be in
                    the know.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                {/* Icon */}
                <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200 bg-red-50 text-red-600">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <FontAwesomeIcon icon={faPeopleGroup} />{" "}
                  </svg>
                </span>
                <div className="ml-5 sm:ml-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Community Connection:
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    Join a community of fellow street food lovers. With
                    NearTreat, you're not just finding food – you're becoming a
                    part of a community that shares your love for exploring the
                    unique culinary experiences our vendors offer.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Icon Blocks */}
      </>

      <>
        {/* Icon Blocks */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="lg:w-3/4">
              <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-gray-800 dark:text-gray-400">
                Here are few of the most frequently asked questions by our
                valueable customers
              </p>
              <div>
              <img
      className="h-96 w-full object-cover object-center"
      src={FAQ}
      alt="NearTreat"
    />
              </div>
            </div>
            {/* End Col */}
            <div className="space-y-6 lg:space-y-10">
              {/* Icon Block */}
              <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
                {faq.map((entry, index) => (
                  <div className="py-5" key={index}>
                    <details className="group">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span>{entry.question}</span>
                        <span className="transition group-open:rotate-180">
                          <svg
                            fill="none"
                            height={24}
                            shapeRendering="geometricPrecision"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            width={24}
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </span>
                      </summary>
                      <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        {entry.answer}
                      </p>
                    </details>
                  </div>
                ))}
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Icon Blocks */}
      </>

      <>
        {/* Clients */}
        <>
          {/* Clients */}
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Title */}
            <div className="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto text-center mb-6">
              <h2 className="text-gray-600 dark:text-gray-400">
                Proud to be a part of
              </h2>
            </div>
            {/* End Title */}
            <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-12 lg:gap-x-24">
              <img
                className="py-3 lg:py-5 w-40 sm:w-44 h-auto md:w-28 lg:w-32 mx-auto sm:mx-0"
                src={Microsoft}
                alt="Microsoft Logo"
              />
              <img
                className="py-3 lg:py-5 w-40 sm:w-44 h-auto md:w-28 lg:w-32 mx-auto sm:mx-0"
                src={Google}
                alt="Google Logo"
              />
              <img
                className="py-3 lg:py-5 w-40 sm:w-44 h-auto md:w-28 lg:w-32 mx-auto sm:mx-0"
                src={Ingnite}
                alt="Ingnite Logo"
              />
              <img
                className="py-3 lg:py-5 w-40 sm:w-44 h-auto md:w-28 lg:w-32 mx-auto sm:mx-0"
                src={Eshwar}
                alt="Eshwar Logo"
              />
            </div>
          </div>

          {/* End Clients */}
        </>
      </>

      <>
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
        />
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
        />

        

        <Footer />
      </>
    </>
  );
};
