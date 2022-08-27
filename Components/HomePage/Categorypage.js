import Image from "next/image";
import Link from "next/link";
import lefticon from "../../Media/icons/lefticon.png";
import style from "./HomePage.module.css";
import sporticon from "../../Media/icons/Medal.png";
import infoicon from "../../Media/icons/Books and Apple.png";
import googlilicon from "../../Media/icons/Atom Bulb.png";
import globalicon from "../../Media/icons/Globe.png";
import bangladesicon from "../../Media/icons/bangladeshflag.png";
import entertainmenticon from "../../Media/icons/entertainment.png";
import WestIcon from "@mui/icons-material/West";
function Categorypage() {
  return (
    <div className={`${style.packagepage} px-8 `}>
      <div className="pb-10 " style={{ height: "100%" }}>
        <div>
          <Link href="/">
            <a>
              <div className="flex items-center gap-4 pt-3 ">
                <WestIcon />
                <p
                  className="text-2xl font-medium "
                  style={{ color: "#333333" }}
                >
                  ক্যাটাগরি
                </p>
              </div>
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-5 px-4  pt-9 mb-32 ">
          <Link href="sportQuiz">
            <a>
              <div
                className={`${style.categoryItem} active:border-slate-300  border-2 shadow-sm `}
              >
                <div className=" w-14 h-14">
                  <Image src={sporticon} alt="sporticon" />
                </div>

                <p>খেলাধুলা</p>
              </div>
            </a>
          </Link>
          <Link href="sportQuiz">
            <a>
              <div
                className={`${style.categoryItem} active:border-slate-300  border-2 shadow-sm `}
              >
                <div className=" w-14 h-14">
                  <Image src={infoicon} alt="infoicon" />
                </div>
                <p>তথ্যমূলক</p>
              </div>
            </a>
          </Link>

          <Link href="sportQuiz">
            <a>
              <div
                className={`gap-y-2 ${`${style.categoryItem} active:border-slate-300  border-2 shadow-sm `}`}
              >
                <div className=" w-12 h-12">
                  <Image src={googlilicon} alt="googlilicon" />
                </div>
                <p>গুগলি</p>
              </div>
            </a>
          </Link>
          <Link href="bdquiz">
            <a>
              <div
                className={`${style.categoryItem} active:border-slate-300  border-2 shadow-sm `}
              >
                <div className=" w-14 h-14">
                  <Image src={globalicon} alt="globalicon" />
                </div>
                <p>আন্তর্জাতিক</p>
              </div>
            </a>
          </Link>

          <Link href="bdquiz">
            <a>
              <div
                className={`${style.categoryItem} active:border-slate-300  border-2 shadow-sm `}
              >
                <div className=" w-12 h-12 ">
                  <Image src={bangladesicon} alt="bangladesicon" />
                </div>{" "}
                <p className="mt-4"> বাংলাদেশ</p>
              </div>
            </a>
          </Link>
          <Link href="bdquiz">
            <a>
              <div
                className={`gap-y-2 ${`${style.categoryItem} active:border-slate-300  border-2 shadow-sm `}`}
              >
                <div className=" w-12 h-12">
                  <Image src={entertainmenticon} alt="entertainmenticon" />
                </div>{" "}
                <p>এন্টারটেইন</p>
              </div>
            </a>
          </Link>
        </div>

        {/* <Link href="bdquiz">
          <a>
            <div className={`${style.commonButton} mb-10`}>
              <button className="">খেলা শুরু করুন</button>
            </div>
          </a>
        </Link> */}
      </div>
    </div>
  );
}

export default Categorypage;
