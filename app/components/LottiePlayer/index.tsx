import React from "react";
import { useLottie } from "lottie-react";
import animationData from "./Lottie/Animation - 1744304331429.json";

const LottiePlayer = () => {
  const options = {
    animationData,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default LottiePlayer;
