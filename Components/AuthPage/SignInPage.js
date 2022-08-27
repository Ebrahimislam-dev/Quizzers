import React from "react";
import { useState } from "react";
import styles from "./Authpage.module.css";
import Link from "next/link";
import WestIcon from "@mui/icons-material/West";
const PointRewardPage = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
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
                <label className="block text-gray-500 md:text-right mb-2 2xl:mb-4 pr-4 text-sm 2xl:text-lg font-medium">
                  Enter your Mobile Number
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  placeholder="  Enter your Mobile Number"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="text"
                />
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3"></div>
              <label className="md:w-2/3 block text-gray-500 font-bold">
                <span className="text-xs 2xl:text-base font-normal">
                  by continuing, you agree to our <br /> terms and conditions{" "}
                </span>
              </label>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button
                  className="shadow bg-indigo-500 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
                  type="button"
                >
                  Send OTP
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default PointRewardPage;
