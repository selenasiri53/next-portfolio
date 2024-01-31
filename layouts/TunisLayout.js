"use client";
import Popup from "@/components/Popup";
import Preloader from "@/components/Preloader";
import Switcher from "@/components/Switcher";
import { TunisContext } from "@/context/context";
import { useContext } from "react";
import Header from "./Header";

const TunisLayout = ({ children }) => {
  const { direction, popup, dark } = useContext(TunisContext);
  return (
    <div
      className={`home ${dark ? "dark" : ""} bg-${
        dark ? "black" : "white"
      } text-${
        dark ? "white" : "black-6"
      } relative w-full h-full overflow-hidden anim--effect-3 animation-${direction}`}
    >
      <Preloader />
      {popup && <Popup />}
      <Switcher />
      {/* Live Style Switcher Ends - demo only */}

      {/* Header Starts */}
      <Header />
      {/* Header Ends */}
      {children}
    </div>
  );
};
export default TunisLayout;
