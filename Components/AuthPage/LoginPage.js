import * as React from "react";
import styles from "./Authpage.module.css";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Link from "next/link";
import WestIcon from "@mui/icons-material/West";
import Checkbox from "@mui/material/Checkbox";

export default function LoginPage() {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,

      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={`${styles.authpage} pb-16`}>
      {/* <Link href="/">
        <a>
          <div className="flex items-center gap-4 px-5 pt-3 ">
            <WestIcon />
            <p className="text-2xl font-medium " style={{ color: "#333333" }}>
              Sign In
            </p>
          </div>
        </a>
      </Link> */}
      <p
        className=" text-3xl text-center font-medium py-7"
        style={{ color: "#36455A" }}
      >
        Login
      </p>
      <div className=" px-8">
        <p className=" text-sm 2xl:text-lg font-normal py-5">Enter your Email</p>
        {/* <input
          type="email"
          className=" border-2 w-full py-5 px-4 mt-5"
          placeholder="Enter your mail"
        /> */}
        <FormControl sx={{ width: "100%" }}>
          <OutlinedInput placeholder="Enter your mail" />
        </FormControl>
        <p className=" text-sm 2xl:text-lg font-normal py-5">
          Enter your Password
        </p>
        <FormControl sx={{ width: "100%" }}>
          <OutlinedInput
            placeholder="Password"
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <div className=" flex justify-between items-center pt-8">
          <div className=" flex gap-2">
            <Checkbox defaultChecked={false} />
            <p className=" tetx-xs font-normal" style={{ color: " #ABB3BB" }}>
              Remember me
            </p>
          </div>
          <p className=" tetx-xs font-normal" style={{ color: "#2945FF" }}>
            Forgot password?
          </p>
        </div>
        <div className=" pt-12 pb-20">
          <Link href="/">
            <a>
              <button
                className="shadow bg-indigo-500 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-sm 2xl:text-lg text-white font-semibold py-2 px-4 rounded-xl w-full"
                type="button"
              >
                Login
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
