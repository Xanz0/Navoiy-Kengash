
// import React, { useEffect, useState, useRef } from "react";
// import { useTranslation } from "react-i18next";
// import "./designs/header.css";
// import { FaTelegram, FaInstagram, FaFacebook, FaChevronDown } from "react-icons/fa";
// import { AiOutlineYoutube } from "react-icons/ai";
// import { GiSunglasses, GiMagnifyingGlass } from "react-icons/gi";
// import { LuNotebookPen } from "react-icons/lu";
// import { RiTranslate2 } from "react-icons/ri";
// import { IoMdPerson } from "react-icons/io";

// const Header = () => {
//   const { t, i18n } = useTranslation();
//   const [textSize, setTextSize] = useState(100);
//   const [isDarkMode, setDarkMode] = useState(false);
//   const [isHighContrast, setHighContrast] = useState(false);
//   const [showAccessibility, setShowAccessibility] = useState(false);
//   const [showLanguageMenu, setShowLanguageMenu] = useState(false);
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const headerRef = useRef(null);


//   // Sticky header uchun useEffect
//   useEffect(() => {
//     const handleScroll = () => {
//       if (headerRef.current) {
//         const sticky = headerRef.current.offsetTop;
//         if (window.pageYOffset > sticky) {
//           headerRef.current.classList.add("sticky");
//         } else {
//           headerRef.current.classList.remove("sticky");
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Data arrays
//   const socials = [
//     { icon: <FaFacebook />, url: "https://senat.uz/", className: "ic1" },
//     { icon: <FaTelegram />, url: "https://senat.uz/", className: "ic2" },
//     { icon: <FaInstagram />, url: "https://senat.uz/", className: "ic3" },
//     { icon: <AiOutlineYoutube />, url: "https://senat.uz/", className: "ic4" },
//   ];

//   const navItems = [
//     "Senat",
//     "Hujjatlar",
//     "Yalpi Majlislar",
//     "Kengash majlislari",
//     "Tadbirlar",
//     "Nazorat-tahlil faoliyati"
//   ];

//   const languages = [
//     { code: "uz", label: "O'zbekcha" },
//     { code: "ru", label: "Русский" },
//     { code: "en", label: "English" }
//   ];

//   // Update time every minute
//   useEffect(() => {
//     const timer = setInterval(() => setCurrentTime(new Date()), 60000);
//     return () => clearInterval(timer);
//   }, []);

//   // Apply accessibility settings
//   useEffect(() => {
//     document.documentElement.style.fontSize = `${textSize}%`;
//     document.body.classList.toggle("dark-mode", isDarkMode);
//     document.body.classList.toggle("high-contrast", isHighContrast);
//   }, [textSize, isDarkMode, isHighContrast]);

//   const handleLanguageChange = (lang) => {
//     i18n.changeLanguage(lang);
//     setShowLanguageMenu(false);
//   };

//   const resetAccessibility = () => {
//     setTextSize(100);
//     setDarkMode(false);
//     setHighContrast(false);
//   };

//   // Format date and time
//   const formattedDate = currentTime.toLocaleDateString();
//   const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

//   return (
//     <header className="header">
//       <div className="head">
//         <div className="container">
//           <div className="wrapper">
//             {/* Top Section */}
//             <div className="wrapper-top">
//               <div className="top-left">
//                 <div className="left-l">{formattedTime}</div>
//                 <div className="left-r">{formattedDate}</div>
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
//                 <p>{t("siteInTestMode")}</p>
//               </div>
              
//               <div className="top-right">
//                 <p className="right-desc">{t("weAreInSocial")}</p>
//                 <ul className="right-icons">
//                   {socials.map((social, index) => (
//                     <a key={index} className={social.className} href={social.url} target="_blank" rel="noopener noreferrer">
//                       <li className="icons-item">{social.icon}</li>
//                     </a>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {/* Middle Section - Sticky bo'ladigan qism */}
//             <div className="wrapper-middle" ref={headerRef} id="myHeader">
//               <div className="m-t">
//                 <div className="middle-left">
//                   <img
//                     src="https://web.archive.org/web/20121102102633/http://upload.wikimedia.org/wikipedia/commons/5/5d/Coat_of_Arms_of_Uzbekistan.svg"
//                     alt={t("uzbCoatOfArms")}
//                   />
//                   <h3>{t("regionalCouncil")}</h3>
//                 </div>

//                 <div className="middle-right">
//                   {/* Accessibility Menu */}
//                   <div className="right-r1" style={{ position: "relative" }}>
//                     <GiSunglasses 
//                       color="#003087" 
//                       size={24} 
//                       onClick={() => setShowAccessibility(!showAccessibility)}
//                       aria-label={t("accessibilitySettings")}
//                     />
                    
