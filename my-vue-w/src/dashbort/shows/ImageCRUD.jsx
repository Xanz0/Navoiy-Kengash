import React, { useEffect, useState } from "react";
import "../designDashbort/ImageCRUD.css";

const API_URL = `${import.meta.env.VITE_API_URL}/api/Image/`;
const ITEMS_PER_PAGE = 10;
const ImageCRUD = () => {
  const [images, setImages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchImages();
  }, []);

  // Barcha rasmlarni olish
  const fetchImages = async () => {
    try {
      const response = await fetch(`${API_URL}all`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  // Fayl tanlash
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Fayl yuklash
  const uploadImage = async () => {
    if (!selectedFile) {
      alert("Iltimos, fayl tanlang!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch(`${API_URL}upload`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` }, // Agar authentication kerak bo'lsa
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      setSelectedFile(null);
      fetchImages(); // Yangilash
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  // Rasm o'chirish
  const deleteImage = async (id) => {
    try {
      const response = await fetch(`${API_URL}${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      fetchImages(); // O'chirgandan so'ng yangilash
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);
  const paginatedImages = images.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="image-crud-container">
      <h2>Image CRUD App</h2>

      {/* Upload qismi */}
      <div className="upload-section">
        <input type="file" onChange={handleFileChange} />
        <button className="upload-btn" onClick={uploadImage}>
          Upload
        </button>
      </div>

      {/* Jadval qismi */}
      <table className="image-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Image Id</th>
            <th>Image Name</th>
            <th>Created Time</th>
            <th>Preview</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedImages.map((image, index) => (
            <tr key={image.id}>
              <td>{(currentPage - 1) * ITEMS_PER_PAGE + index + 1}</td>
              <td>{image.id}</td>
              <td>{image.imageName}</td>
              <td>{new Date(image.createTime).toLocaleString()}</td>
              <td>
                <img
                  src={`${API_URL}${image.id}`}
                  alt={image.imageName}
                  className="thumbnail"
                />
              </td>
              <td>
                <button
                  className="view-btn"
                  onClick={() => window.open(`${API_URL}${image.id}`, "_blank")}
                >
                  View
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteImage(image.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
export default ImageCRUD;
