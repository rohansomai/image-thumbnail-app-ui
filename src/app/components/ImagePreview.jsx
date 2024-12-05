import React from "react";

const ImagePreview = ({thumbs}) => {
  return (
    <div className={"h-[calc(100vh-215px)] m-2 overflow-auto custom-scrollbar"}>
      {thumbs}
    </div>
  );
};

export default ImagePreview;
