import * as React from 'react';


// import {  Search12Regular } from '@fluentui/react-icons';
// import { ArrowRightFilled } from '@fluentui/react-icons';
// import './NewPlayerRegistration.module.scss';
// import styles from './NewPlayerRegistration.module.scss';










// import {
//     Grid,
//     GridColumn as Column,
//     GridToolbar,
//     GridItemChangeEvent,
//     GridRowClickEvent,
//     GridEditChangeEvent
// } from '@progress/kendo-react-grid';




import {
    Grid,
    GridColumn as Column,
   
    type GridItemChangeEvent
} from '@progress/kendo-react-grid';
import sampleProducts from './gd-sample-products';
import samplePlayers from './sample-players';
//import { EditDescriptor } from '@progress/kendo-react-data-tools';
//import { Button } from '@progress/kendo-react-buttons';
import type { EditDescriptor } from '@progress/kendo-react-data-tools';


import poolTable from '../../assets/Pool-Table-Image.png';


interface Product {
    ProductID: number;
    ProductName?: string;
    FirstOrderedOn?: Date;
    UnitsInStock?: number;
    Discontinued?: boolean;
    inEdit?: boolean | string;
}



interface IPoolPlayer {
  PlayerID: number;
  FirstName: string;
  LastName: string;
  StartingChips: number;
  ChipCount: number;
        InGame: boolean
}


// const handleSearchClick = () : void => {
//   alert("search click");
// }




const NewPlayerRegistration = () => {
    const [data, setData] = React.useState<Array<IPoolPlayer>>(samplePlayers);
    const [edit, setEdit] = React.useState<EditDescriptor>({});

    // const handleItemChange = (event: GridItemChangeEvent) => {
    //     const inEditID = event.dataItem.ProductID;
    //     console.log(event.field);
    //     const field = event.field || '';
    //     const newData = data.map((item) => (item.ProductID === inEditID ? { ...item, [field]: event.value } : item));
    //     setData(newData);
    // };

    const handlePlayerChange = (event: GridItemChangeEvent) => {
        const inEditID = event.dataItem.PlayerID;
        console.log(event.field);
        const field = event.field || '';
        const newData = data.map((item) => (item.PlayerID === inEditID ? { ...item, [field]: event.value } : item));
        setData(newData);
    };



    return (


<div>
      <img src={poolTable} width="300" height="150" />
      <img src={poolTable} width="300" height="150" />
<img src={poolTable} width="300" height="150" />
        <Grid
            style={{ height: '420px' }}
            data={data}
            autoProcessData={true}
            editable={true}
            defaultEdit={{
                1: true
            }}
            dataItemKey="PlayerID"
            onItemChange={handlePlayerChange}
        >
            <Column field="PlayerID" title="Id" width="50px" editable={false} />
            <Column field="FirstName" width="150px" title="FirstName" />
            <Column field="LastName"  width="150px" title="LastName" />
            <Column field="StartingChips" title="StartingChips" width="150px" editor="numeric" />
            <Column field="ChipCount" title="ChipCount" width="150px" editor="numeric" />
            <Column field="InGame" title="InGame" editor="boolean" />
        </Grid>


      
</div>


    );
};


  // <Grid
  //           style={{ height: '420px' }}
  //           data={data}
  //           autoProcessData={true}
  //           editable={true}
  //           defaultEdit={{
  //               1: true
  //           }}
  //           dataItemKey="ProductID"
  //           onItemChange={handleItemChange}
  //       >
  //           <Column field="ProductID" title="Id" width="50px" editable={false} />
  //           <Column field="ProductName" title="Name" />
  //           <Column field="FirstOrderedOn" title="First Ordered" editor="date" format="{0:d}" />
  //           <Column field="UnitsInStock" title="Units" width="150px" editor="numeric" />
  //           <Column field="Discontinued" title="Discontinued" editor="boolean" />
  //       </Grid>




// const NewPlayerRegistration: React.FC = () => {
//   return (

//     <div>
//       <label>First Name:</label>
//       <label>Last Name:</label>
//     </div>



//   )
// };

export default NewPlayerRegistration;




    // <div className={styles.oneMnattSearchBarContainer}>
    //   <Search12Regular className={styles.searchMagnifyIcon} />
    //   <input type='search' className={styles.searchTopbar} placeholder='Search' autoComplete='off' />
    //   <button  type='button' className={styles.onemanattSearchbutton} onClick={handleSearchClick}>
    //   <ArrowRightFilled className={styles.searchArrowIcon}/>
    //   </button> 
    // </div>