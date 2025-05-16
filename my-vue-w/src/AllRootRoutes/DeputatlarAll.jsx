import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_URL;
const API_URL = `${API_BASE_URL}/api/Leader`;
const IMAGE_API_URL = `${API_BASE_URL}/api/Image`;
const ITEMS_PER_PAGE = 4;

const DeputatlarBarchasi = () => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const [leaders, setLeaders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetchLeaders();
    }, []);

    const fetchLeaders = async () => {
        try {
            const response = await axios.get(API_URL);
            setLeaders(response.data);
        } catch (error) {
            console.error("Error fetching leaders:", error);
        }
    };

    const getLocalizedField = (item, field) => {
        const lang = i18n.language || 'uz';
        const key = `${field}${lang.charAt(0).toUpperCase()}${lang.slice(1)}`;
        return item[key] || item[`${field}Uz`] || '';
    };

    const paginatedLeaders = leaders.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const totalPages = Math.ceil(leaders.length / ITEMS_PER_PAGE);

    return (
        <div className="deputat-all-01">
            <h2 className="all-block-deputat-01">{i18n.t('deputies') || 'Deputatlar'}</h2>
            <div className="space-all-01">
                {paginatedLeaders.map((leader) => (
                    <div
                        key={leader.id}
                        className="root-all-d-01"
                        onClick={() => navigate(`/deputat/${leader.id}`)}
                    >
                        <img
                            src={`${IMAGE_API_URL}/${leader.imageId}`}
                            alt={getLocalizedField(leader, 'fullName')}
                            className="img-all-dep-01"
                        />
                        <div>
                            <h3 className="text-fullname-01">
                                {getLocalizedField(leader, 'fullName')}
                            </h3>
                            <p className="text-position-01">
                                {getLocalizedField(leader, 'position')}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="text-all-dep-pagination-01">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-3 py-1 border rounded ${
                            currentPage === index + 1
                                ? 'bg-blue-500 text-white'
                                : 'bg-white text-black'
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DeputatlarBarchasi;
