import "./designs/main.css"

 import Swiper from "./Swiper.jsx";
 import NewsCards from "./NewsCards.jsx";
 import BottomCards from "./BottomCards.jsx";
 import Leader from "./Leader.jsx";


function Main() {
    return (
        <div>
            <Swiper />

            <NewsCards />
            
            
            <BottomCards /> 
            <Leader />
        </div>
    );
}

export default Main;