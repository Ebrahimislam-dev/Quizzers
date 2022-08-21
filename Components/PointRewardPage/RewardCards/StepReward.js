import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styles from "../PointRewardPage.module.css";
import PropTypes from "prop-types";
import RewardHeader from "../RewardHeader";
import lefticon from "../../../Media/icons/lefticon.png";
import Link from "next/link";

import PointDrawer from "../PointDrawer";
import Image from "next/image";
import WorriorRewardCards from "./WorriorRewardCards";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
export default function StepReward() {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div className={styles.rewardpage}>
      <Link href="/">
        <a>
          <div className="flex items-center gap-4 px-5 pt-3 mb-7">
            <Image src={lefticon} alt="" />
            <p className="text-2xl font-medium " style={{ color: "#333333" }}>
              পয়েন্ট রিওয়ার্ড
            </p>
          </div>
        </a>
      </Link>

      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          // scrollButtons="auto"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable auto tabs example"
          className=" flex justify-between items-center "
        >
          <Tab className="normal-case	" label="Warrior" {...a11yProps(0)} />
          <Tab className="normal-case	" label=" Master " {...a11yProps(1)} />
          <Tab
            className="normal-case 	"
            label="Grand Master "
            {...a11yProps(2)}
          />

          <Tab className="normal-case 	" label=" Champion" {...a11yProps(3)} />
          <Tab className="normal-case	" label="Legend" {...a11yProps(4)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div>
            <div className=" pt-5 pb-7">
              <RewardHeader></RewardHeader>
            </div>
            <div className="pb-4 pl-3 pr-8">
              <p className="text-base font-medium ">পয়েন্ট রিওয়ার্ড</p>
            </div>
            <WorriorRewardCards toggleDrawer={toggleDrawer} />
            <PointDrawer open={open} toggleDrawer={toggleDrawer} />
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
      </Box>
    </div>
  );
}