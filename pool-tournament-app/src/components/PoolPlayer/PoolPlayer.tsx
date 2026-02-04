import * as React from 'react';
import {  Search12Regular } from '@fluentui/react-icons';
import { ArrowRightFilled } from '@fluentui/react-icons';
import './PoolPlayer.module.scss';
import styles from './PoolPlayer.module.scss';

const handleSearchClick = () : void => {
  alert("search click");
}

const PoolPlayer: React.FC = () => {
  return (
    <div className={styles.oneMnattSearchBarContainer}>
      <Search12Regular className={styles.searchMagnifyIcon} />
      <input type='search' className={styles.searchTopbar} placeholder='Search' autoComplete='off' />
      <button  type='button' className={styles.onemanattSearchbutton} onClick={handleSearchClick}>
      <ArrowRightFilled className={styles.searchArrowIcon}/>
      </button> 
    </div>
  )
};

export default PoolPlayer;
