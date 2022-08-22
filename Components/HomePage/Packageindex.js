import Image from "next/image";
import Link from "next/link";
import lefticon from "../../Media/icons/lefticon.png";
import style from "./HomePage.module.css";
import Checkbox from "@mui/material/Checkbox";
function Packageindex() {
  return (
    <div className={`${style.packagepage} border-2 px-8 `}>
      <div className="pb-10  " style={{ height: "100%" }}>
        <div>
          <Link href="/">
            <a>
              <div className="flex items-center gap-4 pt-3 ">
                <Image src={lefticon} alt="" />
                <p
                  className="text-2xl font-medium "
                  style={{ color: "#333333" }}
                >
                  প্যাকেজ
                </p>
              </div>
            </a>
          </Link>
        </div>
        <div className="mt-8 ">
          <h2 className="text-lg font-semibold ">
            Subscription Packages Modality
          </h2>
          <h4 className="text-sm font-normal ">
            This game offering 2 kinds of subscription
          </h4>
        </div>
        <div
          className="flex items-center justify-between p-4 mt-10 bg-white shadow-sm "
          style={{ border: "1.2px solid #D3D3D3", borderRadius: "14px" }}
        >
          <Checkbox className="rounded-full " defaultChecked color="success" />
          <div>
            <h2 className="text-xl font-medium ">মিনি প্যাক</h2>
            <p className="text-base font-medium " style={{ color: "#7A809D" }}>
              ১৫ দিন
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-medium ">২৯ টাকা</h2>
          </div>
        </div>
        <div
          className="flex items-center justify-between p-4 bg-white shadow-sm mt-7 mb-60"
          style={{ border: "1.2px solid #D3D3D3", borderRadius: "14px" }}
        >
          <Checkbox className="rounded-full " color="success" />
          <div>
            <h2 className="text-xl font-medium ">মেগা প্যাক</h2>
            <p className="text-base font-medium " style={{ color: "#7A809D" }}>
              ৩০ দিন
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-medium ">৩৯ টাকা</h2>
          </div>
        </div>
        <Link href="category">
          <a>
            <div className={`${style.commonButton} mb-6 `}>
              <button className=""> এগিয়ে জান</button>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Packageindex;
