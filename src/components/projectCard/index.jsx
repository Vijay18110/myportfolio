import React, { useState } from "react";
import styles from "./index.module.css";
import { FaChrome, FaPlus, FaTimes } from "react-icons/fa";

const ProjectCard = ({ img, pname, ptech, url, description, features }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <>
            <div className={styles.cardContainer}>
                {/* Project Image */}
                <img src={img} alt={pname} className={styles.image} />

                {/* Floating Plus Icon */}
                <span className={styles.plusIcon} onClick={handleOpenModal}>
                    <FaPlus />
                </span>

                {/* Hover Overlay */}
                <div className={styles.overlay}>
                    <div className={styles.textBlock}>
                        <span className={styles.projectName}>{pname}</span>
                        <span className={styles.projectTech}>{ptech}</span>
                    </div>
                    <a href={url} target="_blank" rel="noreferrer">
                        <span className={styles.iconCircle}>
                            <FaChrome />
                        </span>
                    </a>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <button className={styles.closeBtn} onClick={handleCloseModal}>
                            <FaTimes />
                        </button>
                        <img src={img} alt={pname} className={styles.modalImage} />
                        <h2>{pname}</h2>
                        <p><strong>Tech Stack:</strong> {ptech}</p>
                        <p><strong>Description:</strong> {description}</p>
                        {features && features.length > 0 && (
                            <>
                                <strong>Features:</strong>
                                <ul>
                                    {features.map((feat, idx) => (
                                        <li key={idx}>{feat}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                        <a href={url} target="_blank" rel="noreferrer" className={styles.modalLink}>
                            <FaChrome /> Visit Project
                        </a>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectCard;
