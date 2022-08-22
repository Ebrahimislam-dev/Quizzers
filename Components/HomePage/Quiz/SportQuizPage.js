import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import lefticon from "../../../Media/icons/lefticon.png";
import sakibimage from "../../../Media/images/sakibquiz.png";
import sakiboption1 from "../../../Media/images/sakiboption1.png";
import sakiboption2 from "../../../Media/images/sakiboption2.png";
import style from "../HomePage.module.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

function SportQuizPage() {
  const [isActive, setIsActive] = useState(false);
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 21,
    borderRadius: 10,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 10,
      backgroundColor: theme.palette.mode === "light" ? "#6A5AE0" : "#308fe8",
    },
  }));

  const handleClick = () => {
    // 👇️ toggle
    setIsActive((current) => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };
  return (
    <div className={`${style.packagepage} border-2 px-5 `}>
      <div className="pb-10 " style={{ height: "100%" }}>
        <div>
          <div className="flex items-center justify-between pt-3 ">
            <Link href="category">
              <a>
                <div className="flex items-center gap-4 ">
                  <Image src={lefticon} alt="" />
                  <p
                    className="text-2xl font-medium "
                    style={{ color: "#333333" }}
                  >
                    কুইজ
                  </p>
                </div>
              </a>
            </Link>
            <div style={{ background: "#EBEBEB", borderRadius: "8px" }}>
              <button className="px-3 py-2 text-xs font-medium ">
                +10 Point
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 ">
          <Box sx={{ flexGrow: 1 }}>
            <div
              className=" absolute z-50 pl-2 text-white "
              style={{ top: "65.5px" }}
            >
              <AccessTimeIcon fontSize="small" />
            </div>

            <BorderLinearProgress variant="determinate" value={70} />
          </Box>
        </div>
        <div className=" flex justify-center items-center mt-9">
          <Image className="" src={sakibimage} alt="sakibimage" />
        </div>

        <div className="mt-8 ">
          <p className="text-sm font-medium tracking-wider text-gray-300 ">
            QUESTION 2 OF 150
          </p>
          <h4 className="pt-2 text-lg font-medium ">
            এখানে কোনটি সাকিব আল হাসান চোখ ?{" "}
          </h4>
        </div>
        <div className=" flex justify-around items-center">
          <div
            style={{
              border: isActive ? "1.2px solid #D3D3D3" : "2px solid #91f100",
              borderRadius: "14px",
            }}
            onClick={handleClick}
            className="px-4 py-10 mt-6  bg-white shadow-sm "
          >
            <Image className="" src={sakiboption1} alt="sakiboption1" />
          </div>
          <div
            // onClick={handleClick}
            className="px-4 py-10 mt-6  bg-white shadow-sm "
            style={{
              // border: isActive ? "1.2px solid #D3D3D3" : "2px solid #91f100",
              borderRadius: "14px",
            }}
          >
            <Image className="" src={sakiboption2} alt="sakiboption2" />
          </div>
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
        <Link href="category">
          <a>
            <p
              className="pt-5 pb-8 text-sm font-semibold text-center text-indigo-800 cursor-pointer hover:font-bold"
              // style={{ color: "#495C83" }}
            >
              Skip
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default SportQuizPage;
