// import{ useState } from "react";
// // import NewsAllCRUD from "./NewsAllCRUD";
// // import PosterCRUD from "./PosterCRUD";
// import YalpiMajlislar from "./YalpiMajlislarCRUD";
// import ParlamentEshittiruvlari from "./ParlamentEshittiruvlariCRUD";
// import KengashMajlislari from "./KengashMajlislariCRUD";
// import "../designDashbort/NewsCRUD.css"

// const MeetingCRUD = () => {
//   const [activeTab, setActiveTab] = useState("news"); 
    
//   return (
//     <div>
//       <div className="news-font-01">

//         <button 
//         className="news-change-font-01"
//           onClick={() => setActiveTab("news")}
//           style={{ fontWeight: activeTab === "yalpi" ? "bold" : "normal" }}
//         >
//           Yalpi Majlislar qo'shish
//         </button>

//         <button
//           className="poster-change-font-01" 
//           onClick={() => setActiveTab("posters")}
//           style={{ fontWeight: activeTab === "parlament" ? "bold" : "normal" }}
//         >
//           Parlament eshittiruvlari qo'shish
//         </button>

//         <button
//           className="poster-change-font-01" 
//           onClick={() => setActiveTab("posters")}
//           style={{ fontWeight: activeTab === "kengash" ? "bold" : "normal" }}
//         >
//           Kengash majlislar qo'shish
//         </button>

//       </div>
      
//       <div>
//         {activeTab === "yalpi" ? <YalpiMajlislar/> : <ParlamentEshittiruvlari/>}
//       </div>
//     </div>
//   );
// };

// export default MeetingCRUD;



import { useState } from "react";
import YalpiMajlislar from "./YalpiMajlislarCRUD";
import ParlamentEshittiruvlari from "./ParlamentEshittiruvlariCRUD";
import KengashMajlislari from "./KengashMajlislariCRUD";
import "../designDashbort/NewsCRUD.css"

const MeetingCRUD = () => {
  const [activeTab, setActiveTab] = useState("yalpi"); 
    
  return (
    <div>
      <div className="news-font-01">
        <button 
          className="news-change-font-01"
          onClick={() => setActiveTab("yalpi")}
          style={{ fontWeight: activeTab === "yalpi" ? "bold" : "normal" }}
        >
          Yalpi Majlislar qo'shish
        </button>

        <button
          className="poster-change-font-01" 
          onClick={() => setActiveTab("parlament")}
          style={{ fontWeight: activeTab === "parlament" ? "bold" : "normal" }}
        >
          Parlament eshittiruvlari qo'shish
        </button>

        <button
          className="poster-change-font-01" 
          onClick={() => setActiveTab("kengash")}
          style={{ fontWeight: activeTab === "kengash" ? "bold" : "normal" }}
        >
          Kengash majlislar qo'shish
        </button>
      </div>
      
      <div>
        {activeTab === "yalpi" && <YalpiMajlislar/>}
        {activeTab === "parlament" && <ParlamentEshittiruvlari/>}
        {activeTab === "kengash" && <KengashMajlislari/>}
      </div>
    </div>
  );
};

export default MeetingCRUD;
