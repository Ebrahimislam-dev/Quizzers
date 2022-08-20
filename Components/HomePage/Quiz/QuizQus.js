import Image from "next/image";
import Link from "next/link";
import lefticon from "../../../Media/icons/lefticon.png";
import paddaBridge from "../../../Media/images/PaddaBridge.png";
import style from "../HomePage.module.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

function QuizQus() {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));
  return (
    <div className={`${style.packagepage} border-2 px-5 `}>
      <div className="pb-10 " style={{ height: "100%" }}>
        <div>
          <Link href="category">
            <a>
              <div className="flex items-center justify-between pt-3 ">
                <div className="flex items-center gap-4 ">
                  <Image src={lefticon} alt="" />
                  <p
                    className="text-2xl font-medium "
                    style={{ color: "#333333" }}
                  >
                    কুইজ
                  </p>
                </div>
                <div style={{ background: "#EBEBEB", borderRadius: "8px" }}>
                  <button className="px-3 py-2 text-xs font-medium ">
                    +10 Point
                  </button>
                </div>
              </div>
            </a>
          </Link>
        </div>
        <div className="mt-6 ">
          <Box sx={{ flexGrow: 1 }}>
            <BorderLinearProgress variant="determinate" value={70} />
          </Box>
        </div>
        <div className=" mt-9">
          <Image className="" src={paddaBridge} alt="icon" />
        </div>

        <div className="mt-8 ">
          <p className="text-sm font-medium tracking-wider text-gray-300 ">
            QUESTION 1 OF 150
          </p>
          <h4 className="pt-2 text-xl font-medium ">
            পদ্মা সেতুর পাইলিং গভীরতা কত ?
          </h4>
        </div>
        <div
          className="p-4 mt-10 text-center bg-white shadow-sm "
          style={{ border: "1.2px solid #D3D3D3", borderRadius: "14px" }}
        >
          <h2 className="text-xl font-medium ">৩৮৩ ফুট</h2>
        </div>
        <div
          className="p-4 mt-6 text-center bg-white shadow-sm "
          style={{ border: "1.2px solid #D3D3D3", borderRadius: "14px" }}
        >
          <h2 className="text-xl font-medium ">৩৮৭ ফুট</h2>
        </div>
        <p className="text-xs font-normal text-center mt-7">
          সঠিক উত্তর বাছাই করুন
        </p>
        <Link href="congratulations">
          <a>
            <div className={`${style.commonButton} `}>
              <button className="">সাবমিট</button>
            </div>
          </a>
        </Link>
        <p
          className="pt-5 pb-8 text-sm font-semibold text-center text-indigo-800 cursor-pointer hover:font-bold"
          // style={{ color: "#495C83" }}
        >
          Skip
        </p>
      </div>
    </div>
  );
}

export default QuizQus;
