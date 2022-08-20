import Image from "next/image";
import Link from "next/link";
import congoreward from "../../../Media/images/congoreward.png";
import style from "../HomePage.module.css";
import CloseIcon from "@mui/icons-material/Close";
function CongratulationsPage() {
  return (
    <div className={`${style.packagepage} border-2 px-5 `}>
      <div className="pb-10 " style={{ height: "100%" }}>
        <div>
          <Link href="category">
            <a>
              <div className="grid items-center grid-cols-3 pt-3 ">
                <div></div>
                <p
                  className="text-2xl font-medium text-center "
                  style={{ color: "#333333" }}
                >
                  অভিনন্দন
                </p>
                <div className="pl-20 text-gray-900 hover:text-red-500 hover:font-bold">
                  <CloseIcon />
                </div>
              </div>
            </a>
          </Link>
        </div>
        <div className={`${style.congratsBg} px-5 py-6 mt-6`}>
          <Image className="pt-8 " src={congoreward} alt="Reward Tropy" />
          <p className="text-base text-white font-mediumS">
            আপনি পয়েন্ট পেয়েছেন
          </p>

          <p
            className="px-8 py-1 text-3xl font-medium "
            style={{
              background: "#FFD967",
              borderRadius: "8px",
              color: "#4C67AD",
            }}
          >
            1200
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 p-5 mb-6 ">
          <div style={{ border: "2px solid #EFEEFC", borderRadius: "12px" }}>
            <div className="py-6 text-center px-7">
              <p className="pb-2 text-xs font-medium text-slate-400">
                সঠিক উত্তর
              </p>
              <h3 className="text-xl font-medium ">৭ টি</h3>
            </div>
          </div>
          <div style={{ border: "2px solid #EFEEFC", borderRadius: "12px" }}>
            <div className="py-6 text-center px-7">
              <p className="pb-2 text-xs font-medium text-slate-400">সময় </p>
              <h3 className="text-xl font-medium ">৩.৪৫ মিনিট </h3>
            </div>
          </div>
          <div style={{ border: "2px solid #EFEEFC", borderRadius: "12px" }}>
            <div className="py-6 text-center px-7">
              <p className="pb-2 text-xs font-medium text-slate-400">
                উত্তর দেননি
              </p>
              <h3 className="text-xl font-medium ">২ টি </h3>
            </div>
          </div>
          <div style={{ border: "2px solid #EFEEFC", borderRadius: "12px" }}>
            <div className="py-6 text-center px-7">
              <p className="pb-2 text-xs font-medium text-slate-400">
                ভুল হয়েছে
              </p>
              <h3 className="text-xl font-medium ">১ টি </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CongratulationsPage;
