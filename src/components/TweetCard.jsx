import styles from '../styles/Card.module.css';


const TweetCard = () => {
    return ( 
        <div className={styles.hero}>
            <section className={styles.twitCard}>
                <picture className={styles.userImage}>
                    <img src="/vite.svg" alt="" />
                </picture>
                <div className={styles.content}>
                    <header>
                        <div>
                            <h3>Carlos</h3>
                            <p>@carlos . 2h</p>
                        </div>
                    </header>

                </div>
            </section>
        </div>
     );
}
 
export default TweetCard;