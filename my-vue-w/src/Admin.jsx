// import { useEffect, useState } from "react";
// import "./Admin.css";
// import DashbortMain from "./dashbort/DashbortMain";

// function Admin() {
//     const [fullname, setFullName] = useState("");
//     const [username, setUserName] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     useEffect(() => {
//         const token = localStorage.getItem("token");
//         const tokenExpiry = localStorage.getItem("token_expiry");

//         if (token && tokenExpiry) {
//             if (Date.now() > parseInt(tokenExpiry, 10)) {
//                 localStorage.removeItem("token");
//                 localStorage.removeItem("token_expiry");
//                 alert("Tokenning muddati tugadi! Iltimos, qayta kiring.");
//                 window.location.href = "/sing-in-admin";
//             } else {
//                 setIsAuthenticated(true);
//             }
//         }
//     }, []);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError("");

//         if (!fullname || !username || !password) {
//             setError("Iltimos, barcha maydonlarni to'ldiring!");
//             return;
//         }

//         try {
//             console.log("So‘rov yuborilmoqda...");

//             const requestBody = {
//                 fullName: fullname,
//                 username,
//                 password,
//             };
//             console.log("Request Body:", requestBody);

//             const response = await fetch(`${import.meta.env.VITE_API_URL}/api/Auth/login`, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Authorization": `Bearer ${localStorage.getItem('token') || 'null'}`,
//                     "Accept": "application/json"
//                 },
//                 body: JSON.stringify(requestBody),
//                 mode: 'cors',
//                 credentials: 'include'
//             });

//             console.log("Response status:", response.status);

//             const responseText = await response.text();  // Javobni matn sifatida oling
//             console.log("Response Text:", responseText);

//             // Serverdan JSON bo'lmasa, uni tekshirib ko'ring
//             let data;
//             if (response.ok) {
//                 try {
//                     data = JSON.parse(responseText);  // JSON parsing
//                 } catch (jsonError) {
//                     console.error("Error parsing JSON:", jsonError);
//                     setError("Serverdan noto‘g‘ri javob keldi!");
//                     return;
//                 }

//                 alert("Tizimga muvaffaqiyatli kirdingiz!");

//                 const expiryTime = Date.now() + 5 * 24 * 60 * 60 * 1000; // 5 kun millisekundda
//                 localStorage.setItem("token", data.token);
//                 localStorage.setItem("token_expiry", expiryTime);

//                 window.location.href = "/sing-in-admin";
//             } else {
//                 setError(responseText.includes("Username yoki parol noto'g'ri") ? "Username yoki parol noto‘g‘ri" : "Foydalanuvchi ma'lumotlari noto‘g‘ri!");
//             }

//         } catch (error) {
//             console.error("Server xatosi:", error);
//             setError("Server bilan bog'lanishda xatolik yuz berdi!");
//         }
//     };
//     const [active, setActive] = useState(false);

//     const toggleSearch = () => {
//         setActive(!active);
//     };

//     const handleLogout = () => {
//         if (!window.confirm("Chiqishni tasdiqlaysizmi?")) return;
//         localStorage.removeItem("token");
//         localStorage.removeItem("token_expiry");

//         console.log("Tokenlar o‘chirildi");

//         setFullName(""); 
//         setUserName("");
//         setPassword("");
//         setIsAuthenticated(false);
//     };

//     if (!isAuthenticated) {
//         return (
//             <div className="admin-container">
//                 <div className="admin-card">
//                     <h2>Login</h2>
//                     {error && <p className="admin-error">{error}</p>}
//                     <form onSubmit={handleSubmit}>
//                         <input
//                             type="text"
//                             placeholder="To'liq ism (Full Name)"
//                             value={fullname}
//                             onChange={(e) => setFullName(e.target.value)}
//                             required
//                         />
//                         <input
//                             type="text"
//                             placeholder="Foydalanuvchi nomi (UserName)"
//                             value={username}
//                             onChange={(e) => setUserName(e.target.value)}
//                             required
//                         />
//                         <input
//                             type="password"
//                             placeholder="Parol (Password)"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                         <button type="submit" className="admin-button">Kirish</button>
//                     </form>
//                 </div>
//             </div>
//         );
//     }

