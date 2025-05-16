// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { useTranslation } from "react-i18next";
// import "./AllRootRoutesF/DeputatDetails.css";

// const API_BASE_URL = import.meta.env.VITE_API_URL;
// const API_URL = `${API_BASE_URL}/api/Leader`;
// const IMAGE_API_URL = `${API_BASE_URL}/api/Image`;

// const DeputatDetails = () => {
//   const { id } = useParams();
//   const [leader, setLeader] = useState(null);
//   const { i18n } = useTranslation();

//   useEffect(() => {
//     fetchLeader();
//   }, [id]);

//   const fetchLeader = async () => {
//     try {
//       const response = await axios.get(`${API_URL}/${id}`);
//       setLeader(response.data);
//     } catch (error) {
//       console.error("Error fetching leader:", error);
//     }
//   };

//   const getLocalizedField = (field) => {
//     const lang = i18n.language || "uz";
//     const key = `${field}${lang.charAt(0).toUpperCase()}${lang.slice(1)}`;
//     return leader?.[key] || "";
//   };

//   if (!leader) return <p>Yuklanmoqda...</p>;

//   return (
//     <div className="look-deputat-details-01">
//       <div className="block-deputat-01">
//         <img
//           src={`${IMAGE_API_URL}/${leader.imageId}`}
//           alt={getLocalizedField("fullName")}
//           className="img-deputat-01"
//         />
//         <div className="deputat-info-container">
//           <h2 className="text-deputat-01">{getLocalizedField("fullName")}</h2>
//           <p className="text-deputat-02">{getLocalizedField("position")}</p>
//           <p className="text-deputat-03">{getLocalizedField("bio")}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeputatDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import "./AllRootRoutesF/DeputatDetails.css";

const API_BASE_URL = import.meta.env.VITE_API_URL;
const API_URL = `${API_BASE_URL}/api/Leader`;
const IMAGE_API_URL = `${API_BASE_URL}/api/Image`;

const DeputatDetails = () => {
  const { id } = useParams();
  const [leader, setLeader] = useState(null);
  const { i18n, t } = useTranslation(); // t qo‘shildi

  useEffect(() => {
    fetchLeader();
  }, [id]);

  const fetchLeader = async () => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      setLeader(response.data);
    } catch (error) {
      console.error("Error fetching leader:", error);
    }
  };

  const getLocalizedField = (field) => {
    const lang = i18n.language || "uz";
    const key = `${field}${lang.charAt(0).toUpperCase()}${lang.slice(1)}`;
    return leader?.[key] || "";
  };

  if (!leader) return <p>Yuklanmoqda...</p>;

  return (
    <div className="look-deputat-details-01">
      <div className="block-deputat-01">
        <img
          src={`${IMAGE_API_URL}/${leader.imageId}`}
          alt={getLocalizedField("fullName")}
          className="img-deputat-01"
        />
        <div className="deputat-info-container">
          <h2 className="text-deputat-01">{getLocalizedField("fullName")}</h2>
          <div className="text-dep-block-001">
            <p className="text-deputat-02">
              <strong>{t("position")}: </strong>
              {getLocalizedField("position")}
            </p>
            <p className="text-deputat-03">
              <strong>{t("bio")}: </strong>
              {getLocalizedField("bio")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeputatDetails;
