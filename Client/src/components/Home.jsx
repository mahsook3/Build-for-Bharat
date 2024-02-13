import logo from "../assets/logo/logo.png";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import logoGif from "../assets/logo/NearTreat.gif";
import { Link, useNavigate } from "react-router-dom";
import preloader from "../assets/preload.gif";
import Footer from "./Footer";
import Microsoft from "../assets/partners/1.png";
import Google from "../assets/partners/2.png";
import Ingnite from "../assets/partners/3.png";
import Eshwar from "../assets/partners/4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";
import FeaturesCarousel from "./FeaturesCarousel";
import {
  faSearch,
  faMapMarkerAlt,
  faUtensils,
  faUsers,
  faClock,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const openVideoPopup = () => {
    setShowVideo(true);
  };

  const closeVideoPopup = () => {
    setShowVideo(false);
  };

  const contactMethods = [
    {
      icon: <FontAwesomeIcon icon={faSearch} className="w-6 h-6" />,

      title: "Explore",
      desc: "Browse through a diverse array of street vendors and their offerings. Discover new flavors and revisit your favorites.",
      link: {
        name: "Join our Discord",
        href: "javascript:void(0)",
      },
    },
    {
      icon: <FontAwesomeIcon icon={faMapMarkerAlt} className="w-6 h-6" />,

      title: "Locate",
      desc: "Pinpoint the exact locations of street stalls in real-time. No more hunting – we'll guide you right to the deliciousness.",
      link: {
        name: "Join our Discord",
        href: "javascript:void(0)",
      },
    },
    {
      icon: <FontAwesomeIcon icon={faUtensils} className="w-6 h-6" />,

      title: "Indulge",
      desc: "Dive into the world of street food with confidence, knowing that you have the latest menu information at your fingertips.",
      link: {
        name: "Join our Discord",
        href: "javascript:void(0)",
      },
    },
    {
      icon: <FontAwesomeIcon icon={faUsers} className="w-6 h-6" />,

      title: "Connect",
      desc: "Join a community of street food aficionados, swap stories, and be a part of the vibrant NearTreat community.",
      link: {
        name: "Join our Discord",
        href: "javascript:void(0)",
      },
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <>
        <Navbar />
        <section className="bg-white dark:bg-gray-900">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <a
                href="#"
                className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                role="alert"
              >
                <span className="text-xs bg-customRed rounded-full text-white px-4 py-1.5 mr-3">
                  New
                </span>{" "}
                <a
                  href="https://neartreat.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium"
                >
                  NearTreat is out! See what's new
                </a>
                <svg
                  className="ml-2 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                <span className="text-[#D2042D] notranslate">NearTreat </span>The Ultimate
                Solution for{" "}
                <span className="text-[#edbb3e]">Street Food Lovers</span>
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Welcome to NearTreat, the Web Application that solves the
                problem of locating street food vendors. Our app provides live
                location tracking and availability of recipes, making it easy
                for customers to find their favorite street vendors.
              </p>
              <div className="flex space-x-3">
                {" "}
                {/* Container for buttons */}
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-customRed hover:bg-red-600 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                  onClick={() => navigate("/signup")}
                >
                  Get started
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  onClick={openVideoPopup}
                >
                  <svg
                    className="mr-2 -ml-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                  Watch video
                </a>
              </div>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src={logoGif} alt="NearTreatmockup" />
            </div>
          </div>
        </section>
        <section className="py-14">
          <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
            <div className="max-w-xl space-y-3">
              <h3 className="text-customRed font-semibold">Why <span notranslate>NearTreat?</span> </h3>
              <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                To experience the best recipes near your location from street
                food vendors
              </p>
              <p>
                Your ultimate destination for unlocking the hidden treasures of
                street food!
              </p>
            </div>
          </div>
        </section>
        <FeaturesCarousel />
        <main className="py-14">
          <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-12 md:px-8 lg:flex">
            <div className="max-w-md">
              <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                How It Works:
              </h3>
              <p className="mt-3">
                Discover, Locate, Indulge – Your Street Food Journey Begins
                Here!
              </p>
            </div>
            <div>
              <ul className="mt-12 gap-y-6 gap-x-12 items-center md:flex lg:gap-x-0 lg:mt-0">
                {contactMethods.map((item, idx) => (
                  <li
                    key={idx}
                    className="space-y-3 border-t py-6 md:max-w-sm md:py-0 md:border-t-0 lg:border-l lg:px-12 lg:max-w-none"
                  >
                    <div className="w-12 h-12 rounded-full border flex items-center justify-center text-customRed ">
                      {item.icon}
                    </div>
                    <h4 className="text-gray-800 text-lg font-medium xl:text-xl">
                      {item.title}
                    </h4>
                    <p>{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
        <Footer />{" "}
        {showVideo && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-75">
            <div className="max-w-[800px]  mx-4">
              <button
                className="absolute top-4 right-4 text-white text-2xl cursor-pointer focus:outline-none"
                onClick={closeVideoPopup}
              >
                &#10005;
              </button>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/pF5D-Y5qYAc"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default Home;
