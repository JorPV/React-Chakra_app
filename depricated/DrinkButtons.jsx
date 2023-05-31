// import './DrinkButtons.css';
// import { Button } from './UI/Button';
// import { useState } from 'react';

// export const DrinkButtons = ({ drinkOne, drinkTwo, drinkThree, drinkFour, drinkFive, drinkSix }) => {
//     return (
//         <>
//             {/* <h3>What can I offer you to drink, {drinkOne}, {drinkTwo}, {drinkThree}, {drinkFour}, {drinkFive} or {drinkSix}?</h3> */}
//             <div className="button-group">
//                 <Button text={drinkOne} />
//                 <Button text={drinkTwo} />
//                 <Button text={drinkThree} />
//                 <Button text={drinkFour} />
//                 <Button text={drinkFive} />
//                 <Button text={drinkSix} />
//             </div>
//         </>
//     );
// };

export const DrinkButtons = () => {
    const [selectedDrink, setSelectedDrink] = useState(false);

    const clickHandler = () =>{
        setSelectedDrink(true);
    }

    return (
        <>
            <div className='button-group'>
                <Button className='button' onClick={clickHandler}></Button>
                <p>Getting ready a cup of: {selectedDrink}</p>
            </div>
        </>    
    );
};