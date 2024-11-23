import styles from './index.module.css';
import ContactCart from '../../components/contactcart';
import { contactdata } from '../../data/contact';
import { motion } from 'framer-motion';
const Contact = () => {
    return (
        <>
            <div className={styles.cont}>
                <div className={styles.content}>
                    <motion.div
                        initial={{ x: -400 }}
                        animate={{ x: 0 }}
                        className={styles.imgCont}>
                    </motion.div>
                    <div className={styles.right}>
                        {contactdata.map((data, index) => <ContactCart key={index} num={index} type={data.type} icon={data.icon} place={data.place} />)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;