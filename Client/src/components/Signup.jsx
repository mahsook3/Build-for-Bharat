import { useHistory } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "./firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { Toaster } from "react-hot-toast";
import { ToastContainer, toast } from "react-toastify";
import Footer from "./Footer";
import logoGif from "../assets/logo/NearTreat.gif";
const Signup = () => {
  const navigate = useNavigate();

  const [option, setOption] = useState("Buyer");
  const [value, setValue] = useState("Pushcart");
  const [currentLocation, setCurrentLocation] = useState(null);
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [recipe, setRecipe] = useState("");
  const [upiId, setUpiId] = useState("");
  const [oneClick, setOneClick] = useState(true);
  const [isLoading, setIsLoading] = useState(false); // Define isLoading state
  const [isSuccess, setIsSuccess] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };



  function handleOption(e) {
    const selectedOption = e.target.value;
    setOption(selectedOption);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (option === "Buyer") {
      if (!name || !email || !ph || !password) {
        toast.warn("errorMessage 1", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      }

      if (oneClick) {
        setOneClick(false);
        const newObj = { name, email, mobile_number: ph, password };
        await fetch("https://neartreat-p34i.onrender.com/buyer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newObj),
        })
          .then(() => {
            toast.success("Account created Successfully", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            navigate("/login");

            setName("");
            setEmail("");
            setPh("");
            setPassword("");
          })
          .catch((err) => {
            toast.warn("errorMessage 2", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setOneClick(true);
            return;
          });
      }
    } else if (option === "Seller") {


      if (
        !name ||
        !email ||
        !ph ||
        !password ||
        !recipe ||
        !value

      ) {
        toast.warn("errorMessage 3", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      }
      if (oneClick) {
        setOneClick(false);
        const newObj = {
          name,
          email,
          mobile_number: ph,
          password,
          stall_type: value,
          recipes: recipe,
          location: city + " " + street,
          latitude: currentLocation?.latitude,
          longitude: currentLocation?.longitude,
          district,
          image,
          upi_id: upiId,
        };

        await fetch("https://neartreat-p34i.onrender.com/seller", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newObj),
        })
          .then(() => {
            toast.success("Account created Successfully", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            navigate("/login");

            setCurrentLocation("");
            setStreet("");
            setCity("");
            setDistrict("");
            setRecipe("");
            setUpiId("");

            setName("");
            setEmail("");
            setPh("");
            setPassword("");
            setImage("");
          })
          .catch((err) => {
            toast.warn("Error ...", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setOneClick(true);
            return;
          });
      }
    }
  }

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setCurrentLocation({ latitude, longitude });
          console.log("Latitude:", latitude);
          console.log("Longitude:", longitude);
          fetchLocationDetails(latitude, longitude);
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const fetchLocationDetails = async (latitude, longitude) => {
    try {
      const apiKey = "1YCcEbdT3y5XkYbLvlnKK46SSWYjEkYa";
      const geocodingAPI = `https://www.mapquestapi.com/geocoding/v1/reverse?key=${apiKey}&location=${latitude},${longitude}`;

      const response = await fetch(geocodingAPI);
      const data = await response.json();

      if (response.ok) {
        const {
          street,
          adminArea5: city,
          adminArea4: district,
        } = data.results[0].locations[0];
        setStreet(street || "");
        setCity(city || "");
        setDistrict(district || "");
      } else {
        console.error(
          "Error getting location details:",
          data.error || "Unknown error"
        );
      }
    } catch (error) {
      console.error("Error getting location details:", error);
    }
  };

  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup(); // Make sure this function is only called once when Recaptcha is verified.
          },
          "expired-callback": () => {
            console.log("Recaptcha expired");
          },
        },
        auth
      );
    }
  }

  async function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;
    const formatPh = "+" + ph;

    setPh(formatPh);

    try {
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        formatPh,
        appVerifier
      );
      window.confirmationResult = confirmationResult;
      setLoading(false);
      setShowOTP(true);
      toast.success("OTP sent successfully!");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  function convertToBase64(e) {
    e.preventDefault();
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = () => {
      // console.log(reader.result);
      setImage(reader.result);
    };
    reader.onerror = (err) => {
      console.log("Error", err);
    };
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  const missingFields = [];

  // Check each field and add its name to the array if it's missing
  if (!name) {
    missingFields.push("Name");
  }
  if (!email) {
    missingFields.push("Email");
  }
  if (!ph) {
    missingFields.push("Phone Number");
  }
  if (!password) {
    missingFields.push("Password");
  }
  
  // Generate the error message based on the missing fields
  let errorMessage = "Please enter the following fields: " + missingFields.join(", ");

  return (
    <>
      <div className="navbar bg-base-100 ">
        <div className="flex-1 ">
          <a className="btn btn-ghost normal-case text-xl hover:bg-transparent">
            {" "}
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="tablet:w-[10rem] w-[8rem] cursor-pointer  ml-3"
              />
            </Link>
          </a>
        </div>
      </div>
      {/* component */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')",
        }}
      />
      <div className="min-w-screen min-h-screen  flex items-center justify-center px-5 py-5">
        <div
          className=" text-gray-500 rounded-3xl shadow-2xl w-full overflow-hidden"
          style={{ maxWidth: 1000 }}
        >
          <div className="md:flex w-full">
            <Toaster toastOptions={{ duration: 4000 }} />
            <div id="recaptcha-container"></div>
            {user ? (
              <>
                {/* component */}
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')",
                  }}
                />

                <div
                  className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
                  style={{ maxWidth: 1000 }}
                >
                  <div className="md:flex w-full">
                    <div className="hidden md:block w-1/2 bg-white-500 py-10 px-10">
                      <div className="flex justify-center items-center h-full">
                        <img src={logoGif} alt="Logo Gif" />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                      <div className="text-center mb-10">
                        <h1 className="font-bold text-3xl text-gray-900">
                          REGISTER
                        </h1>
                        <p>Enter your information to register</p>
                      </div>
                      <div>
                        <div className="flex -mx-3">
                          <div className="w-full px-3 mb-5">
                            <label
                              htmlFor=""
                              className="text-xs font-semibold px-1"
                            >
                              Name
                            </label>
                            <div className="flex">
                              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"
                                  />
                                </svg>
                              </div>
                              <input
                                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-red-500"
                                name="Name"
                                type="text"
                                placeholder="Enter your full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex -mx-3">
                          <div className="w-full px-3 mb-5">
                            <label
                              htmlFor=""
                              className="text-xs font-semibold px-1"
                            >
                              Mobile Number
                            </label>
                            <div className="flex">
                              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M17 19H7V5h10m0-4H7c-1.11 0-2 .89-2 2v18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Z"
                                  />
                                </svg>
                              </div>
                              <input
                                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-red-500"
                                name="phonenumber"
                                type="tel"
                                placeholder="+91 97865xxxxx"
                                value={ph}
                                onChange={(e) => setPh(e.target.value)}
                                disabled
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex -mx-3">
                          <div className="w-full px-3 mb-5">
                            <label
                              htmlFor=""
                              className="text-xs font-semibold px-1"
                            >
                              Email
                            </label>
                            <div className="flex">
                              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="currentColor"
                                    d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"
                                  />
                                </svg>
                              </div>
                              <input
                                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-red-500"
                                name="Email"
                                type="email"
                                placeholder="Enter your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex -mx-3">
                          <div className="w-full px-3 mb-5">
                            <label
                              htmlFor=""
                              className="text-xs font-semibold px-1"
                            >
                              Password
                            </label>
                            <div className="flex">
                              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z"
                                  />
                                </svg>
                              </div>
                              <input
                                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-red-500"
                                placeholder="************"
                                name="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex -mx-3">
                          <div className="w-full px-3 mb-12">
                            <label
                              htmlFor=""
                              className="text-xs font-semibold px-1"
                            >
                              Password
                            </label>
                            <div className="flex">
                              <div className="flex flex-row justify-around items-center w-[80%]">
                                <label className="container">
                                  Buyer
                                  <input
                                    type="radio"
                                    name="radio"
                                    value="Buyer"
                                    checked={option === "Buyer"}
                                    onChange={handleOption}
                                  />
                                  <span className="check"></span>
                                </label>
                                <label className="container">
                                  Seller
                                  <input
                                    type="radio"
                                    name="radio"
                                    value="Seller"
                                    checked={option === "Seller"}
                                    onChange={handleOption}
                                  />
                                  <span className="check"></span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        {option === "Seller" && (
                          <div>
                            <label
                              htmlFor=""
                              className="text-xs font-semibold px-1"
                            >
                              Select your Stall type
                            </label>
                            <label className="tablet:m-[10px]  tablet:flex-row flex flex-col">
                              <select
                                value={value}
                                className=" rounded-md p-[8px] mb-5 "
                                onChange={handleChange}
                              >
                                <option value="Pushcart">Pushcart</option>
                                <option value="Cycle richshaw stall">
                                  Cycle rickshaw stall
                                </option>
                                <option value="Food truck">Food truck</option>
                                <option value="Handcart">Handcart</option>
                                <option value="kiosks">Kiosks</option>
                                <option value="Barbecue stall">
                                  Barbecue stall
                                </option>
                                <option value="Thali stall">Thali stall</option>
                                <option value="chaat stall">Chaat stall</option>
                                <option value="Ice cream cart">
                                  Ice cream cart
                                </option>
                                <option value="Sweet stall">Sweet stall</option>
                              </select>
                            </label>
                            <div className="flex -mx-3">
                              <div className="w-full px-3 mb-5">
                                <label
                                  htmlFor=""
                                  className="text-xs font-semibold px-1"
                                >
                                  Enter the recipes
                                </label>

                                <div className="flex">
                                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M3 3a1 1 0 0 0-1 1v5.5c0 1.69 1.03 3.13 2.5 3.72v6.28A1.5 1.5 0 0 0 6 21a1.5 1.5 0 0 0 1.5-1.5v-6.28c1.47-.59 2.5-2.03 2.5-3.72V4a1 1 0 0 0-1-1a1 1 0 0 0-1 1v4a.5.5 0 0 1-.5.5A.5.5 0 0 1 7 8V4a1 1 0 0 0-1-1a1 1 0 0 0-1 1v4a.5.5 0 0 1-.5.5A.5.5 0 0 1 4 8V4a1 1 0 0 0-1-1m16.88 0c-.13 0-.26.09-.38.16L16 5.25V9h-4v2h1l1 10h6l1-10h1V9h-4V6.34l2.5-1.5c.5-.28.63-.84.34-1.34c-.21-.36-.58-.55-.96-.5Z"
                                      />
                                    </svg>
                                  </div>
                                  <input
                                    type="text"
                                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-red-500"
                                    placeholder="Panipuri, Chili Potato, Samosa"
                                    name="recipe"
                                    value={recipe}
                                    onChange={(e) => setRecipe(e.target.value)}
                                  />
                                </div>
                                <span className="text-sm text-center">
                                  * Enter the available recipes separated by
                                  comma(,) or{" "}
                                  <a
                                    href="https://neartreat.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium"
                                  >
                                    {" "}
                                    Try our AI recipes identifier
                                  </a>
                                </span>
                              </div>
                            </div>
                            <div className="flex -mx-3">
                              <div className="w-full px-3 mb-5">
                                <label
                                  htmlFor=""
                                  className="text-xs font-semibold px-1"
                                >
                                  Enter your UPI ID
                                </label>
                                <div className="flex">
                                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M7 12c2.2 0 4-1.8 4-4S9.2 4 7 4S3 5.8 3 8s1.8 4 4 4m4 8v-5.3c-1.1-.4-2.5-.7-4-.7c-3.9 0-7 1.8-7 4v2h11M22 4h-7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-4 14h-2V6h2v12Z"
                                      />
                                    </svg>
                                  </div>
                                  <input
                                    type="text"
                                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-red-500"
                                    placeholder="upi@example"
                                    name="upi_id"
                                    value={upiId}
                                    onChange={(e) => setUpiId(e.target.value)}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex -mx-3">
                              <div className="w-full px-3 mb-5">
                                <label
                                  htmlFor=""
                                  className="text-xs font-semibold px-1"
                                >
                                  Upload the Stall Image
                                </label>
                                <div className="flex">
                                  <div className="form-control w-full max-w-xs">
                                    <input
                                      type="file"
                                      className="file-input file-input-bordered w-full max-w-xs"
                                      accept="image/*"
                                      onChange={convertToBase64}
                                    />
                                    {image === "" || image === null ? (
                                      ""
                                    ) : (
                                      <div className="flex flex-row items-center justify-center">
                                        <div className="m-5">Preview Image</div>
                                        <div className=" bg-slate-300 p-2">
                                          {" "}
                                          <img
                                            width={250}
                                            height={200}
                                            src={image}
                                          />
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex -mx-3">
                              <div className="w-full px-3 mb-5">
                                <label
                                  htmlFor=""
                                  className="text-xs font-semibold px-1"
                                >
                                  Locate your stall
                                </label>
                                <div className="flex">
                                  {/* <p>Latitude: {currentLocation?.latitude}</p>
                        <p>Longitude: {currentLocation?.longitude}</p> */}
                                  {street || city || district ? (
                                    <div className="flex flex-col justify-center p-[6px] w-[70%] bg-[#ecf0f3] m-[10px] rounded-[12px] shadow-[0px_5px_5px_5px_#00000024]">
                                      <p className="p-[5px] text-left">
                                        <span className=" text-[#D2042D]">
                                          Street:
                                        </span>{" "}
                                        {street} , {city}
                                      </p>
                                      <p className="text-left p-[5px] ">
                                        {" "}
                                        <span className="text-[#D2042D]">
                                          District:
                                        </span>{" "}
                                        {district}
                                      </p>
                                    </div>
                                  ) : (
                                    <>
                                      <div
                                        className="bg-[#2b3440] p-[10px] rounded-[12px]  text-[#d8dde4] text-[1remC] font-semibold cursor-pointer w-fit h-fit"
                                        onClick={handleLocationClick}
                                      >
                                        GET LOCATION
                                      </div>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="flex -mx-3">
                          <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                              <button
                                className="block w-full max-w-xs mx-auto bg-customRed hover:bg-red-700 focus:bg-red-700 text-white rounded-lg px-3 py-3 font-semibold mt-4"
                                onClick={handleSubmit}
                                disabled={isLoading}
                              >
                                {isLoading ? "Wait..." : "Register Now"}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="w-80 flex flex-col gap-4 rounded-lg p-4 mx-auto">
                <h1 className="text-center leading-normal text-[#D2042D] font-medium text-3xl mb-6">
                  Welcome to <br /> NearTreat
                </h1>
                {showOTP ? (
                  <>
                    <div className="bg-white text-[#D2042D] w-fit mx-auto p-4 rounded-full">
                      <BsFillShieldLockFill size={30} />
                    </div>
                    <label
                      htmlFor="otp"
                      className="font-bold text-xl text-black text-center"
                    >
                      Enter your OTP
                    </label>
                    <div className=" bg-[rgba(0,0,0,0.1)]">
                      <OtpInput
                        value={otp}
                        onChange={setOtp}
                        OTPLength={6}
                        otpType="number"
                        disabled={false}
                        autoFocus
                        className="opt-container -mx-4 relative w-full p-2 text-black"
                      ></OtpInput>
                    </div>
                    <button
                      onClick={onOTPVerify}
                      className="bg-[#D2042D] w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                    >
                      {loading && (
                        <CgSpinner size={20} className="mt-1 animate-spin" />
                      )}
                      <span>Verify OTP</span>
                    </button>
                  </>
                ) : (
                  <>
                    <div className=" bg-slate-400 text-white w-fit mx-auto p-4 rounded-full">
                      <BsTelephoneFill size={30} />
                    </div>
                    <div className="flex flex-col items-center">
                      <label
                        htmlFor=""
                        className="font-bold text-xl text-black text-center mb-2"
                      >
                        Verify your phone number
                      </label>

                      <div>
                        <PhoneInput
                          country={"in"}
                          value={ph}
                          onChange={setPh}
                        />
                      </div>

                      <button
                        onClick={onSignup}
                        className="block w-full max-w-xs mx-auto bg-customRed hover:bg-red-700 focus:bg-red-700 text-white rounded-lg px-3 py-3 font-semibold mt-4"
                      >
                        {loading && (
                          <CgSpinner size={20} className="mt-1 animate-spin" />
                        )}
                        <span>Send code via SMS</span>
                      </button>

                      <p>
                        Have an account?{" "}
                        <Link
                          to="/login" // Define the route you want to navigate to
                          className="text-red-600 transition duration-200 hover:underline dark:text-red-400"
                        >
                          Login Here
                        </Link>
                      </p>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
};

export default Signup;
