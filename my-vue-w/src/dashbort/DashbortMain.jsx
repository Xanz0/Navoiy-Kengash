import { useState } from "react";
import "./designDashbort/DashbortMain.css";

import CustomerCRUD from "./shows/CustomerCRUD";
import EventCRUD from "./shows/EventCRUD";
import ImageCRUD from "./shows/ImageCRUD";
import LawsCRUD from "./shows/LawsCRUD";
import LeaderCRUD from "./shows/LeaderCRUD";
import MeetingCRUD from "./shows/MeetingCRUD";
import NewsCRUD from "./shows/NewsCRUD";
import InformationCRUD from "./shows/InformationCRUD";

import CustomerF from "./shows/CustomerF";
import EventF from "./shows/EventF";
import ImageF from "./shows/ImageF";
import LawsF from "./shows/LawsF";
import LeaderF from "./shows/LeaderF";
import MeetingF from "./shows/MeetingsF";
import NewsF from "./shows/NewsF";
import InformationF from "./shows/InformationF";

const DashbortMain = () => {
    const [currentView, setCurrentView] = useState(null);

    const menuItems = [
        { label: <CustomerF />, component: <CustomerCRUD /> },
        { label: <EventF />, component: <EventCRUD /> },
        { label: <ImageF />, component: <ImageCRUD /> },
        { label: <LawsF />, component: <LawsCRUD /> },
        { label: <LeaderF />, component: <LeaderCRUD /> },
        { label: <MeetingF />, component: <MeetingCRUD /> },
        { label: <NewsF />, component: <NewsCRUD /> },
        { label: <InformationF />, component: <InformationCRUD/> },
    ];

    return (
        <div className="App-header-221111">
            <nav className="nav-all122222">
                <ul className="tartib-0099933">
                    {menuItems.map((item, index) => (
                        <li className="crud-122333" key={index}>
                            {item.label}
                            <button
                                className="crud-all99999"
                                onClick={() => setCurrentView(item.component)}
                            >
                                O'zgartirish
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="content-view2">
                {currentView}
            </div>
        </div>
    );
};

export default DashbortMain;
