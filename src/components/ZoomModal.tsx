import React, { FC } from "react";

const ZoomModal: FC = () => {
  return (
    <div className={`relative top-[2vh] left-2 p-2 bg-white text-black w-fit z-30`}>
      Zoom in to see properties.
    </div>
  );
};

export default ZoomModal;
