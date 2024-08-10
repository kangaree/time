// node generate-image-list.js

import fs from "fs";
import path from "path";

const directoryPath = path.join(process.cwd(), "public/times");
const outputPath = path.join(process.cwd(), "public/image-list.json");

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error("Unable to scan directory:", err);
    return;
  }

  // Filter for image files only
  const imageFiles = files.filter((file) =>
    /\.(jpg|jpeg|png|gif)$/i.test(file)
  );

  // Generate file paths
  const imagePaths = imageFiles.map((file) => `/times/${file}`);

  // Write JSON to file
  fs.writeFile(outputPath, JSON.stringify(imagePaths, null, 2), (err) => {
    if (err) {
      console.error("Error writing JSON file:", err);
    } else {
      console.log("Image list generated at", outputPath);
    }
  });
});
