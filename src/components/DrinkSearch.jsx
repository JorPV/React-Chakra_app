import { TextInput } from './UI/TextInput';
import { useState } from 'react';
import { availableDrinks } from '../utils/data';
import { DrinkList } from './DrinkList';
import { Text } from '@chakra-ui/react'

export const DrinkSearch = ({ clickFn }) => {
    const [searchField, setSearchField] = useState ('');

    const handleChange = event => setSearchField(event.target.value);    

    const matchedDrinks = availableDrinks.filter((drink) => {
        return drink.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
        <>  
            <Text fontSize={'1.2rem'}>Find your favourite drink:</Text>
            <TextInput changeFn={handleChange} w={400} mb={2}/>
            <br />
            <div className="wrapper">
                <DrinkList clickFn={clickFn} drinks={matchedDrinks}/>
            </div>
        </>
    );
};