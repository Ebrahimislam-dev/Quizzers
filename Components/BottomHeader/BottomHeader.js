import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import EmojiEventsOutlinedIcon from "@material-ui/icons/EmojiEventsOutlined";
import ExtensionOutlinedIcon from "@material-ui/icons/ExtensionOutlined";
import Paper from "@mui/material/Paper";
import { useRouter } from "next/router";
const useStyles = makeStyles({
  root: {
    width: "100%",
   
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default function BottomHeader() {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const navigate = useRouter();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    navigate.push(value);
  }, [value]);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 99999 }}
      elevation={3}
    >
      <BottomNavigation
        defaultValue="/"
        value={value}
        onChange={handleChange}
        //  className={classes.root}
      >
        {" "}
        <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Reward"
          value="/pointReward"
          icon={<EmojiEventsOutlinedIcon />}
        />
        <BottomNavigationAction
          label="Category"
          value="category"
          icon={<ExtensionOutlinedIcon />}
        />
        <BottomNavigationAction
          label="Profile"
          value="profile"
          icon={<DragHandleIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
