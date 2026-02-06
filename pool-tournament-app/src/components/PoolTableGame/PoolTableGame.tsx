import * as React from 'react';

import './PoolTableGame.module.scss';
import styles from './PoolTableGame.module.scss';

import poolTable from '../../assets/Pool-Table-Image.png';


import type { IPoolPlayer }  from '../PoolPlayer/IPoolPlayer';
import type { IPoolTableGameProps } from './IPoolTableGameProps';

// interface IPoolPlayer {
//   PlayerID: number;
//   FirstName: string;
//   LastName: string;
//   StartingChips: number;
//   ChipCount: number;
//         InGame: boolean
// }



const winnerClick = (player?:IPoolPlayer) : void => {
  alert("search click");
}
const winnerClick2 = () : void => {
  alert("winner click");
}

//const PoolTableGame: React.FC<IPoolPlayer[]> = () => {
const PoolTableGame: React.FC<IPoolTableGameProps> = (IPoolTableGameProps) => {
  let tableNumber = 5;
  return (
    <div className={styles.poolTableGameContainer}>
        <div>Table Number : {tableNumber}</div>
        <img src={poolTable} width="300" height="150" />
        <div className={styles.PlayerVsPlayerContainer}>

        <div className={styles.PlayerContainer}>
          <div className={styles.PlayerTitle}>{IPoolTableGameProps.PlayerOne?.FirstName} {IPoolTableGameProps.PlayerOne?.LastName}</div>
            <div>
                <button id='start-tournament-button' type='button' onClick={winnerClick2}> Winner </button>
            </div>
        </div>

          <div>VS</div>

          <div className={styles.PlayerContainer}>
            <div className={styles.PlayerTitle}>{IPoolTableGameProps.PlayerTwo?.FirstName} {IPoolTableGameProps.PlayerTwo?.LastName}</div>
              <div>
                  <button id='start-tournament-button' type='button' onClick={winnerClick2}> Winner </button>
              </div>          
            </div>
          </div>
    </div>
  )
};

export default PoolTableGame;


//                <button id='start-tournament-button' type='button' onClick={winnerClick(IPoolTableGameProps.PlayerOne?)}> Winner </button>
