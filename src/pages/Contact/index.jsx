import styles from './index.module.css';
import ContactCart from '../../components/contactcart';
import { contactdata } from '../../data/contact';
const Contact = () => {
    return (
        <>
            <div className={styles.cont}>
                <div className={styles.content}>
                    <div className={styles.imgCont}>
                    </div>
                    <div className={styles.right}>
                        {contactdata.map((data) => <ContactCart type={data.type} icon={data.icon} place={data.place} />)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;