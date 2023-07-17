//set const for API URL
const API_URL = 'https://64b2fa7d38e74e386d55c78b.mockapi.io/breweries';

//All CRUD functions are below | use try/catch blocks to catch all errors
class BeerBuddyApi {
    
    //GET
    get = async () => {
        try {
            const resp = await fetch(API_URL);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log('Oopsie! Looks like fetchBreweries had an issue.', e)
        }
    }

    //POST
    post = async (brewery) => {
        try {
            const resp = await fetch(`${API_URL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(brewery)
            });
            return await resp.json();
        } catch(e) {
        console.log('Oopsie! Looks like posting your beer had an issue.', e);
         }
    }
    
    //PUT (Update)
    put = async (brewery) => {
        try {
            const resp = await fetch(`${API_URL}/${brewery.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(brewery)
            });
            return await resp.json();
        } catch(e) {
            console.log('Oopsie! Looks like updating your brewery had an issue.', e);
         }
    }

    //DELETE
    delete = async (brewery) => {
        try {
            const resp = await fetch(`${API_URL}/${brewery.id}`, {
                method: 'DELETE'
            });
            console.log(resp);
        } catch(e) {
            console.log('Oopsie! Looks like deleting your brewery had an issue.', e);
        }
    }
}

//create instance of class so it can be imported
export const beerbuddyApi = new BeerBuddyApi();

