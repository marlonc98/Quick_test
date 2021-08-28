import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/RoutesComponent';
import { translate, tDictionary } from '../../translate/translate';
import styles from '../styles/error404.module.css';

function Error404() {
    return <div>
        <div className="row d-flex justify-content-center text-center flex-column align-items-center">
            <div className={styles.title}>404</div>
            <div className={styles.subtitle}>{translate(tDictionary.error_404_not_found)}</div>
            <p className="py-3">{translate(tDictionary.error_404_not_found_description)}</p>
            <Link to={routes.home.path} className="btn btnSecondary">{translate(tDictionary.go_home_page)}</Link>
        </div>
    </div>
}

export default Error404;