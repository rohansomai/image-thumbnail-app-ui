import React from "react";
import { useDropzone } from "react-dropzone";

const ImageUploader = ({ setPictures }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setPictures(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
  });
  return (
    <div
      {...getRootProps({ className: "dropzone" })}
      className={
        "bg-gray-800 border-2 border-dashed border-gray-500 focus:border-indigo-600"
      }
    >
      <input {...getInputProps()} />
      <div className={"items-center h-full p-9"}>
        <p className={"text-gray-300 flex justify-center "}>
          Drag 'n' drop some files here, or click to select files
        </p>
      </div>
    </div>
  );
};

export default ImageUploader;
