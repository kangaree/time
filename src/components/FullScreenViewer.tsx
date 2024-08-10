import React, { useEffect } from "react";

interface FullScreenViewerProps {
  image: string;
  images: string[];
  onClose: () => void;
}

const FullScreenViewer: React.FC<FullScreenViewerProps> = ({
  image,
  images,
  onClose,
}) => {
  const [currentImage, setCurrentImage] = React.useState(image);

  const currentIndex = images.indexOf(currentImage);

  const showPrevious = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentImage(images[prevIndex]);
  };

  const showNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
  };

  const showNextYear = () => {
    console.log("currentIndex", currentIndex, images[currentIndex]);
    const nextIndex = (currentIndex + 52) % images.length;
    console.log("nextIndex", nextIndex, images[nextIndex]);
    setCurrentImage(images[nextIndex]);
  };

  const showPreviousYear = () => {
    const prevIndex = (currentIndex - 52 + images.length) % images.length;
    setCurrentImage(images[prevIndex]);
  };

  // Handle keydown events for arrow keys
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        showPrevious();
      } else if (event.key === "ArrowRight") {
        showNext();
      } else if (event.key === "ArrowDown") {
        showNextYear();
      } else if (event.key === "ArrowUp") {
        showPreviousYear();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentImage, images]);

  return (
    <div className="fullscreen-viewer">
      <div className="selected-date">{`19${currentImage.slice(
        7,
        9
      )}-${currentImage.slice(9, 11)}-${currentImage.slice(11, 13)}`}</div>
      <button onClick={onClose} className="close-button">
        Close
      </button>
      <button onClick={showPrevious} className="nav-button">
        Previous
      </button>
      <img src={currentImage} alt="Full view" className="fullscreen-image" />
      <button onClick={showNext} className="nav-button">
        Next
      </button>
    </div>
  );
};

export default FullScreenViewer;
