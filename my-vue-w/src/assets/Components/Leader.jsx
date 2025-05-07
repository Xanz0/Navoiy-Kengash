import "./designs/leader.css"
import { FaTelegram, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";


const Leader = () => {
    return (
        <div className="leader">
            <div className="container">

                <div className="leader-wrapper">
        
                    <div className="lead-left">
                        <div className="leader-name"><h1>ALIYEV G‘OFIR QUVATOVICH</h1></div>
                        <div className="leader-title"><h3>Xalq deputatlari Navoiy viloyati Kengashi Raisi</h3></div>
                        <div className="leader-items">
                            <p>Ijtimoiy-tarmoqlar: </p>
                            <ul>
                                <li className="item-it"><a href="https://facebook.com"><FaFacebook /></a></li>
                                <li className="item-it"><a href="https://instagram.com"><FaInstagram/></a></li>
                                <li className="item-it"><a href="https://.com"><FaTelegram /></a></li>
                                <li className="item-it"><a href="https://twitter.com"><FaTwitter  /></a></li>
                                
                                
                            </ul>
                        </div>
                    </div>

                    <div className="lead-right">
                        <img src="https://uzlidep.uz/storage/uploads/regions/0XFfCgCV9F4FOYqXoLKtjJYn8F2RQ5zHdGnBHzkh.jpg" alt="Leader photo" width={368} height={340} />
                    </div>

                </div>
                
                
            </div>
            {/* Header content goes here */}
        </div>
    );
};

export default Leader;