import React from 'react';
import { menuItem } from '../../constants/menu-item';
import { MenuItem } from '../menu-item';
import styles from './index.module.sass'

export const Menu = () => {
    return (
        <div className={styles.container}>
            {menuItem.map((item, index, arr) => {
                return (
                    <MenuItem/>
                )
            })}
        </div>
    );
}


