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

export default function RegistrationPage() {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const [values2, setValues2] = React.useState({
    password: "",
    showPassword2: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleChange2 = (prop) => (event) => {
    setValues2({ ...values2, [prop]: event.target.value2 });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,

      showPassword: !values.showPassword,
    });
  };
  const handleClickShowPassword2 = () => {
    setValues({
      ...values2,

      showPassword2: !values2.showPassword2,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };

  return (
    <div className={`${styles.authpage} pb-16`}>
      <Link href="/">
        <a>
          <div className="flex items-center gap-4 px-5 pt-3 ">
            <WestIcon />
            <p className="text-2xl font-medium " style={{ color: "#333333" }}>
              Sign In
            </p>
          </div>
        </a>
      </Link>
      <p
        className=" text-2xl text-center font-medium py-7"
        style={{ color: "#36455A" }}
      >
        Create Account
      </p>
      <div className=" px-8">
        <p className=" text-sm 2xl:text-lgfont-normal py-5">FullName</p>
        <FormControl sx={{ width: "100%" }}>
          <OutlinedInput placeholder="Enter your Full Name" />
        </FormControl>

        <p className=" text-sm 2xl:text-lgfont-normal py-5">Email</p>
        {/* <input
          type="email"
          className=" border-2 w-full py-5 px-4 mt-5"
          placeholder="Enter your mail"
        /> */}
        <FormControl sx={{ width: "100%" }}>
          <OutlinedInput placeholder="Enter your mail" />
        </FormControl>
        <p className=" text-sm 2xl:text-lg font-normal py-5">Set Password</p>
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
        <p className=" text-sm 2xl:text-lg font-normal py-5">
          Re-Type Password
        </p>
        <FormControl sx={{ width: "100%" }}>
          <OutlinedInput
            placeholder="Password"
            id="outlined-adornment-password"
            type={values2.showPassword2 ? "text" : "password"}
            value={values2.password}
            onChange={handleChange2("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword2}
                  onMouseDown={handleMouseDownPassword2}
                  edge="end"
                >
                  {values2.showPassword2 ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <div className=" pt-12 pb-20">
          <Link href="/">
            <a>
              <button
                className="shadow bg-indigo-500 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-sm 2xl:text-lg text-white font-semibold py-2 px-4 rounded-xl w-full"
                type="button"
              >
                Create Account
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
