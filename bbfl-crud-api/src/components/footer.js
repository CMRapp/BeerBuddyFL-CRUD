import React from 'react'

export default class Footer extends React.Component{
    render() {
        return (
            <footer className='container-fluid bg-dark text-light py-2 h-100 d-inline-block'>
                <div className="container">
                <p>&copy; 2023&nbsp;&nbsp;Christian M Rapp | <a href='https://www.cmrwebstudio.com' target='_blank' rel='noreferrer' className='text-decoration-none'>CMR Web Studio</a>
                <img className='footer-logo'  src='./cmr_sig5.png' alt='CMR Web Studio Logo'/></p>
                </div>
            </footer>
        );
    }
}