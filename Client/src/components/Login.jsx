import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "./Footer";
import logo from "../assets/logo/logo.png"; // Make sure to provide the correct path to your logo

const Login = () => {
  const [option, setOption] = useState("Buyer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      toast.warn("Please enter both email and password.", {
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

    const url =
      option === "Buyer"
        ? "https://sample-aykgdz2o4q-uc.a.run.app/buyer"
        : "https://sample-aykgdz2o4q-uc.a.run.app/seller";

    if (!isLoading) {
      setIsLoading(true);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const user = data.find(
          (user) => user.email === email && user.password === password
        );

        if (user) {
          toast.success("Login Successfully", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          setTimeout(() => {
            const profileUrl = `/profile/${option.toLowerCase()}`;
            localStorage.setItem("user", JSON.stringify(user));
            navigate(profileUrl);
          }, 2000);
        } else {
          toast.warn("Invalid Credentials", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setIsLoading(false); // Re-enable the button
        }
      } catch (error) {
        console.error("Error:", error);
        setIsLoading(false); // Re-enable the button
      }
    }
  }

  function handleChange(e) {
    setOption(e.target.value);
  }

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
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-950 p-12">
        <form action="">
          <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
            <div className="rounded-[calc(1.5rem-1px)] bg-white px-10 p-12 dark:bg-gray-900">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900">Sign In</h1>
                <p>Enter your credentials to Login</p>
              </div>
              <div className="mt-8 space-y-8">
                <div className="flex -mx-3">
                  <div className="w-full px-3">
                    <label htmlFor="" className="text-xs font-semibold px-1">
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
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3">
                    <label htmlFor="" className="text-xs font-semibold px-1">
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
                  <div className="w-full px-3">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Select Buyer or Seller
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
                            onChange={handleChange}
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
                            onChange={handleChange}
                          />
                          <span className="check"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  className="h-9 px-3 w-full bg-red-600 hover:bg-red-700 active:bg-red-800 focus:bg-red-700 transition duration-500 rounded-md text-white"
                  onClick={handleSubmit}
                  disabled={isLoading}
                >
                  {isLoading ? "Wait..." : "Signin"}
                </button>
                <p className="text-sm tracking-wide text-gray-600 dark:text-gray-300">
                  Don't have an account ?{" "}
                  <Link
      to="/signup" // Replace '/signup' with the actual URL of your signup page
      className="text-red-600 transition duration-200 hover:underline dark:text-red-400"
    >
      Create an account
    </Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
