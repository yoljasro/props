import React from 'react'
import styles from './index.module.sass'
import Imagevector from '../assets/image/icon-vector.svg'
import imageShop from '../assets/image/shop-card.svg'

export const MenuItem = () => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.container_icon}>
                    <div className={styles.notification}></div>
                    <img alt='ImageShop' src={imageShop} />
                </div>
                <div className={styles.text}>Корзина</div>
            </div>
            <div className={styles.arrow_container}>
                <img alt='Image_vector' className={styles.arrow_icon} src={Imagevector}/>
            </div>
        </div>
    )
}

