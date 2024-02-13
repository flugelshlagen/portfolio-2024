import React, { useState } from "react";
import { VscChevronRight, VscChevronLeft } from "react-icons/vsc";

const ImageCarousel = ({ images, text }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        /*set isFirstImage to current Index then compares to 0 to set bool value for isFirstImage*/
        const isFirstImage = currentIndex === 0;
        const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastImage = currentIndex === images.length - 1;
        const newIndex = isLastImage ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <>
            <div id="main" className="flex items-center justify-center"> 
                <button
                    onClick={goToPrevious}
                    className="p-4 bg-gray-200 rounded-l-lg hover:bg-gray-300 relative top-[45px]"
                >
                    <VscChevronLeft />
                </button>
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    className="object-cover object-center w-[70%] relative top-[60px] h-[60vh] "
                />
                <button
                    onClick={goToNext}
                    className="p-4 bg-gray-200 rounded-r-lg hover:bg-gray-300 relative top-[45px]"
                >
                    <VscChevronRight />
                </button>
            </div>
            <div className="flex justify-center items-center bg-white bg-opacity-50 w-[20%] h-[10vh] relative top-[60px] m-auto p-0 rounded-sm ">
                <span className="relative text-3xl font-semibold content-right font-honk min-w-[250px]">
                    {text[currentIndex]}
                </span>
            </div>
            <div className="flex justify-center items-center m-auto p-0 relative top-[70px] bg-gray-600 bg-opacity-50 w-[70%] h-[20vh]"></div>
        </>
    );
};

export default ImageCarousel;
