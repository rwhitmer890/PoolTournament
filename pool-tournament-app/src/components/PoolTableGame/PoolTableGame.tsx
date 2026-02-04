import * as React from 'react';

import './PoolTableGame.module.scss';
import styles from './PoolTableGame.module.scss';

import poolTable from '../../assets/Pool-Table-Image.png';


const winnerClick = () : void => {
  alert("search click");
}



const PoolTableGame: React.FC = () => {
  let tableNumber = 5;
  return (
    <div className={styles.poolTableGameContainer}>
        <div>Table Number : {tableNumber}</div>
        <img src={poolTable} width="300" height="150" />
        <div className={styles.PlayerVsPlayerContainer}>

          <div>Player A Placeholder</div>
          <div>VS</div>
          <div>Player B Placeholder</div>
          
        </div>
    </div>
  )
};

export default PoolTableGame;
