import { useState, useEffect } from "react";
import "../designDashbort/InformationCRUD.css";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;
const API_URL = `${API_BASE_URL}/api/Information/`;
const IMAGE_API_URL = `${API_BASE_URL}/api/Image/all`;
const ITEMS_PER_PAGE = 10;

const initialFormState = {
  titleUz: "",
  titleEn: "",
  titleRu: "",
  headerContentUz: "",
  headerContentEn: "",
  headerContentRu: "",
  mediumContentUz: "",
  mediumContentEn: "",
  mediumContentRu: "",
  footerContentUz: "",
  footerContentEn: "",
  footerContentRu: "",
  imageUrl: "",
};

const InformationCRUD = () => {
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState(initialFormState);
  const [editingItem, setEditingItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchData();
    fetchImages();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(API_URL);
      setData(res.data);
    } catch (err) {
      console.error("Error loading information:", err);
    }
  };

  const fetchImages = async () => {
    try {
      const res = await axios.get(IMAGE_API_URL);
      setImages(res.data);
    } catch (err) {
      console.error("Error loading images:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = async () => {
    try {
      const payload = {
        ...formData,
        imageUrl: parseInt(formData.imageUrl), // <- MUHIM: int tipiga o‘tkazish
      };

      await axios.post(API_URL, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      fetchData();
      setFormData(initialFormState);
      alert("Ma'lumot qo'shildi!");
    } catch (err) {
      console.error("Error adding information:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchData();
      alert("Ma'lumot o'chirildi!");
    } catch (err) {
      console.error("Error deleting information:", err);
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
  };

  const handleUpdate = async () => {
    try {
      const payload = {
        ...editingItem,
        imageUrl: parseInt(editingItem.imageUrl), // <- Shuningdek tahrirlashda ham
      };

      await axios.put(`${API_URL}${editingItem.id}`, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      fetchData();
      setEditingItem(null);
      alert("Ma'lumot yangilandi!");
    } catch (err) {
      console.error("Error updating information:", err);
    }
  };

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const paginatedData = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="container=999955">
      <h2 className="TITLE_01">Umumiy ma'lumot bilan ishlash</h2>

      <div className="form-info">
        <input
          className="title-info-01"
          name="titleUz"
          value={formData.titleUz}
          onChange={handleChange}
          placeholder="Sarlavha (Uz)"
        />
        <input
          className="title-info-01"
          name="titleEn"
          value={formData.titleEn}
          onChange={handleChange}
          placeholder="Sarlavha (En)"
        />
        <input
          className="title-info-01"
          name="titleRu"
          value={formData.titleRu}
          onChange={handleChange}
          placeholder="Sarlavha (Ru)"
        />

        <textarea
          className="header-info-01"
          name="headerContentUz"
          value={formData.headerContentUz}
          onChange={handleChange}
          placeholder="Header (Uz)"
        />
        <textarea
          className="header-info-01"
          name="headerContentEn"
          value={formData.headerContentEn}
          onChange={handleChange}
          placeholder="Header (En)"
        />
        <textarea
          className="header-info-01"
          name="headerContentRu"
          value={formData.headerContentRu}
          onChange={handleChange}
          placeholder="Header (Ru)"
        />

        <textarea
          className="header-info-01"
          name="mediumContentUz"
          value={formData.mediumContentUz}
          onChange={handleChange}
          placeholder="Medium (Uz)"
        />
        <textarea
          className="header-info-01"
          name="mediumContentEn"
          value={formData.mediumContentEn}
          onChange={handleChange}
          placeholder="Medium (En)"
        />
        <textarea
          className="header-info-01"
          name="mediumContentRu"
          value={formData.mediumContentRu}
          onChange={handleChange}
          placeholder="Medium (Ru)"
        />

        <textarea
          className="header-info-01"
          name="footerContentUz"
          value={formData.footerContentUz}
          onChange={handleChange}
          placeholder="Footer (Uz)"
        />
        <textarea
          className="header-info-01"
          name="footerContentEn"
          value={formData.footerContentEn}
          onChange={handleChange}
          placeholder="Footer (En)"
        />
        <textarea
          className="header-info-01"
          name="footerContentRu"
          value={formData.footerContentRu}
          onChange={handleChange}
          placeholder="Footer (Ru)"
        />

        <select
          className="select-img-01"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        >
          <option value="">Rasm tanlang</option>
          {images.map((img) => (
            <option key={img.id} value={img.id}>
              {img.imageName}
            </option>
          ))}
        </select>

        <button onClick={handleAdd}>Qo'shish</button>
      </div>

      <table className="info-table-01">
        <thead className="info-thead-01">
          <tr className="info-tr-01">
            <th>#</th>
            <th>Sarlavha (UZ)</th>
            <th>Header (UZ)</th>
            <th>Rasm</th>
            <th>Amallar</th>
          </tr>
        </thead>
        <tbody className="info-tbody-01">
          {paginatedData.map((item, idx) => (
            <tr className="paginatedData-w-01" key={item.id}>
              <td className="pag-info-01">
                {(currentPage - 1) * ITEMS_PER_PAGE + idx + 1}
              </td>
              <td className="pag-info-01">{item.titleUz}</td>
              <td className="pag-info-01">
                {item.headerContentUz.slice(0, 50)}...
              </td>
              <td className="pag-info-01">
                <img
                  className="img-info-01"
                  src={`${API_BASE_URL}/api/Image/${item.imageUrl}`}
                  alt="rasm"
                  width="50"
                />
              </td>
              <td className="pag-info-01">
                <button
                  className="p-info-w-01"
                  onClick={() => handleEdit(item)}
                >
                  Tahrirlash
                </button>
                <button
                  className="p-info-w-02"
                  onClick={() => handleDelete(item.id)}
                >
                  O'chirish
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {editingItem && (
        <div className="edit-form-01">
          <h3 className="edition-info-01">Tahrirlash</h3>

          {/* Sarlavhalar */}
          <div className="edit-form-group">
            <label>Sarlavha (UZ)</label>
            <input
              className="edit-form-input"
              name="titleUz"
              value={editingItem.titleUz}
              onChange={(e) =>
                setEditingItem({ ...editingItem, titleUz: e.target.value })
              }
            />
          </div>

          <div className="edit-form-group">
            <label>Sarlavha (EN)</label>
            <input
              className="edit-form-input"
              name="titleEn"
              value={editingItem.titleEn}
              onChange={(e) =>
                setEditingItem({ ...editingItem, titleEn: e.target.value })
              }
            />
          </div>

          <div className="edit-form-group">
            <label>Sarlavha (RU)</label>
            <input
              className="edit-form-input"
              name="titleRu"
              value={editingItem.titleRu}
              onChange={(e) =>
                setEditingItem({ ...editingItem, titleRu: e.target.value })
              }
            />
          </div>

          {/* Header content */}
          <div className="edit-form-group">
            <label>Header Content (UZ)</label>
            <textarea
              className="edit-form-textarea"
              name="headerContentUz"
              value={editingItem.headerContentUz}
              onChange={(e) =>
                setEditingItem({
                  ...editingItem,
                  headerContentUz: e.target.value,
                })
              }
            />
          </div>

          <div className="edit-form-group">
            <label>Header Content (EN)</label>
            <textarea
              className="edit-form-textarea"
              name="headerContentEn"
              value={editingItem.headerContentEn}
              onChange={(e) =>
                setEditingItem({
                  ...editingItem,
                  headerContentEn: e.target.value,
                })
              }
            />
          </div>

          <div className="edit-form-group">
            <label>Header Content (RU)</label>
            <textarea
              className="edit-form-textarea"
              name="headerContentRu"
              value={editingItem.headerContentRu}
              onChange={(e) =>
                setEditingItem({
                  ...editingItem,
                  headerContentRu: e.target.value,
                })
              }
            />
          </div>

          {/* Medium content */}
          <div className="edit-form-group">
            <label>Medium Content (UZ)</label>
            <textarea
              className="edit-form-textarea"
              name="mediumContentUz"
              value={editingItem.mediumContentUz}
              onChange={(e) =>
                setEditingItem({
                  ...editingItem,
                  mediumContentUz: e.target.value,
                })
              }
            />
          </div>

          <div className="edit-form-group">
            <label>Medium Content (EN)</label>
            <textarea
              className="edit-form-textarea"
              name="mediumContentEn"
              value={editingItem.mediumContentEn}
              onChange={(e) =>
                setEditingItem({
                  ...editingItem,
                  mediumContentEn: e.target.value,
                })
              }
            />
          </div>

          <div className="edit-form-group">
            <label>Medium Content (RU)</label>
            <textarea
              className="edit-form-textarea"
              name="mediumContentRu"
              value={editingItem.mediumContentRu}
              onChange={(e) =>
                setEditingItem({
                  ...editingItem,
                  mediumContentRu: e.target.value,
                })
              }
            />
          </div>

          {/* Footer content */}
          <div className="edit-form-group">
            <label>Footer Content (UZ)</label>
            <textarea
              className="edit-form-textarea"
              name="footerContentUz"
              value={editingItem.footerContentUz}
              onChange={(e) =>
                setEditingItem({
                  ...editingItem,
                  footerContentUz: e.target.value,
                })
              }
            />
          </div>

          <div className="edit-form-group">
            <label>Footer Content (EN)</label>
            <textarea
              className="edit-form-textarea"
              name="footerContentEn"
              value={editingItem.footerContentEn}
              onChange={(e) =>
                setEditingItem({
                  ...editingItem,
                  footerContentEn: e.target.value,
                })
              }
            />
          </div>

          <div className="edit-form-group">
            <label>Footer Content (RU)</label>
            <textarea
              className="edit-form-textarea"
              name="footerContentRu"
              value={editingItem.footerContentRu}
              onChange={(e) =>
                setEditingItem({
                  ...editingItem,
                  footerContentRu: e.target.value,
                })
              }
            />
          </div>

          {/* Rasm tanlash */}
          <div className="edit-form-group">
            <label>Rasm</label>
            <select
              className="edit-form-select"
              name="imageUrl"
              value={editingItem.imageUrl}
              onChange={(e) =>
                setEditingItem({ ...editingItem, imageUrl: e.target.value })
              }
            >
              <option value="">Rasm tanlang</option>
              {images.map((img) => (
                <option key={img.id} value={img.id}>
                  {img.imageName}
                </option>
              ))}
            </select>
          </div>

          <div className="edit-form-buttons">
            <button className="info-change-01" onClick={handleUpdate}>
              Saqlash
            </button>
            <button
              className="info-ignore-01"
              onClick={() => setEditingItem(null)}
            >
              Bekor qilish
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InformationCRUD;
