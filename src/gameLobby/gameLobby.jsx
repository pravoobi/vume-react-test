import {useEffect, useState} from 'react';
import ButtonsRow from './ButtonsRow';
import GroupsRow from './GroupsRow';
import RowItems from './RowItems';
import styles from './gameLobby.module.css'
import { POOL_101, POOL_201, POOL101, POINTS, POOL201 } from './constants';

export default function GameLobby(){

    const [points, setPointsData] = useState([]);
    const [pool101, setPool101Data] = useState([]);
    const [pool201, setPool201Data] = useState([]);
    const [deals, setDealsData] = useState([]);
    const [dataSet, setData] = useState([]);
    const [buttonActive, setButtonActive] = useState(POOL101);
    const [isTwoPlayers, setIsTwoPlayer] = useState(true);
    const [sortByMoney, setSortByMoney] = useState(false);

    useEffect(()=>{
        fetch('https://api.peka.ooo/api/tables?gameType=rummy')
        .then(response => response.json())
        .then(json => {
            const pool101 = [];
            const pool201 = [];
            const points = [];
            const deals = [];
            json.forEach(type => {
                if(type.category === POOL_101){
                    pool101.push(type);
                } else if(type.category === POOL_201){
                    pool201.push(type);
                } else if(type.category === POINTS){
                    points.push(type);
                } else {
                    deals.push(type);
                }
            });
            setPointsData(points);
            setPool101Data(pool101);
            setPool201Data(pool201);
            setDealsData(deals);
            setData(pool101);
        });
    }, []);
    const onButtonClick = (buttonType) => {
        setButtonActive(buttonType);
        switch(buttonType){
            case POOL101: 
                setData(pool101);
                break;
            case POOL201: 
                setData(pool201);
                break;
            case POINTS: 
                setData(points);
                break;
            default:
                setData(deals);
                break;

        }
    }
    const refineData = (dataSet) => {
        const dataCopy = [...dataSet];
        function sortedData(data){
            return data.sort((a, b)=> a.betValue - b.betValue);
        }
        if(isTwoPlayers) {
            if(sortByMoney) {
                return dataCopy.filter(data => data.numPlayers === 2);
            } else {
               return sortedData(dataCopy.filter(data => data.numPlayers === 2));
            }
        } else {
            if(sortByMoney) {
                return dataCopy.filter(data => data.numPlayers === 6);
            } else {
               return sortedData(dataCopy.filter(data => data.numPlayers === 6));
            }
        }

    }
    const toggleSortByMoney = () => {
        setSortByMoney(!sortByMoney);
    }
    return(
        <main className={styles.layout}>
        <h2>Game Lobby</h2>
            <ButtonsRow
                onButtonClick={onButtonClick}
                buttonActive={buttonActive}
            />
            <GroupsRow
                isTwoPlayers={isTwoPlayers}
                sortByMoney={sortByMoney}
                setIsTwoPlayer={setIsTwoPlayer}
                toggleSortByMoney={toggleSortByMoney}
            />
            <RowItems 
                data={refineData(dataSet)}
            />
        </main>
    );
};