import React from "react";
import Lottie from "react-lottie";
import animationData from "../../tropy.json";
export default function TropyAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,

    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={70} width={100} />
    </div>
  );
}
