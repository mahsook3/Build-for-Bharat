import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMobileAlt,
  faUsers,
  faMapMarkerAlt,
  faUtensils,
  faSearch, // Import any other necessary icons
} from "@fortawesome/free-solid-svg-icons";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const FeaturesCarousel = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const features = [
    {
      icon: <FontAwesomeIcon icon={faClock} className="w-6 h-6" />,
      title: "Real-Time Convenience and Menu Magic",
      desc: "Our advanced technology lets you track the live locations and real-time menu updates, ensuring that you're always in the know about what's available.",
    },
    {
      icon: <FontAwesomeIcon icon={faMobileAlt} className="w-6 h-6" />,
      title: "User-Friendly Interface",
      desc: "Our user-friendly interface is designed to provide a seamless experience across all devices. Whether you're using your smartphone, tablet, or computer, NearTreat is your reliable companion in your street food journey.",
    },
    {
      icon: <FontAwesomeIcon icon={faUsers} className="w-6 h-6" />,
      title: "Community of Food Lovers",
      desc: "Join a community of fellow food enthusiasts who share your passion for street cuisine. Connect, share recommendations, and embark on gastronomic journeys together.",
    },
    {
      icon: <FontAwesomeIcon icon={faMapMarkerAlt} className="w-6 h-6" />,
      title: "Find Nearby Favorites",
      desc: "Discover the best street food vendors in your vicinity. Our app uses GPS technology to help you find nearby favorites quickly.",
    },
    {
      icon: <FontAwesomeIcon icon={faUtensils} className="w-6 h-6" />,
      title: "Detailed Menu Information",
      desc: "Get detailed information about the menus offered by street vendors, including ingredients, prices, and customer reviews.",
    },
    {
      icon: <FontAwesomeIcon icon={faSearch} className="w-6 h-6" />,
      title: "Search and Filter",
      desc: "Easily search for specific dishes or cuisines, and apply filters to find exactly what you're craving for.",
    },
    // Add more features as needed
  ];

  return (
        <section className="py-14">
          <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
            <div className="max-w-xl space-y-3">
              <h3 className="text-customRed font-semibold">Look at</h3>
              <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Features That Delight:
              </p>
              <p>
                Savor the Convenience – Unveil the World of Street Food at Your
                Fingertips!
              </p>
            </div>
            <div className="mt-12">
          <AliceCarousel
            mouseTracking
        responsive={{
          0: { items: 1 },
          600: { items: 2 },
          1024: { items: 3 },
        }}
        autoPlay
        autoPlayInterval={3000}
        disableButtonsControls={true}
        disableDotsControls={false}
        paddingLeft={10}
        paddingRight={10}
        infinite
            items={features.map((item, idx) => (
              <div key={idx} className="space-y-3 ml-20 mr-10">
                <div className="w-12 h-12 mx-auto bg-gray-100 text-customRed rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-lg text-gray-800 font-semibold">
                  {item.title}
                </h4>
                <p>{item.desc}</p>
              </div>
            ))}
            activeIndex={activeSlideIndex}
            onSlideChanged={({ item }) => setActiveSlideIndex(item)}
          />
        </div>
          </div>
        </section>
  );
};

export default FeaturesCarousel;
