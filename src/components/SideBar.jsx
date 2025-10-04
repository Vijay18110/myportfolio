import { motion, AnimatePresence } from "framer-motion";
import styles from "./Sidebar.module.css";

const Sidebar = ({ children, setIsFilter, heading, subHeading, IsNotOverLay }) => {
    return (
        <AnimatePresence>
            <motion.div
                className={`${IsNotOverLay ? styles.overlayNot : styles.overlay}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsFilter(false)}
            >
                <motion.div
                    className={`${styles.sidebarContainer} bg-white rounded-start`}
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={styles.sidebar}>
                        {/* Header */}
                        <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
                            <h5 className={`${styles.sidebarTitle} mb-0`}>
                                {heading || "Settings"}
                            </h5>
                            <button
                                type="button"
                                className={styles.btnClose}
                                aria-label="Close"
                                onClick={() => setIsFilter(false)}
                            >
                                ✕
                            </button>
                        </div>

                        {/* Subheading */}
                        {subHeading && (
                            <p className={styles.sidebarSubtitle}>{subHeading}</p>
                        )}

                        {/* Sidebar content */}
                        <div>{children}</div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Sidebar;
