import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../designDashbort/LeaderCRUD.css";
// import '../AllCSS/Leader.css';

const API_URL = `${import.meta.env.VITE_API_URL}/api/Leader/`;
const IMAGE_API_URL = `${import.meta.env.VITE_API_URL}/api/Image/all`;
const IMAGE_API_URL2 = `${import.meta.env.VITE_API_URL}/api/Image/`;

const ITEMS_PER_PAGE = 10;

const LeaderCRUD = () => {
    const [leaders, setLeaders] = useState([]);
    const [images, setImages] = useState([]);
    const [formData, setFormData] = useState({
        fullNameUz: '',
        fullNameEn: '',
        fullNameRu: '',
        positionUz: '',
        positionEn: '',
        positionRu: '',
        bioUz: '',
        bioEn: '',
        bioRu: '',
        imageId: '',
    });
    const [editingLeader, setEditingLeader] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const token = localStorage.getItem('token');

    useEffect(() => {
        fetchLeaders();
        fetchImages();
    }, []);

    const fetchLeaders = async () => {
        try {
            const response = await axios.get(API_URL);
            setLeaders(response.data);
        } catch (error) {
            console.error('Error fetching leaders:', error);
        }
    };

    const fetchImages = async () => {
        try {
            const response = await axios.get(IMAGE_API_URL);
            setImages(response.data);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const addLeader = async () => {
        try {
            await axios.post(API_URL, formData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            fetchLeaders();
            resetForm();
            alert('Leader qo\'shildi!');
        } catch (error) {
            console.error('Error adding leader:', error);
        }
    };

    const deleteLeader = async (id) => {
        try {
            await axios.delete(`${API_URL}${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            fetchLeaders();
            alert('Leader o\'chirildi!');
        } catch (error) {
            console.error('Error deleting leader:', error);
        }
    };

    const editLeader = (leader) => {
        setEditingLeader(leader);
    };

    const updateLeader = async () => {
        if (!editingLeader) return;
        try {
            await axios.put(`${API_URL}${editingLeader.id}`, editingLeader, {
                headers: { Authorization: `Bearer ${token}` },
            });
            fetchLeaders();
            setEditingLeader(null);
            alert('Leader yangilandi!');
        } catch (error) {
            console.error('Error updating leader:', error);
        }
    };

    const resetForm = () => {
        setFormData({
            fullNameUz: '',
            fullNameEn: '',
            fullNameRu: '',
            positionUz: '',
            positionEn: '',
            positionRu: '',
            bioUz: '',
            bioEn: '',
            bioRu: '',
            imageId: '',
        });
    };

    const totalPages = Math.ceil(leaders.length / ITEMS_PER_PAGE);
    const paginatedLeaders = leaders.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    return (
        <div className="leader-crud-container77788">
            <h2>Raxbar qo'shish</h2>
            <input
                className='leader-input_01'
                type="text"
                name="fullNameUz"
                placeholder="Ism (UZ)"
                value={formData.fullnameUz}
                onChange={handleChange}
            />
            <input
                className='leader-input_01'
                type="text"
                name="fullNameEn"
                placeholder="Ism (EN)"
                value={formData.fullnameEn}
                onChange={handleChange}
            />
            <input
                className='leader-input_01'
                type="text"
                name="fullNameRu"
                placeholder="Ism (RU)"
                value={formData.fullnameRu}
                onChange={handleChange}
            />
            <input
                className='leader-input_01'
                type="text"
                name="positionUz"
                placeholder="Lavozim (UZ)"
                value={formData.positionUz}
                onChange={handleChange}
            />
            <input
                className='leader-input_01'
                type="text"
                name="positionEn"
                placeholder="Lavozim (EN)"
                value={formData.positionEn}
                onChange={handleChange}
            />
            <input
                className='leader-input_01'
                type="text"
                name="positionRu"
                placeholder="Lavozim (RU)"
                value={formData.positionRu}
                onChange={handleChange}
            />
            <textarea
                className='leader_textarea_01'
                name="bioUz"
                placeholder="Bio (UZ)"
                value={formData.bioUz}
                onChange={handleChange}
            />
            <textarea
                className='leader_textarea_01'
                name="bioEn"
                placeholder="Bio (EN)"
                value={formData.bioEn}
                onChange={handleChange}
            />
            <textarea
                className='leader_textarea_01'
                name="bioRu"
                placeholder="Bio (RU)"
                value={formData.bioRu}
                onChange={handleChange}
            />

            <select
                className='leader-select-01'
                name="imageId"
                value={formData.LeaderImageId}
                onChange={handleChange}
            >
                <option value="">Rasm tanlang</option>
                {images.map((img) => (
                    <option key={img.id} value={img.id}>
                        {img.imageName}
                    </option>
                ))}
            </select>

            <button className='leader-add-01' onClick={addLeader}>Qo'shish</button>

            <table>
                <thead className='leader-show-01'>
                    <tr className='gggghhhh22222'>
                        <th>#</th>
                        <th>Ism (UZ)</th>
                        <th>Lavozim</th>
                        <th>Rasm</th>
                        <th>Amallar</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedLeaders.map((leader, index) => (
                        <tr key={leader.id}>
                            <td>
                                {(currentPage - 1) * ITEMS_PER_PAGE + index + 1}
                            </td>
                            <td>{leader.fullNameUz}</td>
                            <td>{leader.positionUz}</td>
                            <td>
                                <img
                                    className='img-leader-01'
                                    src={`${IMAGE_API_URL2}${leader.imageId}`}
                                    alt="Leader"
                                />
                            </td>
                            <td>
                                <button onClick={() => editLeader(leader)}>
                                    Tahrirlash
                                </button>
                                <button onClick={() => deleteLeader(leader.id)}>
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
                        className={currentPage === i + 1 ? 'active' : ''}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>

            {editingLeader && (
                <div className="edit-form">
                    <h3 className='edition-leader'>Tahrirlash</h3>
                    <input
                    className='edition-text-01'
                        type="text"
                        name="fullNameUz"
                        value={editingLeader.fullNameUz}
                        onChange={(e) =>
                            setEditingLeader({
                                ...editingLeader,
                                fullNameUz: e.target.value,
                            })
                        }
                    />
                    <input
                        className='edition-text-01'
                        type="text"
                        name="fullNameEn"
                        value={editingLeader.fullNameEn}
                        onChange={(e) =>
                            setEditingLeader({
                                ...editingLeader,
                                fullNameEn: e.target.value,
                            })
                        }
                    />
                    <input
                        className='edition-text-01'
                        type="text"
                        name="fullNameRu"
                        value={editingLeader.fullNameRu}
                        onChange={(e) =>
                            setEditingLeader({
                                ...editingLeader,
                                fullNameRu: e.target.value,
                            })
                        }
                    />
                    <input
                        className='edition-text-01' 
                        type="text"
                        name="positionUz"
                        value={editingLeader.positionUz}
                        onChange={(e) =>
                            setEditingLeader({
                                ...editingLeader,
                                positionUz: e.target.value,
                            })
                        }
                    />
                    <input
                        className='edition-text-01'
                        type="text"
                        name="positionEn"
                        value={editingLeader.positionEn}
                        onChange={(e) =>
                            setEditingLeader({
                                ...editingLeader,
                                positionEn: e.target.value,
                            })
                        }
                    />
                    <input
                        className='edition-text-01'
                        type="text"
                        name="positionRu"
                        value={editingLeader.positionRu}
                        onChange={(e) =>
                            setEditingLeader({
                                ...editingLeader,
                                positionRu: e.target.value,
                            })
                        }
                    />
                    <textarea
                        className='edition-textarea-01'
                        name="bioUz"
                        value={editingLeader.bioUz}
                        onChange={(e) =>
                            setEditingLeader({
                                ...editingLeader,
                                bioUz: e.target.value,
                            })
                        }
                    />
                    <textarea
                        className='edition-textarea-01'
                        name="bioEn"
                        value={editingLeader.bioEn}
                        onChange={(e) =>
                            setEditingLeader({
                                ...editingLeader,
                                bioEn: e.target.value,
                            })
                        }
                    />
                    <textarea
                        className='edition-textarea-01'
                        name="bioRu"
                        value={editingLeader.bioRu}
                        onChange={(e) =>
                            setEditingLeader({
                                ...editingLeader,
                                bioRu: e.target.value,
                            })
                        }
                    />
                    <select
                    className='select-leader-012'
                        name="imageId"
                        value={editingLeader.LeaderImageId}
                        onChange={(e) =>
                            setEditingLeader({
                                ...editingLeader,
                                LeaderImageId: e.target.value,
                            })
                        }
                    >
                        <option className='img-get-id' value="">Rasm tanlang</option>
                        {images.map((img) => (
                            <option key={img.id} value={img.id}>
                                {img.imageName}
                            </option>
                        ))}
                    </select>

                    <button className='change-leader-01' onClick={updateLeader}>Yangilash</button>
                    <button className='noChange-leader-01' onClick={() => setEditingLeader(null)}>Bekor qilish</button>
                </div>
            )}
        </div>
    );
};

export default LeaderCRUD;
