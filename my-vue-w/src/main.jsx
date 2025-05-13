import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './i18n.jsx'
import Admin from './Admin.jsx'

const path = window.location.pathname;

if (path === "/api/Auth/login") {
    const adminRoot = document.getElementById("admin-root");
    if (adminRoot) {
        createRoot(adminRoot).render(
            <StrictMode>
                  <Admin/>
            </StrictMode>
        );
    }
} else {
    const root = document.getElementById("root");
    if (root) {
        createRoot(root).render(
            <StrictMode>
                <App />
            </StrictMode>
        );
    }
}









