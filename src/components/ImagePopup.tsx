import React, { useEffect, useState } from "react";

interface Props {
  img: string;
  turnOff: Function;
  //
}
function ImagePopup({ img, turnOff }: Props) {
  if (img === "") return null;

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.id === "container") {
      turnOff("");
    }
  };
  return (
    <div
      id="container"
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center"
    >
      <img src={`../static/${img}`} alt="" />
    </div>
  );
}

export default ImagePopup;
