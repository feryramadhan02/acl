import React, { Fragment } from 'react';

import '../assets/style/homepage.scss';

const HomePage = () => {
    return (
        <Fragment>
            <div className="home">
                <div className="home-images">
                    <img src={require("../assets/images/wallpaper.png")} alt="" />
                </div>
                <div className="content">
                    <p>Kiosers are distributors selling pulses online for all operators
                    without large national capital, providing a wide variety of products
                    </p>
                    <p className="interest">Are you interested ? <span>Join Now !</span> </p>
                    <button className="btn-login">Login</button>
                </div>
            </div>
        </Fragment>
    )
}

export default HomePage;
