import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalTitle from 'react-bootstrap/ModalTitle';


export const NewBeerForm = (props) => {
    const [beerName, setBeerName] = useState('');
    const [abv, setAbv] = useState('');
    const [ibu, setIbu] = useState(undefined);
    const [style, setStyle] = useState('');

    ///modal handling
    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
    };

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
        hideModal();
    } else {
        console.log('Invalid Input!');
    };
   };

   return (
    <div>
        <Modal show={isOpen} onHide={hideModal}>
            <ModalHeader>
                <ModalTitle>ADD A NEW BEER</ModalTitle>
            </ModalHeader>
            
            <ModalBody>
                <form onSubmit={onSubmit}>
                    <input 
                        type='text'
                        className='form-control my-2'
                        placeholder = 'Beer Name'
                        onChange={(e) => setBeerName(e.target.value)}
                        value={beerName}
                    />
                    
                    <input 
                        type='text'
                        className='form-control my-2'
                        placeholder = 'ABV'
                        onChange={(e) => setAbv(e.target.value)}
                        value={abv}
                    />

                    <input 
                        type='text'
                        className='form-control my-2'
                        placeholder = 'IBU'
                        onChange={handleIbuInput}
                        value={ibu}
                    />

                    <input 
                        type='text'
                        className='form-control'
                        placeholder = 'Beer Style'
                        onChange={(e) => setStyle(e.target.value)}
                        value={style}
                    />

                </form>
            </ModalBody>
            
            <ModalFooter>
                <button type='button' class='btn btn-warning hidden' id='updateCurrentBeer'>Update Beer</button>  
                <button type='submit' onClick={onSubmit}>Add Beer</button>
                <button type='button' class='btn btn-secondary' id='cancelUpdate' onClick={hideModal}>Cancel</button>    
            </ModalFooter>
        </Modal>
        <button className='btn btn-warning' onClick={showModal}>ADD A BEER</button>     
    </div>
   )

}