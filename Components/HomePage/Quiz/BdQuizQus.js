import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import lefticon from "../../../Media/icons/lefticon.png";
import paddaBridge from "../../../Media/images/paddaBridge.png";
import style from "../HomePage.module.css";

import Box from "@mui/material/Box";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { Test, QuestionGroup, Question, Option } from "react-multiple-choice";
import WestIcon from "@mui/icons-material/West";
import BorderLinearProgress from "./BorderLinearProgress";
import quizData from "./Demoquiz";
function BdQuizQus() {
  // const quizdata = quizData;
  console.log(quizData, "quizdata");
  const [quizdata, setQuizdata] = useState([]);
  return (
    <div className={`${style.packagepage}  px-5 `}>
      <div className="pb-10 " style={{ height: "100%" }}>
        <div>
          <div className="flex items-center justify-between pt-3 ">
            <Link href="category">
              <a>
                <div className="flex items-center gap-4 ">
                  <WestIcon />
                  <p
                    className="text-2xl font-medium "
                    style={{ color: "#333333" }}
                  >
                    কুইজ
                  </p>
                </div>
              </a>
            </Link>
            <div
              style={{
                background: "#EBEBEB",
                borderRadius: "8px",
                fontFamily: "Tatsam Bengali Rnd ",
              }}
            >
              <div className="px-3 py-2 text-xs 2xl:text-sm font-medium ">
                +10 Point
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 ">
          <Box sx={{ flexGrow: 1 }}>
            <div
              className=" absolute z-50 pl-2 text-white "
              style={{ top: "70px" }}
            >
              <AccessTimeIcon fontSize="small" />
            </div>

            <BorderLinearProgress value={1300} height={22} />
          </Box>
        </div>{" "}
        <div>
          <div className=" mt-9 ">
            <Image className="w-full" src={paddaBridge} alt="icon" />
          </div>
          {/* <p>{data.qid}</p> */}
          <div className="mt-8 ml-5 ">
            <p className="text-sm font-medium tracking-wider text-gray-300 ">
              QUESTION 1 OF 150
            </p>
            <h4 className="pt-2 text-xl font-medium ">
              পদ্মা সেতুর পাইলিং গভীরতা কত ?
            </h4>
          </div>

          <form className=" ">
            <FormControl
              variant="standard"
              className=" w-full "
              sx={{
                paddingLeft: "30px",
                paddingRight: "30px",
                // "& .MuiFormGroup-root": {

                // },
              }}
            >
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="quiz"
                className={`w-full  `}
                // value={value}
                // onChange={handleRadioChange}
              >
                <FormControlLabel
                  sx={{
                    marginLeft: "0px",
                    // "& .MuiFormControlLabel-root": {

                    // },
                  }}
                  className={`${style.quizfield} p-6 mt-10  text-center flex gap-x-10   bg-white shadow-sm `}
                  style={{
                    border: "1.2px solid #D3D3D3",
                    borderRadius: "14px",
                    width: "100%",
                  }}
                  value="৩৮৩ ফুট"
                  control={<Radio color="success" />}
                  label="৩৮৩ ফুট"
                />
                <FormControlLabel
                  sx={{
                    marginLeft: "0px",
                    // "& .MuiFormControlLabel-root": {

                    // },
                  }}
                  className={`${style.quizfield} p-6  mt-10  text-center flex gap-x-10   bg-white shadow-sm `}
                  style={{
                    border: "1.2px solid #D3D3D3",
                    borderRadius: "14px",
                    width: "100%",
                  }}
                  value="৩৮৭ ফুট"
                  control={<Radio color="success" />}
                  label="৩৮৭ ফুট"
                />
              </RadioGroup>
            </FormControl>
          </form>
        </div>
        {/* {quizData.map((data) => {
         
        })} */}
        <p className="text-xs 2xl:text-sm font-normal text-center mt-7">
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
              className="pt-5 pb-8 text-sm 2xl:text-base font-semibold text-center text-indigo-800 cursor-pointer hover:font-bold"
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

export default BdQuizQus;
