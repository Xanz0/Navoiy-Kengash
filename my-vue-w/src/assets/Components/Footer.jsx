import "./designs/footer.css";
import { FaTelegram, FaInstagram, FaFacebook } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const Footer=()=>{
    return (
        <>
        <footer>
            <div className="footer">
                <div className="footer-wrapper">
                <div className="container">
                    <div className="wrap">
                    <div className="footer-top">
                    <div className="footer-top-left">
                        <img src="https://web.archive.org/web/20121102102633/http://upload.wikimedia.org/wikipedia/commons/5/5d/Coat_of_Arms_of_Uzbekistan.svg" alt="uzb.gerb" width={70} />
                        <h3>Xalq deputatlari navoiy viloyai kengashi</h3>
                    </div>
                    <div className="footer-top-right">
                                  <p className="right-desc2">Biz ijtimoiy tarmoqlarda</p>
                                  <ul className="right-icons2">
                                    <a className="ic11" href="https://senat.uz/"><li className="icons-item2"><FaFacebook /></li></a>
                                    <a className="ic22" href="https://senat.uz/"><li className="icons-item2"><FaTelegram /></li></a>
                                    <a className="ic33" href="https://senat.uz/"><li className="icons-item2"><FaInstagram /></li></a>
                                    <a className="ic44" href="https://senat.uz/"><li className="icons-item2"><AiOutlineYoutube /></li></a>
                                  </ul>
                                </div>
                       
                    </div>
                    </div>
                    
                    <div className="footer-bottom">
                        <ul className="footer-bottom-des">
                            <li className="bottom-item">
                                <ul className="item-li">
                                    <li className="bottom-desc"><p>Yalpi Majlislar</p></li>
                                    <li className="bottom-desc"><p>Yangi tashabbuslar</p></li>
                                    <li className="bottom-desc"><p>So'rovnomalar</p></li>
                                </ul>
                            </li>


                        <li className="bottom-item">
                            <ul className="item-li">
                                <li className="bottom-desc"><p> Kengash majlislari</p></li>
                                <li className="bottom-desc"><p>Yoshlar Parlamenti</p></li>
                            </ul>
                        </li>


                        <li className="bottom-item">
                            <ul >
                                <li className="list-in">
                                    <div className="bottom-desc2">
                                        <p><FaPhoneVolume/> Idora</p>
                                        <p>(78)238-2638</p>
                                        </div>                                
                                </li>
                                <li className="list-in">
                                <div className="bottom-desc2">
                                        <p><FaPhoneVolume/> Fuqarolar murojaatlari uchun</p>
                                        <p>(78)238-2804, (78)238-2645</p>

                                    </div>
                                </li>
                                    
                                <li className="list-in">
                                    <div className="bottom-desc2">
                                        <p><FaLocationDot/> Manzil</p>
                                        <p>Navoiy shahar, Islom Karimov ko'chasi, 77-uy</p>

                                    </div>  

                                </li>
                            </ul>
                        </li>


                        </ul>
                        
                    </div>
                    

                </div>
                </div>
                
                
            </div>
            
        </footer>
        
        </>
        
    );
}
export default Footer;