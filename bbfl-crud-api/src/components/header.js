import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Header extends React.Component{
    render() {
        return (
            <header className='container-fluid bg-dark text-light py-2 h-100 d-inline-block'>
                <nav className='navbar sticky-top navbar-expand-lg navbar-dark bg-dark nav-pills'>
                    <div className='container'>http://dev.sciencebranding.com/wp-admin/post.php?post=11&action=elementor
                        <a className='navbar-brand' href='index.html'>
                            <img src='./bb-fl-logo.png' alt='Beer Buddy FL Logo'/>
                        </a>
                    
                        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>

                        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                            <ul className='navbar-nav navbar-nav me-auto mb-2 mb-sm-0'>
                                <li className='nav-item'>
                                    <a className='nav-link disabled' aria-current='page' href='index.html'>Home</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link active' href='#'>Breweries</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link disabled' href='#'>Beers</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link disabled' href='beer-styles.html'>Styles</a>
                                </li>            
                                <li className='nav-item'>
                                    <a className='nav-link disabled' href='submit-beer.html'>Contact</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link disabled' aria-current='page' href='submit-beer.html'>Submit A Beer</a>
                                </li>
                            </ul>
                            <form className='d-flex' role='search'>
                                <input className='form-control me-2' type='search' placeholder='Search is inactive' aria-label='Search'/>
                                <button className='btn btn-outline-success' type='submit'>Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        );

    }
}