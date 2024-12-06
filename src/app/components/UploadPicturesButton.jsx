import React, { useState } from "react";
import axios from "axios";

const UploadPicturesButton = ({ disabled, pictures }) => {
  const buttonClasses =
    "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 hover:bg-gray-700";
  const disabledClasses = "bg-gray-600 cursor-not-allowed focus:ring-gray-500";

  const [uploadStatus, setUploadStatus] = useState("");

  const handleUpload = async () => {
    const formData = new FormData();
    for (const picture of pictures) {
      formData.append("images", picture);
    }

    try {
      setUploadStatus("Uploading...");
      const response = await axios.post(
        "http://localhost:5000/api/image-upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      setUploadStatus(`Upload Successful: ${response.data.message}`);
    } catch (error) {
      console.error("Upload Error:", error);
      setUploadStatus("Upload Failed");
    }
  };

  return (
    <div className={"flex items-center flex-col"}>
      <button
        disabled={disabled}
        className={`px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 text-4xl
        ${disabled ? disabledClasses : buttonClasses}`}
        onClick={handleUpload}
      >
        Create Thumbnails
      </button>
      <span className={"my-2"}>{uploadStatus && <p>{uploadStatus}</p>}</span>
    </div>
  );
};

export default UploadPicturesButton;
