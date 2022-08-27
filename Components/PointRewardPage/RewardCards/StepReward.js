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
import MasterRewardCard from "./MasterRewardCard";
import GrandMasterRewardCard from "./GrandMasterRewardCard";
import ChampionRewardCard from "./ChampionRewardCard";
import LegendRewardCard from "./LegendRewardCard";
import WestIcon from "@mui/icons-material/West";
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
    <div className={`${styles.rewardpage} pb-28`}>
      <Link href="pointReward">
        <a>
          <div className="flex items-center gap-4 px-5 pt-3 mb-7">
            <WestIcon />
            <p className="text-2xl font-medium " style={{ color: "#333333" }}>
              পয়েন্ট রিওয়ার্ড
            </p>
          </div>
        </a>
      </Link>

      <Box>
        <Tabs
          className=" mr-2 ml-2"
          sx={{
            "& .MuiTabs-flexContainer": {
              display: "flex",
              justifyContent: "space-between",
            },
            "& button": { padding: "0 20px" },
            // "& button": { borderBottom: "2px solid " },

            // "& .MuiButtonBase-root": { paddingRight: 0 },
          }}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          // scrollButtons="auto"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable auto tabs example"
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
            <WorriorRewardCards toggleDrawer={toggleDrawer} />
            <PointDrawer open={open} toggleDrawer={toggleDrawer} />
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div>
            <MasterRewardCard toggleDrawer={toggleDrawer} />
            <PointDrawer open={open} toggleDrawer={toggleDrawer} />
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div>
            <GrandMasterRewardCard toggleDrawer={toggleDrawer} />
            <PointDrawer open={open} toggleDrawer={toggleDrawer} />
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div>
            <ChampionRewardCard toggleDrawer={toggleDrawer} />
            <PointDrawer open={open} toggleDrawer={toggleDrawer} />
          </div>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <div>
            <LegendRewardCard toggleDrawer={toggleDrawer} />
            <PointDrawer open={open} toggleDrawer={toggleDrawer} />
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}