//     return (
        
//         <div className="admin-container2">
//             <div className="admin-header">
//                 <div>
//                     <h2>Admin Panel</h2>

//                     <div className={`search-wrapper ${active ? 'active' : ''}`}>
//                         <div className="input-holder">
//                             <input
//                                 type="text"
//                                 className="search-input"
//                                 placeholder="Qidirish..."
//                             />
//                             <button className="search-icon" onClick={toggleSearch}>
//                                 <span></span>
//                             </button>
//                         </div>
//                     </div>
//                     <button className="log-out-button-l" onClick={handleLogout}>
//                         Chiqish
//                     </button>
//                 </div>
//             </div>


//             <div>
//                 <DashbortMain/>
//             </div>
//         </div>
//     );
// }

// export default Admin;



import { useEffect, useState } from "react";
import "./Admin.css";
import DashbortMain from "./dashbort/DashbortMain";

function Admin() {
    const [fullname, setFullName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [active, setActive] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const tokenExpiry = localStorage.getItem("token_expiry");

        if (token && tokenExpiry) {
            if (Date.now() > parseInt(tokenExpiry, 10)) {
                localStorage.removeItem("token");
                localStorage.removeItem("token_expiry");
                alert("Tokenning muddati tugadi! Iltimos, qayta kiring.");
                setIsAuthenticated(false);
            } else {
                setIsAuthenticated(true);
            }
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!fullname || !username || !password) {
            setError("Iltimos, barcha maydonlarni to'ldiring!");
            return;
        }

        try {
            const requestBody = {
                fullName: fullname,
                username,
                password,
            };

            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/Auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(requestBody),
                mode: 'cors',
                credentials: 'include'
            });

            const responseText = await response.text();
            let data;

            if (response.ok) {
                try {
                    data = JSON.parse(responseText);
                } catch (jsonError) {
                    console.error("JSON xatolik:", jsonError);
                    setError("Serverdan noto‘g‘ri javob keldi!");
                    return;
                }

                alert("Tizimga muvaffaqiyatli kirdingiz!");

                const expiryTime = Date.now() + 5 * 24 * 60 * 60 * 1000; // 5 kun
                localStorage.setItem("token", data.token);
                localStorage.setItem("token_expiry", expiryTime);

                setIsAuthenticated(true);
            } else {
                setError(
                    responseText.includes("Username yoki parol noto'g'ri")
                        ? "Username yoki parol noto‘g‘ri"
                        : "Foydalanuvchi ma'lumotlari noto‘g‘ri!"
                );
            }
        } catch (error) {
            console.error("Server xatosi:", error);
            setError("Server bilan bog'lanishda xatolik yuz berdi!");
        }
    };

    const toggleSearch = () => {
        setActive(!active);
    };

    const handleLogout = () => {
        if (!window.confirm("Chiqishni tasdiqlaysizmi?")) return;
        localStorage.removeItem("token");
        localStorage.removeItem("token_expiry");

        setFullName("");
        setUserName("");
        setPassword("");
        setIsAuthenticated(false);
    };

    if (!isAuthenticated) {
        return (
            <div className="admin-container">
                <div className="admin-card">
                    <h2>Login</h2>
                    {error && <p className="admin-error">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="To'liq ism (Full Name)"
                            value={fullname}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Foydalanuvchi nomi (UserName)"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Parol (Password)"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit" className="admin-button">Kirish</button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="admin-container2">
            <div className="admin-header">
                <div>
                    <h2>Admin Panel</h2>
                    <div className={`search-wrapper ${active ? 'active' : ''}`}>
                        <div className="input-holder">
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Qidirish..."
                            />
                            <button className="search-icon" onClick={toggleSearch}>
                                <span></span>
                            </button>
                        </div>
                    </div>
                    <button className="log-out-button-l" onClick={handleLogout}>
                        Chiqish
                    </button>
                </div>
            </div>

            <div>
                <DashbortMain />
            </div>
        </div>
    );
}

export default Admin;
