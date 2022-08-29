import * as React from "react";

import styles from "../styles/common.module.css";

import conditionpageimg from "../Media/images/codtionpageimg.png";
import Link from "next/link";
import Image from "next/image";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import WestIcon from "@mui/icons-material/West";
export default function conditionPage() {
  return (
    <div className={`${styles.faqspage} `}>
      <div>
        <Link href="/pointReward">
          <a>
            <div className="flex items-center gap-4 px-5 pt-3 ">
              <WestIcon />
              <p className="text-2xl font-medium " style={{ color: "#333333" }}>
                শর্তাবলী
              </p>
            </div>
          </a>
        </Link>
      </div>
      <div className="mt-6 pb-24 px-6" style={{ color: "#2E3E5C" }}>
        <div className=" w-full">
          <Image className=" w-full" src={conditionpageimg} alt="top banner" />
        </div>
        <div className=" bg-white px-3 py-4 mt-5">
          <p className=" text-xs 2xl:text-sm font-normal text-justify">
            কুইজার্স গেম নিয়মিত খেলে পয়েন্ট অর্জন করুন আর আপনার পয়েন্টগুলো
            ব্যবহার করে কুইজার্স রিওয়ার্ড সংগ্রহ করুন। পয়েন্ট অর্জনের মাধ্যমে
            আপনি একটি নির্দিষ্ট রিওয়ার্ড লেভেলে অবস্থান করবেন।
            <br />
            <br />
            <br />
            আপনি যত বেশি পয়েন্ট অর্জন করবেন তত উচ্চ লেভেলে পৌঁছে যাবেন এবং
            উপভোগ করতে পারবেন দারুণ সব রিওয়ার্ড।
          </p>
          <div className=" flex justify-around items-center gap-3 mt-4">
            <button
              className={styles.conditionBtn}
              style={{ background: "#1D669F" }}
            >
              ওয়ারিয়র
            </button>
            <button
              className={styles.conditionBtn}
              style={{ background: "#334451" }}
            >
              মাস্টার
            </button>
            <button
              className={styles.conditionBtn}
              style={{ background: "#388498" }}
            >
              গ্রান্ড মাস্টার
            </button>
          </div>
          <div className=" flex justify-around items-center gap-3 mx-5 mt-5">
            <button
              className={styles.conditionBtn}
              style={{ background: "#4E6088" }}
            >
              লিজেন্ড
            </button>
            <button
              className={styles.conditionBtn}
              style={{ background: "#565B69" }}
            >
              চ্যাম্পিয়ন
            </button>
          </div>
        </div>
        <div className=" bg-white px-3 py-4 mt-1 flex flex-col  gap-y-6 text-justify">
          <p className=" text-center text-base font-normal">শর্তাবলী</p>

          <div className={`gap-3 flex items-center justify-center `}>
            <div style={{ color: "#C8B6E2" }}>
              <ArrowCircleRightRoundedIcon />
            </div>
            <p>
              গ্রাহকের প্রতিটি কুইজ বিপরীতে রিওয়ার্ড পয়েন্ট নির্ধারণের অধিকার
              কুইজার্সে সংরক্ষণ করে।
            </p>
          </div>
          <div className={`gap-3 flex items-center justify-center `}>
            <div style={{ color: "#C8B6E2" }}>
              <ArrowCircleRightRoundedIcon />
            </div>
            <p>
              রিওয়ার্ড পয়েন্ট ন্যূনতম অথবা সর্বাধিক কুইজের পয়েন্ট পরিমাণ
              নির্ধারণ করার অধিকার কুইজার্স সংরক্ষণ করে।
            </p>
          </div>
          <div className={`gap-3 flex items-center justify-center `}>
            <div style={{ color: "#C8B6E2" }}>
              <ArrowCircleRightRoundedIcon />
            </div>
            <p>
              কুইজার্স রিওয়ার্ড নির্ধারণ পদ্ধতি (পয়েন্ট অর্জন, লেভেল নির্ধারণ,
              রিওয়ার্ড সংগ্রহ) কুইজার্স নিজস্ব বিবেচনায় নির্ধারণ করবে। গ্রাহকের
              পয়েন্ট এবং রিওয়ার্ড নির্ধারণ পদ্ধতির উপর নির্ভর করে যেকোনো
              গ্রাহককে যেকোনো লেভেলে রাখার অধিকার কুইজার্স সংরক্ষণ করে।
            </p>
          </div>
          <div className={`gap-3 flex items-center justify-center `}>
            <div style={{ color: "#C8B6E2" }}>
              <ArrowCircleRightRoundedIcon />
            </div>
            <p>
              কুইজার্স রিওয়ার্ড সংগ্রহ প্রক্রিয়া এবং অফারগুলো কুইজার্স তার
              নিজস্ব বিবেচনার ভিত্তিতে নির্ধারণ করবে।
            </p>
          </div>
          <div className={`gap-3 flex items-center justify-center `}>
            <div style={{ color: "#C8B6E2" }}>
              <ArrowCircleRightRoundedIcon />
            </div>
            <p>
              কুইজার্স কোনোপ্রকার পূর্ব বিজ্ঞপ্তি ছাড়াই যেকোনো সময়ে কুইজার্স
              রিওয়ার্ডস প্রোগ্রামের শর্তাবলী পরিবর্তন করার অধিকার সংরক্ষণ করে।
            </p>
          </div>
          <div className={`gap-3 flex items-center justify-center `}>
            <div style={{ color: "#C8B6E2" }}>
              <ArrowCircleRightRoundedIcon />
            </div>
            <p>
              কুইজার্স কোনোপ্রকার পূর্ব বিজ্ঞপ্তি ছাড়াই যেকোনো সময় কুইজার্স
              রিওয়ার্ডস প্রোগ্রাম সাময়িক স্থগিত বা সম্পূর্ণরূপে বন্ধ করার অধিকার
              সংরক্ষণ করে।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
