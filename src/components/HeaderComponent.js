import React, { Component } from "react";
import { Navbar, NavbarBrand } from 'reactstrap';

class Header extends Component {
    render(){
        return(
            <>
                <Navbar dark >
                    <div className='container'>
                        <NavbarBrand href="/">Restaurant</NavbarBrand>
                    </div>
                </Navbar>
                <div className="jumbotron container-fluid bg-light text-dark p-5">
                    <div className="jumbotron row row-header container bg-light p-5">
                        <div className="col-12 col-sm-6">
                            <h1 class="display-4 fw-bold">Restaurant</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Header