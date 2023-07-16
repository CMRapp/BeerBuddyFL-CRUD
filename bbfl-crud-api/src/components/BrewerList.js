import React from 'react';
import { Brewery } from './Brewery';
import { beerbuddyApi } from '../rest/BeerBuddyApi.js';

export class BrewerList extends React.Component {
    state= {
        breweries: []
    };

    componentDidMount () {
        this.fetchBreweries();
    };

    fetchBreweries = async () => {
        const breweries = await beerbuddyApi.get();
        this.setState({ breweries });
    };

    updateBrewery = async (updatedBrewery) => {
        await beerbuddyApi.put(updatedBrewery);
        this.fetchBreweries();
    };

    render() {
        return (
            
            <div className='brewery-list container'> 
            <h1>Our Florida Brewery List</h1> 
            <h5><em>Is our list missing something? Help us make our list complete!</em></h5>
                <p>
                    Beer Buddy Florida is still in its infancy. Your help will enable us to grow! The table below shows the breweries and their beers that we currently
                    currently have indexed. <br/>If your favorite is not on the list, click the button below to add it! <strong><em><br/><br/>Thanks for helping Beer Buddy Florida to grow!</em></strong>    
                </p>            
                {this.state.breweries.map((brewery) => (
                    <Brewery
                        brewery={brewery}
                        key={brewery.id}
                        updateBrewery={this.updateBrewery}
                    />
                ))}
            </div>
        )
    }
}