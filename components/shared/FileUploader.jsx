import { CloudDownload } from "lucide-react";
import React, { useCallback, useState } from "react";

import { useDropzone } from "@uploadthing/react";
import { generateClientDropzoneAccept } from "uploadthing/client";

import { convertFileToUrl } from "@/lib/utils";
import Image from "next/image";

const FileUploader = ({ imageUrl, setFiles, onFieldChange }) => {
  const onDrop = useCallback(async (acceptedFiles) => {
    setFiles(acceptedFiles);
    onFieldChange(convertFileToUrl(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*" ? generateClientDropzoneAccept(["image/*"]) : undefined,
    maxSize: 3 * 1024 * 1024,
  });

  return (
    <div>
      <div {...getRootProps()} className="info-card p-6">
        <p className="mb-4">Upload Profile Photo</p>
        <input {...getInputProps()} className="cursor-pointer" />

        <div className="w-full bg-[#000000] bg-opacity-0 md:bg-opacity-20">
          <div className="m-auto flex aspect-square w-full max-w-[240px] items-center justify-center overflow-hidden rounded-[32px] border-4 border-[#24A0B5] bg-[#24A0B5] bg-opacity-50 md:w-1/3">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt="image"
                width={250}
                height={250}
                className="w-full object-cover object-center"
              />
            ) : (
              <div className="flex flex-col items-center justify-center gap-4 p-3">
                <CloudDownload size={32} />
                <p className="text-center">Drag & drop or click to upload</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
