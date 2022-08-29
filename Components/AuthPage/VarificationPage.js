import React, { Component, useState } from "react";
import OtpInput from "react-otp-input";
import styles from "./Authpage.module.css";
import Link from "next/link";
import Image from "next/image";
import varificationimg from "../../Media/images/otpimg.png";
import Timer from "./Timer";
import VarificationAnimation from "./VarificationAnimation";

function VarificationPage() {
  const [otp, setOtp] = useState();
  const [timeOut, setTimeOut] = useState(false);
  const handleChange = (otp) => {
    setOtp(otp);
  };
  return (
    <div className={styles.authpage}>
      <section className={`${styles.contents}`}>
        <div className={`${styles.otpimg}   mb-5`}>
          {/* <Image className=" w-full" src={varificationimg} alt="" /> */}
          <VarificationAnimation />
        </div>{" "}
        <div className=" text-center">
          <p className="block text-gray-900  mb-3 2xl:mb-4 pr-4 text-2xl 2xl:text-3xl font-bold">
            ভ্যারিফিকেশন
          </p>
          <p className="text-sm 2xl:text-xl font-normal text-gray-500 mb-6 ">
            আপনার নাম্বারে ৪ ডিজিটের ও টি পি <br /> পাঠানো হয়েছে
          </p>
        </div>
        <div
          className=" text-center bg-white rounded-xl px-5 py-8"
          style={{ boxShadow: " 0px 14px 48px #F0F2FA" }}
        >
          <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={4}
            className="px-3 sm:px-4  2xl:px-5 py-3 2xl:py-4 mx-2 sm:mx-3 2xl:mx-3 text-xl rounded-lg border-2"
            // placeholder="-"
          />
          <Link href="registration">
            <a>
              <button
                className="shadow mt-8 bg-indigo-500 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-sm 2xl:text-lg text-white font-semibold py-2 px-4 rounded-xl w-full"
                type="button"
              >
                Continue
              </button>
            </a>
          </Link>
        </div>
        <div>
          {!timeOut ? (
            <div
              className="font-normal text-sm 2xl:text-lg text-center mt-8 flex justify-center items-center"
              style={{ color: "#F1775C" }}
            >
              {" "}
              <p className=" ">Re-send code in 0:</p>
              <Timer timevalue={0.5} setTimeOut={setTimeOut} />
            </div>
          ) : (
            <div>
              <Link href="/">
                <a>
                  <p className=" text-blue-800 font-normal text-sm 2xl:text-lg text-center mt-8 flex justify-center items-center">
                    Re-send code again
                  </p>
                </a>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default VarificationPage;
