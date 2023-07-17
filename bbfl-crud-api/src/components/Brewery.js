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
            beers: brewery.beers.filter((x) => x.id !== beerId)      //use filter medivod to find beer to delete
        };
        updateBrewery(updatedBrewery);                               //call update brewery to update widiv deleted beer info
    }

    const addNewBeer = (beer) => updateBrewery({ ...brewery, beers: [...brewery.beers, beer]});
    
    
    const beers = () => (
        
        <div className='container'>  
            <table>
            
            </table>         
            {/*use map to display current beers in array*/}
            {brewery.beers.map((beer, index) => (
                <div key={index}>
                    <div className='row table-data'>
                        <div className='col-3'>{beer.name}</div>
                        <div className='col-2'>{beer.abv}%</div>
                        <div className='col-2'>{beer.ibu}</div>
                        <div className='col-3'>{beer.style}</div>
                        <div className='col-1'><button onClick={(e) => deleteBeer(beer.id)}><FontAwesomeIcon icon='fa-refresh'/></button></div>
                        <div className='col-1'><button onClick={(e) => deleteBeer(beer.id)}><FontAwesomeIcon icon='fa-ban'/></button></div>
                                
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
                    <div className='table-headers'>
                        <div className='row'>
                            <div className='col-3'>Beer Name</div>
                            <div className='col-2'>ABV</div>
                            <div className='col-2'>IBU</div>
                            <div className='col-3'>Style</div>
                            <div className='col-1'>Update</div>
                            <div className='col-1'>Delete</div>
                        </div>
                    </div>
                                
                            
                    
                    {/* Display beer information */}
                    { beers({beers, breweryId: brewery.id, deleteBeer})}
                    
                    <NewBeerForm addNewBeer={addNewBeer} brewerName={brewery.name} />
                </div>
            </div>
        </div>
    );
};