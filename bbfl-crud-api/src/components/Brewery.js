import React from 'react';
import { NewBeerForm } from './NewBeerForm';

//functional (stateless) component
export const Brewery = (props) => {
    const {brewery , updateBrewery } = props;                       //desconstruction

    const deleteBeer = (beerId) => {
        const updatedBrewery = {        
            ...brewery,                                              // spread operator
            beers: brewery.beers.filter((x) => x.id !== beerId)      //use filter method to find beer to delete
        };
        updateBrewery(updatedBrewery);                               //call update brewery to update with deleted beer info
    }

    const addNewBeer = (beer) => updateBrewery({ ...brewery, beers: [...brewery.beers, beer]});
    
    const beers = () => (
        
        <div id='body-div'>

            {/*use map to display current beers in array*/}
            {brewery.beers.map((beer, index) => (
                <div key={index}>
                    Beer Name: {`${beer.beerName} ABV: ${beer.abv}% IBU: ${beer.ibu}`}<br/>
                    Style: {`${beer.style}`}<br/>
                    <button onClick={(e) => deleteBeer(beer.id)}>Delete</button>
                </div>
            ))}
        </div>
    );

    //return complete brewery component
    return (
        <div>
            <h1>{brewery.breweryName}</h1>
            {
                beers({beers, breweryId: brewery.id, deleteBeer})
            }
            <NewBeerForm addNewBeer={addNewBeer} />
        </div>
    );
};