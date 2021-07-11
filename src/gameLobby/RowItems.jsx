import {useEffect, useState} from 'react';
import styles from './gameLobby.module.css';
import { HiUserGroup } from "react-icons/hi";
import { MdGroup } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";

export default function RowItems({data=[]}){
    if(data.length === 0) {
        return null;
    }
return(
    <section className={styles.rowsAlign}>
        {
            data.map(item => (
                <div key={item.tableCode} className={styles.rowItem}>
                    <div className={styles.rowItemLine}>
                    <strong className={styles.moneyAlign}><FaRupeeSign /> {item.betValue}</strong>
                    <div className={styles.playersAlign}>
                        <p className={styles.numPlayers}>
                            {item.numPlayers} 
                        </p>
                        {item.numPlayers === 2 
                            ? <MdGroup />
                            : <HiUserGroup />}
                    </div>
                    
                    <button className={styles.buttonActive}>PLAY</button>
                    </div>
                    <div className={styles.bottomRow}>
                        <p>Bonus Allowed</p>
                    </div>
                </div>
            ) )
        }
    </section>
);
}