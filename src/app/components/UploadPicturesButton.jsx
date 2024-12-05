import React from "react";

const UploadPicturesButton = ({ disabled }) => {
  const buttonClasses =
    "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 hover:bg-gray-700";
  const disabledClasses = "bg-gray-600 cursor-not-allowed focus:ring-gray-500";

  return (
    <div className={"flex justify-center"}>
      <button
        disabled={disabled}
        className={`px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 text-4xl
        ${disabled ? disabledClasses : buttonClasses}`}
      >
        Create Thumbnails
      </button>
    </div>
  );
};

export default UploadPicturesButton;
