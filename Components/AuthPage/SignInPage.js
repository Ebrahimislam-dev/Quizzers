import React from "react";
import styles from "./Authpage.module.css";
import Link from "next/link";
import WestIcon from "@mui/icons-material/West";
const SignInPage = () => {
  return (
    <div className={styles.authpage}>
      <Link href="/">
        <a>
          <div className="flex items-center gap-4 px-5 pt-3 ">
            <WestIcon />
            <p className="text-2xl font-medium " style={{ color: "#333333" }}>
              Sign In
            </p>
          </div>
        </a>
      </Link>

      <section className={`${styles.contents}`}>
        <div>
          <form className="w-full max-w-sm">
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-700 md:text-right mb-2 2xl:mb-2 pr-4 text-sm 2xl:text-lg font-medium">
                  Enter your Mobile Number <br />
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  placeholder="  Enter your Mobile Number"
                  className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="text"
                />
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <label className="md:w-2/3 block text-gray-300 font-bold">
                <span className="text-xs 2xl:text-base font-normal">
                  by continuing, you agree to our terms and conditions <br />
                </span>
              </label>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-2/3">
                <Link href="varification">
                  <a>
                    <button
                      className="shadow bg-indigo-500 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-sm 2xl:text-lg text-white font-semibold py-2 px-4 rounded-xl w-full"
                      type="button"
                    >
                      Send OTP
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignInPage;
