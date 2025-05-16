import { useState } from "react";
import Mediateka from "./MediatekaCRUD";
import Tadbirlarimiz from "./Tadbirlarimiz";
import SenatorlarH from "./SenatorlarHududlarda"
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
          Mediateka
        </button>

        <button
          className="poster-change-font-01" 
          onClick={() => setActiveTab("parlament")}
          style={{ fontWeight: activeTab === "parlament" ? "bold" : "normal" }}
        >
          Tadbirlar qo'shish
        </button>

        <button
          className="poster-change-font-01" 
          onClick={() => setActiveTab("kengash")}
          style={{ fontWeight: activeTab === "kengash" ? "bold" : "normal" }}
        >
          Senatorlar hududlarda
        </button>
      </div>
      
      <div>
        {activeTab === "yalpi" && <Mediateka/>}
        {activeTab === "parlament" && <Tadbirlarimiz/>}
        {activeTab === "kengash" && <SenatorlarH/>}
      </div>
    </div>
  );
};

export default MeetingCRUD;