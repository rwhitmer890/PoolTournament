import * as React from 'react';
import type { ITournamentStartButtonProps } from './ITournamentStartButtonProps';








// const handleSearchClick = () : void => {
//   alert("search click");
// }



 const TournamentStartButton: React.FC<ITournamentStartButtonProps> = (ITournamentStartButtonProps) => {
//const TournamentStartButton = () => {
 //   const [data, setData] = React.useState<Array<IPoolPlayer>>(samplePlayers);

    const startButtonClick = (event: any) => {
        alert("start button clicked!")
    };



    return (


        <div>
        <button id='start-tournament-button' type='button' onClick={ITournamentStartButtonProps.ClickEvent}> Start
        </button>

        </div>


    );
};



export default TournamentStartButton;




