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
            
            <div className='brewery-list'>              
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