//                     {showAccessibility && (
//                       <div className="accessibility-menu">
//                         <button onClick={() => setTextSize((s) => s + 10)}>A+</button>
//                         <button onClick={() => setTextSize((s) => Math.max(50, s - 10))}>A-</button>
//                         <button onClick={() => setDarkMode((v) => !v)}>🌙 {t("nightMode")}</button>
//                         <button onClick={() => setHighContrast((v) => !v)}>⚫ {t("highContrast")}</button>
//                         <button onClick={resetAccessibility}>♻️ {t("resetSettings")}</button>
//                       </div>
//                     )}
//                   </div>

//                   {/* Registration */}
//                   <div className="right-r2">
//                     <LuNotebookPen color="#003087" />
//                     <p>{t("signUpForReception")}</p>
//                   </div>

//                   {/* Language Selector */}
//                   <div 
//                     className="right-r3" 
//                     style={{ position: "relative" }}
//                     onClick={() => setShowLanguageMenu(!showLanguageMenu)}
//                   >
//                     <RiTranslate2 color="#003087" />
//                     <p>{languages.find(l => l.code === i18n.language)?.label || languages[0].label}</p>
//                     {showLanguageMenu && (
//                       <div className="language-menu2233">
//                         {languages.map((lang) => (
//                           <button 
//                             key={lang.code}
//                             onClick={() => handleLanguageChange(lang.code)}
//                             className={i18n.language === lang.code ? "active" : ""}
//                           >
//                             {lang.label}
//                           </button>
//                         ))}
//                       </div>
//                     )}
//                   </div>

//                   {/* Login Button */}
//                   <div className="right-r4">
//                     <button className="right-btn">
//                       <IoMdPerson color="#003087" />
//                       <p>{t("login")}</p>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             Navigation Section
//             <div className="wrapper-nav">
//               <div className="nav-left">
//                 <ul className="nav-ul">
//                   {navItems.map((item) => (
//                     <li key={item}>
//                       <p>{t(item)}</p>
//                       <FaChevronDown />
//                     </li>
//                   ))}
//                 </ul>
//               </div>
              

//               <div className="nav-right">
//                 <input 
//                   type="text" 
//                   name="search" 
//                   required 
//                   placeholder={t("searchPlaceholder")} 
//                   aria-label={t("searchPlaceholder")}
//                 />
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







import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./designs/header.css";
import { FaTelegram, FaInstagram, FaFacebook, FaChevronDown, FaChevronUp } from "react-icons/fa";
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
  const [activeDropdown, setActiveDropdown] = useState(null);
  const headerRef = useRef(null);

  // Dropdown items for each navigation item
  const dropdownItems = {
    "Senat": ["Tarix", "Tuzilma", "Rahbariyat"],
    "Hujjatlar": ["Qonunlar", "Farmonlar", "Qarorlar"],
    "Yalpi Majlislar": ["Majlis rejasi", "Majlis materiallari"],
    "Kengash majlislari": ["Kengash a'zolari", "Majlis tartibi"],
    "Tadbirlar": ["Kelgusi tadbirlar", "O'tkazilgan tadbirlar"],
    "Nazorat-tahlil faoliyati": ["Hisobotlar", "Tahlillar"]
  };

  // Toggle dropdown
  const toggleDropdown = (item) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  // Close dropdown when clicking outside
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const sticky = headerRef.current.offsetTop;
        if (window.pageYOffset > sticky) {
          headerRef.current.classList.add("sticky");
        } else {
          headerRef.current.classList.remove("sticky");
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

            {/* Middle Section - Sticky bo'ladigan qism */}
            <div className="head-mid">
            <div className="wrapper-middle" ref={headerRef} id="myHeader">
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
            </div>
            

            {/* Navigation Section with Dropdown */}
            <div className="wrapper-nav" ref={dropdownRef}>
              <div className="nav-left">
                <ul className="nav-ul">
                  {navItems.map((item) => (
                    <li 
                      key={item} 
                      className={`nav-item ${activeDropdown === item ? 'active' : ''}`}
                      onClick={() => toggleDropdown(item)}
                    >
                      <div className="nav-item-content">
                        <p>{t(item)}</p>
                        {activeDropdown === item ? <FaChevronUp /> : <FaChevronDown />}
                      </div>
                      
                      {activeDropdown === item && (
                        <div className="dropdown-menu">
                          {dropdownItems[item]?.map((subItem) => (
                            <a 
                              key={subItem} 
                              className="dropdown-item"
                              href="#" // Replace with actual links
                              onClick={(e) => e.stopPropagation()}
                            >
                              {t(subItem)}
                            </a>
                          ))}
                        </div>
                      )}
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

export default Header

