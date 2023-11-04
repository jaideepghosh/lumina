"use client";
import React, { useEffect, useState } from "react";
import { getAppAddress } from "@/utils/config";

const appAddress = getAppAddress();

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showNext, setNextBtnVisibility] = useState<boolean>(false);
  const [showPrev, setPrevBtnVisibility] = useState<boolean>(false);

  const openFullscreen = (index: number) => {
    setSelectedImageIndex(index);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setSelectedImageIndex(null);
  };

  const showPrevImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const showNextImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  useEffect(() => {
    //if the selectedImageIndex is the first image, then show the next,
    // and hide the prev.
    if (selectedImageIndex === 0) {
      setNextBtnVisibility(true);
      setPrevBtnVisibility(false);
      return;
    }
    //if the selectedImageIndex is the last image, then show the prev,
    // and hide the next.
    if (selectedImageIndex === images.length - 1) {
      setNextBtnVisibility(false);
      setPrevBtnVisibility(true);
      return;
    }
    // else show both.
    setNextBtnVisibility(true);
    setPrevBtnVisibility(true);
  }, [selectedImageIndex, images]);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
      {images.map((image, index) => (
        <div key={index} onClick={() => openFullscreen(index)}>
          <div className="relative group">
            <img
              src={`${appAddress + image}`}
              alt={`Image ${index}`}
              className="h-auto max-w-full rounded-lg border"
            />
            <div className="hidden absolute inset-0 bg-gray-600 rounded-lg bg-opacity-50 group-hover:block">
              <div className="flex justify-center items-center h-full">
                <button
                  onClick={() => openFullscreen(index)}
                  className="text-white hover:text-gray-800 p-2 bg-gray-900 hover:bg-gray-300 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {isFullscreen && (
        <div className="z-20 fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black">
          <img
            src={`${appAddress + images[selectedImageIndex as number]}`}
            alt={`Fullscreen Image ${selectedImageIndex as number}`}
            className="max-h-full max-w-full"
          />
          {showPrev ? (
            <div className="absolute left-0">
              <button
                onClick={showPrevImage}
                className="text-white bg-gray-800 hover:bg-gray-600 p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
            </div>
          ) : (
            ""
          )}
          {showNext ? (
            <div className="absolute right-0">
              <button
                onClick={showNextImage}
                className="text-white bg-gray-800 hover:bg-gray-600 p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          ) : (
            ""
          )}
          <button
            onClick={closeFullscreen}
            className="absolute top-0 right-0 text-white p-4 bg-gray-800 hover:bg-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
