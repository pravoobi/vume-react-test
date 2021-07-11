import styles from './gameLobby.module.css'
import { HiArrowUp, HiUserGroup } from "react-icons/hi";
import { MdGroup } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import classNames from 'classnames';


export default function GroupsRow({isTwoPlayers, sortByMoney, setIsTwoPlayer, toggleSortByMoney}){

return(
    <div className={styles.groupButtonsAlign}>
        <button 
        className={classNames(styles.buttonGroup, isTwoPlayers ? styles.active : '')}
        onClick={()=> setIsTwoPlayer(true)}
        >
            <p>2</p>
            <p><MdGroup /></p>
        </button>
        <button
        className={classNames(styles.buttonGroup, isTwoPlayers ? '' : styles.active )}
        onClick={()=> setIsTwoPlayer(false)}
        >
            <p>6</p>
            <p><HiUserGroup /></p>
        </button>
        <button
        className={classNames(styles.buttonGroupRupee, sortByMoney ? styles.active : '' )}
        onClick={() => toggleSortByMoney()}
        >
            <strong>
                <p>
                <FaRupeeSign />
                </p>
                <p>
            <HiArrowUp />
                </p>
            </strong>
        </button>
    </div>
);
}