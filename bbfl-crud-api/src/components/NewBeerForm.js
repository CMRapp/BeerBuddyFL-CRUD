import React, { useState } from 'react';

export const NewBeerForm = (props) => {
    const [beerName, setBeerName] = useState('');
    const [abv, setAbv] = useState('');
    const [ibu, setIbu] = useState(undefined);
    const [style, setStyle] = useState('');

   //validate numerical input
    const handleIbuInput = (e) => {
    const int = parseInt(e.target.value, 10);
    setIbu(int >=0 ? int : '');
   }

   const onSubmit = (e) => {
    e.preventDefault();
    if (beerName && abv && ibu && style ) {             //if all fields ccompleted, submit new beer
        props.addNewBeer({beerName, abv, ibu, style});
        setBeerName('');                                //reset form inputs for good UX
        setAbv('');
        setIbu('');
        setStyle('');
    } else {
        console.log('Invalid Input!');
    };
   };

   return (
    <div>
        <h4>Add A New Beer</h4>
        <form onSubmit={onSubmit}>
            <input 
                type='text'
                placeholder = 'Beer Name'
                onChange={(e) => setBeerName(e.target.value)}
                value={beerName}
            />
            
            <input 
                type='text'
                placeholder = 'ABV'
                onChange={(e) => setAbv(e.target.value)}
                value={abv}
            />

            <input 
                type='text'
                placeholder = 'IBU'
                onChange={handleIbuInput}
                value={ibu}
            />

            <input 
                type='text'
                placeholder = 'Beer Style'
                onChange={(e) => setStyle(e.target.value)}
                value={style}
            />

            <button type='submit'>Add Beer</button>
        </form>
    </div>
   )

}