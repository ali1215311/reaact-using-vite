import React from "react";
import Card from "./Card";

const CardContainer = () => {
  return (
    <>
      <div className="border-2 flex gap-2 mx-auto max-w-4xl p-4 bord rounded-lg">
        <Card cardTitle={"Pagasus"} />
        <Card cardTitle={"Retro"} />
        <Card cardTitle={"Bata"} />
        <Card cardTitle={"Adidas"} />
      </div>
    </>
  );
};

export default CardContainer;
