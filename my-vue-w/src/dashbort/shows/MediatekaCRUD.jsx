import { useState, useEffect } from 'react';
import axios from 'axios';
import "../designDashbort/NewsAllCRUD.css"

const API_BASE_URL = import.meta.env.VITE_API_URL;
const API_URL = `${API_BASE_URL}/api/News/mediateka/`;
const IMAGE_API_URL = `${API_BASE_URL}/api/Image/all`;
const INFORMATION_API_URL = `${API_BASE_URL}/api/Information`;
const ITEMS_PER_PAGE = 10;

const NewsCRUD = () => {
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);
  const [informations, setInformations] = useState([]);
  const [formData, setFormData] = useState({
    titleUz: '',
    titleEn: '',
    titleRu: '',
    descriptionUz: '',
    descriptionEn: '',
    descriptionRu: '',
    imageUrl: [],
    informationId: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchData();
    fetchImages();
    fetchInformations();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(API_URL);
      setData(res.data);
    } catch (err) {
      console.error('Error loading news:', err);
    }
  };

  const fetchImages = async () => {
    try {
      const res = await axios.get(IMAGE_API_URL);
      setImages(res.data);
    } catch (err) {
      console.error('Error loading images:', err);
    }
  };

  const fetchInformations = async () => {
    try {
      const res = await axios.get(INFORMATION_API_URL);
      setInformations(res.data);
    } catch (err) {
      console.error('Error loading informations:', err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageToggle = (id) => {
    setFormData((prev) => ({
      ...prev,
      imageUrl: prev.imageUrl.includes(id)
        ? prev.imageUrl.filter((imgId) => imgId !== id)
        : [...prev.imageUrl, id],
    }));
  };

  const handleAdd = async () => {
    try {
      await axios.post(API_URL, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchData();
      alert("Yangilik qo'shildi!");
      setFormData({
        titleUz: '',
        titleEn: '',
        titleRu: '',
        descriptionUz: '',
        descriptionEn: '',
        descriptionRu: '',
        imageUrl: [],
        informationId: '',
      });
    } catch (err) {
      console.error('Error adding news:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchData();
      alert("Yangilik o'chirildi!");
    } catch (err) {
      console.error('Error deleting news:', err);
    }
  };

  const paginatedData = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  return (
    <div className="container-newsAllCRUd">
      <h2 className='title-news-h1'>Mediateka</h2>
      <div className="form-news-01">
        <input className='title-news-01' name="titleUz" value={formData.titleUz} onChange={handleChange} placeholder="Sarlavha (Uz)" />
        <input className='title-news-01' name="titleEn" value={formData.titleEn} onChange={handleChange} placeholder="Sarlavha (En)" />
        <input className='title-news-01' name="titleRu" value={formData.titleRu} onChange={handleChange} placeholder="Sarlavha (Ru)" />
        <textarea className='teaxt-area-news-01' name="descriptionUz" value={formData.descriptionUz} onChange={handleChange} placeholder="Tavsif (Uz)" />
        <textarea className='teaxt-area-news-01' name="descriptionEn" value={formData.descriptionEn} onChange={handleChange} placeholder="Tavsif (En)" />
        <textarea className='teaxt-area-news-01' name="descriptionRu" value={formData.descriptionRu} onChange={handleChange} placeholder="Tavsif (Ru)" />

        <div className='image-selector'>
          <p>Rasmlarni tanlang:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {images.map((img) => {
              const selected = formData.imageUrl.includes(img.id);
              return (
                <div
                  key={img.id}
                  onClick={() => handleImageToggle(img.id)}
                  style={{
                    border: selected ? '3px solid blue' : '1px solid gray',
                    padding: '3px',
                    cursor: 'pointer',
                  }}
                >
                  <img
                    src={`${API_BASE_URL}/api/Image/${img.id}`}
                    alt={img.imageName}
                    width={80}
                    height={80}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <select className='select-news-02' name="informationId" value={formData.informationId} onChange={handleChange}>
          <option value="">Ma'lumot tanlang</option>
          {informations.map((info) => (
            <option key={info.id} value={info.id}>{info.titleUz}</option>
          ))}
        </select>

        <button className='button-news-add-01' onClick={handleAdd}>Qo'shish</button>
      </div>

      <table className='news-table-01'>
        <thead className='news-table-02'>
          <tr className='news-tr-01'>
            <th>#</th>
            <th>Sarlavha (UZ)</th>
            <th>Tavsif (UZ)</th>
            <th>Rasmlar</th>
            <th>Amallar</th>
          </tr>
        </thead>
        <tbody className='news-tbody-01'>
          {paginatedData.map((item, idx) => (
            <tr className='key-01-news' key={item.id}>
              <td className='news-td-01'>{(currentPage - 1) * ITEMS_PER_PAGE + idx + 1}</td>
              <td className='news-td-01'>{item.titleUz}</td>
              <td className='news-td-01'>{item.descriptionUz.slice(0, 50)}...</td>
              <td className='news-td-01'>
                {item.imageUrl.map((imgId) => (
                  <img key={imgId} src={`${API_BASE_URL}/api/Image/${imgId}`} alt="rasm" width="50" style={{ marginRight: '5px' }} />
                ))}
              </td>
              <td className='news-td-01'>
                <button className='news-delete-01' onClick={() => handleDelete(item.id)}>O'chirish</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination-news-01">
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => setCurrentPage(i + 1)} className={currentPage === i + 1 ? 'active' : ''}>{i + 1}</button>
        ))}
      </div>
    </div>
  );
};

export default NewsCRUD;
