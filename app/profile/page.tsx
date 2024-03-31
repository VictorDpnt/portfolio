import React from "react";
import { BackgroundGradientAnimation } from "../../components/ui/background-gradient-animation";

export default function Profile() {
  return (
    <>
      <BackgroundGradientAnimation>
        <div>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
      </BackgroundGradientAnimation>
    </>
  );
}
