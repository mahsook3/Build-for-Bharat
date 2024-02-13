import React, { useEffect, useRef } from "react";

const Translator = ({ selectedLanguage }) => {
  const translateRef = useRef(null);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: selectedLanguage, // Use selectedLanguage as the page language
        includedLanguages: "as,bn,brx,dog,gu,hi,ks,kn,kok,mai,ml,mr,mni,ne,or,pa,ta,te,sat,sd,ur",
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    const scriptSrc = `//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit&tl=${selectedLanguage}`;
    const addScript = document.createElement("script");
    addScript.setAttribute("src", scriptSrc);
    
    window.googleTranslateElementInit = googleTranslateElementInit;
  
    document.body.appendChild(addScript);
  }, [selectedLanguage]); 

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const elements = translateRef.current.querySelectorAll("*");
      elements.forEach((element) => {
        if (element.textContent.includes("NearTreat")) {
          element.classList.add("notranslate");
        }
      });
    });

    observer.observe(translateRef.current, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="google_translate_element"
      ref={translateRef}
      className="fixed top-0 right-0 p-4 hide" // Add the hide class to hide the div
    ></div>
  );
};

export default Translator;