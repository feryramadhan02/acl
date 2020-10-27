import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Headers from '../components/Headers';

import '../assets/style/homepage.scss';

const HomePage = () => {
    return (
        <Fragment>
            <Headers />
            <div className="home">
                <div className="home-images">
                    <img src={require("../assets/images/wallpaper.png")} alt="" />
                </div>
                <div className="content">
                    <p>Kiosers are distributors selling pulses online for all operators
                    without large national capital, providing a wide variety of products
                    </p>
                    <p className="interest">Are you interested ? <span>Join Now !</span> </p>
                    <Link to="/Login"><Button className="btn-login">Login</Button></Link>
                </div>
            </div>
        </Fragment>
    )
}

export default HomePage;
