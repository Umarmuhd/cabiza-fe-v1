import styles from '../../styles/Home.module.css';

export const Plan = ({ plan, payout }) => {
    let monthlyPrice = (plan.price / 12) - 12 / 100;
    monthlyPrice = Math.abs((monthlyPrice === -0 ? 0 : monthlyPrice).toFixed())

    return <div className={`${styles.col} ${plan.mostPopular ? styles.popular : ""} w-[max-content]`}>
        {plan.mostPopular ? <aside>Most popular</aside> : null}
        <h4>{plan.zone}</h4>
        <h3>{plan.planName}</h3>
        <p className={styles.price}>
            £
            {
                payout ? payout.yearly ? `${plan.price}${plan.price !== 0 ? "/Annum" : ""}` : `${monthlyPrice}${monthlyPrice !== 0 ? "/Monthly" : ""}` : plan.price
            }
        </p>
        <a href=''>Sign Up</a>
        <p className={`${plan.mostPopular ? styles.description : ""}`}>
            {plan.description}
        </p>
        <a href='' className={styles['btn-secondary']}>
            Learn More
        </a>
    </div>
}

const PlanComponent = ({ plans, payout }) => {
    return <div className='mb-10'>
        <div className={`${styles.plans} mt-10 ${styles.flex}`}>
            {plans.map(plan => <Plan key={plan.id} plan={plan} payout={payout}/>)}
        </div>
    </div>
}

export default PlanComponent;