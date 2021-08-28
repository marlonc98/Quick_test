import React, { useContext, useState } from 'react';
import styles from '../styles/login.module.css';
import bgImage from '../assets/bg.jpg';
import logoImage from '../assets/mantenimiento.jpg';


const Maintenance = () => {
    return <div className={styles.main} style={{ backgroundImage: `url("${bgImage}")` }}>
        <div className={`card ${styles.card}`}>
            <div className="card-body">
                <img className="w-100" src={logoImage} />
                <h3 className="my-2 colorMain text-center">
                    Lo sentimos, nos encontramos en mantenimiento
                </h3>
            </div>
        </div>
    </div>
}

export default Maintenance