import styles from '../../styles/Home.module.css';

const Testimonies = ({ review }) => {
    return <div className={`${styles.col} ${review.mostPopular ? styles.popular : ""} w-[max-content]`}>
        {review.mostPopular ? <aside>Most popular</aside> : null}
        <h4>{review.zone}</h4>
        <h3>{review.planName}</h3>
        <p className={styles.price}>
            £
            {review.price}
        </p>
        <a href=''>Sign Up</a>
        <p className={`${review.mostPopular ? styles.description : ""}`}>
            {review.description}
        </p>
        <a href='' className={styles['btn-secondary']}>
            Learn More
        </a>
    </div>
}

export default Testimonies;