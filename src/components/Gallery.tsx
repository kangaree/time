import React, { useState } from "react";
import FullScreenViewer from "./FullScreenViewer";

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleCloseViewer = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            loading="lazy"
            alt={`Gallery item ${index}`}
            onClick={() => handleImageClick(image)}
            className="gallery-image"
          />
        ))}
      </div>
      {selectedImage && (
        <FullScreenViewer images={images} image={selectedImage} onClose={handleCloseViewer} />
      )}
    </div>
  );
};

export default Gallery;
