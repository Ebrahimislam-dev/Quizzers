import React from "react";
import style from "./HomePage.module.css";
import person from "../../Media/icons/Person.png";
import rewardicon from "../../Media/icons/rewardIcon.png";
import Link from "next/link";

import Image from "next/image";

const Header = () => {
  return (
    <div className={style.header}>
      <div className="flex items-center justify-between px-6 py-9">
        <div className="flex flex-row items-center justify-center gap-3">
          <Image className="h-10 w-9" src={person} alt="userimage" />
          <div className="flex flex-col items-start justify-center ">
            <h4 className="text-base font-semibold text-gray-100">ইশতিয়াক</h4>
            <h6 className="text-xs font-normal text-gray-200">Level-Warrior</h6>
          </div>
        </div>
        <div>
          <Link href="/pointReward">
            <a>
              <button
                className={`flex gap-2 p-2 ml-2  focus:ring-1 focus:ring-gray-100 ${style.rewardBtn}`}
              >
                <Image src={rewardicon} alt="reward icon" />
                <p className="font-medium ">রিওয়ার্ড</p>
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
