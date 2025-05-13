import "./designs/main.css"

 import Swiper from "./Swiper.jsx";
 import NewsCards from "./NewsCards.jsx";
 import BottomCards from "./BottomCards.jsx";
 import Leader from "./Leader.jsx";
import Links from "./Links.jsx";
import Deputates from "./Deputates.jsx";


function Main() {
    return (
        <div>
            <Swiper />
            <NewsCards />    
            <BottomCards /> 
            <Leader />        
            <Deputates/>           
            <Links/>
        </div>
    );
}

export default Main;