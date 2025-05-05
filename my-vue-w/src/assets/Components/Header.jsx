import "./designs/header.css";
import { FaTelegram, FaInstagram, FaFacebook } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { GiSunglasses } from "react-icons/gi";
import { LuNotebookPen } from "react-icons/lu";
import { RiTranslate2 } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import { GiMagnifyingGlass } from "react-icons/gi";
import { FaChevronDown } from "react-icons/fa";


var currentdate = new Date();
var date =
  currentdate.getDate() +
  "/" +
  (currentdate.getMonth() + 1) +
  "/" +
  currentdate.getFullYear();
var time = currentdate.getHours() + ":" + currentdate.getMinutes();
const Header = () => {
  return (
    <header class="header">
      <div className="head"> 
      <div class="container">
        <div class="wrapper">
          <div class="wrapper-top">
            <div className="top-left">
              <div className="left-l"> {time}</div>
              <div className="left-r">{date} </div>
            </div>
            <div className="top-mid">
              <span className="dd">
                <svg
                  data-slot="icon"
                  fill="none"
                  stroke-width="1.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                  ></path>
                </svg>
              </span>
              <p>Sayt test rejimida ishlamoqda</p>
            </div>
            <div className="top-right">
              <p className="right-desc">Biz ijtimoiy tarmoqlarda</p>
              <ul className="right-icons">
                <a className="ic1" href="https://senat.uz/"><li className="icons-item"><FaFacebook/></li></a>
                <a className="ic2" href="https://senat.uz/"><li className="icons-item"><FaTelegram /></li></a>
                <a className="ic3" href="https://senat.uz/"><li className="icons-item"><FaInstagram/></li></a>
                <a className="ic4" href="https://senat.uz/"><li className="icons-item"><AiOutlineYoutube/></li></a>
              </ul>
            </div>
          </div>
          <div class="wrapper-middle">
            <div className="m-t">
            <div className="middle-left">
                <img src="https://web.archive.org/web/20121102102633/http://upload.wikimedia.org/wikipedia/commons/5/5d/Coat_of_Arms_of_Uzbekistan.svg" alt="uzb.gerb" />
                <h3>Xalq deputatlari navoiy viloyat kengashi</h3>
                </div>
                <div className="middle-right">
                    <div className="right-r1"><GiSunglasses color="#003087"/></div>
                    <div className="right-r2">
                    <LuNotebookPen color="#003087"/>
                    <p>Qabulga yozilish</p>
                    </div>
                    <div className="right-r3">
                      <RiTranslate2 color="#003087;"/>
                      <p>O'zbekcha</p>
                    </div>
                    <div className="right-r4">
                      <button className="right-btn">
                      <IoMdPerson color="#00308"/>
                      <p>Kirish</p>
                      </button>
                    </div>
                </div>
            </div>
                
                


          </div>
          <div class="wrapper-nav">
            <div className="nav-left">
              <ul className="nav-ul">
                <li><p>Senat</p><FaChevronDown/></li>
                <li><p>Hujjatlar</p><FaChevronDown/></li>
                <li><p>Yalpi Majlislar</p><FaChevronDown/></li>
                <li><p>Kengash majlislari</p><FaChevronDown/></li>
                <li><p>Tadbirlar</p><FaChevronDown/></li>
                <li><p>Nazorat-tahlil faoliyati</p><FaChevronDown/></li>
              </ul>
              </div>
            <div className="nav-right">
            <input type="text" name="search" required placeholder="Izlash..."/>
              <GiMagnifyingGlass/>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </header>
  );
};
export default Header;
