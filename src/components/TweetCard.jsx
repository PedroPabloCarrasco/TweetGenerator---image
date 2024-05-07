import styles from '../styles/Card.module.css';

import Verified from './icons/Verified';
import Comments from './icons/Comments'
import Retwit from './icons/Retwit'
import Share from './icons/Share'
import Likes from './icons/Likes'

const TweetCard = () => {
    const paragraph = "This is a sample tweet. @mentions, #hashtags, https://links.com are all automatically converted."
    return ( 
        <div className={styles.hero}>
            <section className={styles.twitCard}>
                <picture className={styles.userImage}>
                    <img src="/elon.png" alt="" />
                </picture>
                <div className={styles.content}>
                    <header>
                        <div>
                            <h3>Elon Musk</h3>
                            <Verified/>
                            <p>@elonmusk . 2h</p>
                        </div>
                    </header>
                    <p>{paragraph}</p>
                    <div className={styles.images}>
                        <img src="./elon.png" alt="" />

                    </div>
                    <footer>
                        <div>
                            <Comments/>
                            <span>34</span>
                        </div>

                        <div>
                            <Likes/>
                            <span>34</span>
                        </div>

                        <div>
                            <Retwit/>
                            <span>34</span>
                        </div>

                        <div>
                            <Share/>
                            <span>34</span>
                        </div>
                    </footer>

                </div>
            </section>
        </div>
     );
}
 
export default TweetCard;