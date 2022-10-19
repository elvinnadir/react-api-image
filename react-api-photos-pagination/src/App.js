import React, { useState, useEffect } from "react";
import axios from "axios";
import Photos from "./components/Photos/Photos";
import Pagination from "./components/Pagination/Pagination";
import "./App.css";
export default function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [photoPerPage, setPhotoPerPage] = useState(10);

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setPhotos(response.data);
      setLoading(false);
    };
    fetchPhotos();
  }, []);

  const lastPhotoIndex = currentPage * photoPerPage;
  const firstPhotoIndex = lastPhotoIndex - photoPerPage;
  const currentPhoto = photos.slice(firstPhotoIndex, lastPhotoIndex);

  return (
    <div className="App">
      <h1>Photos from API</h1>
      <Photos photos={currentPhoto} loading={loading} />
      <Pagination
        photoPerPage={photoPerPage}
        totalPhotos={photos.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}
