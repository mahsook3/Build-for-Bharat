import { faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Import the LinkedIn icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Mahsook from "../assets/team/1.png";
import Ramya from "../assets/team/2.png";
import Priya from "../assets/team/3.png";
import Vivek from "../assets/team/Vivek.jpg";
import Sanku from "../assets/team/sanku.jpg";
import Mari from "../assets/team/4.png";
import Microsoft from "../assets/partners/1.png";
import Google from "../assets/partners/2.png";
import Ingnite from "../assets/partners/3.png";
import Eshwar from "../assets/partners/4.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Achievement from "./Achievement";


const Team = () => {
  const teamMembers = [
    {
      name: "Mahsook M A",
      role: "Co-founder & CEO",
      photoUrl: Mahsook,
      linkedinUrl: "https://www.linkedin.com/in/mahsook/",

    },
    {
      name: "Ramya N",
      role: "Co-founder & CTO",
      photoUrl: Ramya,
      linkedinUrl: "https://www.linkedin.com/in/ramya-nallamuthu-29b38b244/",
    },
    {
      name: "Priyadharshini A",
      role: "Co-founder & CMO",
      photoUrl: Priya,
      linkedinUrl: "https://www.linkedin.com/in/priyadharshini-arulanantham-42b08124a/",
    },
    {
      name: "Marimuthukalivelraja R",
      role: "Co-founder & CPO",
      photoUrl: Mari,
      linkedinUrl: "https://www.linkedin.com/in/marimuthukalivelraja-r-3907a7225/",
    },
    // Add more team members here
  ];
  const bods = [
    
    {
      name: "Siddarth Kengadaran",
      role: (
        <>
          Google Developer Group Organizer
          <br />
          Product Strategist at Kellton
        </>
      ),
      photoUrl:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-goog/avatars/siddarth_kengadaran.png",
        linkedinUrl: "https://www.linkedin.com/in/",

    },
    {
      name: "M Vivek Kumar",
      role: (
        <>
          Project Associate
          <br />
          Sri Eshwar Ignite Startup Accelerator.
        </>
      ),
      photoUrl: Vivek,
      linkedinUrl: "https://www.linkedin.com/",

    },
  ];

  return (
    <>
      <Navbar />

      <div className="flex flex-col min-h-screen">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <div className="text-center pb-12">
            <h2 className="text-base font-bold text-red-600">
              Introducing the Faces Behind NearTreat
            </h2>
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
              Meet the team
            </h1>
          </div>
          <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
  <div
    key={index}
    className="flex flex-col items-center bg-white rounded-lg p-6 m-4 space-y-4"
  >
    <img
      className="object-center object-cover rounded-full h-36 w-36"
      src={member.photoUrl}
      alt="photo"
    />
    <div className="text-center">
      <p className="text-xl text-gray-700 font-bold mb-2">
        {member.name}
      </p>
      <p className="text-base text-gray-400 font-normal">
        {member.role}
      </p>
      <a
        href={member.linkedinUrl} // Use the LinkedIn URL from the teamMembers array
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:text-blue-500"
      >
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
      </a>
    </div>
  </div>
))}

          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <div className="text-center pb-12">
            <h2 className="text-base font-bold text-red-600">
              Meet our well wishers
            </h2>
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
              Board of Advisors
            </h1>
          </div>
          <div className="flex flex-wrap justify-center">
          {bods.map((member, index) => (
  <div
    key={index}
    className="flex flex-col items-center bg-white rounded-lg p-6 m-4 space-y-4"
  >
    <img
      className="object-center object-cover rounded-full h-36 w-36"
      src={member.photoUrl}
      alt="photo"
    />
    <div className="text-center">
      <p className="text-xl text-gray-700 font-bold mb-2">
        {member.name}
      </p>
      <p className="text-base text-gray-400 font-normal">
        {member.role}
      </p>
      <a
        href={member.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:text-blue-500"
      >
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
      </a>
    </div>
  </div>
))}

          </div>
        </section>
<p className="text-center mb-4 mt-4">
        <strong>Look at our recent achievements</strong>
      </p>
        <Achievement/>
        <>
          <link
            rel="stylesheet"
            href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
          />
          <link
            rel="stylesheet"
            href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
          />
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

          <Footer />
        </>
      </div>
    </>
  );
};

export default Team;
