import "./designs/main.css"

 import Swiper from "./Swiper.jsx";
 import NewsCards from "./NewsCards.jsx";
 import BottomCards from "./BottomCards.jsx";


function Main() {
    return (
        <div>
            <Swiper />

            <NewsCards />
            
            
            <BottomCards /> 
        </div>
    );
}

export default Main;