// import React, { useEffect, useState } from "react";
// import "./designs/header.css";
// import { FaTelegram, FaInstagram, FaFacebook } from "react-icons/fa";
// import { AiOutlineYoutube } from "react-icons/ai";
// import { GiSunglasses, GiMagnifyingGlass } from "react-icons/gi";
// import { LuNotebookPen } from "react-icons/lu";
// import { RiTranslate2 } from "react-icons/ri";
// import { IoMdPerson } from "react-icons/io";
// import { FaChevronDown } from "react-icons/fa";

// const Header = () => {
//   const [textSize, setTextSize] = useState(100);
//   const [isDarkMode, setDarkMode] = useState(false);
//   const [isHighContrast, setHighContrast] = useState(false);
//   const [showAccessibility, setShowAccessibility] = useState(false);

//   const currentdate = new Date();
//   const date =
//     currentdate.getDate() +
//     "/" +
//     (currentdate.getMonth() + 1) +
//     "/" +
//     currentdate.getFullYear();
//   const time = currentdate.getHours() + ":" + currentdate.getMinutes();

//   useEffect(() => {
//     document.documentElement.style.fontSize = `${textSize}%`;

//     // Dark mode and high contrast toggling
//     document.body.classList.toggle("dark-mode", isDarkMode);
//     document.body.classList.toggle("high-contrast", isHighContrast);
//   }, [textSize, isDarkMode, isHighContrast]);

//   const resetAccessibility = () => {
//     setTextSize(100);
//     setDarkMode(false);
//     setHighContrast(false);
//   };

//   return (
//     <header className="header">
//       <div className="head">
//         <div className="container">
//           <div className="wrapper">
//             <div className="wrapper-top">
//               <div className="top-left">
//                 <div className="left-l">{time}</div>
//                 <div className="left-r">{date}</div>
//               </div>
//               <div className="top-mid">
//                 <span className="dd">
//                   <svg
//                     fill="none"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
//                     ></path>
//                   </svg>
//                 </span>
//                 <p>Sayt test rejimida ishlamoqda</p>
//               </div>
//               <div className="top-right">
//                 <p className="right-desc">Biz ijtimoiy tarmoqlarda</p>
//                 <ul className="right-icons">
//                   <a className="ic1" href="https://senat.uz/">
//                     <li className="icons-item"><FaFacebook /></li>
//                   </a>
//                   <a className="ic2" href="https://senat.uz/">
//                     <li className="icons-item"><FaTelegram /></li>
//                   </a>
//                   <a className="ic3" href="https://senat.uz/">
//                     <li className="icons-item"><FaInstagram /></li>
//                   </a>
//                   <a className="ic4" href="https://senat.uz/">
//                     <li className="icons-item"><AiOutlineYoutube /></li>
//                   </a>
//                 </ul>
//               </div>
//             </div>

//             <div className="wrapper-middle">
//               <div className="m-t">
//                 <div className="middle-left">
//                   <img
//                     src="https://web.archive.org/web/20121102102633/http://upload.wikimedia.org/wikipedia/commons/5/5d/Coat_of_Arms_of_Uzbekistan.svg"
//                     alt="uzb.gerb"
//                   />
//                   <h3>Xalq deputatlari navoiy viloyati kengashi</h3>
//                 </div>

//                 <div className="middle-right">
//                   <div className="right-r1" style={{ position: "relative" }}>
//                     <GiSunglasses color="#003087" size={24} onClick={() => setShowAccessibility(!showAccessibility)} />
                    
//                     {showAccessibility && (
//                       <div className="accessibility-menu">
//                         <button onClick={() => setTextSize((s) => s + 10)}>A+</button>
//                         <button onClick={() => setTextSize((s) => Math.max(50, s - 10))}>A-</button>
//                         <button onClick={() => setDarkMode((v) => !v)}>🌙 Tungi rejim</button>
//                         <button onClick={() => setHighContrast((v) => !v)}>⚫ Oq-Qora</button>
//                         <button onClick={resetAccessibility}>♻️ Asl holat</button>
//                       </div>
//                     )}
//                   </div>

//                   <div className="right-r2">
//                     <LuNotebookPen color="#003087" />
//                     <p>Qabulga yozilish</p>
//                   </div>
//                   <div className="right-r3">
//                     <RiTranslate2 color="#003087" />
//                     <p>O'zbekcha</p>
//                   </div>
//                   <div className="right-r4">
//                     <button className="right-btn">
//                       <IoMdPerson color="#00308" />
//                       <p>Kirish</p>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="wrapper-nav">
//               <div className="nav-left">
//                 <ul className="nav-ul">
//                   <li><p>Senat</p><FaChevronDown /></li>
//                   <li><p>Hujjatlar</p><FaChevronDown /></li>
//                   <li><p>Yalpi Majlislar</p><FaChevronDown /></li>
//                   <li><p>Kengash majlislari</p><FaChevronDown /></li>
//                   <li><p>Tadbirlar</p><FaChevronDown /></li>
//                   <li><p>Nazorat-tahlil faoliyati</p><FaChevronDown /></li>
//                 </ul>
//               </div>
//               <div className="nav-right">
//                 <input type="text" name="search" required placeholder="Izlash..." />
//                 <GiMagnifyingGlass />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;



