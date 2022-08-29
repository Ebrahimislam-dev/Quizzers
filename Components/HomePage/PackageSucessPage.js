import Image from "next/image";
import Link from "next/link";

import style from "./HomePage.module.css";
import CloseIcon from "@mui/icons-material/Close";
import SucessAnimation from "./SucessAnimation";

function PackageSucessPage() {
  return (
    <div className={`${style.packagepage}  px-5 pb-56 `}>
      <div className="pb-10 " style={{ height: "100%" }}>
        <div className=" flex justify-between pt-3 px-5 ">
          <div></div>
          <Link href="category">
            <a>
              {" "}
              <div className="pl-20 text-gray-900 hover:text-red-500 hover:font-bold">
                <CloseIcon />
              </div>{" "}
            </a>
          </Link>
        </div>

        <div className=" pt-10">
          <SucessAnimation />

          <p className=" pt-11 text-center text-2xl">
            আপনার পেমেন্ট সম্পূর্ণ হয়েছে
          </p>
          <p
            className=" pt-3 text-center text-base"
            style={{ color: "#828282" }}
          >
            আপনি এখন মিনি প্যাক এর আওতায় <br /> ভুক্ত আছেন
          </p>
        </div>
      </div>
    </div>
  );
}

export default PackageSucessPage;
