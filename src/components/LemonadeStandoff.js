import React from "react";
import AIContanier from "./AIContainer";
import UserContainer from "./UserContainer";
import StandoffAreaContainer from "./StandoffAreaContainer";
import Divider from "./common/Divider";
import "../styles/styles.scss";

export default function Lemonadestandoff() {
  return (
    <>
      <AIContanier />
      <Divider />
      <StandoffAreaContainer/>
      <UserContainer />
      <Divider />
    </>
  );
}
