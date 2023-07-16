import React from 'react';
import { NewBeerForm } from './NewBeerForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import $ from 'jquery';

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
        
        <div className='container'>  
            <table>
            
            </table>         
            {/*use map to display current beers in array*/}
            {brewery.beers.map((beer, index) => (
                <div key={index}>
                    <div>
                        <table id="beer-listing" class="my-2 table table-warning table-hover border border-1 table-striped">
                            <tbody>
                                <tr className='text-center'>
                                    <td>{beer.beerName}</td>
                                    <td>{beer.abv}%</td>
                                    <td>{beer.ibu}</td>
                                    <td>{beer.style}</td>
                                    <td><button onClick={(e) => deleteBeer(beer.id)}><FontAwesomeIcon icon='fa-refresh'/></button></td>
                                    <td><button onClick={(e) => deleteBeer(beer.id)}><FontAwesomeIcon icon='fa-ban'/></button></td>
                                </tr>
                            </tbody>                    
                        </table>
                    </div>             
                </div>
            ))}
        </div>
    );

    //return complete brewery component
    return (
        <div className='container mb-5' id='beer-listing'>
            <div className='row'>

                <div className='col-md-4'>
                    <img className='brewery-logo mx-auto d-block' src={brewery.logoURL}/>
                </div>

                <div class='col-md-8'>
                    <table class=" table table-warning table-hover border border-1 table-striped">
                            <thead>
                                <th class="border border-1 border-start-0">Beer Name</th>
                                <th class="border border-1 border-start-0">ABV</th>
                                <th class="border border-1 border-start-0">IBU</th>
                                <th class="border border-1 border-start-0">Style</th>
                                <th class="border border-1 border-start-0 text-center">Update</th>
                                <th class="border border-1 border-start-0 text-center">Delete</th>
                            </thead>
                            <tbody class='listing-body'>
                                
                            </tbody>
                    </table>
                    
                    {/* Display beer information */}
                    { beers({beers, breweryId: brewery.id, deleteBeer})}
                    
                    <NewBeerForm addNewBeer={addNewBeer} />
                </div>
            </div>
        </div>
    );
};