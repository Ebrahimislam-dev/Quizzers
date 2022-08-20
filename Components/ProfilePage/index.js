import styles from "./profile.module.css";
import Image from "next/image";
import Link from "next/link";
import WestIcon from "@mui/icons-material/West";
import personimg from "../../Media/images/personimg.jpg";
import awardpointicon from "../../Media/icons/awardpoint.png";
import tropy from "../../Media/icons/trophy.png";
import faceicon from "../../Media/icons/faceIcon.png";
import unsubscribe from "../../Media/icons/unsubscribe.png";
import info from "../../Media/icons/info.png";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Profile = () => {
  return (
    <div className={`${styles.profilepage}  border-2`}>
      <div className={styles.profileheader}>
        <Link href="/">
          <a>
            <div className="flex items-center gap-4 pt-3 pl-5 text-white">
              {/* <Image className="bg-white " src={lefticon} alt="" /> */}
              <WestIcon />
              <p className="text-2xl font-medium ">প্রোফাইল</p>
            </div>
          </a>
        </Link>
      </div>
      <div className={`${styles.profileContent}  `}>
        <div className=" flex justify-center items-center  flex-col">
          <div className={`${styles.personimg} -mt-20 `}>
            <Image
              className="w-full h-auto  "
              src={personimg}
              alt="personImage"
            />
          </div>
          <h1 className="mt-4 text-lg font-semibold text-center">
            ইশতিয়াক আহমেদ
          </h1>
        </div>
        <div className=" mx-3 my-6">
          <div className={`${styles.profiledashboard} `}>
            <div className=" flex items-center justify-center flex-col px-6 py-4 gap-2">
              <Image
                className="w-full h-auto "
                src={awardpointicon}
                alt="awardpointicon"
              />
              <h3>১৫০০</h3>
              <p>পয়েন্ট</p>
            </div>
            <div className={styles.profiledash}></div>
            <div className=" flex items-center justify-center flex-col px-6 py-4 gap-2">
              <Image className="w-full h-auto " src={tropy} alt="tropy" />
              <h3>১০</h3>
              <p>রেংকিং</p>
            </div>
            <div className={styles.profiledash}></div>
            <div className=" flex items-center justify-center flex-col px-3 py-4 gap-2">
              <Image className="w-full h-auto " src={faceicon} alt="faceicon" />
              <h3>৫</h3>
              <p>রেডিম ম্যাক্সিম</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className=" font-medium text-lg pl-5 mt-7">
            আপনার বর্তমান প্যাকেজ
          </h3>
          <div
            className="flex items-center justify-between mx-4 p-4 mb-14  bg-white shadow-sm mt-4  "
            style={{ border: "1.2px solid #D3D3D3", borderRadius: "14px" }}
          >
            <div>
              <h2 className="text-xl font-medium ">মেগা প্যাক</h2>
              <p
                className="text-base font-medium "
                style={{ color: "#7A809D" }}
              >
                ৩০ দিন
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-medium ">৩৯ টাকা</h2>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-y-6 mb-24" style={{ color: "#2E3E5C" }}>
          <div className=" flex items-center justify-between mx-8">
            <div className=" flex items-center justyfy-center gap-6 ">
              <div
                style={{
                  background: " #F1F6FB",
                  borderRadius: " 12px",
                  padding: "8px",
                }}
              >
                <SettingsOutlinedIcon />
              </div>

              <p className=" font-medium text-lg">সেটিং</p>
            </div>
            <ArrowForwardIosIcon />
          </div>
          <div className=" flex items-center justify-between mx-8">
            <div className=" flex items-center justyfy-center gap-6 ">
              <div
                style={{
                  background: " #F1F6FB",
                  borderRadius: " 12px",
                  padding: "8px",
                }}
              >
                <Image className="w-full h-auto  " src={info} alt="info" />
              </div>

              <p className=" font-medium text-lg">নির্দেশনা অংশগ্রহন </p>
            </div>
            <ArrowForwardIosIcon />
          </div>
          <div className=" flex items-center justify-between mx-8">
            <div className=" flex items-center justyfy-center gap-6 ">
              <div
                style={{
                  background: " #F1F6FB",
                  borderRadius: " 12px",
                  padding: "8px",
                }}
              >
                <Image
                  className="w-full h-auto  "
                  src={unsubscribe}
                  alt="unsubscribe"
                />
              </div>

              <p className=" font-medium text-lg">Unsubscribe </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
