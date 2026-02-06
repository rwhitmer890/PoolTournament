import * as React from 'react';


import {
    Grid,
    GridColumn as Column,
   
    type GridItemChangeEvent,
    type GridCellProps,
    GridColumn,
    GridCell,
    type GridCellsSettings
} from '@progress/kendo-react-grid';
import sampleProducts from './gd-sample-products';
import samplePlayers from './sample-players';
//import { EditDescriptor } from '@progress/kendo-react-data-tools';
//import { Button } from '@progress/kendo-react-buttons';
import type { EditDescriptor } from '@progress/kendo-react-data-tools';


import poolTable from '../../assets/Pool-Table-Image.png';

import type { IPoolPlayer }  from '../PoolPlayer/IPoolPlayer';
import TournamentStartButton from './TournamentStartButton';
import type { ITournamentPlayerListProps } from './ITournamentPlayersListProps';
import PoolTableGame from '../PoolTableGame/PoolTableGame';
import { Button } from '@progress/kendo-react-buttons';


import * as ReactDOM from 'react-dom';


import {  xOutlineIcon } from '@progress/kendo-svg-icons';




interface Product {
    ProductID: number;
    ProductName?: string;
    FirstOrderedOn?: Date;
    UnitsInStock?: number;
    Discontinued?: boolean;
    inEdit?: boolean | string;
}






// const handleSearchClick = () : void => {
//   alert("search click");
// }


const TournamentPlayersList: React.FC<ITournamentPlayerListProps> = (ITournamentPlayerListProps) => {

//const TournamentPlayersList: <ITournamentPlayersListProps> = (ITournamentPlayersListProps) => {
//const TournamentPlayersList: <ITournamentPlayersListProps> = (ITournamentPlayersListProps) => {

    const [data, setData] = React.useState<Array<IPoolPlayer>>(samplePlayers);
    const [edit, setEdit] = React.useState<EditDescriptor>({});
    const [isGridEditable, setIsGridEditable] = React.useState(true); // State to control editability

    const handlePlayerChange = (event: GridItemChangeEvent) => {
        console.log("event: ",event)
        const inEditID = event.dataItem.PlayerID;
        console.log(event.field);
        const field = event.field || '';
        const newData = data.map((item) => (item.PlayerID === inEditID ? { ...item, [field]: event.value } : item));
        setData(newData);
    };





    const handleStartButtonClick = () => {


        setIsGridEditable(!isGridEditable);


    }




  const addNewRow = () => {
    const newDataItem = { 
        PlayerID: data.length + 1, // Simple ID generation
        FirstName: "xxxxxxx",
        LastName: "xxxx",
        StartingChips: 7,
        ChipCount: 4,
        InGame: false
    }
    // Add the new item to the top of the array
    setData([newDataItem, ...data]); 
  };


  const removeRow = (PlayerRow: any) => {
    const newData = data.filter((item) => item !== PlayerRow);
    setData(newData);
  };

;

//   const handleDelete = (dataItem:any) => {
//     // Filter the current data array, excluding the item to be deleted
//     const newData = data.filter(item => item.PlayerID !== dataItem.ProductID); 
//     setData(newData); // Update the state to re-render the grid
//   };

//   // Custom cell component for the "Remove" button
//   const RemoveButtonCell = (props:any) => {
//     return (
//       <td className="k-command-cell">
//         <button
//           className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-danger"
//           onClick={() => handleDelete(props.dataItem)}
//         >
//           Remove
//         </button>
//       </td>
//     );
//   };

  const RemoveButtonCell = (props: GridCellProps) => {
    const dataItem = props.dataItem as IPoolPlayer;
    //svgIcon={xOutlineIcon}
   // onClick={() => removeRow(dataItem.PlayerID)}
    return (
     
        <Button
          onClick={() => removeRow(dataItem)}
          themeColor="primary"
          size="small"
            disabled={!isGridEditable}
        >
         
          Remove
        </Button>
 
    );
  };













    return (


<div>
    
<PoolTableGame PlayerOne={data[0]} PlayerTwo={data[1]} ></PoolTableGame>
        <Grid
            style={{ height: '420px' }}
            data={data}
            autoProcessData={true}
            editable={isGridEditable} 
            defaultEdit={{
                1: true
            }}
            dataItemKey="PlayerID"
            onItemChange={handlePlayerChange}
        >
            <Column field="PlayerID" title="Id" width="50px" editable={false} />
            <Column field="FirstName" width="150px" title="FirstName" />
            <Column field="LastName"  width="150px" title="LastName" />
            <Column field="StartingChips" title="StartingChips" width="200px" editor="numeric" />
            <Column field="ChipCount" title="ChipCount" width="200px" editor="numeric" />
            <Column field="InGame" title="InGame" editor="boolean" />

            <GridColumn field="RemovePlayer" title="RemovePlayer"
                cells={{data:  RemoveButtonCell }}
                width="120px"
            />



              </Grid>
        



      <Button onClick={addNewRow} themeColor="primary" style={{ marginBottom: '10px' }}>
        Add New Row
      </Button>

        <TournamentStartButton ClickEvent={handleStartButtonClick}></TournamentStartButton>
      
</div>


    );
};




//       <GridColumn field="testing" title="testing"
//           cells={{
//     data: (props) => <td>{props.dataItem.PlayerID}</td> // <--- Use 'cells'
//   }}
//         width="120px"
//       />


//          onClick={(dataItem) => removeRow(dataItem.PlayerID)}


{/* <Column field="StartingChips" title="StartingChips" width="150px" editor="numeric" />
            <Column field="ChipCount" title="ChipCount" width="150px" editor="numeric" /
 */}

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

export default TournamentPlayersList;




    // <div className={styles.oneMnattSearchBarContainer}>
    //   <Search12Regular className={styles.searchMagnifyIcon} />
    //   <input type='search' className={styles.searchTopbar} placeholder='Search' autoComplete='off' />
    //   <button  type='button' className={styles.onemanattSearchbutton} onClick={handleSearchClick}>
    //   <ArrowRightFilled className={styles.searchArrowIcon}/>
    //   </button> 
    // </div>