import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./designs/header.css";
import { FaTelegram, FaInstagram, FaFacebook, FaChevronDown } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { GiSunglasses, GiMagnifyingGlass } from "react-icons/gi";
import { LuNotebookPen } from "react-icons/lu";
import { RiTranslate2 } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [textSize, setTextSize] = useState(100);
  const [isDarkMode, setDarkMode] = useState(false);
  const [isHighContrast, setHighContrast] = useState(false);
  const [showAccessibility, setShowAccessibility] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Data arrays
  const socials = [
    { icon: <FaFacebook />, url: "https://senat.uz/", className: "ic1" },
    { icon: <FaTelegram />, url: "https://senat.uz/", className: "ic2" },
    { icon: <FaInstagram />, url: "https://senat.uz/", className: "ic3" },
    { icon: <AiOutlineYoutube />, url: "https://senat.uz/", className: "ic4" },
  ];

  const navItems = [
    "Senat",
    "Hujjatlar",
    "Yalpi Majlislar",
    "Kengash majlislari",
    "Tadbirlar",
    "Nazorat-tahlil faoliyati"
  ];

  const languages = [
    { code: "uz", label: "O'zbekcha" },
    { code: "ru", label: "Русский" },
    { code: "en", label: "English" }
  ];

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Apply accessibility settings
  useEffect(() => {
    document.documentElement.style.fontSize = `${textSize}%`;
    document.body.classList.toggle("dark-mode", isDarkMode);
    document.body.classList.toggle("high-contrast", isHighContrast);
  }, [textSize, isDarkMode, isHighContrast]);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setShowLanguageMenu(false);
  };

  const resetAccessibility = () => {
    setTextSize(100);
    setDarkMode(false);
    setHighContrast(false);
  };

  // Format date and time
  const formattedDate = currentTime.toLocaleDateString();
  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <header className="header">
      <div className="head">
        <div className="container">
          <div className="wrapper">
            {/* Top Section */}
            <div className="wrapper-top">
              <div className="top-left">
                <div className="left-l">{formattedTime}</div>
                <div className="left-r">{formattedDate}</div>
              </div>
              
              <div className="top-mid">
                <span className="dd">
                  <svg
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                    ></path>
                  </svg>
                </span>
                <p>{t("siteInTestMode")}</p>
              </div>
              
              <div className="top-right">
                <p className="right-desc">{t("weAreInSocial")}</p>
                <ul className="right-icons">
                  {socials.map((social, index) => (
                    <a key={index} className={social.className} href={social.url} target="_blank" rel="noopener noreferrer">
                      <li className="icons-item">{social.icon}</li>
                    </a>
                  ))}
                </ul>
              </div>
            </div>

            {/* Middle Section */}
            <div className="wrapper-middle">
              <div className="m-t">
                <div className="middle-left">
                  <img
                    src="https://web.archive.org/web/20121102102633/http://upload.wikimedia.org/wikipedia/commons/5/5d/Coat_of_Arms_of_Uzbekistan.svg"
                    alt={t("uzbCoatOfArms")}
                  />
                  <h3>{t("regionalCouncil")}</h3>
                </div>

                <div className="middle-right">
                  {/* Accessibility Menu */}
                  <div className="right-r1" style={{ position: "relative" }}>
                    <GiSunglasses 
                      color="#003087" 
                      size={24} 
                      onClick={() => setShowAccessibility(!showAccessibility)}
                      aria-label={t("accessibilitySettings")}
                    />
                    
                    {showAccessibility && (
                      <div className="accessibility-menu">
                        <button onClick={() => setTextSize((s) => s + 10)}>A+</button>
                        <button onClick={() => setTextSize((s) => Math.max(50, s - 10))}>A-</button>
                        <button onClick={() => setDarkMode((v) => !v)}>🌙 {t("nightMode")}</button>
                        <button onClick={() => setHighContrast((v) => !v)}>⚫ {t("highContrast")}</button>
                        <button onClick={resetAccessibility}>♻️ {t("resetSettings")}</button>
                      </div>
                    )}
                  </div>

                  {/* Registration */}
                  <div className="right-r2">
                    <LuNotebookPen color="#003087" />
                    <p>{t("signUpForReception")}</p>
                  </div>

                  {/* Language Selector */}
                  <div 
                    className="right-r3" 
                    style={{ position: "relative" }}
                    onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  >
                    <RiTranslate2 color="#003087" />
                    <p>{languages.find(l => l.code === i18n.language)?.label || languages[0].label}</p>
                    {showLanguageMenu && (
                      <div className="language-menu2233">
                        {languages.map((lang) => (
                          <button 
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={i18n.language === lang.code ? "active" : ""}
                          >
                            {lang.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Login Button */}
                  <div className="right-r4">
                    <button className="right-btn">
                      <IoMdPerson color="#003087" />
                      <p>{t("login")}</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Section */}
            <div className="wrapper-nav">
              <div className="nav-left">
                <ul className="nav-ul">
                  {navItems.map((item) => (
                    <li key={item}>
                      <p>{t(item)}</p>
                      <FaChevronDown />
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="nav-right">
                <input 
                  type="text" 
                  name="search" 
                  required 
                  placeholder={t("searchPlaceholder")} 
                  aria-label={t("searchPlaceholder")}
                />
                <GiMagnifyingGlass />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

