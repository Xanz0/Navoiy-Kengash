import{ useState } from "react";
import NewsAllCRUD from "./NewsAllCRUD";
import PosterCRUD from "./PosterCRUD";
import "../designDashbort/NewsCRUD.css"

const NewsCRUD = () => {
  const [activeTab, setActiveTab] = useState("news"); 
    
  return (
    <div>
      <div className="news-font-01">
        <button 
        className="news-change-font-01"
          onClick={() => setActiveTab("news")}
          style={{ fontWeight: activeTab === "news" ? "bold" : "normal" }}
        >
          Yangiliklar bilan ishlash
        </button>
        <button
          className="poster-change-font-01" 
          onClick={() => setActiveTab("posters")}
          style={{ fontWeight: activeTab === "posters" ? "bold" : "normal" }}
        >
          E'lonlar bilan ishlash
        </button>
      </div>
      
      <div>
        {activeTab === "news" ? <NewsAllCRUD /> : <PosterCRUD />}
      </div>
    </div>
  );
};

export default NewsCRUD;
