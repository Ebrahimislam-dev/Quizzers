import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import sakiboption1 from "../../../Media/images/sakiboption1.png";
import sakiboption2 from "../../../Media/images/sakiboption2.png";
import sakibimage from "../../../Media/images/sakibquiz.png";
import style from "../HomePage.module.css";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Box from "@mui/material/Box";

import WestIcon from "@mui/icons-material/West";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import BorderLinearProgress from "./BorderLinearProgress";
// import ImageSelect from "react-image-select";

function SportQuizPage() {
  const [isChecked, setChecked] = useState();
  console.log(isChecked, "isChecked");
  const [value, setValue] = useState("");
  console.log(value, "value");
  // const [error, setError] = React.useState(false);
  // const [helperText, setHelperText] = React.useState("Choose wisely");

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setChecked(event.target.checked);
    // setHelperText(" ");
    // setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // if (value === "best") {
    //   setHelperText("You got it!");
    //   setError(false);
    // } else if (value === "worst") {
    //   setHelperText("Sorry, wrong answer!");
    //   setError(true);
    // } else {
    //   setHelperText("Please select an option.");
    //   setError(true);
    // }
  };
  return (
    <div className={`${style.packagepage}  px-5 `}>
      <div className="pb-10 " style={{ height: "100%" }}>
        <div>
          <div className="flex items-center justify-between pt-3 ">
            <Link href="category">
              <a>
                <div className="flex items-center gap-4  ">
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
            <div style={{ background: "#EBEBEB", borderRadius: "8px" }}>
              <button className="px-3 py-2 text-xs 2xl:text-sm font-medium  ">
                +10 Point
              </button>
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
        </div>
        <div className=" flex justify-center items-center mt-9">
          <Image className="" src={sakibimage} alt="sakibimage" />
        </div>

        <div className="mt-8 px-2 2xl:px-7 ">
          <p className="text-sm font-medium tracking-wider text-gray-300 ">
            QUESTION 2 OF 150
          </p>
          <h4 className="pt-2 text-lg font-medium ">
            এখানে কোনটি সাকিব আল হাসান চোখ ?{" "}
          </h4>
        </div>
        <form onSubmit={handleSubmit} className=" ">
          <FormControl
            // sx={{
            //   paddingLeft: "30px",
            //   paddingRight: "30px",
            // }}
            variant="standard"
            className="  w-full"
          >
            <RadioGroup
              aria-labelledby="demo-error-radios"
              name="quiz"
              className=" flex justify-between items-center "
              value={value}
              onChange={handleRadioChange}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <FormControlLabel
                sx={{
                  marginLeft: "0px",
                }}
                className={`px-3 2xl:px-6 py-12 mt-10  text-center    bg-white shadow-md `}
                style={{
                  border: isChecked
                    ? "1.2px solid #D3D3D3"
                    : "2px solid  #4C67AD",
                  borderRadius: "14px",
                  // width: "100%",
                }}
                value="sakiboption1"
                control={
                  <Radio
                    color="success"
                    style={{
                      display: "none",
                    }}
                  />
                }
                label={
                  <Image className="" src={sakiboption1} alt="sakiboption1" />
                }
              />
              <FormControlLabel
                sx={{
                  marginLeft: "0px",
                  // "& .MuiFormControlLabel-root": {

                  // },
                }}
                className={` px-3 2xl:px-6 py-12 mt-10  text-center flex  bg-white  shadow-md `}
                style={{
                  border: "1.2px solid #D3D3D3",
                  borderRadius: "14px",
                  // width: "100%",
                }}
                value="sakiboption2"
                control={
                  <Radio
                    color="success"
                    style={{
                      display: "none",
                    }}
                  />
                }
                label={
                  <Image className="" src={sakiboption2} alt="sakiboption1" />
                }
              />
            </RadioGroup>
          </FormControl>
        </form>
        {/* <div className=" flex justify-around items-center">
          <div
            style={{
              border: isActive ? "1.2px solid #D3D3D3" : "2px solid #91f100",
              borderRadius: "14px",
            }}
            onClick={() => handleClick(0)}
            className="px-4 py-10 mt-6  bg-white shadow-sm "
          >
            <Image className="" src={sakiboption1} alt="sakiboption1" />
          </div>
          <div
            onClick={() => handleClick(1)}
            className="px-4 py-10 mt-6  bg-white shadow-sm "
            style={{
              border: isActive ? "1.2px solid #D3D3D3" : "2px solid #91f100",
              borderRadius: "14px",
            }}
          >
            <Image className="" src={sakiboption2} alt="sakiboption2" />
          </div>
        </div> */}

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

export default SportQuizPage;
