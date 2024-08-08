import React from 'react';
import styles from './Topbar.module.css';

const Topbar = ({backgroundColor}) => {
    return (
        <div className={styles.topbarContainer} style={{backgroundColor: `${backgroundColor}`}}>
            <div>
            </div>
        </div>
    );
};

export default Topbar;
