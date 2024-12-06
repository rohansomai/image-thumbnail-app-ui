"use client";

import React, { useEffect, useState } from "react";
import ImageUploader from "@/app/components/ImageUploader";
import ImagePreview from "@/app/components/ImagePreview";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import UploadPicturesButton from "@/app/components/UploadPicturesButton";

const Dashboard = () => {
  const [pictures, setPictures] = useState([]);

  const thumbs = pictures.map((file) => (
    <div
      className={
        "inline-flex border border-gray-200 rounded-sm mr-2 mb-2 p-1 h-[100px] w-[100px]"
      }
      key={file.name}
    >
      <div className={"flex"}>
        <Image
          src={file.preview}
          width={"100"}
          height={"100"}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
          alt={`Thumbnail -${file.name}`}
        />
      </div>
    </div>
  ));

  const handleSetPictures = (picturesState) => {
    setPictures(picturesState);
  };

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => pictures.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [pictures]);

  return (
    <section className="min-h-[100px] w-11/12 mx-auto">
      <ImageUploader setPictures={handleSetPictures} />
      <ImagePreview thumbs={thumbs} />
      <UploadPicturesButton disabled={!pictures.length} pictures={pictures} />
    </section>
  );
};

export default Dashboard;
