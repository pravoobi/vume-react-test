import classNames from 'classnames';
import styles from './gameLobby.module.css'
import { DEALS, POOL101, POINTS, POOL201 } from './constants';


export default function ButtonsRow({onButtonClick, buttonActive}){
return(
    <div className={styles.buttonsAlign}>
        <button 
            className={classNames(styles.button,buttonActive === POOL101 ? styles.active : '')}
            onClick={()=> onButtonClick(POOL101)}
        >101 POOL</button>
        <button
            className={classNames(styles.button,buttonActive === POOL201 ? styles.active : '')}
            onClick={()=> onButtonClick(POOL201)}
        >201 POOL</button>
        <button
            className={classNames(styles.button,buttonActive === DEALS ? styles.active : '')}
            onClick={()=> onButtonClick(DEALS)}
        >DEALS</button>
        <button
            className={classNames(styles.button,buttonActive === POINTS ? styles.active : '')}
            onClick={()=> onButtonClick(POINTS)}
        >POINTS</button>
    </div>
);
}