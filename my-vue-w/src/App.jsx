import { useState } from "react";
import Footer from "./assets/Components/Footer";
import Header from "./assets/Components/Header";
import Main from "./assets/Components/Main";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Advertisements from "./AllRootRoutes/Advertisements";
import Analyses from "./AllRootRoutes/Analyses";
import CouncilMeetings from "./AllRootRoutes/CouncilMeetings";
import Deecrees from "./AllRootRoutes/Decrees";
import History from "./AllRootRoutes/History";
import Laws from "./AllRootRoutes/Laws";
import Leaders from "./AllRootRoutes/Leaders";
import Mediateka from "./AllRootRoutes/Mediateka";
import News from "./AllRootRoutes/News";
import OurEvents from "./AllRootRoutes/OurEvents";
import ParliamentaryHearing from "./AllRootRoutes/ParliamentaryHearings";
import PlenaryMeetings from "./AllRootRoutes/PlenaryMeetings";
import Reports from "./AllRootRoutes/Reports";
import SenatorsInTheRegions from "./AllRootRoutes/SenatorsInTheRegions";
import Structure from "./AllRootRoutes/Structure";
import StudyOfTheImplementationOfLegalDocument from "./AllRootRoutes/StudyOfTheImplementationOfLegalDocuments";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="main-root-01">
                <Main/>
              </div>
            }
          />

          <Route path="/raxbarlar" element={<Leaders/>} />
          <Route path="/tuzilma" element={<Structure/>} />
          <Route path="/history" element={<History/>} />


          <Route path="/qonunlar" element={<Laws/>} />
          <Route path="/farmonlar" element={<Deecrees/>} />
          <Route path="/qonun-hujjatlari-ijrosini-o'rganish" element={<StudyOfTheImplementationOfLegalDocument/>} />

          <Route path="/yalpi-majlislar" element={<PlenaryMeetings/>} />
          <Route path="/parlament-eshituvlari" element={<ParliamentaryHearing/>} />
          <Route path="/kengash-majlislari" element={<CouncilMeetings/>} />

          <Route path="/mediateka" element={<Mediateka/>} />
          <Route path="/tadbirlarimiz" element={<OurEvents/>} />
          <Route path="/Senatorlar-hududlarda" element={<SenatorsInTheRegions/>} />

          <Route path="/yangiliklar" element={<News/>} />
          <Route path="/podology" element={<Advertisements/>} />


          <Route path="/hisobotlar" element={<Reports/>} />
          <Route path="/physiotherapy" element={<Analyses/>} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
