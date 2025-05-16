import './designs/deputates.css';


// const Deputates = () => {
//     return (
//         <div className='deputates'>

//             <div className='container'>
//                 <div className='dep-wrapper'>
//                     <img src="https://navoi.kasaba.uz/templates/uz/map/navoi.png" alt="The card of navoi region" className='nav-card'/>
//                     <div className='dep-list'>
//                         <div className='li-topper'>
//                             <h4 className='dep-title'>Deputatlar</h4>
//                             <p className='dep-tit'>Barchasi...</p>
                           
//                         </div>
//                         <span className='bbb'></span>
                        
//                         <ul className='dep-items'>
                            
//                             <li className='dep-li'>
//                                 <div className='dep-li-l'><img src="https://uzlidep.uz/storage/uploads/regions/0XFfCgCV9F4FOYqXoLKtjJYn8F2RQ5zHdGnBHzkh.jpg" alt="deputates-photo" height={104} /></div>
//                                 <div className='dep-li-r'>
//                                     <h5>Aliyev G‘ofir Quvatovich</h5>
//                                     <p>Xalq deputatlari Navoiy viloyati Kengashi Raisi</p>
//                                 </div>
//                             </li>
//                             {/* <br/> */}

//                             <li className='dep-li'>
//                                 <div className='dep-li-l'><img src="https://uzlidep.uz/storage/uploads/regions/0XFfCgCV9F4FOYqXoLKtjJYn8F2RQ5zHdGnBHzkh.jpg" alt="deputates-photo" height={104} /></div>
//                                 <div className='dep-li-r'>
//                                     <h5>Aliyev G‘ofir Quvatovich</h5>
//                                     <p>Xalq deputatlari Navoiy viloyati Kengashi Raisi</p>
//                                 </div>
//                             </li>
//                             {/* <br/> */}
//                             <li className='dep-li'>
//                                 <div className='dep-li-l'><img src="https://uzlidep.uz/storage/uploads/regions/0XFfCgCV9F4FOYqXoLKtjJYn8F2RQ5zHdGnBHzkh.jpg" alt="deputates-photo" height={104} /></div>
//                                 <div className='dep-li-r'>
//                                     <h5>Aliyev G‘ofir Quvatovich</h5>
//                                     <p>Xalq deputatlari Navoiy viloyati Kengashi Raisi</p>
//                                 </div>
//                             </li>
//                             {/* <br/> */}
//                             <li className='dep-li'>
//                                 <div className='dep-li-l'><img src="https://uzlidep.uz/storage/uploads/regions/0XFfCgCV9F4FOYqXoLKtjJYn8F2RQ5zHdGnBHzkh.jpg" alt="deputates-photo" height={104} /></div>
//                                 <div className='dep-li-r'>
//                                     <h5>Aliyev G‘ofir Quvatovich</h5>
//                                     <p>Xalq deputatlari Navoiy viloyati Kengashi Raisi</p>
//                                 </div>
//                             </li>

//                         </ul>
//                     </div>
//                 </div>
//             </div>
            
            
//         </div>
        
//     );
// }
// export default Deputates;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const API_URL = `${import.meta.env.VITE_API_URL}/api/Leader`;
const IMAGE_API_URL = `${import.meta.env.VITE_API_URL}/api/Image`;

const Deputates = () => {
    const [leaders, setLeaders] = useState([]);
    const { i18n } = useTranslation();
    const navigate = useNavigate();

    useEffect(() => {
        fetchLeaders();
    }, []);

    const fetchLeaders = async () => {
        try {
            const response = await axios.get(API_URL);
            setLeaders(response.data.slice(0, 4)); // faqat 4 ta deputat chiqarish
        } catch (error) {
            console.error("Error fetching leaders:", error);
        }
    };

    const getLocalizedField = (item, field) => {
        const lang = i18n.language || 'uz';
        const key = `${field}${lang.charAt(0).toUpperCase()}${lang.slice(1)}`;
        return item[key] || item[`${field}Uz`] || '';
    };

    return (
        <div className='deputates'>
            <div className='container'>
                <div className='dep-wrapper'>
                    <img
                        src="https://navoi.kasaba.uz/templates/uz/map/navoi.png"
                        alt="The card of navoi region"
                        className='nav-card'
                    />
                    <div className='dep-list'>
                        <div className='li-topper'>
                            <h4 className='dep-title'>{i18n.t('deputies')}</h4>
                            <p 
                              className='dep-tit' 
                              onClick={() => navigate('/deputatlar')}
                              style={{cursor: 'pointer', color: '#0d47a1'}}
                            >
                              {i18n.t('all')}
                            </p>
                        </div>
                        <span className='bbb'></span>
                        <ul className='dep-items'>
                            {leaders.map((leader) => (
                                <li
                                    key={leader.id}
                                    className='dep-li'
                                    onClick={() => navigate(`/deputat/${leader.id}`)}
                                    style={{cursor: 'pointer'}}
                                >
                                    <div className='dep-li-l'>
                                        <img
                                            src={`${IMAGE_API_URL}/${leader.imageId}`}
                                            alt={getLocalizedField(leader, 'fullName')}
                                            height={104}
                                            style={{objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className='dep-li-r'>
                                        <h5>{getLocalizedField(leader, 'fullName')}</h5>
                                        <p>{getLocalizedField(leader, 'position')}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deputates;
