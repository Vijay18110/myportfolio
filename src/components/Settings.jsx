import { useEffect, useState } from "react";
import { FiSettings } from "react-icons/fi";
import Sidebar from "./SideBar";
import { FaSun, FaMoon, FaDesktop, FaSync } from "react-icons/fa";
import { motion } from "framer-motion";

const CenteredSettings = () => {
    const [showSideBar, setSideBar] = useState(false);
    const [primaryColor, setPrimaryColor] = useState("");
    const [mode, setMode] = useState("");

    const handleSetting = () => setSideBar((prev) => !prev);

    const [colors, setColor] = useState([
        { name: "purple", hex: "#6f42c1" },
        { name: "teal", hex: "#20c997" },
        { name: "red", hex: "#dc3545" },
        { name: "yellow", hex: "#ffc107" },
        { name: "blue", hex: "#0d6efd" },
        { name: "custom", hex: primaryColor },
    ]);

    // Change Theme Color
    const changeTheme = (themeColor) => {
        setColor((prev) => [
            { name: "purple", hex: "#6f42c1" },
            { name: "teal", hex: "#20c997" },
            { name: "red", hex: "#dc3545" },
            { name: "yellow", hex: "#ffc107" },
            { name: "blue", hex: "#0d6efd" },
            { ...prev[prev.length - 1], hex: themeColor },
        ]);
        document.documentElement.style.setProperty("--themeColor", themeColor);
        document.documentElement.style.setProperty("--walletIconBg", themeColor);
    };

    // Reset / Refresh functionality
    const handleRefresh = () => {
        setPrimaryColor("");
        setMode("");
        document.documentElement.removeAttribute("data-bs-theme");
        document.documentElement.style.removeProperty("--themeColor");
        document.documentElement.style.removeProperty("--walletIconBg");
        document.documentElement.style.removeProperty("--cardColor");
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
    };

    useEffect(() => {
        const selectedColor = colors.find((c) => c.name === primaryColor)?.hex;
        if (selectedColor) changeTheme(selectedColor);
    }, [primaryColor]);

    useEffect(() => {
        const applyDarkMode = () => {
            document.documentElement.setAttribute("data-bs-theme", "dark");
            document.documentElement.style.setProperty("--cardColor", "#2c2f38");
            document.documentElement.style.setProperty("--text-color", "#ffffff");
            document.documentElement.style.setProperty("--heading-color", "#ffc107");
            document.body.style.backgroundColor = "#121212";
            document.body.style.color = "#fff";
        };

        const applyLightMode = () => {
            document.documentElement.setAttribute("data-bs-theme", "light");
            document.documentElement.style.setProperty("--cardColor", "#ffffff");
            document.documentElement.style.setProperty("--text-color", "#000");
            document.documentElement.style.setProperty("--heading-color", "#212529");
            document.body.style.backgroundColor = "#fff";
            document.body.style.color = "#000";
        };

        if (mode === "dark") applyDarkMode();
        else if (mode === "light") applyLightMode();
        else {
            // System Default
            const mql = window.matchMedia("(prefers-color-scheme: dark)");
            const systemThemeChange = (e) => (e.matches ? applyDarkMode() : applyLightMode());
            if (mql.matches) applyDarkMode();
            else applyLightMode();
            mql.addEventListener("change", systemThemeChange);
            return () => mql.removeEventListener("change", systemThemeChange);
        }
    }, [mode]);

    return (
        <>
            {/* Floating Settings Button */}
            <button
                className="btn position-fixed top-50 end-0 shadow d-flex align-items-center justify-content-center rounded-start-pill px-3 py-2"
                onClick={handleSetting}
                style={{
                    backgroundColor: "var(--themeColor, #6f42c1)",
                    color: "#fff",
                    zIndex: 1100,
                }}
            >
                <motion.div
                    animate={{ rotate: showSideBar ? 180 : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <FiSettings size={22} />
                </motion.div>
            </button>

            {/* Sidebar */}
            {showSideBar && (
                <Sidebar
                    setIsFilter={handleSetting}
                    heading="Theme Customizer"
                    subHeading="Customize & Preview in Real Time"
                    IsNotOverLay={true}
                >
                    <div className="p-3 text-body">
                        {/* Primary Color */}
                        <h6 className="fw-bold mb-2 text-body">Primary Color</h6>
                        <div className="d-flex flex-wrap gap-2 mb-3">
                            {colors.map((c) =>
                                c.name === "custom" ? (
                                    <div
                                        key={c.name}
                                        className={`p-1 rounded bg-white border ${primaryColor === c.name ? "border-2 border-primary" : ""
                                            }`}
                                        style={{ position: "relative" }}
                                    >
                                        <label
                                            onClick={() => setPrimaryColor(c.name)}
                                            className="d-flex align-items-center justify-content-center rounded"
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                                backgroundColor: c.hex,
                                                cursor: "pointer",
                                            }}
                                        >
                                            <input
                                                type="color"
                                                className="position-absolute top-0 start-0 w-100 h-100 opacity-0"
                                                onChange={(e) => changeTheme(e.target.value)}
                                            />
                                            <i className="bi bi-palette text-white fs-6"></i>
                                        </label>
                                    </div>
                                ) : (
                                    <div
                                        key={c.name}
                                        className={`p-1 rounded bg-white border ${primaryColor === c.name ? "border-2 border-primary" : ""
                                            }`}
                                    >
                                        <button
                                            className="rounded w-100 h-100 d-flex align-items-center justify-content-center"
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                                backgroundColor: c.hex,
                                                border: "none",
                                            }}
                                            onClick={() => setPrimaryColor(c.name)}
                                        />
                                    </div>
                                )
                            )}
                        </div>

                        {/* Mode */}
                        <h6 className="fw-bold mb-2 text-body">Mode</h6>
                        <div className="d-flex gap-2 mb-3">
                            <button
                                className={`btn w-100 ${mode === "light"
                                    ? "border border-2 border-primary"
                                    : "border"
                                    }`}
                                onClick={() => setMode("light")}
                            >
                                <FaSun className="me-2" /> Light
                            </button>
                            <button
                                className={`btn w-100 ${mode === "dark"
                                    ? "border border-2 border-primary"
                                    : "border"
                                    }`}
                                onClick={() => setMode("dark")}
                            >
                                <FaMoon className="me-2" /> Dark
                            </button>
                            <button
                                className={`btn w-100 ${mode === "system"
                                    ? "border border-2 border-primary"
                                    : "border"
                                    }`}
                                onClick={() => setMode("system")}
                            >
                                <FaDesktop className="me-2" /> System
                            </button>
                        </div>

                        {/* Refresh */}
                        <button
                            className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center"
                            onClick={handleRefresh}
                        >
                            <FaSync className="me-2" /> Refresh / Reset
                        </button>
                    </div>
                </Sidebar>
            )}
        </>
    );
};

export default CenteredSettings;
