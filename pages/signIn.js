import React from "react";
import styles from "../styles/Home.module.css";
import Profile from "../Components/ProfilePage/index";
import SignInPage from "../Components/AuthPage/SignInPage";
const signIn = () => {
  return (
    <div>
      <SignInPage></SignInPage>
    </div>
  );
};

export default signIn;
